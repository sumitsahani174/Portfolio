import React from 'react'
import './Intro.scss'
import { init } from 'ityped'
import { useEffect,useRef } from 'react'
export default function Intro() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, 
            {   showCursor: true,
                backDelay : 1500,
                backSpeed : 60,
                strings: ['Backend Developer', 'FullStack Developer','Yeah!' ] 
            })
    }, [])

    return (
        <div className="Intro" id="Intro">
          <div className="left">
           <div className="imgContainer">
               <img src="assets/man.png" alt="" />
           </div>

          </div>
          <div className="right">
            <div className="wrapper">
                <h2>Hi There, I'm</h2>
                <h1>Sumit Sahani</h1>
                <h3>Freelancer <span ref={textRef} ></span> </h3>
            </div>
            <a href="#portfolio">
                <img src="assets/down.png" alt="" />
            </a>
          </div>
        </div>
    )
}
