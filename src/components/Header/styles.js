import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--blue-100);
    padding: 0.5rem 5rem;

    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: opacity 0.5s;
      color: var(--white);

      &:hover {
        opacity: 0.5;
      }
    }

    .logo-text {
      margin-left: 0.5rem;
      color: var(--white);
      font-size: 1.2rem;
      font-weight: bold;
    }
  
    .header-cart {
      text-decoration: none;
      transition: opacity 0.5s;

      &:hover {
        opacity: 0.5;
      }
    }
    
    div {
      display: flex;
      align-items: center;

      strong, span {
        transition: opacity 0.5s;
        color: var(--white);
      }

      svg {
        margin-left: 0.5rem;
      }

  }

`