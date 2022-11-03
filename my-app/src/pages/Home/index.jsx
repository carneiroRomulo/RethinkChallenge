import React, { useState, useEffect } from 'react'
import Form from '../../components/Form'
import Table from '../../components/Table'
import styles from './index.module.css'

const initial_db = [
    {"name": "Fabiana Araújo",        "age": 33 },
    {"name": "Gabriel Gomes",         "age": 25 },
    {"name": "Fernando Henrique",     "age": 17 },
    {"name": "Ana Luiza",             "age": 2  },
    {"name": "Geraldo do Nascimento", "age": 93 },
    {"name": "Miguel Souza",          "age": 70 },
    {"name": "Antonio Miguel",        "age": 69 }
]

const Home = () => {
    // Give an id to each person in the database 
    initial_db.forEach((person, index) => {
        if (person.id === undefined) {
            person["id"] = index
        }
    })

    const [data, setData] = useState(initial_db)
    const [showOnlyAdults, setShowOnlyAdults] = useState(false)
    const [firstNameList, setFirstNameList] = useState([])
    const [averageAge, setAverageAge] = useState(0)

    useEffect(() => {
        if (showOnlyAdults) {
            const adults = data.filter((person) => { return person.age >= 18 })
            setFirstNameList(adults.map((person) => { return person.name.split(' ')[0] }))
            setAverageAge(
                parseInt(adults.reduce((acc, person) => 
                    { return acc + parseInt(person.age)}, 0) / adults.length
                )
            )
        } else {
            setFirstNameList(data.map((person) => { return person.name.split(' ')[0] }))
            setAverageAge(
                parseInt(data.reduce((acc, person) => 
                    { return acc + parseInt(person.age)}, 0) / data.length
                )
            )
        }
    }, [data, showOnlyAdults])
    
    return (
        <div className={styles.gridContainer}>
            <div className={styles.averageAge}>
                <h3 className={styles.title}>Idade Média dos Cadastrados</h3>
                <h3 className={styles.value}>{averageAge} anos</h3>
            </div>
            
            <div className={styles.form}>
                <Form
                    data={data}
                    setData={setData}
                />
            </div>
            
            <div className={styles.table}>
                <Table
                    showOnlyAdults={showOnlyAdults}
                    data={data}
                    setData={setData}
                /> 
            </div>
            
            <div className={styles.firstName}>
                <h3>Primeiro Nome dos Cadastrados</h3>
                <div className={styles.firstNameList}>
                    {firstNameList.map((firstName, index) => (
                        <p key={`firstName-${index}`}>{firstName}</p>
                    ))}
                </div>
            </div>

            <div className={styles.toggleAdults}>
                <input
                    type="checkbox"
                    id="adults"
                    name="adults"
                    value="adults"
                    onChange={() => setShowOnlyAdults(!showOnlyAdults)}
                />
                <label>Mostrar somente aptos a se habilitar</label>
            </div>
        </div>
    )
}
export default Home