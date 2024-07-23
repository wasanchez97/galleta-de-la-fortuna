import { useState } from 'react';
import './App.css'
import quotes from './data/phrases.json'
import getRandomNumbers from './utils/getRandomNumbers';
import Phrases from './componets/Phrases';
import BtnPhrase from './componets/BtnPhrase';
import photos from  './data/photos.json'

function App() {
 const indexRandom =getRandomNumbers(quotes.length)
 const [prhaseSelected, setprhaseSelected] = useState(quotes[indexRandom]);
 const [bgSelected, setBgSelected] = useState(photos [getRandomNumbers(photos.length)],);


const objStyles = {
  backgroundImage: `url(img/fondo${bgSelected}.jpg)`,
};
 
return (
  <div style={objStyles} className='full-container'>
    <h1 className='tittle'>Galleta de la fortuna</h1>
    <article className='button'>
      <BtnPhrase
        setprhaseSelected={setprhaseSelected}
        setBgSelected={setBgSelected}
        prhaseSelected={prhaseSelected }
        
      />
    </article>
  
  </div>
);

}

export default App
