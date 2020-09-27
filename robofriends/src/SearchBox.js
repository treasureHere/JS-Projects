import React from 'react'

const SearchBox = ({change}) =>{
    return(
        <input type = 'search' name = 'searchField' onChange = {(event)=>{change(event)}} />
    )
}

export default SearchBox;