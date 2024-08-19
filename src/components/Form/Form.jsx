import styles from './form.module.css'


export default function Form (){
    return(
        <form className={styles.form}>
        <label for="question" className={styles.question}>Question:
            <input type="text" name="question"></input>
        </label>
        
        <label for="answer" className={styles.answer}>Answer:
            <input type="text" name="answer"></input>
        </label>
        <button type="submit" className={styles.button}>Add</button>
        </form>

    )

}