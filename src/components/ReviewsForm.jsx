import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"


const URL = import.meta.env.VITE_BASE_API_URL
const navigate = useNavigate()

export default function ReviewsForm(){
    const {id} = useParams()

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

    function addReview(){
        const options = {
            method: "POST",
            body: JSON.stringify(review),
            headers: { "Content-Type": "application/json" },
        };
        return fetch(`${URL}/reviews`, options).then((response) => {
            return response.json();
        });
    }
    

    function handleSubmit(e){
        e.preventDefault();
        addReview()
        .then((response)=>{
            navigate(`${URL}/recipes/${id}`)
        })
        .catch((error)=> console.error(error))
    }
    return(
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
                    Rating: Must be whole number between 1-5
                    <input type="text" id="rating" name="rating" value={review.rating} onChange={handleChange} />
                </label>
            </form>
        </div>
    )
}