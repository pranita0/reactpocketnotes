// import React from 'react'
import { MdLock } from "react-icons/md";

function NoteDetails() {
  return (
    <>
      <div className="note-details">
        <img src={"./src/assets/image-removebg-preview 1.png"}></img>
        <h1>Pocket Notes</h1>
        <p>Send and receive messages without keeping your phone online.</p>
        <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        <p className="encrypted">
          <MdLock /> end-to-end encrypted
        </p>
      </div>

      <div></div>
    </>
  );
}

export default NoteDetails;
