import { auth, appfirebase }  from '../../firebase.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {useState} from "react";
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import "./authentification.css";
import { showHide } from "./inscription.js";
import { Checkbox, FormControlLabel } from '@mui/material';

export default function Connexionform () {
    const navigate = useNavigate();
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const handleSub = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    });
    navigate("/confirmationconnexion");
    }
    const provider = new GoogleAuthProvider();
    const handleGoogle = (e) => {
        e.preventDefault();
        signInWithRedirect(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        })
    }
;
    return (
        <div class="conteneur long">
            <h1>Connexion</h1>
            <form onSubmit={handleSub}>
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" label="Email" variant="standard"  onChange={(e) => setEmail(e.target.value)}/>
                <label for="password"  id="mdp">Mot de passe</label>
                <input type="text" class="form-control" id="mdp" name="password" type="password" label="Mot de passe" variant="standard"  onChange={(e) => setPassword(e.target.value)}/>
                <FormControlLabel control={<Checkbox onClick={showHide}/>} label="Montrer le mot de passe"/>
                <Button variant="contained" type="submit">Valider </Button>
            </form>
            <Button class="btngoogle" variant="contained" onClick={handleGoogle}>Se connecter avec Google</Button>
        </div>
	);
}