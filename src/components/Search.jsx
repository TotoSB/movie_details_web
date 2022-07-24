import styles from './Search.module.css'
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';


export function Search() {
    const navigate = useNavigate();
    const query = useQuery();
    const search = query.get("search")



    const handleSubmit = (interaccion) => {
        interaccion.preventDefault()
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                type="text" 
                className={styles.searchInput} 
                value={search} 
                onChange={(interaccion) => {
                    const value = interaccion.target.value;
                    navigate('/?search=' + value)
                }} />

            </div>
        </form>
    )
}
