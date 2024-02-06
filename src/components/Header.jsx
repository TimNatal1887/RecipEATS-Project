import { Link } from "react-router-dom"
import "./Header.css"
export default function Header(){
    return (
        <div className="header-wrapper">
            <Link to="/" className="header-link">
                <h1>RecipEATS!</h1>
            </Link>
            <Link to="/about" className="about-link">
                <h4 className="about-h4">About Us</h4>
            </Link>

        </div>
    )
}