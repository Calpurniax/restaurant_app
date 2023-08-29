import "../../styles/components/reservation.scss";
const Reservation = () => {
    return (
        <section className="reservation">
            <h2 className="reservation__title">Haz tu reserva</h2>
            <div className="reservation__container">                
                <div className="reservation__dateBox">
                    <div className="reservation__dateBox__container">
                        <label htmlFor="date">Fecha</label>
                        <input className="reservation__dateBox__input" type="date" id="date" />
                    </div>
                    <div className="reservation__dateBox__container">
                        <label htmlFor="time">Hora</label>
                        <input className="reservation__dateBox__input" type="time" id="time" />
                    </div>
                    <div className="reservation__dateBox__container">  
                        <label htmlFor="people">Número de personas</label>                      
                        <input className="reservation__dateBox__input people" type="number" id="people" />                        
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Reservation