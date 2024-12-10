import './hero.css'
import wave_icon from '../assets/images/icons8-so-so-48.png';
import right_arrow from '../assets/images/icons8-right-arrow-48.png';
import hero_image from '../assets/images/vecteezy_3d-shopping-icon-illustration_12628654.png'

function Hero() {
    return(
        <>
            <div className="hero">
                <div className="hero-left">
                    <h3>NEW ARRIVALS ONLY</h3>
                    <div>
                        <div className="wave-icon">
                            <div>
                                <p>New</p>
                                <img src={wave_icon} alt=""/>
                            </div>
                            <p>collections</p>
                            <p>for everyone</p>
                        </div>
                    </div>
                    <div className="hero-btn">
                        <div>Latest Collection</div>
                        <img src={right_arrow} alt="" />
                    </div>
                </div>
                <div className="hero-right">
                    <img src={hero_image} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Hero;