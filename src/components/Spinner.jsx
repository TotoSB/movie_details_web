import { FaSpinner } from 'react-icons/fa';
import styles from './spinner.module.css'

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <FaSpinner size={50} className={styles.spinner_a} />
        </div>
    )
}
