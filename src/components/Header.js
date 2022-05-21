function clearBuzzins() {
    console.log('clear');
}

function handleNumPlayers(value, setNumPlayers) {
    if (value < 2) {
        value = 2;
    }
    else if (value > 10) {
        value = 10;
    }
    setNumPlayers(value);
}


function Header({maxPlayers, numPlayers, setNumPlayers}) {
    const minPlayers = 2;
    return (
        <div className='row justify-content-between align-items-center mt-4'>
            <div>
                <label>Number of players: </label>
                <input type="number" min={minPlayers} max={maxPlayers} value={numPlayers} onChange={(e) => handleNumPlayers(e.target.value, setNumPlayers)}></input>
            </div>
            <button className="" type="button" onClick={() => clearBuzzins()}>Clear Buzzins</button>
        </div>
    );
}

export default Header;