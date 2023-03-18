import SearchBar from "./SearchBar";
import { AiOutlinePlaySquare } from 'react-icons/ai';

const Navbar = () => {

    return (
        <>
            <nav className="flex flex-row justify-between p-4 items-center">
                <div className="flex flex-row items-end">
                    <span><AiOutlinePlaySquare size={29} /></span>
                    <a href=" " className="text-3xl font-extrabold">WeTube</a>
                </div>
                <SearchBar />
                <div></div>
            </nav>
        </>
    )
}

export default Navbar;