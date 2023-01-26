import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
/*
const About2 = () => {
    return (
        <div>
            <h1> About the Page</h1>
            <p>
                {" "}
                This is namaster react chapter 07 finding the path 🚀
            </p>
            <ProfileClass name={"hello"} xyz="World of XYZ" />
            <Outlet />
        </div>
    )
}
*/
class About  extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent - Constructor called. ");
    }

    componentDidMount(){
        console.log("Parent - componentDidMount called");
    }
    componentDidUpdate(){
        console.log("Parent - componentDidUpdate called");
    }
    render(){
        console.log("Parent - Render called");
        return (
            <div>
                <h1> About the Page</h1>
                <p>
                    {" "}
                    This is namaster react chapter 07 finding the path 🚀
                </p>
                <ProfileClass name={"First child"} xyz="World of XYZ" />
                {/* <ProfileClass name={"second Child"} xyz="World of XYZ" /> */}
                <Outlet />
            </div>
        )
    }
}

export default About;