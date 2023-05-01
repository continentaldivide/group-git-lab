import { Link } from "react-router-dom";
import  '../../header.css'

export default function Header() {
    return (
        <nav>
            <ul style={({listStyleType: "none"})}>
                <li>
                    <Link to="/" >Home</Link>
                </li>

                <li>
                    <Link to="/about" >About Us</Link>
                </li>
            </ul>
        </nav>
    )
}