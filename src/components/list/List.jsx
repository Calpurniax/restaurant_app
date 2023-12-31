import "../../styles/components/list.scss";
import restaurant1 from "../../imgs/bar.jpg";
import restaurant2 from "../../imgs/bowl.jpg";
import restaurant3 from "../../imgs/restaurant.jpg";
import Card from "./Card";

const List =()=>{
    return(
        <section className="restaurants">
            <div className="restaurants__container">
                <h2 className="restaurants__title">Recomendados para tí</h2>
                    <ul className="restaurants__list">
                       <Card
                       img={restaurant1}
                       title={'El rincón de Paca'}
                       text={'Deliciosas hamburguesas con opción vegana'}/>
                       <Card
                       img={restaurant2}
                       title={'Restaurante de Clara'}
                       text={'Los mejores poke de toda la Latina'}/>
                       <Card
                       img={restaurant3}
                       title={'Restaurante de Benita'}
                       text={'El mejor de todo el barrio de Salamanca'}/>
                    </ul>
                    <div className="restaurants__arrowContainer">
                    <i className="fa-solid fa-caret-left restaurants__arrowContainer__arrow"></i>
                    <i className="fa-solid fa-caret-right restaurants__arrowContainer__arrow"></i>
                    </div>
            </div>
        </section>
)};
export default List 