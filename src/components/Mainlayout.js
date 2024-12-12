import { Outlet } from "react-router-dom";
import Navs from "../components/Navs.js"
const Mainlayout = () => {
    console.log(Outlet);

    return (
        <>
            <div>
               <Navs/> 
                 <Outlet />
                {/* This is first outlet 
                <h2>Mainlayout</h2>  */}
            </div>
        </>
    )


}
export default Mainlayout;