
const Card =({title,text})=>{
    return(
        <li className="card__container">
            <article className="card__article">
                <img className="card__img" src="" alt="" />
                <div className="card__textBox">
                    <h3 className="card__textBox_title">{title}</h3>
                    <p className="card__textBox_text">{text}</p>
                </div>
            </article>
        </li>
    )
}

export default Card