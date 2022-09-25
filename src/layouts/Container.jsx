import styles from './Container.module.css'

export default function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]} ${styles[props.customClass2]}`}>
      {props.children}
    </div>
  )
}