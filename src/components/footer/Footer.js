import './Footer.css'

const Footer = () => {
  return (
    <footer>
    <div class="container">
      <div class="footer-border-bottom">
        <div class="logo">
          <a class="nav_link_hover link_w" href="#" target="_blank">NOICELAND</a>
          <p class="logo_p">© 2018 Noiceland™, all rights reserved</p>
        </div>
      </div>
      <div class="footer_block">
        <div class="footer_block_nav">
          <div>
            <p class="logo_p">Categories</p>
          </div>
          <ul class="footer_nav__list">
            <li class="footer_nav__item">
              <a class="footer_nav__link" href="#">Animation</a>
            </li>
            <li class="footer_nav__item">
              <a class="footer_nav__link" href="#">Architecture</a>
            </li>
            <li class="footer_nav__item">
              <a class="footer_nav__link" href="#">Graphic Design</a>
            </li>
            <li class="footer_nav__item">
              <a class="footer_nav__link" href="#">Illustration</a>
            </li>
            <li class="footer_nav__item">
              <a class="footer_nav__link" href="#">Interactive Design</a>
            </li>
            <li class="footer_nav__item">
              <a class="footer_nav__link" href="#">Miscellaneous</a>
            </li>
            <li class="footer_nav__item">
              <a class="footer_nav__link" href="#">Photography</a>
            </li>
            <li class="footer_nav__item">
              <a class="footer_nav__link" href="#">Product Design</a>
            </li>
          </ul>
        </div>
        <div class="footer_block_form">
          <div>
            <p class="logo_p">Subscribe to newsletter</p>
          </div>
          <div class="form_send">
            <form>
              <input id="email" type="email" placeholder="EMAIL ADDRESS"/>
             
            </form>
            <form>
              <input id="send" type="submit" value="SEND"/>
            </form>
          </div>
        </div>
        <div class="footer_flex_nav">
          <div class="nav_footer_block_nav">
            <div>
              <p class="logo_p form_logo_p">Information</p>
            </div>
            <ul class="nav_footer_nav__list">
              <li class="nav_footer_nav__item">
                <a class="footer_nav__link" href="#">about</a>
              </li>
              <li class="nav_footer_nav__item">
                <a class="footer_nav__link" href="#">contact</a>
              </li>
              <li class="nav_footer_nav__item">
                <a class="footer_nav__link" href="#">terms</a>
              </li>
            </ul>
          </div>
          <div class="nav_footer_block_nav">
            <div>
              <p class="logo_p form_logo_p">follow us</p>
            </div>
            <ul class="nav_footer_nav__list">
              <li class="nav_footer_nav__item">
                <a class="footer_nav__link" href="#">instagram</a>
              </li>
              <li class="nav_footer_nav__item">
                <a class="footer_nav__link" href="#">facebook</a>
              </li>
              <li class="nav_footer_nav__item">
                <a class="footer_nav__link" href="#">twitter</a>
              </li>
            </ul>
          </div>
          <div class="nav_footer_block_nav">
            <div>
              <p class="logo_p form_logo_p">Template</p>
            </div>
            <ul class="nav_footer_nav__list">
              <li class="nav_footer_nav__item">
                <a class="footer_nav__link" href="#">Image License Info</a>
              </li>
              <li class="nav_footer_nav__item">
                <a class="footer_nav__link" href="#">Powered by Webflow</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
    
  
  )
}

export default Footer

