function listenBuzzins() {
    console.log('Listening...');
}

function Header() {
    return (
        <div className='row justify-content-between align-items-center mt-4'>
            <div>
                <label>Eight player Jeopardy!</label>
            </div>
            <button className="" type="button" onClick={() => listenBuzzins()}>Listen For Buzzins</button>
        </div>
    );
}

export default Header;