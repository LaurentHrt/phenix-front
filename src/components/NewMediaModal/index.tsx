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
  T_MediaDescription,
  T_MediaPrice,
  T_MediaTitle,
  T_MediaType,
} from '../../models/Media'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { postMedia } from '../../features/postMedia'
import { T_PhotographerId } from '../../models/Photographer'

interface NewMediaModalProps {
  isOpen: boolean
  handleCloseModal: MouseEventHandler<HTMLButtonElement>
}

export interface I_PostMediaFormValues {
  title: T_MediaTitle
  price: T_MediaPrice
  description: T_MediaDescription
  type: T_MediaType
  file: string
  photographerId: T_PhotographerId
}

export default function NewMediaModal({
  handleCloseModal,
  isOpen,
}: NewMediaModalProps) {
  const params = useParams()
  const photographerId = parseInt(params.id || '0')

  const formik = useFormik({
    initialValues: {
      title: '',
      price: 0,
      description: '',
      type: MEDIA_TYPES.IMAGE,
      file: '',
      photographerId: 0,
    },
    onSubmit: async (
      values: I_PostMediaFormValues,
      { setSubmitting }: FormikHelpers<I_PostMediaFormValues>
    ) => {
      postMedia({
        file: values.file,
        title: values.title,
        price: values.price,
        type: values.type,
        description: values.description,
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
