import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layouts/Loading'
import Container from '../layouts/Container'
import Message from '../layouts/Message'
import ProjectForm from '../components/projects/ProjectForm'

export default function Project() {

  const { id } = useParams()
  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  useEffect( () => {

    setTimeout( () => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then( resp => resp.json())
      .then( (data) => {
        setProject(data)
      })
      .catch( err => console.log())
    }, 300)

  }, [id])

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function editProject(project) {

    if( project.budget < project.cost ) {
      setMessage(`O orçamento não pode ser menor que o custo do projeto.`)
      setType(`error`)
      return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    .then( resp => resp.json())
    .then( (data) => {

      setProject(data)
      setShowProjectForm(!showProjectForm)
      setMessage(`Projeto atualizado!`)
      setType(`success`)

    })
    .catch( err => console.log(err))

  }

  return(
    <>
      {
        ( project.name ?
          <div className={styles.project_details} >
            <Container customClass="column" customClass2="min_height">
              {message && <Message type={type} msg={message}/>}
              <div className={styles.details_container}>
                <h1>Projeto: { project.name }</h1>
                <button className={styles.btn} onClick={toggleProjectForm}>
                  { !showProjectForm ? 'Editar Projeto' : 'Fechar' }
                </button>
                {
                  !showProjectForm ? (
                    <div className={styles.project_info}>
                      <p>
                        <span>Categoria: </span>{project.category.name}
                      </p>
                      <p>
                        <span>Total de Orçamento: </span> R${project.budget}
                      </p>
                      <p>
                        <span>Total Utilizado: </span>{project.cost}
                      </p>
                    </div>
                  ) : (
                    <div className={styles.project_info}>
                      <ProjectForm 
                        handleSubmit={editProject}
                        btnText="Concluir edição"
                        projectData={project}
                      />
                    </div>
                  )
                }
              </div>
            </Container>
          </div>
          :
          <Loading /> )
      }
    </>
  )
}