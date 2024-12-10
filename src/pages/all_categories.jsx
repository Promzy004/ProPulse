import { useContext } from "react"
import { categoryContext } from "../context/categoryContext"

function AllCategories(props) {

    const {all_products} = useContext(categoryContext)

    return(
        <>
            <div className="all-category"></div>
        </>
    )
}

export default AllCategories;