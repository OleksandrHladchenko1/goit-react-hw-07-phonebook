import React from 'react';

import s from './Filter.module.css';

export default function Filter({ onChange, value }) {

  return (
    <div className={s.wrapper}>
      <label className={s.label}>Find contact
        <input
          type="text"
          name="name"
          value={value}
          onChange={onChange}
          className={s.input}
          placeholder='find name...'
        />
      </label>
    </div>
      )    
};
  
