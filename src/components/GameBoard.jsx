export default function GameBoard( {onSelectSqure, board} )
{
  
  return (
   <ol id="game-board">
    {board.map((row,rowIndex)=>(
      <li key={rowIndex}>
        <ol>
          {row.map((playerymbol,colIndex)=>(
          <li key={colIndex}>
           <button onClick={()=>onSelectSqure(rowIndex,colIndex)} disabled={playerymbol!=null}>{playerymbol}</button> 
          </li>
           ))}
        </ol>
      </li>
    ))}
 </ol>
  )
}














// import { useState } from "react";


// function GameBoard({ handleSelectSqure, board }) {
 
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   function handleChangeOnGameBoard(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       let currentGameBoard = [
  //         ...prevGameBoard.map((innerArr) => [...innerArr]),
  //       ];
  //       currentGameBoard[rowIndex][colIndex] = activePlayer;

  //       return currentGameBoard;
  //     });
  //     handleSelectSqure();
  //   }
//   return (
//     <ol id="game-board">
//       {board.map((row, rowIndex) => (
//         <li key={rowIndex}>
//           <ol>
//             {row.map((playerSymbol, colIndex) => (
//               <li key={colIndex}>
//                 <button onClick={() => handleSelectSqure(rowIndex, colIndex)} disabled={playerSymbol!=null}>
//                   {" "}
//                   {playerSymbol}
//                 </button>
//               </li>
//             ))}
//           </ol>
//         </li>
//       ))}
//     </ol>
//   );
// }

// export default GameBoard;
