import { useState } from "react"

export default function Player({ initaliName, symbol, isActive, onNameChange }) {
    const [editName, setEditStaus] = useState(false);
    const [playerName, setPlayerName] = useState(initaliName)
    function handleEditingName() {
        setEditStaus(editStaus => !editStaus);
        if (editName) {
            onNameChange(playerName, symbol)
        }
    }
    let playerField;
    if (editName) {
        playerField = <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
    }
    else {
        playerField = <span className="player-name">{playerName}</span>
    }
    return (

        <li className={isActive ? "active" : ""}>
            <span className="player">
                {playerField}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditingName}> {editName ? "Save" : "Edit"}</button>
        </li>
    )
}





// import { useState } from "react";
// function Players({ intialName, symbol, isActive, onChangeName }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [playerName, setPlayerName] = useState(intialName);
//   let btnValue = "Edit";
//   let editablePlayerName = <span className="player-name">{playerName}</span>;

//   function handleEditingChange() {
//     setIsEditing((editig) => !editig);
//     if (isEditing) {
//       onChangeName(symbol, playerName);
//     }
//   }
//   function handelInputChange(e) {
//     setPlayerName(e.target.value);
//   }
//   if (isEditing) {
//     btnValue = "Save";
//     editablePlayerName = (
//       <input
//         type="text"
//         required
//         value={playerName}
//         onChange={handelInputChange}
//       />
//     );
//   } else {
//     btnValue = "Edit";
//     editablePlayerName = <span className="player-name">{playerName}</span>;
//   }

//   return (
//     <>
//       <li className={isActive ? "active" : ""}>
//         <span className="player">
//           {editablePlayerName}
//           <span className="player-symbol">{symbol}</span>
//         </span>
//         <button onClick={handleEditingChange}>{btnValue}</button>
//       </li>
//     </>
//   );
// }

// export default Players;
