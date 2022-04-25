import { useNavigate } from "react-router-dom";
import "./authentification.css";
import Illustrationchien from "../../img/illustrationchien.svg";

export default function Confirmationannonce () {
    let navigate = useNavigate();
    setTimeout(function Redirect () {navigate("/choix", { replace: true })}, 3000);
    const Logo = require("../../img/LogoAdora.png");
    return (
        <div id="containerconfirmation">
            <img src={Logo} class="Logoadora"/>
            <h1> ANNONCE VALIDÉE !</h1>
            <p>Ton annonce a été validée, elle sera postée dans les plus brefs délais</p>
            <img src={Illustrationchien} id="illustrationchien"/>
        </div>
    )
}