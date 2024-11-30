export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map(turn => <li key={`${turn.squre.row}${turn.squre.col}`}>Squre :{turn.squre.row},{turn.squre.col} ,Player:{turn.player}</li>)}
        </ol>
    )
}



// function Log({turns}) {
//     return (
//          <ol id="log">
//             {turns.map(turn=><li key={`${turn.squre.row}${turn.squre.col}`}>Squre:{turn.squre.row},{turn.squre.col} symbol:{turn.player}</li>)}
//          </ol>
//      );
// }

// export default Log;