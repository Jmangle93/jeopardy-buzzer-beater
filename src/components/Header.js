function listenBuzzins() {
  console.log('Listening...');
}

function Header({clearBuzzins}) {
  return (
    <div>
      <div>
        <h1 className='mt-4' align='center'>Jepperdee!</h1>
      </div>
      <div className='row justify-content-between align-items-center mt-4'>
        <button className="" type="button" onClick={() => listenBuzzins()}>Listen For Buzzins</button>
        <button className="" type="button" onClick={() => clearBuzzins()}>Clear Buzzins</button>
      </div>
    </div>
  );
}

export default Header;