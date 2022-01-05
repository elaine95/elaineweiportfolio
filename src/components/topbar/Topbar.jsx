import './topbar.scss';
import {LinkedIn, Email, LocationOnRounded} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }){
    return(
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Elaine Wei</a>
                    <div className="itemContainer">
                        <LinkedIn className="icon"/>
                        <a href="https://www.linkedin.com/in/elaine-wei-b1575390/">Elaine Wei</a>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon"/>
                        <span>elaine.huan.wei@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <LocationOnRounded className="icon"/>
                        <span>Toronto, Canada</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}