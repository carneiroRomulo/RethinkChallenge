import React from 'react';
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
    return (
        <table className={styles.container}>
            <thead> Individuos Cadastrados </thead>
            <tr>
                {columns.map((column) => (
                    <th key={`head-${column}`}> {column} </th>
                ))}
            </tr>
            {pessoas.map((row) => (
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