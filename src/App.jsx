import React from 'react';
import './CSS/App.css'
import Testimonio from './Components/Testimonio';

const img = require.context('./img', true);

const App = () => {
    return (
        <div className='app'>
            <div className='contenedor-principal'>
                <h1>Porque estudiar programación:</h1>
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
                    texto='Credenciales: Ayudó a diseñar e implementar algunos de los sistemas distribuidos más grandes de Google, incluyendo MapReduce, BigTable, Spanner y Google File System. Creó ical, el sistema de calendario. Fue elegido para el National Academy of Engineering en 2009.'
                />
                <Testimonio 
                    imagen={img('./butsThree.png')}
                    nombre='Fabrice Bellard'
                    cargo='¿Qué le llevó a la fama?: creador de QEMU'
                    texto='Credenciales: Creó una variedad de programas de código abierto, incluyendo QEMU, una platforma para la emulación de hardware emulation y virtualización, FFmpeg, para el manejo de datos multimedia, el Tiny C Compiler y LZEXE, un ejecutable para comprimir archivos.'
                />
            </div>
        </div>
    );
}

export default App;
