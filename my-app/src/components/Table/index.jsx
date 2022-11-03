import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

const Table = ({ showOnlyAdults, data, setData }) => {
    const columns = [
        '#',
        'Nome',
        'Idade',
        'Profissão',
        'E-mail',
        'Telefone',
        'Data de Preenchimento',
        'Ação'
    ]
    const [tableRows, setTableRows] = useState(data);

    useEffect (() => {
        if (showOnlyAdults) {
            const adults = data.filter((person) => { return person.age >= 18 })
            setTableRows(adults)
        } else {
            setTableRows(data)
        }
    }, [data, showOnlyAdults])


    const handleSearch = (event) => {
        const searchName = event.target.value;
        if (showOnlyAdults) {
            const adults = data.filter((person) => { return person.age >= 18 })
            setTableRows(adults.filter((person) => { return person.name.toLowerCase().includes(searchName.toLowerCase()) }))
        } else {
            setTableRows(data.filter((person) => { return person.name.toLowerCase().includes(searchName.toLowerCase()) }))
        }
    };
            
    return (
        <>
            <div className={styles.tableTitle}>
                <h3> Individuos Cadastrados </h3>
                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder='Nome Completo'
                        onChange={(event) => handleSearch(event)}
                    />
                </div>
            </div>
            <table>
                <thead className={styles.test}>
                    <tr>
                        {columns.map((column) => (
                            <th key={`head-${column}`}> {column} </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableRows.map((row) => (
                        <tr 
                            className={styles.tableRow}
                            key={`tr-${row.id}`}
                        >
                            <td> {row.id}    </td>
                            <td> {row.name}  </td>
                            <td> {row.age}   </td>
                            <td> {row.job}   </td>
                            <td> {row.email} </td>
                            <td> {row.phone} </td>
                            <td> {row.date } </td>
                            <td 
                                className={styles.tableAction}    
                                onClick={() => setData(data.filter((person) => person.id !== row.id))}
                            >
                                <i className="fas fa-trash"></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Table;