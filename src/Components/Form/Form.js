import React, { useState} from "react";
import { toast } from 'react-toastify';
import { useAddContactMutation } from '../api/api';
import s from './Form.module.css'

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [addContact, {isLoading}] = useAddContactMutation();
  
  const handleInput = e => {
    const {name, value} = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, phone });
    reset();
    toast.success('Contact added!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }); 
  }

  const reset = () => {
    setName('');
    setPhone('');
    }

  return (
    <div className={s.form}>
            <form onSubmit={handleSubmit}>
              <label className={s.label}>Name
                <input
                  type="text"
                  name="name"
                  value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  onChange={handleInput}
                  required
                  placeholder='add name...'
                  className={s.input}
              />
              </label>
            <label className={s.label}>Phone number
              <input
                type="tel"
                name="number"
                value={phone}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                onChange={handleInput}
                required
                placeholder='add number...'
                className={s.input}
              />
            </label>
              <button type="submit" disabled={isLoading} className={s.button} title='Добавить новый контакт'>Add contact</button>
      </form>
      
    </div>
    
  )
};

