import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/new-project">Novo Projeto</Link>
      </div>
      <h1>Home</h1>
    </>
  )
}