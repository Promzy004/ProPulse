import cart from '../assets/images/icons8-cart-64.png';
import user from '../assets/images/icons8-user-48.png';
import home from '../assets/images/icons8-home-50.png'
import ham from '../assets/images/icons8-hamburger-menu-50.png'
import { nav } from '../assets/data';
import './header2.css'
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { all_products } from '../assets/all_product';
import { SearchContext } from '../../context/searchContext';

const Header = () => {

    const { query, setQuery, setSearchResults } = useContext(SearchContext);
    const navigate = useNavigate();

    const handleSearch = () => {
        const results = all_products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
        navigate("/search-results");
    };



    const { cartItems } = useContext(CartContext)

    const totalQuantity = cartItems.reduce((total, item) => {
        const quantity = Number(item.quantity);
        return total + quantity
    },0)

    const [navList,setNavList] = useState(false);


    return(
        <>
            <nav className='wrapper bg-light'>
                <div className='row w-100'>
                    <div className='left col-xl-3 col-lg-2 col-md-2 col-sm-5 col-5 '>
                        <button type='button' className='ham bg-light' onClick={() => setNavList(!navList)}>
                            <img src={ham} alt="" width={20}/>
                        </button>
                        <Link to="/" className='navbar-brand'>ProPulse</Link>
                    </div>
                    <div className='center col-xl-5 col-lg-7 col-md-6 col-sm-2 col-2'>
                        <form action="">
                            <div className="input-group d-none d-md-flex">
                                <input type="search" onChange={(e) => setQuery(e.target.value)} value={query}  placeholder="Search products"/>
                                <button onClick={handleSearch} className="btn btn-success text-light">Search</button>
                            </div>
                        </form>
                            <ul className={navList ? 'navlink-container' : 'remove-links'}>
                                <Link to="/" className='nav-link' onClick={() => setNavList(!navList)}>
                                    <img src={home} alt="" width={20}/>
                                    <p>Home</p>
                                </Link>
                                
                                <hr />
                                <p>Our Categories</p>
                                {nav.map((items,index) => (
                                    <Link to={items.path} onClick={() => setNavList(!navList)} className='nav-link'>
                                        <img src={items.image} alt="" width={20}/>
                                        <p>
                                            {items.name}
                                        </p>
                                    </Link>
                                ))}
                            </ul>
                    </div>
                    <div className='right col-xl-4 col-lg-3 col-md-4 col-sm-5 col-5 '>
                        <div className='right-container'>
                            <Link to='/signUp' className='user'>
                                <img src={user} alt="" width={25}/>
                                <p className='d-xl-inline-block d-none d-sm-flex'>Hello, Sign in</p>
                            </Link>
                            <Link   to='/cart' className='cart'>
                                <img src={cart} alt="" width={35}/>
                                <span className='cart-counter'>{totalQuantity}</span>
                                <p className='d-none d-md-flex'>Cart</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Header;