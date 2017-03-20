export const required = value => (value ? undefined : 'Required');

export const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
);

export const isPhoneNumber = value => (
  value && !/^(\+?233)?(2|5)[0-9]{8}$/i.test(value) ?
  'Invalid phone number' : undefined
);


const maxLength = max => value => (
  value && value.length > max ? `Must be ${max} characters or less` : undefined
);

const minLength = min => value => (
  value && value.length < min ? `Must be ${min} characters or more` : undefined
);

export const maxLength6 = maxLength(6);

export const minLength3 = minLength(3);

export const number = value => (
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
);
