import { Link } from "react-router-dom";

const Nav = () => {



    const links = [{
        text: "Home",
        to: "/",

    },
{
    text:"Starred",
    to: "/Starred"

    }

    ]

    return (
        <>
            <section className="navigation">
                <ul>
                    {links.map((items)=>(
                       <li key={items.to}>
                        
                        <Link to={items.to}>
                        {items.text}</Link></li> 
                    ))}

                </ul>
            </section>
        </>
    )
}
export default Nav;