import React, { useState } from 'react';
import styles from './index.module.css';

const pessoas = [
    {"name": "Fabiana Araújo",        "age": 33, "job": "Cientista", "date":"10/10/2010", "phone":"31999999999", "email":"email@email.com"   },
    {"name": "Gabriel Gomes",         "age": 25, "job": "Cientista", "date":"10/10/2010", "phone":"31999999999", "email":"email@email.com"   },
    {"name": "Fernando Henrique",     "age": 17, "job": "Cientista", "date":"10/10/2010", "phone":"31999999999", "email":"email@email.com"   },
    {"name": "Ana  Luiza",            "age": 2 , "job": "Cientista", "date":"10/10/2010", "phone":"31999999999", "email":"email@email.com"   },
    {"name": "Geraldo do Nascimento", "age": 93, "job": "Cientista", "date":"10/10/2010", "phone":"31999999999", "email":"email@email.com"   },
    {"name": "Miguel Souza",          "age": 70, "job": "Cientista", "date":"10/10/2010", "phone":"31999999999", "email":"email@email.com"   },
    {"name": "Antonio Miguel",        "age": 69, "job": "Cientista", "date":"10/10/2010", "phone":"31999999999", "email":"email@email.com"   }
]

const Table = () => {
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
        } 
    };
            
    // pessoas.forEach((pessoa, index) => (
    //     console.log(pessoa)
    // ))

    return (
        <table className={styles.container}>
            <thead>
                <tr>
                    <th>
                        <h3>Individuos Cadastrados</h3>
                        <div className={styles.searchContainer}>
                            <input
                                type="text"
                                placeholder='Nome Completo'
                                onBlur={(event) => handleInputedData(event)}
                            />
                            <button className={styles.searchButton} onClick={() => handleSearch()}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {columns.map((column) => (
                        <th key={`head-${column}`}> {column} </th>
                    ))}
                </tr>
                {data.map((row, index) => (
                    <tr key={`tr-${index}`}>
                        <td> # </td>
                        <td> {row.name} </td>
                        <td> {row.age} </td>
                        <td> {row.job} </td>
                        <td> {row.email} </td>
                        <td> {row.phone} </td>
                        <td> {row.date} </td>
                        <td 
                            className={styles.action}
                            onClick={(event) => console.log(event)}
                        >
                            <i className="fas fa-trash"></i>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}
export default Table;