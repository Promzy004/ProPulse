import './banner.css';

function Banner(props){
    return(
        <>
            <div className="banner">
                <div className="left-banner">
                    <h2>FLAT 50% OFF</h2>
                    <p>
                        <span className="number">12</span>
                        Hours
                        <span className="number">20</span>
                        Mins
                    </p>
                    <button type="button">Explore now</button>
                </div>

                <div className="right-banner">
                    <img src={props.banner_image} alt=""  />
                </div>
            </div>
        </>
    )
}


export default Banner;