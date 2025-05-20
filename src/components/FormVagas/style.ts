import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`

export const Campo = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid var(--cor-primaria);
  border-radius: 8px;
`

export const Botao = styled.button`
  padding: 8px 16px;
  background-color: var(--cor-primaria);
  color: var(--cor-secundaria);
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`
