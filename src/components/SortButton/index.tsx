import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { sortValues } from '../../utils/type'

interface SortButtonProps {
  value: sortValues
  onSortChange: (e: sortValues) => void
}

export default function SortButton({ value, onSortChange }: SortButtonProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onSortChange(event.target.value as sortValues)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="sort">Trier par</InputLabel>
      <Select
        labelId="sort"
        id="sort"
        value={value}
        label="Trier par"
        onChange={handleChange}
      >
        <MenuItem value={'likes'}>Popularité</MenuItem>
        <MenuItem value={'date'}>Date</MenuItem>
        <MenuItem value={'title'}>Titre</MenuItem>
        <MenuItem value={'price'}>Prix</MenuItem>
        <MenuItem value={'random'}>Aléatoire</MenuItem>
      </Select>
    </FormControl>
  )
}
