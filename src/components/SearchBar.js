import { IoSearchOutline, IoMicSharp } from 'react-icons/io5'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
    const Navigate = useNavigate();
    const [data, setData] = useState("")
    
    const handleClick = (e) => {
        Navigate(`/searchresults/${data}`);
        e.preventDefault();
        
        
            
        
    }
    const handleChange = (e) => {
        console.log(e.target.value);
        setData(e.target.value);
        console.log("data", data);
    }
    return (
        <div className='flex flex-row items-center justify-center'>
            <form onSubmit={handleClick} className='flex flex-row'>
                <input value={data} onChange={handleChange} className="border-2 w-[400px] lg:w-[550px] h-10 p-4 rounded-l-full" type="text" placeholder="Search"/>
                <button className='flex items-center justify-center cursor-pointer rounded-r-full bg-gray-100 
                hover:bg-gray-200 h-10 w-[50px]'><IoSearchOutline size={24}/></button>
            </form>
            <div>
                <IoMicSharp className='cursor-pointer ml-5' size={24}/>
            </div>
        </div>
    )
}

export default SearchBar;
