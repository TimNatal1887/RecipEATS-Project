import { Link } from "react-router-dom"
import "./Header.css"
export default function Header(){
    return (
        <div className="header-wrapper">
            <Link to="/" className="header-link">
                <h1>RecipEATS!</h1>
            </Link>
        </div>
    )
}