import style from './Header.module.css'
import cart from './icons/4105931-add-to-cart-buy-cart-sell-shop-shopping-cart_113919.png'
import menu from './icons/hamburger_menu_icon_149466.png'
const Header = () => {



  return (
    <>
      <div className={style.container}>
        <div className={style.header_logo}>
          <div className={style.header_logo_item}></div>
          <div className={style.header_logo_item}></div>
          <div className={style.header_logo_item}></div>
        </div>
        <div className={style.header} >
          <div className={style.burger_menu}>
            <img height='40px' src={menu} alt="menu" />
          </div>
          <div className={style.cart}>
            <img height='40px' src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </>

  )
}

export default Header

