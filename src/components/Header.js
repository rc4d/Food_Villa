import Title from "./Title";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav_items">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;