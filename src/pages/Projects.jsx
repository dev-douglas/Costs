import { useLocation } from 'react-router-dom'

import Message from "../layouts/Message"

import styles from './Project.module.css'
import Container from '../layouts/Container'
import LinkButton from '../layouts/LinkButton'
import ProjectCard from '../components/projects/ProjectCard'
import Loading from '../layouts/Loading'
import { useState, useEffect } from 'react'

export default function Projects() {

  const [projects, setProjects] = useState([])
  const [removeLoading, setLoading] = useState(false)

  const location = useLocation()
  console.log(location)
  let message = ''

  if(location.state) {
    message = location.state.message
  }

  useEffect( () => {
    setTimeout( () => {
      fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }).then( resp => resp.json())
    .then( data => {
      console.log(data)
      setProjects(data)
      setLoading(true)
    })
    .catch( (err) => console.log(err))
    }, 100)
  }, [])

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/new-project' text='Criar Projeto'/>
      </div>
      {message && <Message type='success' msg={message}/>}
      <Container customClass="start">
        {
          projects.length > 0 && projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
            />
          ))
        }
        {
          !removeLoading && <Loading />
        }
        {
          removeLoading && projects.length === 0 &&
          <p>Não há projetos cadastrados</p>
        }
      </Container>
    </div>
  )
}