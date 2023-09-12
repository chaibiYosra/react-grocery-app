import { useContext } from 'react';

import classes from './Article.module.css';
import CartContext from '../../../store/cart-context';
import ArticleForm from './ArticleForm'
import Card from '../../UI/Card';
const Article = (props) => {
  const cartCtx = useContext(CartContext);
  const imageName = props.imageName;
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.article}>
      <Card>
        <div>
          <img
            src={`/articles/${imageName}`}
            alt={props.name}
            className={classes.image}
          />
        </div>
        <div>
          <div className={classes.price}>{price}</div><h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
        </div>
        <div>
          <ArticleForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </Card>
    </li>
  );
};

export default Article;