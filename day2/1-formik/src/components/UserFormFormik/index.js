import { Formik } from "formik";

import validations from "./validations";
import styles from "./styles.module.css";

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
					console.log(bag);
					await new Promise((r) => setTimeout(r, 2000));
					bag.resetForm();
					console.log(values);
				}}
				validationSchema={validations}
			>
				{({
					values,
					handleChange,
					handleSubmit,
					handleBlur,
					isSubmitting,
					errors,
					touched,
				}) => (
					<div>
						<div style={{ fontSize: 11 }}>{JSON.stringify(errors)}</div>
						<div>
							<input
								placeholder="e-mail"
								name="email"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								disabled={isSubmitting}
							/>
							{errors.email && touched.email && (
								<div className={styles.error}>{errors.email}</div>
							)}
							{errors.email ? "" : ""}
						</div>
						<div>
							<input
								placeholder="Password"
								name="password"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								disabled={isSubmitting}
							/>
							{errors.password && touched.password && (
								<div className={styles.error}>{errors.password}</div>
							)}
						</div>
						<div>
							<input
								placeholder="Confirm Password"
								name="passwordConfirm"
								value={values.passwordConfirm}
								onChange={handleChange}
								onBlur={handleBlur}
								disabled={isSubmitting}
							/>
							{errors.passwordConfirm && touched.passwordConfirm && (
								<div className={styles.error}>{errors.passwordConfirm}</div>
							)}
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
