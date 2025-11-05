import Spline from '@splinetool/react-spline';

export default function Presentation() {
    return (
        <section className="presentation" id="presentation">
        <div className="spline-wrapper">
            {/* ¡Mucho más simple! */}
            <Spline scene="https://prod.spline.design/AMFh6cB8jqY8wHzT/scene.splinecode" />
        </div>
        <div className="presentation-container">
            <h1>MOA</h1>
            <h2>Soluciones de Desarrollo</h2>
        </div>
        </section>
    );
}