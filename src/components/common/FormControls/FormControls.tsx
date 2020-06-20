import React from 'react';
import s from './FormControls.module.css';
import { Field, WrappedFieldProps, WrappedFieldMetaProps } from 'redux-form';
import { FieldValidatorType } from '../../../utils/validators/validators';

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

type ElementParamsType = {
  input: string
  meta: WrappedFieldMetaProps
}
type ElementType = (params: ElementParamsType) => void

//HOC
export const Element = (Element: any): React.FC<WrappedFieldProps> => ({input, meta, ...props}) => {
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



export function createField<FormKeysType extends string> (plaseholder: string | undefined,
                            // name: LoginFormValuesTypeKeys,
                            name: FormKeysType,
                            validators: Array<FieldValidatorType>,
                            component: React.FC<WrappedFieldProps>,
                            props = {},
                            text = '') {
  return <div>
    <Field placeholder={plaseholder} name={name} component={component} validate={validators} {...props}/> {text}
  </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>
