import { db } from "../../firebase.js";
import {  addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import "../../App.css";
import {useState} from "react";
import Button from '@mui/material/Button';
import "./authentification.css";
import { useNavigate } from "react-router-dom";
import { getStorage, ref } from "firebase/storage";
import Oslo from "../../img/Oslo.png";

export default function FormulaireAjout(){
const [nom, setNom] = useState("");
const [race, setRace]= useState("");
const [age, setAge ]= useState("");
const [sexe, setSexe]= useState("");
const [taille, setTaille]= useState("");
const [couleur, setCouleur]= useState("");
/*const [Image, setImage]= useState();*/
const [description, setDescription] = useState("");
const [espece, setEspece] = useState("");
const [proprietaire, setProprietaire]= useState("");

const navigate= useNavigate();



const postanimal = (e) => {navigate("/confirmationannonce");addDoc(collection(db, "Animaux-a-adopter"), {
    nom: [nom] ,
    Espece : [espece],
    Race: [race] ,
    Âge: [age] ,
    Sexe: [sexe],
    Taille : [taille] ,
    Couleur : [couleur] ,
    /*Image :  Image || null,*/
    Description : [description],
    Proprietaire : [proprietaire],
  }); }


  return (
    <div className="conteneur">
      <h1>Formulaire - DON </h1>
      <form id="formanimal" onSubmit={postanimal} >
      <label>Nom de l'animal</label>
        <input type="text" name="nom" label="Nom de l'animal"  variant="standard"  onChange={(e) => setNom(e.target.value)}/>
        <label >Espèce</label>
        <select className="custom-select" name="Espèce" id="inputGroupSelect01" onChange={(e) => setEspece(e.target.value)}>
          <option value="chien">Chien</option>
          <option value="chat">Chat</option>
          <option value="rongeur">Rongeur</option>
          <option value="reptiles">Reptile</option>
          <option value="rongeur">Oiseau</option>
          <option value="poisson">Poisson</option>
        </select>
          <label >Race</label>
          <input type="text" name="Race"   onChange={(e) => setRace(e.target.value)}/>
          <label >Âge</label>
          <input type="text"  name="Âge"  onChange={(e) => setAge(e.target.value)}/>
          <label >Sexe</label>
          <select class="custom-select" name="Sexe" id="inputGroupSelect02" onChange={(e) => setSexe(e.target.value)}>
            <option value="male">Male</option>
            <option value="femelle">Femelle</option>
          </select>
          <label >Taille</label>
          <input type="text" name="Taille"  label="Taille"   onChange={(e) => setTaille(e.target.value)}/>
          <label >Couleur</label>
          <input type="text" name="Couleur"  label="Couleur de la fourrure"   onChange={(e) => setCouleur(e.target.value)}/>
          <label>Description</label>
          <input type="text" name="Description"  label="Nom de l'animal" onChange={(e) => setDescription(e.target.value)}/>
          <label>Votre nom</label>
          <input type="text" name="Nomproprio"  onChange={(e) => setProprietaire(e.target.value)}/>  
          <label id="labelimage">Téléchargez une photo de l'animal</label>
          <img src={Oslo} id="uploadimage"/>
          <button type="submit" form="formanimal"  value="submit" id="submit">Valider</button>
      </form>
    </div>
  );
}