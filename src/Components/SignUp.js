import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

const SignUp = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name :'',
      email: '',
      password:''
    },
    validationSchema: yup.object({
        name:yup.string().min(2, "name must have atleast two characters").required(),
        email:yup.string().email().required(),
        password:yup.string().min(6, "password must have atleast 6 characters").required(),
    }),
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm({values:""});
    },
  });
  const renderNameErros = formik.touched.name && formik.errors.name && <span style={{color:'red'}}>{formik.errors.name}</span>;
  const renderEmailErros = formik.touched.email && formik.errors.email && <span style={{color:'red'}}>{formik.errors.email}</span>;
  const renderPasswordErrors = formik.touched.password && formik.errors.password && <span style={{color:'red'}}>{formik.errors.password}</span>;
  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <br></br>
            <input
                id="name"
                name="name"
                type="name"
                placeholder='Enter your name'
                onChange={formik.handleChange}
                value={formik.values.name}
                required
            />
            <br />
            {renderNameErros}
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <br></br>
            <input
                id="email"
                name="email"
                type="email"
                placeholder='Enter your Email number'
                onChange={formik.handleChange}
                value={formik.values.email}
                required
            />
            <br />
            {renderEmailErros}
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <br></br>
            <input
                id="password"
                name="password"
                type="password"
                placeholder='Enter your password'
                onChange={formik.handleChange}
                value={formik.values.password}
                required
            />
            <br />
            {renderPasswordErrors}
        </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;