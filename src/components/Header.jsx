import { Link } from "react-router-dom"
import "./Header.css"
export default function Header(){
    return (
        <div className="header-wrapper">
            <div className="header-wrapper-link">
                <Link to="/" className="header-link">
                    <h1>RecipEATS!</h1>
                </Link>
            </div>
            <div className="about-headerwrap">
                <Link to="/about" className="about-link">
                    <h4 className="about-h4">About Us</h4>
                </Link>
            </div>
        </div>
    )
}