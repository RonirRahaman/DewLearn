import React, {useState, useEffect} from "react";
import { MdAccountCircle } from "react-icons/md";
import './Header.css';

function Header() {
    const [setSticky] = useState(false);

    useEffect(() => {
            const handleScroll = () => {
                setSticky(window.scrollY > 200);
                console.log(window.scrollY);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll",handleScroll);
    });

    return (
        <header className="sticky">
            <nav className="nav">
                <a>DewLearn</a>

                <ul className="nav-items">
                    <div className="dropdown">
                        <a className="dropbtn">BUY COURSES</a>
                        <div className="dropdown-content">
                            <a>CA Foundation</a>
                            <a>CA Inter</a>
                            <a>CA Fainal</a>
                            <a>CMA Foundation (Old)</a>
                            <a>CMA Inter (Old)</a>
                            <a>CMA Fainal (Old)</a>
                            <a>CS Exec</a>
                            <a>CS Professional</a>
                            <a>CBSE</a>
                            <a>Mock Test Series</a>
                            <a>Mentorship</a>
                            <a>Upskilling</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <a className="dropbtn">PROGRAMS</a>
                        <div className="dropdown-content">
                            <a>CA</a>
                            <a>ACCA</a>
                        </div>
                    </div>
                    <div>  SCHOLARSHIPS </div>
                <div>FREE RESOURCES</div>
            </ul>
            <div className="nav-login">
                <button >
                <MdAccountCircle size="1.5em" style={{ marginRight:'0.6em' }}/>
               <a>Log In/Sign Up</a>
                </button>
            </div>
        </nav>
        </header >
    )
}

export default Header;


