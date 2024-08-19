import styles from './Header.module.css'
import reactLogo from '../../assets/react.svg'

export default function Header () {

return (
<header className ={styles.headerWrapper}>
    <img src={reactLogo} alt="React logo" className={styles.logo} />
    <h1>React Flashcards</h1>   
    <p>🧠Expand Your React Knowledge, One Flashcard at a Time!🐌</p>
</header>
)
}