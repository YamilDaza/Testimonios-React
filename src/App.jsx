import React from 'react';
import './CSS/App.css'
import Testimonio from './Components/Testimonio';

const img = require.context('./img', true);

const App = () => {
    return (
        <div className='app'>
            <h1>Porque estudiar Programacion:</h1>
            <div className='contenedor-principal'>
                <Testimonio 
                    imagen={img('./butsOne.png')}
                    nombre='Jon Skeet'
                    cargo='¿Qué le llevó a la fama?: contribuidor legendario en Stack Overflow'
                    texto='Credenciales: Ingeniero de Google y autor de C# in Depth. Ostenta la puntuación más alta en reputación de todos los tiempos en Stack Overflow, contestando, de media, unas 390 preguntas al mes.'
                />
                <Testimonio 
                    imagen={img('./butsTwo.png')}
                    nombre='Sanjay Ghemawat'
                    cargo='¿Qué le llevó a la fama?: Arquitecto clave de Google'
                    texto='Credenciales: Ayudó a diseñar e implementar algunos de los sistemas distribuidos más grandes de Google, incluyendo MapReduce, BigTable, Spanner y Google File System. Creó ical, el sistema de calendario. Fue elegido para el National Academy of Engineering en 2009. Ganador del premio ACM-Infosys Foundation Award in the Computing Sciences en 2012.'
                />
                <Testimonio 
                    imagen={img('./butsThree.png')}
                    nombre='Fabrice Bellard'
                    cargo='¿Qué le llevó a la fama?: creador de QEMU'
                    texto='Credenciales: Creó una variedad de programas de código abierto, incluyendo QEMU, una platforma para la emulación de hardware emulation y virtualización, FFmpeg, para el manejo de datos multimedia, el Tiny C Compiler y LZEXE, un ejecutable para comprimir archivos. Ganador del  Obfuscated C Code Contest en 2000 y 2001 y el ganador del Google-O Reilly Open Source Award en 2011. Antiguo plus-marquista mundial en el cálculo del máximo número de dígitos en Pi.'
                />
            </div>
        </div>
    );
}

export default App;
