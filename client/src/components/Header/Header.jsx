import style from './Header.module.css'

const Header = () => {



  return (
    <>
    <div className={style.header} >
      <div className={style.burger_menu}>
        иконка меню
        <img src="./icons/hamburger_menu_icon_149466.png" alt="" />
      </div>
    <div className={style.header_div}>
      иконка корзины
      <img src="" alt="" />
    </div>
    </div>
    
    </>
    
  )
}

export default Header

