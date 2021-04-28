import styled from 'styled-components';

export const Container = styled.main`
  padding: 1.875rem;
  background: var(--white);
  border-radius: 0.3rem;

  table {
    width: 100%;
    
    thead {
      th {
        color: var(--gray-100);
        text-align: left;
        padding: 0.75rem;
    }
  }

    tbody {        
      td {
        padding: 0.75rem;
        border-bottom: 1px solid #eee;
      }
    }

    img {
      height: 6.25rem;
    }

    strong {
      color: var(--gray-200);
      display: block;
    }

    span {
      display: block;
      margin-top: 0.4rem;
      font-size: 1.125rem;
      font-weight: bold;
    }

    button {
      background: none;
      border: 0;
      padding: 0.375rem;
    }

    div {
      display: flex;
      align-items: center;

      input {
        border: 1px solid #ddd;
        border-radius: 0.3rem;
        color: var(--gray-100);
        padding: 0.375rem;
        width: 3.125rem;
      }
    }
  }

  footer {
    margin-top: 1.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: transparent;
      color: var(--blue-100);
      border: 2px solid var(--blue-100);
      border-radius: 0.3rem;
      padding: 0.75rem 1.25rem;
      font-weight: bold;
      transition: background 0.5s, color 0.5s;

      &:hover {
        color: var(--white);
        background: var(--blue-100);
      }
    }

    div {
      display: flex;
      align-items: baseline;

      span {
        color: var(--gray-100);
        font-weight: bold;
      }

      strong {
        font-size: 1.75rem;
        margin-left: 5px;
      }
    }
  }

`