import React, { useState } from 'react'
import Search from "../../components/search"



const Home = () => {
    const [receipes, setReceipes] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const getDataFromSearchComponent = (data) => {
        setIsLoading(true)
        async function getReceipes(){
            const apiRes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=fa2b6ffcafe947f19a265d99e66389f5&query${data}`)
            const result = await apiRes.json()
            if(result.number > 0){
                setIsLoading(false)
                setReceipes(result)
                console.log(receipes, "receipes")
            }
        }
        getReceipes()
    }

    console.log(isLoading, receipes, "isLoading, receipes")

    return (
        <div className="Home">
            <Search getDataFromSearchComponent={getDataFromSearchComponent} />
        </div>
    )
}

export default Home