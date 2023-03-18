import { IoSearchOutline, IoMicSharp } from 'react-icons/io5'
import { useRef } from 'react';
const SearchBar = () => {
    
    const searchInp = useRef(null);
    const handleClick = (e) => {
        e.preventDefault();
        console.log(searchInp.current)
    }
    return (
        <div className='flex flex-row items-center justify-center'>
            <form className='flex flex-row'>
                <input ref={searchInp} className="border-2 w-[400px] lg:w-[550px] h-10 p-4 rounded-l-full" type="text" placeholder="Search"/>
                <span onClick={() => handleClick} className='flex items-center justify-center cursor-pointer rounded-r-full bg-gray-100 
                hover:bg-gray-200 h-10 w-[50px]'><IoSearchOutline size={24}/></span>
            </form>
            <div>
                <IoMicSharp className='cursor-pointer ml-5' size={24}/>
            </div>
        </div>
    )
}

export default SearchBar;
