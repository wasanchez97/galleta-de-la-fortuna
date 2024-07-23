import { useState } from "react";
import getRandomNumbers from "../utils/getRandomNumbers";
import quotes from '../data/phrases.json';
import photos from '../data/photos.json';
import '../componets/BtnPhrase.css';


const BtnPhrase = ({ setprhaseSelected, setBgSelected, prhaseSelected }) => {
    const [animate, setAnimate] = useState(false);
    const [showImages, setShowImages] = useState(true);
    const [showPhrase, setShowPhrase] = useState(false);
    const [showOpenButton, setShowOpenButton] = useState(true);
    const [showAnotherButton, setShowAnotherButton] = useState(false);


    const handleChangePhrase = () => {
        // Reproducir el sonido
        const audio = new Audio('/public/sounds/galletacrujiendo1.mp3');
        audio.play();

        // Iniciar la animación
        setAnimate(true);
        setShowPhrase(false);
        setShowOpenButton(false); 
        setShowAnotherButton(true);

        // Cambiar la frase y el fondo después de la animación
        setTimeout(() => {
            const indexRandom = getRandomNumbers(quotes.length);
            const phraseRandom = quotes[indexRandom];
            setprhaseSelected(phraseRandom);
            setBgSelected(photos[getRandomNumbers(photos.length)]);

            // Ocultar las imágenes después de la animación
            setShowImages(false);
            setAnimate(false);

            // Mostrar la nueva frase en el lugar de las imágenes
            setTimeout(() => {
                setShowPhrase(true);
               
            }, 500); // Ajusta este tiempo si es necesario para que coincida con la duración de la animación
        }, 2000); // Duración de la animación en milisegundos

    };
    const handleAnotherCookie = () => {
        //
        // Mostrar las imágenes y ocultar el botón de "Otra Galleta"
        setShowImages(true);
        setShowPhrase(false);
        setShowAnotherButton(false);
        setShowOpenButton(true); // Volver a mostrar el botón de "Abrir Otra"

        
    };

    return (
        <div className="btn-container">
             {showOpenButton && (
                <button className="btn-open" onClick={handleChangePhrase}>Abrir Otra</button>
            )}
            {showAnotherButton && (
                <button  className="btn-another" onClick={handleAnotherCookie}>Otra Galleta</button>
            )}
            {showImages && (
                <div className={`images-container ${animate ? 'animate' : ''}`}>
                    <img src="img2/imagen1.png" alt="Imagen 1" className="image image1" />
                    <img src="img2/image2.png" alt="Imagen 2" className="image image2" />
                </div>
            )}
            <div className={`phrase-container ${showPhrase ? 'show' : 'hide'}`}>
            <p>{prhaseSelected.phrase}</p>
            <p className="author">{prhaseSelected.author}</p>
            </div>
        </div>
    );
};

export default BtnPhrase;
