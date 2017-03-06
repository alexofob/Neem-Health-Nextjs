export const required = value => (value ? undefined : 'Required');

export const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
);

const maxLength = max => value => (
  value && value.length > max ? `Must be ${max} characters or less` : undefined
);

export const maxLength6 = maxLength(6);

export const number = value => (
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
);
