import ReactModal from 'react-modal'
import { MouseEventHandler } from 'react'
import { StyledNewMediaModal } from './style'
import closeIcon from '../../assets/icons/close.svg'
import { FormikHelpers, useFormik } from 'formik'
import { TextField } from '@mui/material'
import SimpleButton from '../SimpleButton'
import axios from 'axios'
import { useParams } from 'react-router'

interface NewMediaModalProps {
  isOpen: boolean
  handleCloseModal: MouseEventHandler<HTMLButtonElement>
}

interface Values {
  title: string
  price: number
  description: string
  file: any
}

export default function NewMediaModal({
  handleCloseModal,
  isOpen,
}: NewMediaModalProps) {
  const params = useParams()
  const photographerId = params.id

  const formik = useFormik({
    initialValues: {
      title: '',
      price: 0,
      description: '',
      file: '',
    },
    onSubmit: async (
      values: Values,
      { setSubmitting }: FormikHelpers<Values>
    ) => {
      const api = `http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}/api/medias/`

      const data = new FormData()
      data.append('file', values.file)
      data.append('title', values.title)
      data.append('price', values.price.toString())
      data.append('alt', values.description)
      data.append('photographerId', photographerId || '')

      try {
        const response = await axios.post(api, data)
        console.log(response)
      } catch (error) {}
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

          <input
            name="file"
            // label="Fichier"
            // variant="outlined"
            onChange={(event: any) => {
              formik.setFieldValue('file', event.currentTarget.files[0])
            }}
            type="file"
          />

          <SimpleButton onClick={formik.handleSubmit} text="Envoyer" />
        </form>
      </StyledNewMediaModal>
    </ReactModal>
  )
}
