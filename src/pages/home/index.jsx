import React, { useState } from 'react'
import ReceipeItem from '../../components/receipe-item'
import Search from "../../components/search"
import './styles.css'


const Home = () => {
    const [receipes, setReceipes] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const getDataFromSearchComponent = (data) => {
        setIsLoading(true)
        async function getReceipes() {
            const apiRes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=fa2b6ffcafe947f19a265d99e66389f5&query${data}`)
            const result = await apiRes.json()
            if (result.number > 0) {
                setIsLoading(false)
                setReceipes(result.results)
            }
        }
        getReceipes()
    }


    return (
        <div className="Home">
            <Search getDataFromSearchComponent={getDataFromSearchComponent} />
            {/* show loading state */}
            {
                isLoading && <div className='loading'>Loading receipes! Please wait.</div>
            }
            {/* show loading state */}

            {/* Map Receipes */}
            <div className='items'>
                {
                    receipes && receipes.length > 0 ?
                        receipes?.map(receipe => <ReceipeItem receipe={receipe} key={receipe.id} />) :
                        null
                }
            </div>
            {/* Map Receipes */}
        </div>
    )
}

export default Home