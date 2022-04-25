import { useNavigate } from "react-router-dom";
import "../../App.css";
import "./chargement.css";

const Logo = require("../../img/LogoAdora.png");
export default function Loader () {
    let navigate = useNavigate();
    setTimeout(function Redirect () {navigate("/choix", { replace: true })}, 3000);
    return ( 
        <div id="container">
        <img src={Logo} class="Logoadora"/>
        <div id="loader"></div>
        </div>
    )
}
