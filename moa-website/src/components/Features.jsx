import React from 'react';

// 1. Usamos React.forwardRef para "reenviar" la ref
//    que recibimos del componente padre (App.jsx)
//    al elemento <section> que está dentro.
const Features = React.forwardRef((props, ref) => {
    return (
        // 2. Asignamos la 'ref' recibida a la etiqueta <section>
        <section className="features" id="features" ref={ref}>
            <div className="features-container">
                <h2>Una nueva sección</h2>
                <p>El fondo del header cambia con esta sección.</p>
            </div>
        </section>
    );
});

export default Features;