import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import NewCollections from "../components/newCollections/newCollections";
import NewsLetter from "../components/newsLetter/newsLetter";
import Offers from "../components/offers/offers";
import Popular from "../components/popular/popular";

function Home() {
    return(
        <>
            <Hero/>
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
            <Footer/>
        </>
    )
}

export default Home;