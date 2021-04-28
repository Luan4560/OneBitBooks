import {useEffect, useState} from 'react'

import {FiShoppingBag} from 'react-icons/fi';
import {Container} from './styles';

import {api} from '../../services/api'
import * as CartActions from '../../store/modules/cart/action';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const amount = useSelector(state => state.cart.reduce((sumAmount, book) => {
    sumAmount[book.id] = book.amount

    return sumAmount;
  }, {})
  )

  const dispatch = useDispatch();

  useEffect(() => {
    const loadBooks = async() => {
      try{
        setIsLoading(true)
        const response = await api.get('books');
        setBooks(response.data)
      }catch(err) {
        console.log(err, 'Failed to load books')
      }finally {setIsLoading(false)}
    }
    loadBooks()
  }, [])

  const handleAddProduct = (book) => {
    dispatch(CartActions.addToCart(book));
  }

  return (
    <Container>
      {!isLoading && (
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <img src={book.image} 
            alt={book.title}/>
            <strong>{book.title}</strong>
            <span>R$ {book.price}</span>

            <button type="button" onClick={()=>handleAddProduct(book)}>
              <div>
                <FiShoppingBag size={16} color="#33bfcb" />
                {amount[book.id] || 0}
              </div>
                <span className="btn-text">Add</span>
            </button>
          </li>
            ))}
      </ul>
      )}
    </Container>
  )
}