import './index.css';
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import { Suspense, lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Shimmer from './Shimmer';
import store from './components/utils/store';
import { Provider } from 'react-redux';

const Instamart = lazy(() => import("./components/Instamart")); 
const About = lazy(() => import("./components/About"));

const App = () => {
    return (
        <Provider 
        
         store={store}>
        <Header />
        <Outlet />
        <Footer />
        </Provider>
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
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
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
            {
                path:"/instamart",
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
            },
        ],
    }
])

// {<About />
// <Body />
// <Contact />}
export default App;