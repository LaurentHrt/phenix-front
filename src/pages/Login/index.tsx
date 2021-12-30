import { FormikHelpers, useFormik } from 'formik'
import { TextField } from '@mui/material'
import SimpleButton from '../../components/SimpleButton/index'

interface I_LoginValues {
  email: string
  password: string
}

interface I_SigninValues {
  name: string
  email: string
  password: string
}

const loginInitialValues = {
  email: '',
  password: '',
}
const signinInitialValues = {
  name: '',
  email: '',
  password: '',
}

const onLoginSubmit = (
  values: I_LoginValues,
  { setSubmitting }: FormikHelpers<I_LoginValues>
) => {
  alert('login')
}

const onSigninSubmit = (
  values: I_SigninValues,
  { setSubmitting }: FormikHelpers<I_SigninValues>
) => {
  alert('signin')
}

export default function Login() {
  const loginFormik = useFormik({
    initialValues: loginInitialValues,
    onSubmit: onLoginSubmit,
  })
  const signinFormik = useFormik({
    initialValues: signinInitialValues,
    onSubmit: onSigninSubmit,
  })

  const LoginForm = () => {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={loginFormik.handleSubmit}>
          <TextField
            name="email"
            label="E-mail"
            variant="outlined"
            onChange={loginFormik.handleChange}
            value={loginFormik.values.email}
            type="email"
          />
          <TextField
            name="password"
            label="password"
            variant="outlined"
            onChange={loginFormik.handleChange}
            value={loginFormik.values.password}
          />
          <SimpleButton onClick={loginFormik.handleSubmit} text="Login" />
        </form>
      </div>
    )
  }

  const SigninForm = () => {
    return (
      <div>
        <h1>Signin</h1>
        <form onSubmit={signinFormik.handleSubmit}>
          <TextField
            name="name"
            label="Nom"
            variant="outlined"
            onChange={signinFormik.handleChange}
            value={signinFormik.values.name}
          />
          <TextField
            name="email"
            label="E-mail"
            variant="outlined"
            onChange={signinFormik.handleChange}
            value={signinFormik.values.email}
            type="email"
          />
          <TextField
            name="password"
            label="password"
            variant="outlined"
            onChange={signinFormik.handleChange}
            value={signinFormik.values.password}
            type="password"
          />
          <SimpleButton onClick={signinFormik.handleSubmit} text="Signin" />
        </form>
      </div>
    )
  }

  return (
    <div>
      <LoginForm />
      <SigninForm />
    </div>
  )
}
