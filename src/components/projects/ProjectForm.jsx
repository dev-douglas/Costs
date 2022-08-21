import Input from '../form/input'
import Select from '../form/select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

export default function ProjectForm({btnText}) {
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
      />
      <SubmitButton text={btnText} />    
    </form>
  )
}