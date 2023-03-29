import React, { useState } from 'react'

const SideBar = (props) => {
    // const [searchData, setSearchData] = useState("");
    const sideArr = ["Home", "Trending","Shopping","Music","Gaming","News","Sports","Learning","Fashion"];
    const handleClick = (e) => {
        props.handleSearchChange(e.target.innerText);
        // setSearchData(e.target.innerText);

    }
  return (
    <>
    
    {
        sideArr.map(ele => (
            <p onClick={handleClick} className="cursor-pointer">{ele}</p>
        ))
    }
   
    </>
  )
}

export default SideBar;