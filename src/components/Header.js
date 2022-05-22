function clearBuzzins() {
    console.log('clear');
}

function Header() {
    return (
        <div className='row justify-content-between align-items-center mt-4'>
            <div>
                <label>Eight player Jeopardy!</label>
            </div>
            <button className="" type="button" onClick={() => clearBuzzins()}>Clear Buzzins</button>
        </div>
    );
}

export default Header;