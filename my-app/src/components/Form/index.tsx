import React from 'react';
import styles from './index.module.css';

const Form = () => {
    const objects = [
        { label: 'Nome',                         type: 'text'    },
        { label: 'Idade',                        type: 'number'  },
        { label: 'Profissão',                    type: 'text'    },
        { label: 'E-mail',                       type: 'email'   },
        { label: 'Telefone',                     type: 'text'    },
        { label: 'Data de Preenchimento',        type: 'date'    },
    ]
    return (
        <form className={styles.form} action="">
            <h3>Cadastro</h3>
            {objects.map((object) => (
                <div key={`field-${object.label}`} className={styles.field}>
                    <label>{object.label}</label>
                    <input type={object.type} />
                </div>
            ))}
            <button type='submit'>Confirmar</button>
        </form>
    );
}
export default Form;