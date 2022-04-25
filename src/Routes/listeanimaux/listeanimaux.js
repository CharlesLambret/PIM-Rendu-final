import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { appfirebase, firebaseConfig } from '../../firebase';
import "../../App.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import chien from '../../img/chien.png';
import retour from '../../img/retour.png';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./listeanimaux.css";

const animals =[
Listeanimaux,
Listeanimaux,
Listeanimaux,
Listeanimaux,
Listeanimaux,
Listeanimaux,
Listeanimaux,
Listeanimaux,
Listeanimaux,
Listeanimaux,
Listeanimaux,
Listeanimaux,
Listeanimaux,

]


export default function Listeanimaux () {

const [selected, setSelected] = useState(null);
const [animals, setListeanimaux] = useState([]);





async function getAnimaux() {
  const db = getFirestore(appfirebase);
  const AnimauxCol = collection(db, 'Animaux-a-adopter');
  const AnimauxSnapshot = await getDocs(AnimauxCol);
  const AnimauxList = AnimauxSnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
  setListeanimaux (AnimauxList);
}
  useEffect(getAnimaux, []);
    return(<div className="all" >

    <div className="topl">
    <Link to={"/choixespece"} > <img src={retour} alt="flèche retour" ></img></Link>
    </div>
    <div className="bigdivliste" >
    <div>
      {animals.map(
            function (item){
                
                return  <Card id="carteanimal"sx={{ display: 'flex'}}>
                                    <Link to={"/ficheanimal"} >
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151, height:226 }}
                                        src={item.image}
                                        alt="Animal"
                                        /></Link>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}><Link to={"/ficheanimal"} >
                                        <Typography component="div" variant="h5">
                                        {item.nom}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {item.Race}
                                        </Typography>
                                        <Typography variant="body6" color="text.secondary">
                                        {item.Description}
                                        </Typography>
                                        </Link>
                                    </CardContent>
                                    </Box>
                                
                        </Card>
            }
        )}

    </div>
    
    </div>
    
</div>
    )
        };
