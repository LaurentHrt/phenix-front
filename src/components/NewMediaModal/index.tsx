import ReactModal from 'react-modal'
import { MouseEventHandler } from 'react'
import { StyledNewMediaModal } from './style'
import closeIcon from '../../assets/icons/close.svg'
import { FormikHelpers, useFormik } from 'formik'
import { TextField } from '@mui/material'
import SimpleButton from '../SimpleButton'

interface NewMediaModalProps {
  isOpen: boolean
  handleCloseModal: MouseEventHandler<HTMLButtonElement>
}

interface Values {
  title: string
  price: number
  description: string
  file: string
}

export default function NewMediaModal({
  handleCloseModal,
  isOpen,
}: NewMediaModalProps) {
  const formik = useFormik({
    initialValues: {
      title: '',
      price: 0,
      description: '',
      file: '',
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
      contentLabel="Nouveau média"
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
    >
      <StyledNewMediaModal>
        <button onClick={handleCloseModal}>
          <img src={closeIcon} alt="close" />
        </button>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            name="title"
            label="Titre"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.title}
          />

          <TextField
            name="description"
            label="Description"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.description}
          />

          <TextField
            name="price"
            label="Prix"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.price}
          />

          <TextField
            name="file"
            label="Fichier"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.file}
            type="file"
          />

          <SimpleButton onClick={formik.handleSubmit} text="Envoyer" />
        </form>
      </StyledNewMediaModal>
    </ReactModal>
  )
}
