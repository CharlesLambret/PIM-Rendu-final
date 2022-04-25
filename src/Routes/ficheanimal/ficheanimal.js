import { Button } from '@mui/material';
import { where } from 'firebase/firestore';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appfirebase, db, firebaseConfig } from '../../firebase';
import { Navbar } from '../../navbar/navbar.js';

export async function Ficheanimal() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {async function getAnimaux() {
        const q = query(collection(db, 'Animaux-a-adopter'), where("Espece","==","chien"));
        const AnimauxSnapshot = await getDocs(q).then(reponse => {}).catch(error => console.log(error.message));
        const AnimauxList = AnimauxSnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
        setAnimals (AnimauxList);
    }})
const navigate = useNavigate();
const ClickMessage = navigate("/inscription");

return( 
<div>
    {animals.map(({animals}) => 
    <div>
        <div>
            <h2>{animals.nom}</h2>
            <p>{animals.Race}</p>
        </div>

        <div className="caract">
            <div>
                <p>{animals.Âge}</p>
            </div>
            <div>
                <p>Sexe</p>
                <p>{animals.Sexe}</p>
            </div>

            <div>
                <img></img>
                <p>Couleur</p>
                <p>{animals.Couleur}</p>
            </div>

            <div>
                <img></img>
                <p>Taille</p>
                <p>{animals.Taille}</p>
            </div>

        </div>

        <div className="longb">
            <div>
                <p>{animals.Localisation}</p>
            </div>
        </div>

        <div>
            <p>{animals.Description}</p>
        </div>

        <div>
        <p>Pour pouvoir contacter l’annonceur <br></br>il va falloir créer un compte Adora </p>
        </div>

        <div className="bigbtn">
            <Button onClick={ClickMessage}>Contacter l'annonceur</Button>
        </div>
    </div>)}
</div>

)
}
