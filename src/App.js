function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className='pokemon-info-app'>
      <form className='pokemon-form' onSubmit={handleSubmit}>
        <label htmlFor='pokemonName-input'>Pokemon Name</label>
        <small>
          Try{' '}
          <button className='invisible-button' type='button'>
            "pikachu"
          </button>
          {', '}
          <button className='invisible-button' type='button'>
            "charizard"
          </button>
          , or
          <button className='invisible-button' type='button'>
            "mew"
          </button>
        </small>

        <div>
          <input
            id='pokemonName-input'
            placeholder='Pokemon Name...'
            name='pokemonName'
          />
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
