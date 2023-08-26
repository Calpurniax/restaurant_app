import "../../styles/components/reservation.scss";
const Reservation =()=>{
    return(
        <section className="reservation">
            <h2 className="reservation__title">Haz tu reserva</h2>
            <p className="reservation__text">Por favor, elige una fecha, una hora y el número de personas</p>
            
            <div className="reservation__dateBox">
                <div className="reservation__dateBox__date">
                    <label htmlFor="date">Fecha</label>
                    <input type="date" id="date" />
                </div>
                <div className="reservation__dateBox__date">
                    <label htmlFor="time">Hora</label>
                    <input type="time" id="time" />
                </div>
            </div>
            <div>
                <label htmlFor="people">¿Cuántos?</label>
                <input type="number" id="people" />
            </div>
        </section>
    )
};
export default Reservation