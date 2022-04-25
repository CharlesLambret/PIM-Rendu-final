import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import "../../App.css";
import "./choixparcours.css";

export default function Choix () {
    const Pattes = require("../../img/pattes.png");
    const Logo = require("../../img/LogoAdora.png");
    const Navigate = useNavigate();
    function handleClickAdopter () { Navigate('/choixespece')};
    function handleClickCeder(){Navigate('/connexion')};
    return (
    <div>
        <div div id="containerchoix">
            <img src={Logo} class="Logoadora" id="Logochoix"/>
            <h1>J'aimerais...</h1>
            <Button variant="contained" id="btnadopter" onClick={handleClickAdopter}>Adopter</Button>
            <Button variant="contained" id="btnceder" onClick={handleClickCeder}>Céder</Button>
        </div>
        <img src={Pattes} id="decopattes"/>
        
    </div>
    )
}