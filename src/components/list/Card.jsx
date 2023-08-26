import "../../styles/components/card.scss";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Card =({title,text, img})=>{
    return(
        <li className="card__container">
            <article className="card__article">
                <img className="card__img" src={img} alt= ""/>
                <div className="card__textBox">
                    <h3 className="card__textBox_title">{title}</h3>
                    <p className="card__textBox_text">{text}</p>
                </div>
            </article>
        </li>
    )
}

Card.propTypes={
    title:PropTypes.string,
    text:PropTypes.string
};

export default Card