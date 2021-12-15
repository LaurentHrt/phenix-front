import ReactModal from 'react-modal'
import { MouseEventHandler } from 'react'
import { StyledContactModal } from './style'
import closeIcon from '../../assets/icons/close.svg'
import { FormikHelpers, useFormik } from 'formik'
import { TextField } from '@mui/material'

interface ContactModalProps {
  isOpen: boolean
  handleCloseModal: MouseEventHandler<HTMLButtonElement>
}

interface Values {
  firstname: string
  lastname: string
  email: string
  message: string
}

export default function ContactModal({
  handleCloseModal,
  isOpen,
}: ContactModalProps) {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
    },
    onSubmit: (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
    >
      <StyledContactModal>
        <button onClick={handleCloseModal}>
          <img src={closeIcon} alt="close" />
        </button>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            name="firstname"
            label="Firstname"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />

          <TextField
            name="lastname"
            label="Lastname"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />

          <TextField
            name="email"
            label="E-mail"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
          />

          <TextField
            name="message"
            label="Message"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.message}
            type="text"
          />

          <button type="submit">Envoyer</button>
        </form>
      </StyledContactModal>
    </ReactModal>
  )
}
