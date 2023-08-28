import "../styles/components/header.scss"
const Header =()=>{
    return(
        <header className="header">
            <h1 className="header_title">WELKHOMETech</h1>
            <div className="header__searcher">
            <i className="fa-solid fa-magnifying-glass header__searcher__icon"></i>
            <input type="text" name="search" id="search" />
            </div>
        </header>
    )};
export default Header 