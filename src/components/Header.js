import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
import { useContext, useState } from "react";
import UserContext from "./utils/UserContext";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    
    const {user} = useContext(UserContext);

    // className="fixed bottom-0 left-0"
    return (
        <div className="mr-2 flex justify-between bg-pink-50">
            <Title />
            <div className="nav_items">
                <ul className="flex py-10">
                    <Link to="/"><li className="px-2">Home</li></Link>
                    <Link to="/about"><li className="px-2">About</li></Link>
                    <Link to="/contact"><li className="px-2">Contact</li></Link>

                    <li className="px-2">Cart</li>
                    <Link to="/instamart"><li className="px-2">Instamart</li></Link>
                </ul>
            </div>
            <h1>{isOnline ? "✅":"🔴" }</h1>
            {
                isLoggedIn ? (
                <>
                    <span>{user.name}</span>
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                </>
                ) : (
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                )
            }
        </div>
    )
}

export default Header;