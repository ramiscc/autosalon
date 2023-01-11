import styles from './button.module.scss'
import {ButtonHTMLAttributes} from "react";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className={styles.btn}
            {...props}
        >
            {props.children}
        </button>
    )
}

export default Button