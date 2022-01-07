import ReactModal from 'react-modal'
import { MouseEventHandler } from 'react'
import { StyledNewMediaModal } from './style'
import { FormikHelpers, useFormik } from 'formik'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material'
import { useParams } from 'react-router'
import {
  MEDIA_TYPES,
  T_MediaAlt,
  T_MediaPrice,
  T_MediaTitle,
  T_MediaType,
} from '../../models/Media'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { postMedia } from '../../features/postMedia'

interface NewMediaModalProps {
  isOpen: boolean
  handleCloseModal: MouseEventHandler<HTMLButtonElement>
}

interface Values {
  title: T_MediaTitle
  price: T_MediaPrice
  description: T_MediaAlt
  type: T_MediaType
  file: string
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
      type: MEDIA_TYPES.IMAGE,
      file: '',
    },
    onSubmit: async (
      values: Values,
      { setSubmitting }: FormikHelpers<Values>
    ) => {
      // const api = `http://${import.meta.env.VITE_API}:${
      //   import.meta.env.VITE_PORT
      // }/api/medias/`

      // const data = new FormData()
      // data.append('file', values.file)
      // data.append('title', values.title)
      // data.append('price', values.price.toString())
      // data.append('type', values.type)
      // data.append('alt', values.description)
      // data.append('photographerId', photographerId || '')

      // try {
      //   const response = await axios.post(api, data)
      //   console.log(response)
      // } catch (error) {}
      postMedia({
        file: values.file,
        title: values.title,
        price: values.price,
        type: values.type,
        alt: values.alt,
        photographerId: photographerId,
      })
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
      <h1>Ajouter une nouvelle photo</h1>
      <StyledNewMediaModal>
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

          <FormControl>
            <InputLabel id="type">Type</InputLabel>
            <Select
              name="type"
              labelId="type"
              id="type"
              label="Type"
              value={formik.values.type}
              onChange={formik.handleChange}
            >
              <MenuItem value={MEDIA_TYPES.IMAGE}>Image</MenuItem>
              <MenuItem value={MEDIA_TYPES.GIF}>Gif</MenuItem>
              <MenuItem value={MEDIA_TYPES.VIDEO}>Vidéo</MenuItem>
            </Select>
          </FormControl>

          <TextField
            name="price"
            label="Prix"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.price}
          />

          <input
            name="file"
            onChange={(event: any) => {
              formik.setFieldValue('file', event.currentTarget.files[0])
            }}
            type="file"
          />

          <Stack direction="row" spacing={2}>
            {/* <SimpleButton onClick={formik.handleSubmit} text="Valider" /> */}
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={handleCloseModal}
            >
              Annuler
            </Button>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => formik.handleSubmit()}
            >
              Valider
            </Button>
          </Stack>
        </form>
      </StyledNewMediaModal>
    </ReactModal>
  )
}
