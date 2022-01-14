import ReactModal from 'react-modal'
import React from 'react'
import { MouseEventHandler, useState } from 'react'
import {
  StyledFileInput,
  StyledImagePreview,
  StyledNewMediaModal,
} from './style'
import { Form, FormikHelpers, FormikProvider, useFormik } from 'formik'
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
import { useAppDispatch } from '../../utils/hooks'
import * as Yup from 'yup'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import TextInputLiveFeedback from '../TextInputLiveFeedback/index'

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
  const dispatch = useAppDispatch()
  const params = useParams()
  const photographerId = parseInt(params.id || '0')
  const [imagePreview, setImagePreview] = useState()

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Too short').required('Required'),
    description: Yup.string().min(2, 'Too short').required('Required'),
    price: Yup.number().required('Required').positive().integer(),
    file: Yup.string().required('Required'),
  })

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
    ) =>
      dispatch(
        postMedia({
          file: values.file,
          title: values.title,
          price: values.price,
          type: values.type,
          description: values.description,
          photographerId: photographerId,
        })
      ),
    validationSchema: validationSchema,
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
        <FormikProvider value={formik}>
          <Form>
            <TextInputLiveFeedback
              label="Titre"
              helperText="Must be 2 characters minimum"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <TextInputLiveFeedback
              label="Description"
              helperText="Must be 2 characters minimum"
              name="description"
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
              type="number"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
            <label>
              <StyledFileInput
                accept="image/*"
                name="file"
                onChange={(event: any) => {
                  formik.setFieldValue('file', event.currentTarget.files[0])
                  setImagePreview(event.currentTarget.files[0])
                }}
                type="file"
              />
              <Button
                variant="contained"
                component="span"
                endIcon={<PhotoCamera />}
              >
                Upload
              </Button>
            </label>
            <StyledImagePreview>
              {imagePreview && (
                <img src={URL.createObjectURL(imagePreview)} alt="Preview" />
              )}
            </StyledImagePreview>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={handleCloseModal}
              >
                Annuler
              </Button>
              <Button variant="contained" endIcon={<SendIcon />} type="submit">
                Valider
              </Button>
            </Stack>
          </Form>
        </FormikProvider>
      </StyledNewMediaModal>
    </ReactModal>
  )
}
