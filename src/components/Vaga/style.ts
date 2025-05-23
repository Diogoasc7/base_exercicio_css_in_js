import styled from 'styled-components'

// <li>
export const VagaWrapper = styled.li`
  border: 1px solid var(--cor-primaria);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);

    a {
      border-color: var(--cor-principal);
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
    }
  }
`

// <h3>
export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

// <a> com tipagem correta para React + styled-components
export const VagaLink = styled.a.attrs(() => ({}))<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>`
  border-color: var(--cor-principal);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
