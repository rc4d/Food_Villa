  import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible}) => {
    return (
    <div className="border border-black p-2 m-2">
        <h3 className="bg-pink-200 rounded-md mb-2 pl-2 font-bold text-xl">{title}</h3>
        {
            isVisible ? (
            <>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={() => setIsVisible(false)}>Hide</button> 
                <p>{description}</p>
            </>
            ): (<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" onClick={() => setIsVisible(true)}>Show</button>)
        }
    </div>
    );
}

const Instamart = () => {
    const [visibleSection, setIsVisibleSection] = useState(""); 

    return (
        <div>
            <h1>Hello Instamart </h1>
            <Section 
                title={"About Instamart"}
                description= {"Instamart must explain to you how all this mistaken idea of growing mart and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
                isVisible={visibleSection === "about"}
                setIsVisible={() => setIsVisibleSection(visibleSection === "about" ? "" : "about")}
            />

            <Section 
                title={"Meet Our Team"}
                description= {"Complete Team account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
                isVisible={visibleSection === "team"}
                setIsVisible={() => setIsVisibleSection(visibleSection === "team" ? "" : "team")}
            />

            <Section 
                title={"Career at Food Villa"}
                description= {"Complete Team account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
                isVisible={visibleSection ==="career"}
                setIsVisible={() => setIsVisibleSection(visibleSection === "career" ? "" : "career")}
            />
        </div>
    )
}

export default Instamart;