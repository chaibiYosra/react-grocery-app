import grocery from '../../assets/grocery.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
  return <>
  <header className={classes.header}>
    <h2>Super Grocery</h2>
    <HeaderCartButton onClick={props.onShowCart}/>
  </header>
  <div className={classes['main-image']}>
    <img src={grocery} alt="grocery" />
  </div>
  </>
}

export default Header;