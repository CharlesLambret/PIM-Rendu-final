import { useNavigate } from "react-router-dom";
import "./authentification.css";

export default function Confirmationconnexion () {
    let navigate = useNavigate();
    setTimeout(function Redirect () {navigate("/formulaireajout", { replace: true })}, 2000);
    const Logo = require("../../img/LogoAdora.png");
    return (
        <div id="containerconfirmation">
            <img src={Logo} class="Logoadora"/>
            <h1> Vous êtes bien connecté.e !</h1>
            
        </div>
    )
}