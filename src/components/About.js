import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return(
        <div className="about-container" style={{ padding: "20px", textAlign: "center" }}>About us
        <User name={"Sandesh Rai"}/>
        <UserClass name={"Sandesh Kumar"}/>
        </div>
    )
   
}

export default About;