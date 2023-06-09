import React from "react";
import { auth } from "../App";

export default function ChatRoom() {
  const handleSignOut = async () => {
    await auth.signOut().then(() => {
      console.log("Signed out successfully!");
    });
  };

  return (
    <div>
      <div>ChatRoom</div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
