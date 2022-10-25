import IgniteLogo from '../../assets/ignite-logo.svg'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt='ignite-logo' />
    </header>
  )
}