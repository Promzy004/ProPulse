import arrow from '../assets/images/breadcrum.png'
import './breadCrum.css'

const BreadCrum = (props) => {
    const  {item}  = props;

    return (
        <div className="breadcrum">
            HOME <img src={arrow} alt="" /> {item.category} <img src={arrow} alt="" />{item.name}
        </div>
    )
}

export default BreadCrum;