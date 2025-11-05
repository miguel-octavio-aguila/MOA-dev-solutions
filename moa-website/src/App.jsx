import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from './components/Header.jsx'
import Presentation from './components/Presentation.jsx'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx'

import './App.css'
import degradadoImg from './assets/degradado_negro_azul_curvo.png'

gsap.registerPlugin(ScrollTrigger)

function App() {
    // gsap references
    const wrapperRef = useRef(null)
    const imgScaleRef = useRef(null)
    const featuresRef = useRef(null)
    const imgTriggerRef = useRef(null)

    // animations
    useLayoutEffect(() => {
        // gsap.context() for group animations and clean behavior
        const ctx = gsap.context(() => {
            // background body animation
            // wrapperRef.current instead of ".body"
            gsap.fromTo(wrapperRef.current, {
                background: 'black',
            }, {
                scrollTrigger: {
                    trigger: ".header",
                    start: "150dvh top",
                    end: "170dvh 50dvh",
                    toggleActions: "play none reset none",
                },
                background: 'transparent',
            });

            // img scale animation
            // imgScaleRef.current instead of ".img"
            gsap.fromTo(imgScaleRef.current, {
                scaleY: 4.5,
            }, {
                scrollTrigger: {
                    trigger: ".presentation",
                    start: "bottom bottom",
                    end: "90% top",
                    toggleActions: "restart pause reverse pause",
                    scrub: true,
                },
                scaleY: 0,
                ease: "none",
            });

            // z-index animation
            // featuresRef.current instead of ".features"
            gsap.fromTo(featuresRef.current, {}, {
                scrollTrigger: {
                    trigger: imgTriggerRef.current,
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                },
                zIndex: -1,
                ease: "none",
            });
        }, wrapperRef) // -> context for clean behavior

        // -> clean behavior
        return () => ctx.revert();
    }, []); // -> the empty array ensures that the effect runs only once

    return (
        <>
            <div className='body-wrapper' ref={wrapperRef}>
                <Header />

                <main>
                    <Presentation />

                    <section className='img' ref={imgTriggerRef}>
                        <div className='presentation-img' ref={imgScaleRef}>
                            <img src={degradadoImg} alt='degradado' className='presentation-image'/>
                        </div>
                    </section>

                    <section className='features' id='features' ref={featuresRef}>
                        <Features />
                    </section>
                </main>

                <Footer />
            </div>
        </>
    )
}

export default App;