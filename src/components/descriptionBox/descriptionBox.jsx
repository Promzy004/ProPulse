import './descriptionBox.css';

const DescriptionBox = (props) => {
    return(
        <>
            <div className="descriptionbox">
                <div className="descriptionbox-navigator">
                    <div className="descriptionbox-nav-box">Description</div>
                    <div className="descriptionbox-nav-box fading"> Reviews (122)</div>
                </div>
                <div className="descriptionbox-description">
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    )
}

export default DescriptionBox;