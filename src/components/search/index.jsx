import { useState } from 'react'
import './styles.css'

const Search = ({getDataFromSearchComponent}) => {
    const [value, setValue] = useState('')

    const handleInputValue = (event) => {
        const {value} = event.target
        setValue(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getDataFromSearchComponent(value)
    }
    return (
        <form className="Search">
            <input name="search" onChange={handleInputValue} value={value} placeholder="Search Recipes" id="search" />
            <button type="submit" onClick={handleSubmit}>Search</button> 
        </form>
    )
}

export default Search