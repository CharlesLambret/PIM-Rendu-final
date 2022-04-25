
import "../../App.css";
import "./pageperso.css";
import Oslo from "../../img/Oslo.png";
import illuastuces from "../../img/illuastuces.jpg";
import illuveto from "../../img/illuveto.jpg";

const Logo = require("../../img/LogoAdora.png");


export default function Pageperso () {
    <div class="conteneur">
        <div class="colonne">
            <img src={Logo}></img>
            <h1>Bonjour Charles !</h1>
        </div>
        <div class="colonne">
            <img src={Oslo}/>
            <p>Tu as postée une annnonce concernant le chien Oslo agé de 3 mois, un corgi race d’origine des pays de Galles. </p>
            <button>Modifier l'annonce</button>
        </div>
        <div class="colonne">
            <h2>Vous avez reçu un message</h2>
            <button class="btnsecondaire">Messagerie</button>
        </div>
        <div class="colonne">
            <img src={illuastuces}/>
            <p>Découvre tous nos conseils et astuces sur les animaux</p>
            <button class="btnsecondaire">Astuces et conseil</button>
        </div>
        <div class="colonne">
            <img src={illuveto}/>
            <p>Tu peux aussi trouver de nombreuses adresses de vétérinaires les plus proches de chez toi directement sur Adora !</p>
            <button class="btnsecondaire">Trouver un vétérinaire</button>
        </div>
    </div>
}