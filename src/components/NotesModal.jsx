import { useRef, useState } from "react";
import "./NotesModal.css"; // Assuming you have some CSS for styling
// import NotesGroup from "../pages/NotesGroup";

function NotesModal({onClose, addGroup}) {
    const modalRef = useRef();
    const [color, setColor] = useState('');
    const [groupName, setGroupName] = useState('');
       
    const handleAddGroup=()=>{
      if(groupName && color){
        const newGroup={
          id: groupName.slice(0,2).toUpperCase(),
          name: groupName,
          color: color,
        };
        addGroup(newGroup);
        onClose();
      }else{
        console.log("Group name and color are required.");
      }
    };


    const closeModal=(e)=>{
        if(modalRef.current === e.target){
            onClose();
        }
    }
  return (
    <div ref={modalRef} onClick={closeModal} className="modal">
      <div className="modal-content">
        <h3 style={{ textAlign: "left" }}>Create New Notes Group</h3>
        <div className="form-group">
          <label>Group Name</label>
          <input
            style={{
              borderRadius: "12px",
              width: "300px",
              padding: "5px",
              marginLeft: "10px",
            }}
            type="text"
            placeholder="Enter your group name..."
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        
          {/* <p>{groupName}</p> */}
        </div>
        <div className="form-group">
          <label>Choose Colour</label>
          <div className="color-options">
          {['#d59ded', '#8ed7db', '#f8ab99', '#68d0b4', '#4689e8', '#4673e8'].map((colorOption) => (
              <span
                key={colorOption}
                className={`color-circle ${color === colorOption ? 'selected' : ''}`}
                style={{ backgroundColor: colorOption }}
                onClick={() => setColor(colorOption)}
              />
            ))}
          </div>
        </div>
        <button onClick={handleAddGroup} className="modalbtn">Create</button>
      </div>
    </div>
  );
}

export default NotesModal;
