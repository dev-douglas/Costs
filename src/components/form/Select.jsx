import styles from './Select.module.css'

export default function Select({ text, name, options, handleOnChange, value}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>
          Selecione uma opção
        </option>
        {
          options.map( (value, index) => (
            <option 
              value={value.id}
              key={index}
            >{value.name}</option>
          ))
        }
      </select>
    </div>
  )
}