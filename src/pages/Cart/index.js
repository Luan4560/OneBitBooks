import {Container} from './styles'
import {useDispatch, useSelector} from 'react-redux'
import {FiMinusCircle, FiPlusCircle, FiXCircle} from 'react-icons/fi'

import * as CartActions from '../../store/modules/cart/action';

export const Cart = () => {
  const cart = useSelector(state => 
    state.cart.map(book => ({
      ...book,
      subtotal: book.price * book.amount
    }))  
  )

  const total = useSelector(state =>
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0)
  );
  
  const dispatch = useDispatch();
  
  const increment =(book) => {
    dispatch(CartActions.updateAmount({
      id: book.id,
      amount: book.amount + 1,
    }));
  }
  
  const  decrement =(book) => {
    dispatch(CartActions.updateAmount({
      id: book.id,
      amount: book.amount - 1,
    }));
  }

  return (
    <Container>
      <div className="bag-container">
        <table>
          <thead>
            <tr>
              <th />
              <th>Book</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {cart.map(book => (
            <tr key={book.id}>
              <td>
                <img src={book.image} alt={book.title}/>
              </td>
              <td>
                <strong>{book.title}</strong>
                <span>R$ {book.price}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(book)}>
                    <FiMinusCircle size={20} color="#33bfcb"/>
                  </button>
                    <input type="number" readOnly value={book.amount}/>
                  <button type="button" onClick={() => increment(book)}>
                    <FiPlusCircle size={20} color="#33bcfb" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ {book.subtotal.toFixed(3).slice(0, -1)}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => dispatch(CartActions.removeFromCart(book.id))}>
                    <FiXCircle size={20} color="#33bfcb" />
                  </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>

        <footer>
          <button type="button">Order</button>

          <div>
            <span>Total</span>
            <strong>R$ {total.toFixed(3).slice(0,-1)}</strong>
          </div>
        </footer>
      </div>
    </Container>
  )
}