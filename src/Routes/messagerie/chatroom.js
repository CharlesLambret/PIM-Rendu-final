import { appfirebase, firebaseConfig, auth, db } from "../../firebase.js";
import Connexionform from "../authentification/connexion.js";
import Button from '@mui/material/Button';
import {useRef, useEffect, useState} from "react";
import { getDocs } from "firebase/firestore/lite";

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`Message ${messageClass}`}>
        <img src={photoURL} />
        <p>{text}</p>
      </div>
    </>)
  }
  
export function ChatRoom() {
    
    const messagesRef = db.collection('Messages');
    const query = messagesRef.orderBy('createdAt').limitToLast(25);
    const [user] = appfirebase.auth;
    const [messages] = getDocs(query, { idField: 'id' });
    const firestore = appfirebase.firestore();
    const [formValue, setFormValue] = useState('');

    const scroll = useRef();
    useEffect(() => {
        scroll.current.scrollIntoView({ behavior: 'smooth' });
      }, [messages])
    
    const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: appfirebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    
  }
    return (
    <div> 
        <h1>Messagerie</h1>
        <main>
            {user ? <ChatRoom /> : <Connexionform />}
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        </main>
        <form onSubmit={sendMessage}>

        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
        <Button type="submit" disabled={!formValue}>Envoyer</Button>
        </form>
        <span ref={scroll}></span>
    </div>
    )
  }