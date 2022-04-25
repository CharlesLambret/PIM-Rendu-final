import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Listeanimaux from "./Routes/listeanimaux/listeanimaux.js";
import Choix from "./Routes/choixparcours/choixparcours.js";
import Loader from "./Routes/chargement/chargement.js";
import Connexionform from "./Routes/authentification/connexion.js";
import InscriptionForm from "./Routes/authentification/inscription.js";
import {ChatRoom}  from "./Routes/messagerie/chatroom.js";
import FormulaireAjout from "./Routes/authentification/formulairedepot.js";
import Confirmationconnexion from "./Routes/authentification/confirmationconnexion.js";
import Choixespece from "./Routes/choixespèce/choixespece.js";
import Pageperso from "./Routes/pageperso/pageperso.js";
import Confirmationannonce from "./Routes/authentification/confirmationannonce";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loader />} />
      <Route path="/choix" element={<Choix />} />
      <Route path="/choixespece" element={<Choixespece/>}/>
      <Route path="/listeanimaux" element={<Listeanimaux />} />
      <Route path="/inscription" element={<InscriptionForm/>}/>
      <Route path="/connexion" element={<Connexionform />} />
      <Route path="/confirmationconnexion" element={<Confirmationconnexion/>}/>
      <Route path="/confirmationannonce" element={<Confirmationannonce/>}/>
      <Route path="/messagerie" element={<ChatRoom/>}/>
      <Route path="/formulaireajout" element={<FormulaireAjout/>}/>
      <Route path="/pageperso" element={<Pageperso/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

