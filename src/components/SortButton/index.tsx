import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
} from '@mui/material'
import { useState } from 'react'

export default function SortButton() {
  const [tri, setTri] = useState('Popularité')
  const handleChange = (event: SelectChangeEvent) => {
    setTri(event.target.value as string)
  }

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="tri">Trier par</InputLabel>
        <Select
          labelId="tri"
          id="tri"
          value={tri}
          label="Trier par"
          onChange={handleChange}
        >
          <MenuItem value={'Popularité'}>Popularité</MenuItem>
          <MenuItem value={'Date'}>Date</MenuItem>
          <MenuItem value={'Titre'}>Titre</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
