import React, { useState } from 'react';
import styles from './index.module.css';

const Form = ({ data, setData }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [job, setJob] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [date, setDate] = useState('');
    
    const [showError, setShowError] = useState(false);
    const errorMessage = "Preencha todos os campos";

    const handlePerson = (event) => {
        event.preventDefault();
        if (name === '' || age === 0 || job === '' || email === '' || phone === 0 || date === '') {
            setShowError(true);
        } else {
            setShowError(false);
            const newPerson = {
                "id": data.length,
                "name": name,
                "age": age,
                "job": job,
                "email": email,
                "phone": phone,
                "date": date
            }
            setData([...data, newPerson]);
        }
    }

    const objects = [
        { label: 'Nome',                  type: 'text',    field: name,  setField: setName   },
        { label: 'Idade',                 type: 'number',  field: age,   setField: setAge    },
        { label: 'Profissão',             type: 'text',    field: job,   setField: setJob    },
        { label: 'E-mail',                type: 'email',   field: email, setField: setEmail  },
        { label: 'Telefone',              type: 'number',  field: phone, setField: setPhone  },
        { label: 'Data de Preenchimento', type: 'date',    field: date,  setField: setDate   },
    ]
    return (
        <form className={styles.form} action="">
            <h3>Cadastro</h3>
            {objects.map((object) => (
                <div key={`field-${object.label}`} className={styles.field}>
                    <label>{object.label}</label>
                    <input
                        type={object.type}
                        onBlur={(event) => object.setField(event.target.value)}
                    />
                </div>
            ))}
            <button
                type='submit'
                onClick={(event) => handlePerson(event)}
            >
                Confirmar
            </button>
            {showError && <p className={styles.error}>{errorMessage}</p>}
        </form>
    );
}
export default Form;