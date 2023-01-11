import styles from './container.module.scss'
import {FC, ReactNode} from "react";

interface IContainerProps{
    children: ReactNode
}

const Container: FC<IContainerProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container