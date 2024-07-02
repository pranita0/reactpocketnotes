// import { useState } from "react";
import "./NotesGroup.css";

function NotesGroup({ groups }) {
  // console.log(name);
  // console.log(color);
  return (
    <>
      <div className="notes-group">
        {/* <p>Group Name:{}</p> */}
        {groups.map((group) => (
          <div key={group.id} className="group-item">
            <div
              style={{ backgroundColor: group.color }}
              className="group-icon"
            >
              {group.id}
            </div>
            <span className="group-name">{group.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default NotesGroup;
