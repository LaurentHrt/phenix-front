import ReactModal from 'react-modal'
import { MouseEventHandler } from 'react'
import { StyledButtonContainer, StyledContactModal } from './style'
import { FormikHelpers, useFormik } from 'formik'
import { Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import CloseIcon from '@mui/icons-material/Close'

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
      // TODO: Send to backend with confirmation
    },
  })

  ReactModal.setAppElement('#root')

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Formulaire de contact"
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
    >
      <StyledContactModal>
        <h1>Contactez-moi</h1>
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
            multiline
            rows={10}
            maxRows={15}
          />

          <StyledButtonContainer>
            <Button
              onClick={handleCloseModal}
              startIcon={<CloseIcon />}
              size="large"
              variant="contained"
            >
              Fermer
            </Button>
            <Button
              // onClick={formik.handleSubmit}
              type="submit"
              endIcon={<SendIcon />}
              size="large"
              variant="contained"
            >
              Envoyer
            </Button>
          </StyledButtonContainer>
        </form>
      </StyledContactModal>
    </ReactModal>
  )
}
