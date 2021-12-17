import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { filterValues } from '../../utils/type'

interface FilterButtonProps {
  value: filterValues
  onFilterChange: (e: filterValues) => void
}

export default function FilterButton({
  value,
  onFilterChange,
}: FilterButtonProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onFilterChange(event.target.value as filterValues)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="filter">Filtre</InputLabel>
      <Select
        labelId="filter"
        id="filter"
        value={value}
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
