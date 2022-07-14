import { Outlet } from "react-router-dom";

function About(props){
    return(
        <div>
            <h4>Coperation Information</h4>
            <Outlet></Outlet>
        </div>
    )
}
export default About;