import * as yup from 'yup';

const validations = yup.object().shape({
	email: yup.string().email('Geçerli bir email değil.').required(),
	password: yup.string().min(5, `En az 5 karakter girilmelidir`).required(),
	passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Passwords not matched.').required()
});

export default validations;