import React from 'react';
import '../CSS/testimonio.css'

// const img = require.context('../img', true);

const Testimonio = ({nombre, cargo, texto,imagen}) => {
    return (
        <div className='contenedor-testimonio'>
            <img 
                className='img-testimonio'
                src={imagen}
                alt='Imagen de testimonio'
            />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{nombre}</p>
                <p className='cargo-testimonio'>{cargo}</p>
                <p className='texto-testimonio'>{texto}</p>
            </div>
        </div>
    );
}

export default Testimonio;
