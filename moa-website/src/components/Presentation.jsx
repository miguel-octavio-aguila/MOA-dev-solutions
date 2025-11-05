// src/components/Presentation.jsx
export default function Presentation() {
    return (
        <section className="presentation" id="presentation">
            <div className="spline-wrapper">
                {/* 2. Usa el componente Spline y el prop 'scene' */}
                <spline-viewer url="https://prod.spline.design/AMFh6cB8jqY8wHzT/scene.splinecode"></spline-viewer>
            </div>
            <div className="presentation-container">
                <h1>MOA</h1>
                <h2>Soluciones de Desarrollo</h2>
            </div>
        </section>
    );
}