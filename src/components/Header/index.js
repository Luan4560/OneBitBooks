import { useSelector } from 'react-redux';
import {Container} from './styles'
import {Link} from 'react-router-dom';

import {FiShoppingBag} from 'react-icons/fi'
import {GiBlackBook as Logo } from 'react-icons/gi'

export const Header = () => {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Container>
     <Link to="/" className="logo">
       <Logo size={32} color="#fff"/>
       <span className="logo-text">OneBitBooks</span>
     </Link>

     <Link to="/cart" className="header-cart">
        <div>
          <strong> Bag </strong> 
           <span>
            <strong> {cartSize} </strong> Books 
          </span>
          <FiShoppingBag size={36} color="#fff"/>
        </div>
     </Link>  
    </Container>
  )
}