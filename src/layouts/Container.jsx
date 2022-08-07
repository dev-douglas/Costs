import styles from './Container.module.css'

export default function Container(props) {
  return (
    <div className={`${styles.container} ${props.customClass ? styles.min_height : null}`}>
      {props.children}
    </div>
  )
}