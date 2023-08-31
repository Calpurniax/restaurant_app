import "../styles/components/header.scss"
const Header =()=>{
    return(
        <header className="header">
            <h1 className="header__title">WELKHOMETech</h1>            
                <div className="header__searcher">
                <i className="fa-solid fa-magnifying-glass header__searcher__icon"></i>
                <input className="header__searcher__input" type="text" name="search" id="search" />
                </div>
                <i className="fa-solid fa-language header__language"></i>
           
        </header>
    )};
export default Header 