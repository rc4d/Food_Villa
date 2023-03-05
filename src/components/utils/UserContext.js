import { createContext } from "react";


const UserContext = createContext({
    user:{
        name:"Robin",
        email:"guptarobin466@gmail.com"
    }
});

export default UserContext;