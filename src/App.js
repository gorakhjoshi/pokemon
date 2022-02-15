import { useState } from 'react';

function App() {
  const [pokemonName, setPokemonName] = useState('');

  function handleChange(e) {
    setPokemonName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Setting state');
    setPokemonName(pokemonName);
  }

  function handleSelect(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  console.log(pokemonName);

  return (
    <div className='pokemon-info-app'>
      <form className='pokemon-form' onSubmit={handleSubmit}>
        <label htmlFor='pokemonName-input'>Pokemon Name</label>
        <small>
          Try{' '}
          <button
            onClick={() => handleSelect('pikachu')}
            className='invisible-button'
            type='button'
          >
            "pikachu"
          </button>
          {', '}
          <button
            className='invisible-button'
            type='button'
            onClick={() => handleSelect('charizard')}
          >
            "charizard"
          </button>
          , or
          <button
            className='invisible-button'
            type='button'
            onClick={() => handleSelect('mew')}
          >
            " mew"
          </button>
        </small>

        <div>
          <input
            id='pokemonName-input'
            placeholder='Pokemon Name...'
            name='pokemonName'
            value={pokemonName}
            onChange={handleChange}
          />
          <button type='submit' disabled={!pokemonName.length}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
