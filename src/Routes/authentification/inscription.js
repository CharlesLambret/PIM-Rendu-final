import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect }from "firebase/auth";
import {useState} from "react";
import { auth, db}  from '../../firebase.js';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import "./authentification.css";
import { addDoc, collection, deleteDoc, query, where } from "firebase/firestore";

 export function showHide() {
  var mdp = document.getElementById("mdp")
  if (mdp.type === "password") {
    mdp.type = "text";
  } else {
    mdp.type = "password";
  }
} 
export default function Inscriptionform () {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [datenaissance, setDatenaissance]  = useState("");
  const [numerotel, setNumerotel]  = useState("");


  const handleInsc = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password, nom, prenom, datenaissance, numerotel)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if (user) {setTimeout(function Redirect () {navigate("/confirmationconnexion", { replace: true })}, 1000)};
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
  addDoc(collection(db, 'usersinfos'), {
    Nom: [nom],
    Prenom: [prenom],
    Datenaissance: [datenaissance],
    email: [email],
    tel: [numerotel]
  }
  )

}
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
    });
  }
    return (
        <div class="conteneur">
            <h1>Création de compte</h1>
            <form onSubmit={handleInsc}>
              <div class="Grpinput">
                <label >Nom</label>
                <input type="text" class="form-control" name="nom"  onChange={(e) => setNom(e.target.value)}/>
              </div>
              <div class="Grpinput">
              <label >Prenom</label>
              <input type="text"name="prenom"  onChange={(e) => setPrenom(e.target.value)} />
              </div>
              <div class="Grpinput">
              <label >Prenom</label>
              <input type="text"name="prenom"  onChange={(e) => setPrenom(e.target.value)} />
              </div>
              <div class="Grpinput">
                <label >Date de naissance</label>
                <input type="date" name="datenaissance"   onChange={(e) => setDatenaissance(e.target.value)} />
              </div>
              <div class="Grpinput">
                <label >Numéro de téléphone</label>
                <input type="tel" name="numerotel" onChange={(e) => setNumerotel(e.target.value)} />
              </div>
              <div class="Grpinput">
                <label>Email</label>
                <input type="email" name="email"    onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div class="Grpinput">
                <label>Mot de passe</label>
                <input name="password" type="password" id="mdp" onChange={(e) => setPassword(e.target.value)}/>
              </div>
                
                <Button variant="contained" type="submit">Valider </Button>
            </form>
            <Button class="btngoogle" variant="contained" onClick={handleGoogle}>S'inscrire avec Google</Button>
        </div>
	);
}
/*<p>Vous avez déjà un compte ? <span id="lienconnexion" onClick={Lienconnexion}>Cliquez ici</span></p>*/
