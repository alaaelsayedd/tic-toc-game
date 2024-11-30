
function GameOver({ win, onRematch }) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {win && <p> Winner:{win}</p>}
            {!win && <p> No Winner Game Over</p>}
            <p>
                <button onClick={onRematch} >Rematch</button>
            </p>
        </div>
    );
}

export default GameOver;
