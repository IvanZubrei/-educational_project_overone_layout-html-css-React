

import './header.css'



const Header = () => {
  return (
   
    <header className="header">
    <div className="burger-menu">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-btn" for="menu-toggle">
        <span></span>
      </label>
      <ul class="menubox">
        <li><a className="menu-item" href="#">Home</a></li>
        <li><a className="menu-item" href="#">Latest</a></li>
        <li><a className="menu-item" href="#">About</a></li>
      </ul>
    </div>
    <div className="container">
      <nav>
        <div className="nav">
          <a className="nav__link" href="#" target="_blank"><img class="nav_link_hover" src= "./images/Group.jpg" alt="images Group"/> 
              </a>
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#">Home</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">Latest</a>
            </li>
            <li className="nav__item nav__item_about">
              <a className="nav__link" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  
  )
}

export default Header