import { createContext } from "react";


const UserContext = createContext({
    user:{
        name:"Robin",
        email:"guptarobin466@gmail.com"
    }
});
UserContext.displayName = "UserContext";

export default UserContext;