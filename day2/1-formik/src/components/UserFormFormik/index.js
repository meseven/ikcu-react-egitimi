import { Formik } from "formik";

function UserForm() {
	return (
		<>
			<Formik
				initialValues={{
					email: "",
					password: "",
					passwordConfirm: "",
				}}
				onSubmit={async (values, bag) => {
					// console.log(bag);
					await new Promise((r) => setTimeout(r, 2000));
					bag.resetForm();
					console.log(values);
				}}
			>
				{({ values, handleChange, handleSubmit, isSubmitting }) => (
					<div>
						<div>
							<input
								placeholder="e-mail"
								name="email"
								value={values.email}
								onChange={handleChange}
								disabled={isSubmitting}
							/>
						</div>
						<div>
							<input
								placeholder="Password"
								name="password"
								value={values.password}
								onChange={handleChange}
								disabled={isSubmitting}
							/>
						</div>
						<div>
							<input
								placeholder="Confirm Password"
								name="passwordConfirm"
								value={values.passwordConfirm}
								onChange={handleChange}
								disabled={isSubmitting}
							/>
						</div>
						<div>
							<input
								type="button"
								value="submit"
								onClick={handleSubmit}
								disabled={isSubmitting}
							/>
						</div>
					</div>
				)}
			</Formik>
		</>
	);
}

export default UserForm;
