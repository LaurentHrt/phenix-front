import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { ISortType, SORT_TYPES } from '../../utils/type'

interface SortButtonProps {
  value: ISortType
  onSortChange: (e: ISortType) => void
}

export default function SortButton({ value, onSortChange }: SortButtonProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onSortChange(event.target.value as ISortType)
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
        <MenuItem value={SORT_TYPES.LIKE}>Popularité</MenuItem>
        <MenuItem value={SORT_TYPES.DATE}>Date</MenuItem>
        <MenuItem value={SORT_TYPES.TITLE}>Titre</MenuItem>
        <MenuItem value={SORT_TYPES.PRICE}>Prix</MenuItem>
        <MenuItem value={SORT_TYPES.RANDOM}>Aléatoire</MenuItem>
      </Select>
    </FormControl>
  )
}
