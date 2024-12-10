import {StarFill, StarHalf, Star} from 'react-bootstrap-icons';
import './rating.css'

const Rating = ({rating_value, color = "red"}) => {

    const counter = 5;
    const stars = [];
    const value = parseInt(rating_value);
    const remaining = counter - (value + 1)
    // const half = (rating_value + remaining) - counter 
    const half = rating_value - value

    for (let i=0; i < value; i++){
        stars.push(<StarFill className='icon' style={{color}}/>)
    }

    if (half > 0) {
        stars.push(<StarHalf className='icon' style={{color}}/>)
    }

    for (let i=0; i < remaining; i++) {
        stars.push(<Star className='icon' style={{color}}/>)
    }

    


    return(
        <>
            {stars}
        </>
    )
}

export default Rating;