import styles from './form.module.css'


export default function Form (){
    return(
        <form className={styles.form}>
        <label for="question">Question:
            <input type="text" id='question' name="question"></input>
        </label>
        
        <label for="answer" >Answer:
            <input type="text" id='answer' name="answer"></input>
        </label>
        <button type="submit" className={styles.button}>Add</button>
        </form>

    )

}