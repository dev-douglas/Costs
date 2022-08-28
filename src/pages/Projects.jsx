import { useLocation } from 'react-router-dom'

import Message from "../layouts/Message"

import styles from './Project.module.css'
import Container from '../layouts/Container'
import LinkButton from '../layouts/LinkButton'

export default function Projects() {

  const location = useLocation()
  console.log(location)
  let message = ''

  if(location.state) {
    message = location.state.message
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/new-project' text='Criar Projeto'/>
      </div>
      {message && <Message type='success' msg={message}/>}
      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    </div>
  )
}