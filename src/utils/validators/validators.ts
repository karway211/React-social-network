export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
  return (value) ? undefined : 'Field is required';
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => {
  if(value.length > maxLength) return `Max length is ${maxLength} simbols`;
  return undefined;
}