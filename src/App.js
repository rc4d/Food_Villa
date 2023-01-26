import './index.css';
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';

import { createBrowserRouter, Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
};
export const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path:"/",
                element: <Body /> 
            },
            {
                path:"/about",
                element: <About />,
                children:[{
                    path:"profile",
                    element: <Profile />
                }]
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu />
            },
        ],
    }
])

// {<About />
// <Body />
// <Contact />}
export default App;