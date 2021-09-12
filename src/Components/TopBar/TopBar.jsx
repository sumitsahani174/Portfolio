import React ,{useState} from 'react'
import {Person,Mail} from '@material-ui/icons';
import './Topbar.scss'
export default function TopBar({menuOpen,setMenuOpen}) {
    return (
        <div className={"TopBar "+ (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#Intro" className="logo">genius</a>
                    <div className="itemcontainer">
                        <Person className="icon" />
                        <span>+91 9004844180</span>
                    </div>
                    <div className="itemcontainer">
                        <Mail className="icon" />
                        <span>sumitsahani174@gmail.com</span>
                    </div>
                </div>
               
                <div className="right">
                    <div className="hambarger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
