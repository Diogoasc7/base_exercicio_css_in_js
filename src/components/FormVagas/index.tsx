import { FormEvent } from 'react'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const termo = (
      e.currentTarget.elements.namedItem('busca') as HTMLInputElement
    ).value
    aoPesquisar(termo)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="busca" placeholder="Pesquisar vaga..." />
      <button type="submit">Buscar</button>
    </form>
  )
}

export default FormVagas
