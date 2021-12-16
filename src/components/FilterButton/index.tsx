import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

interface FilterButtonProps {
  onFilterChange: any
}

export default function FilterButton({ onFilterChange }: FilterButtonProps) {
  const [filter, setFilter] = useState('all')
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string)
    onFilterChange(event.target.value as string)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="filter">Filtre</InputLabel>
      <Select
        labelId="filter"
        id="filter"
        value={filter}
        label="Filtre"
        onChange={handleChange}
      >
        <MenuItem value={'all'}>Tout</MenuItem>
        <MenuItem value={'image'}>Image</MenuItem>
        <MenuItem value={'gif'}>Gif</MenuItem>
        <MenuItem value={'video'}>Vidéo</MenuItem>
      </Select>
    </FormControl>
  )
}
