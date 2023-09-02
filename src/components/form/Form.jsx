import "../../styles/components/form.scss";
import Button from "./Button";

const Form =()=>{
    return(
        <section className="registration">
            <h2 className="registration__title">Regístrate</h2>
            <form className="registration__form">
                <label htmlFor="name">Nombre</label>
                <input className="registration__form__input"type="text" id="name" placeholder="Grace Kelly"/>
                <label htmlFor="email">E-mail</label>
                <input className="registration__form__input" type="email" id="email" placeholder="grace@kelly.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                <label htmlFor="phone">Teléfono</label>
                <input className="registration__form__input" type="text" id="phone" placeholder="555-55-55-55" pattern="[0-9]{9,20}"/>
               <Button/>
            </form>
        </section>
    )
}
export default Form