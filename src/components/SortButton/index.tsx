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
  const [tri, setTri] = useState('10')
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
          <MenuItem value={10}>Popularité</MenuItem>
          <MenuItem value={20}>Date</MenuItem>
          <MenuItem value={30}>Titre</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
