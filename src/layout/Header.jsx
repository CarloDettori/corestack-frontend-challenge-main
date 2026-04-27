import { NavLink, Link } from "react-router-dom";


export default function Header() {


    return (

        <header className="flex justify-between items-center p-5">


            <Link to="/">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/051/865/736/small/yellow-post-it-note-with-thumbtack-isolated-on-transparent-background-png.png" alt="logo" className="h-10" />
            </Link>

            <nav className="flex gap-5">
                <NavLink to="/" className="px-5">
                    {({ isActive }) => (
                        <span className={isActive ? "font-bold underline" : ""}>HOME</span>
                    )}</NavLink>
                <NavLink to="/posts" className="mx-5">
                    {({ isActive }) => (
                        <span className={isActive ? "font-bold underline" : ""}>POST</span>
                    )}</NavLink>
            </nav>

        </header >


    )
}