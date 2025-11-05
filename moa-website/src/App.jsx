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
    const headerRef = useRef(null)

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
                    trigger: headerRef.current,
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
                ease: "none",
                zIndex: -1,
            });

            // Apuntamos a los elementos .change-section DENTRO del headerRef
            const changeSections = gsap.utils.toArray('.change-section', headerRef.current);
            
            gsap.to(changeSections, {
                scrollTrigger: {
                    trigger: featuresRef.current,
                    start: "7% top",
                    markers: false, // Cambia a true para debug
                    onEnter: () => {
                        gsap.to(changeSections, { 
                            color: "black", 
                            duration: 0.2 
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(changeSections, { 
                            color: "var(--font-color-tertiary)", 
                            duration: 0.2 
                        });
                    },
                },
            });
        }, wrapperRef) // -> context for clean behavior

        // -> clean behavior
        return () => ctx.revert();
    }, []); // -> the empty array ensures that the effect runs only once

    return (
        <>
            <div className='body-wrapper' ref={wrapperRef}>
                <Header ref={headerRef} />

                <main>
                    <Presentation />

                    <section className='img' ref={imgTriggerRef}>
                        <div className='presentation-img' ref={imgScaleRef}>
                            <img src={degradadoImg} alt='degradado' className='presentation-image'/>
                        </div>
                    </section>

                    <Features ref={featuresRef} />
                </main>

                <Footer />
            </div>
        </>
    )
}

export default App;