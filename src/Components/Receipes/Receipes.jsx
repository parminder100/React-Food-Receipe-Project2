import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import ReceipeCard from '../ReceipeCard/ReceipeCard';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../Receipes/Receipes.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from '../Skeleton/Loader';


const Receipes =  () =>{
    const[results, setResults] = useState([]);
    const[searchReceipe, setSearchReceipe] = useState("");
    const[isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://api.spoonacular.com/recipes/random?apiKey=3997f9c843b649139c15926663d1eb84&number=9&tags=vegetarian")
            .then(response=>response.json())
            .then(response=>{
                localStorage.setItem("veggie", JSON.stringify(response.recipes))
                setResults(response.recipes)
                console.log(response.recipes)
                setIsLoading(false);
            })
        }, 500)
    },[])

    return(
        <>
            <div className='container mt-4'>
            <div className='text-center'>
                <label className='input-label'>Search Receipe:</label>
                <input className='inpute-receipe' type="text" placeholder='Enter Receipe Name' value={searchReceipe} onChange={(e)=>setSearchReceipe(e.target.value)} />
            </div>
            <OwlCarousel className='owl-theme' margin={10} dots={false}>
                {
                    isLoading ?
                    <div>
                        <Loader />
                    </div>
                    :
                        results.filter((el)=>{
                            if(searchReceipe === ""){
                                return el;
                            }
                            else if(el.title.toLowerCase().includes(searchReceipe.toLowerCase())){
                                return el;
                            }
                        }).map((e)=>(
                                <ReceipeCard key={e.id}
                                image = {e.image}
                                title = {e.title}
                                />
                        ))
                }
                
            </OwlCarousel>
            </div>
        </>
    )
}
export default Receipes;