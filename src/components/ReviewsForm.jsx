import { useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import {addReview} from "../api/fetch"
import "./ReviewsForm.css"

const URL = import.meta.env.VITE_BASE_API_URL

export default function ReviewsForm(){
    const navigate = useNavigate();
    const {id} = useParams()
    const [recipe, setRecipe] = useState({})
    
    useEffect(()=>{
        fetch(`${URL}/recipes/${id}`)
        .then((response)=>response.json())
        .then((data)=> setRecipe(data))
    },[id])

    
    const [review, setReview] = useState({
        name:"",
        comment:"",
        rating:"",
        dishId: id
    })
    
    function handleChange(e){
        setReview({
            ...review,
            [e.target.id]:e.target.value
        })
    }
    
    
    function handleSubmit(e){
        e.preventDefault();
        addReview(review)
        .then((response)=>{
            navigate(`/recipes/${id}`)
        })
        .catch((error)=> console.error(error))
    }
    
    return(
        <div className="form-page-wrapper">   
            <h2> Add a review for {recipe.dishName}</h2>
            <div className="form-container">
                <form className="review-form" onSubmit={handleSubmit}>
                    <label htmlFor="reviewerName">
                        Name
                        <input type="text" id="name" name="reviewerName" value={review.name} onChange={handleChange}/>
                    </label>
                    <label htmlFor="comment">
                        Comment
                        <input type="text" id="comment" name="comment" value={review.comment} onChange={handleChange} />
                    </label>
                    <label htmlFor="rating">
                        Rating: Must be number between 1-5
                        <input type="text" id="rating" name="rating" value={review.rating} onChange={handleChange} />
                    </label>
                    <button>Submit Review</button>
                </form>
            </div>
        </div>
    )
}