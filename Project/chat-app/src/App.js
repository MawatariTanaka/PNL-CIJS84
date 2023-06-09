import ChatRoom from "./Components/ChatRoom";
import SignIn from "./Components/SignIn";
import "./App.css";

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyD4PKIP7LXVv9oTe9y2zQKzFaUMVAneJ6Y",
  authDomain: "chat-app-639ce.firebaseapp.com",
  projectId: "chat-app-639ce",
  storageBucket: "chat-app-639ce.appspot.com",
  messagingSenderId: "702439026592",
  appId: "1:702439026592:web:f358bbeee1db54d5edfec5",
  measurementId: "G-53QZVF10PB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <div className="App">
      <header></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
