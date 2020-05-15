import React from 'react';
import s from './FormControls.module.css';
import { Field } from 'redux-form';

// export const Textarea = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
//       <div>
//         <textarea {...input} {...props} />
//       </div>
//     {hasError && <span>{meta.error}</span>}
//     </div>
//   )
// }

// export const Input = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
//       <div>
//         <input {...input} {...props} />
//       </div>
//     {hasError && <span>{meta.error}</span>}
//     </div>
//   )
// }

//HOC
export const Element = Element => ({input, meta, ...props}) => {
  const {touched, error} = meta
  const hasError = touched && error;
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      <div>
        <Element {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
};

export const createField = (plaseholder, name, validators, component, props = {}, text = '') => (
  <div>
    <Field placeholder={plaseholder} name={name} component={component} validate={validators} {...props}/> {text}
  </div>
)
