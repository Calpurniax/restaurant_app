import "../../styles/components/form.scss";

const Form =()=>{
    return(
        <section className="form__container">
            <h2 className="form__title">Regístrate</h2>
            <form className="form__form">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" placeholder="Paquita Salas"/>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="paquita@salas.com"/>
                <label htmlFor="phone">Teléfono</label>
                <input type="text" id="phone" placeholder="555-55-55-55"/>
                <input type="submit" value="enviar" />
            </form>
        </section>
    )
}
export default Form