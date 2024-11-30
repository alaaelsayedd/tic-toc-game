import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Players";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./wining-comp";
import GameOver from "./components/GameOver";
const INIT_Game_Board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
function dreviedSymbol(turns) {
  let playerSymbol = 'X';
  if (turns.length > 0 && turns[0].player === 'X') {
    playerSymbol = 'O';
  }
  return playerSymbol
}
export default function App() {
  const [gameturns, setTurns] = useState([]);
  let playerSymbol = dreviedSymbol(gameturns);
  const [players, setPlayers] = useState({
    'X': "player1",
    'O': "player2",
  })
  let gameBoard = [...INIT_Game_Board.map(innerArr => [...innerArr])];
  for (const turn of gameturns) {
    let { squre, player } = turn;
    let { row, col } = squre
    gameBoard[row][col] = player;
  }
  let WIN_COMP;
  for (const compTry of WINNING_COMBINATIONS) {
    let FirstSymbol = gameBoard[compTry[0].row][compTry[0].column];
    let SecoundSymbol = gameBoard[compTry[1].row][compTry[1].column];
    let ThirdSymbol = gameBoard[compTry[2].row][compTry[2].column];
    if (FirstSymbol && FirstSymbol === SecoundSymbol && FirstSymbol === ThirdSymbol) {
      WIN_COMP = players[FirstSymbol];
    }
  }
  let hasDraw = gameturns.length == 9 && !WIN_COMP;
  function handleSqureSelect(rowIndex, colIndex) {
    setTurns(prevTurn => {
      let playerSymbol = dreviedSymbol(prevTurn);
      let currentTurn = [{ squre: { row: rowIndex, col: colIndex }, player: playerSymbol }, ...prevTurn];
      return currentTurn;
    })


  }
  function handleRetry() {
    setTurns([]);
  }

  function handleNameChange(name, symbol) {
    setPlayers(oldData => ({ ...oldData, [symbol]: name }))
  }

  return (

    <>
      <main id="game-container">
        <ol id="players" className="highlight-player">
          <Player initaliName={"player1"} symbol={"X"} isActive={playerSymbol === 'X'} onNameChange={handleNameChange} />
          <Player initaliName={"player2"} symbol={"O"} isActive={playerSymbol === 'O'} onNameChange={handleNameChange} />
        </ol>
        <GameBoard onSelectSqure={handleSqureSelect} board={gameBoard} />
        <Log turns={gameturns} />
        {WIN_COMP && <GameOver win={WIN_COMP} onRematch={handleRetry} />}
        {hasDraw && <GameOver />}
      </main>
    </>

  )
}












// import { useState } from "react";
// import GameBoard from "./components/GameBoard";
// import Players from "./components/Players";
// import Log from "./components/Log";
// import { WINNING_COMBINATIONS } from "./wining-comp";
// import GameOver from "./components/GameOver";
// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

// function dreviedAcivePlayer(gameTurns) {
//   let playerSymbol = "X";
//   if (gameTurns.length > 0 && gameTurns[0].player === "X") {
//     playerSymbol = "O";
//   }
//   return playerSymbol;
// }
// function App() {
//   const [gameTurns, setGameTurns] = useState([]);
//   const activePlayer = dreviedAcivePlayer(gameTurns);
//   const [playersData, setPlayersData] = useState({
//     X: "Player1",
//     O: "Player2",
//   });
//   let gameBoard = [...initialGameBoard.map((innerArr) => [...innerArr])];
//   for (const turn of gameTurns) {
//     let { row, col } = turn.squre;
//     gameBoard[row][col] = turn.player;
//   }
//   let winSymbol;

//   for (const winingComp of WINNING_COMBINATIONS) {
//     let firstSqureSymbol = gameBoard[winingComp[0].row][winingComp[0].column];
//     let secoundSqureSymbol = gameBoard[winingComp[1].row][winingComp[1].column];
//     let thirdSqureSymbol = gameBoard[winingComp[2].row][winingComp[2].column];
//     if (
//       firstSqureSymbol &&
//       firstSqureSymbol === secoundSqureSymbol &&
//       firstSqureSymbol === thirdSqureSymbol
//     ) {
//       winSymbol = playersData[firstSqureSymbol];
//     }
//   }
//   let gameover = gameTurns.length == 9 && !winSymbol;
//   function toggleActivePlayer(rowIndex, colIndex) {
//     setGameTurns((turns) => {
//       const currentPlayer = dreviedAcivePlayer(turns);
//       let updatedTurns = [
//         { squre: { row: rowIndex, col: colIndex }, player: currentPlayer },
//         ...turns,
//       ];

//       return updatedTurns;
//     });
//   }
//   function handleRematch() {
//     setGameTurns([]);
//   }
//   function handlePlayerUpdatingInfo(symbol, name) {
//     setPlayersData((players) => ({
//       ...players,
//       [symbol]: name,
//     }));
//   }

//   return (
//     <>
//       <main id="game-container">
//         <ol id="players" className="highlight-player">
//           <Players
//             intialName="Player1"
//             symbol={"X"}
//             isActive={activePlayer === "X"}
//             onChangeName={handlePlayerUpdatingInfo}
//           />
//           <Players
//             intialName="Player2"
//             symbol={"O"}
//             isActive={activePlayer === "O"}
//             onChangeName={handlePlayerUpdatingInfo}
//           />
//         </ol>
//         {(winSymbol || gameover) && (
//           <GameOver win={winSymbol} onClicked={handleRematch} />
//         )}
//         <GameBoard handleSelectSqure={toggleActivePlayer} board={gameBoard} />
//         <Log turns={gameTurns} />
//       </main>
//     </>
//   );
// }

// export default App;
