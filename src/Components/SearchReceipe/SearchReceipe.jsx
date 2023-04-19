import { useEffect } from "react";
import { useState } from "react";

const SearchReceipe = () =>{
    const[searchReceipe, setSearchReceipe] = useState([]);

    useEffect(()=>{
        fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=3997f9c843b649139c15926663d1eb84")
        .then(response=>response.json())
        .then(response=>{
            setSearchReceipe(response.results)
            console.log(searchReceipe)
        })
    },[])
    return(
        <>
            <div>
                <input type="text" value={searchReceipe} onChange={(e)=>setSearchReceipe(e.target.value)} />
                {/* {
                    searchReceipe.filter((el)=>{
                        if()
                    })
                } */}
            </div>
        </>
    )
}
export default SearchReceipe;