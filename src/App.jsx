/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import NoteDetails from "./pages/NoteDetails";
import NotesGroup from "./pages/NotesGroup";
import NotesModal from "./components/NotesModal";

const App = () => {
  const [groups, setGroups] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showNotesArea, setNotesArea] = useState('');
  const addGroup = (newGroup) => {
    setGroups([...groups, newGroup]);
  };

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <button
            onClick={() => setShowModal(true)}
            className="create-notes-group"
          >
            + Create Notes group
          </button>
          {showModal && (
            <NotesModal
              onClose={() => setShowModal(false)}
              addGroup={addGroup}
            />
          )}
          <NotesGroup groups={groups} />
        </div>
        <NoteDetails />
      </div>
    </>
  );
};

export default App;
