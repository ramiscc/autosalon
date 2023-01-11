import {createPortal} from "react-dom";
import {FC, ReactNode} from "react";
import styles from './modal.module.scss'

interface IModalProps {
    onClose: () => void,
    children: ReactNode
}

const Modal: FC<IModalProps> = ({children, onClose}) => {


    return createPortal(
        <div className={styles.modal} onMouseDown={onClose}>
            <div className={styles.content} onMouseDown={e => e.stopPropagation()}>
                <div onClick={onClose} className={styles.close}></div>
                {children}
            </div>
        </div>,
        document.getElementById('modal') as HTMLElement
    )
}

export default Modal