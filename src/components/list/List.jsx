import "../../styles/components/list.scss";
import restaurant1 from "../../imgs/bar.jpg";
import restaurant2 from "../../imgs/bol.jpg";
import restaurant3 from "../../imgs/restaurant.jpg";

import Card from "./Card";

const List =()=>{
    return(
        <section className="restaurants">
            <h2 className="restaurants__title">Restaurantes</h2>
                <ul className="restaurants__list">
                   <Card
                   img={restaurant1}
                   title={'Restaurante de Paca'}
                   text={'el mejor de todo Carabanchel'}/>
                   <Card
                   img={restaurant2}
                   title={'Restaurante de Clara'}
                   text={'el mejor de toda la Latina'}/>
                   <Card
                   img={restaurant3}
                   title={'Restaurante de Benita'}
                   text={'el mejor de todo el barrio de Salamanca'}/>
                </ul>
        </section>
)};
export default List 