import { FormEvent, useState, ChangeEvent } from 'react'
import { Form, Campo, Botao } from './style'

const FormVagas = () => {
  const [termo, setTermo] = useState('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Pesquisa:', termo)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={handleChange}
        type="search"
      />
      <Botao type="submit">Pesquisar</Botao>
    </Form>
  )
}

export default FormVagas
