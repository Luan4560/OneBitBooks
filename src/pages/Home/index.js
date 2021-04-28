import {useEffect, useState} from 'react'

import {FiShoppingBag} from 'react-icons/fi';
import {Container} from './styles';

import {api} from '../../services/api'

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <Container>
     <ul>
       {books.map(book => (
        <li key={book.id}>
          <img src={book.image} 
          alt={book.title}/>
          <strong>{book.title}</strong>
          <span>R$ {book.price}</span>

          <button type="button" onClick={() => {}}>
            <div>
              <FiShoppingBag size={16} color="#33bfcb" />
              0

            </div>
              <span className="btn-text">Add</span>
          </button>
        </li>
          ))}
     </ul>
    </Container>
  )
}