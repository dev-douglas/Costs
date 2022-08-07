import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../assets/costs_logo.png'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return (
    <nav className={styles.navbar}>
      <Container customClass='min-height'>
      <Link to="/">
      <img src={logo} alt="Logo"/>
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/projects">Projetos</Link>
        </li>
        <li className={styles.item}>
          <Link to="/contact">Contato</Link>
        </li>
        <li className={styles.item}>
          <Link to="/company">Empresa</Link>
        </li>
        {/* <li className={styles.item}>
          <Link to="/new-project">Novo Projeto</Link>
        </li> */}
      </ul>
      </Container>
    </nav>
  )
}