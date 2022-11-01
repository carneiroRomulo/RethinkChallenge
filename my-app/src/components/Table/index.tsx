import React, { useState } from 'react';
import styles from './index.module.css';

const pessoas = [
    {"name": "Fabiana Araújo",        "age": 33, "job": "Cientista", "date":"10/10/2010", "phone":"31999993045", "email":"email@email.com"   },
    {"name": "Gabriel Gomes",         "age": 25, "job": "Cientista", "date":"10/10/2010", "phone":"31999993045", "email":"email@email.com"   },
    {"name": "Fernando Henrique",     "age": 17, "job": "Cientista", "date":"10/10/2010", "phone":"31999993045", "email":"email@email.com"   },
    {"name": "Ana  Luiza",            "age": 2 , "job": "Cientista", "date":"10/10/2010", "phone":"31999993045", "email":"email@email.com"   },
    {"name": "Geraldo do Nascimento", "age": 93, "job": "Cientista", "date":"10/10/2010", "phone":"31999993045", "email":"email@email.com"   },
    {"name": "Miguel Souza",          "age": 70, "job": "Cientista", "date":"10/10/2010", "phone":"31999993045", "email":"email@email.com"   },
    {"name": "Antonio Miguel",        "age": 69, "job": "Cientista", "date":"10/10/2010", "phone":"31999993045", "email":"email@email.com"   }
]

const Table = () => {
    const columns = [
        'Nome',
        'Idade',
        'Profissão',
        'E-mail',
        'Telefone',
        'Data de Preenchimento'
    ]
    const [data, setData] = useState(pessoas);
    const [inputedData, setInputedData] = useState('');
    const [search, setSearch] = useState(false);

    const handleInputedData = (event: any) => {
        setInputedData(event.target.value);
        if (event.target.value === '') {
            setSearch(false);
        }
    }

    const handleSearch = () => {
        const filteredData = pessoas.filter((pessoa) => {
            return pessoa.name === inputedData;
        })
        if (filteredData.length > 0) {
            setData(filteredData);
        } else {
            alert('Nenhuma pessoa com esse nome foi cadastrada')
            setData(pessoas);
        }
    };
            
    return (
        <table className={styles.container}>
            <thead>
                Individuos Cadastrados
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder='Nome Completo'
                        onBlur={(event) => handleInputedData(event)}
                    />
                    <button className={styles.searchButton} onClick={() => handleSearch()}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </thead>
            <tr>
                {columns.map((column) => (
                    <th key={`head-${column}`}> {column} </th>
                ))}
            </tr>
            {data.map((row) => (
                <tr>
                    <td> {row.name} </td>
                    <td> {row.age} </td>
                    <td> {row.job} </td>
                    <td> {row.email} </td>
                    <td> {row.phone} </td>
                    <td> {row.date} </td>
                </tr>
            ))}

        </table>
    )
}
export default Table;