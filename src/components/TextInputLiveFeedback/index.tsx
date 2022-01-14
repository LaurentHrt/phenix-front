import { TextField } from '@mui/material'
import { useField } from 'formik'
import { useState } from 'react'

interface I_TextInputLiveFeedbackProps {
  label: string
  helperText: string
  name: string
  onChange: any
  value: any
}

export default function TextInputLiveFeedback({
  helperText,
  label,
  name,
  onChange,
  value,
}: I_TextInputLiveFeedbackProps) {
  const [field, meta] = useField(name)
  const [didFocus, setDidFocus] = useState(false)
  const handleFocus = () => setDidFocus(true)
  const showError =
    ((!!didFocus && field.value.trim().length > 2) || meta.touched) &&
    meta.error
      ? true
      : false

  return (
    <div>
      <TextField
        label={label}
        onChange={onChange}
        value={value}
        name={name}
        variant="outlined"
        onFocus={handleFocus}
        helperText={showError ? helperText : ' '}
        error={showError}
      />
    </div>
  )
}
