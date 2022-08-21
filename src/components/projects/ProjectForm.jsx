import { useEffect, useState } from 'react'
import Input from '../form/input'
import Select from '../form/select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

export default function ProjectForm({btnText}) {

  const [categories, setCategories] = useState([])
    useEffect(() => {
      fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <form className={styles.form}>
      <Input 
        type='text'
        text='Nome do Projeto'
        name='name'
        placeholder='Insira o nome do projeto'
      />
      <Input 
        type='number'
        text='Orçamento do projeto'
        name='budget'
        placeholder='Insira o orçamento total'
      />     
      <Select 
        name="category_id"
        text="Selecione uma categoria"
        options={categories}
      />
      <SubmitButton text={btnText} />    
    </form>
  )
}