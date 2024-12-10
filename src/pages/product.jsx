import { useParams } from "react-router-dom";
import Breadcrumb from "../components/breadCrumb/breadCrum";
import ProductDisplay from "../components/productDisplay/productDisplay"
import { all_products } from "../components/assets/all_product";
import DescriptionBox from "../components/descriptionBox/descriptionBox";
import RelatedProducts from "../components/relatedProducts/relatedProducts";
import Footer from "../components/footer/footer";

const Product = () => {

    const { id } = useParams();
    const product = all_products.find((p) => p.id === Number(id))
    return(
        <>
            <Breadcrumb item={product} />
            <ProductDisplay />
            <DescriptionBox desc={product.desc} />
            <RelatedProducts currentID={product.id} category={product.category} />
            <Footer/>
        </>
    )
}

export default Product;