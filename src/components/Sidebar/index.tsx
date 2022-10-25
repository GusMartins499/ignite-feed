import { Avatar } from '../Avatar'
import { PencilLine } from 'phosphor-react'
import styles from './sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=100' alt='background-user' />
      <div className={styles.profile}>
        <Avatar src='https://github.com/gusmartins499.png' />
        <strong>Gustavo Martins</strong>
        <span>Web Developer</span>

        <footer>
          <a href='#'>
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  )
}