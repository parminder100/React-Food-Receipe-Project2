import "../ReceipeCard/ReceipeCard.css";

const ReceipeCard = (props) =>{
    return(
        <>
            <div className="receipe-card-container">
                <img className="receipe-image" src={props.image}  alt="receipe"/>
                <p className="receipe-name">{props.title}</p>
            </div>
        </>
    )
}
export default ReceipeCard;