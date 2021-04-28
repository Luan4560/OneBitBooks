import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  height: 100vh;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.5rem;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      background: var(--white);
      border-radius: 0.3rem;
      padding: 1rem;
      width: 13.75rem;

      img {
        align-self: center;
        max-width: 11.25rem;
      }

      strong {
        font-size: 1rem;
        line-height: 1.25rem;
        color:var(--gray-100);
        margin-top: 0.5rem 0;
      }

      span {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 0.5rem 0;
        color: var(--gray-200);
      }

      button {
        background: transparent;
        color: var(--gray-100);
        border: 2px solid var(--blue-100);
        border-radius: 0.3rem;
        overflow: hidden;
        margin-top: auto;
        display: flex;
        align-items: center;
        transition: background 0.5s, color 0.5s;

        &:hover {
          border: 2px solid var(--blue-100);
          color: var(--white);
          background: var(--blue-100);
        }

        div {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          color: var(--gray-100);
          background: var(--white);
          border-right: 2px solid var(--blue-100);

          svg {
            margin-right: 5px;
          }
        }

        .btn-text {
          flex: 1;
          text-align: center;
          font-weight: bold;
        }
      }
    }
  }
`;