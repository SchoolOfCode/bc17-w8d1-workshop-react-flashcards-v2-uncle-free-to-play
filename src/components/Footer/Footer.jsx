import styles from './Footer.module.css'
import reactLogo from '../../assets/react.svg'

export default function Footer (){
    return(
        <footer>
            <p>Built with React</p>
            <img src={reactLogo} alt="React logo" />
        </footer>
    )
}