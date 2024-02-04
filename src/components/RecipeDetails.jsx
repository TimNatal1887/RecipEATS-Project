import { useParams } from "react-router-dom"

export default function RecipeDetails(){
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            Hi
        </div>
    )
}