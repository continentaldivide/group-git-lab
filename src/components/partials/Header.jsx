import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <ul list-style-type="none">
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