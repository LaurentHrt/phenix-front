import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { FILTER_TYPES, IFilterType } from '../../utils/type'

interface FilterButtonProps {
  value: IFilterType
  onFilterChange: (e: IFilterType) => void
}

export default function FilterButton({
  value,
  onFilterChange,
}: FilterButtonProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onFilterChange(event.target.value as IFilterType)
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
        <MenuItem value={FILTER_TYPES.ALL}>Tout</MenuItem>
        <MenuItem value={FILTER_TYPES.IMAGE}>Image</MenuItem>
        <MenuItem value={FILTER_TYPES.GIF}>Gif</MenuItem>
        <MenuItem value={FILTER_TYPES.VIDEO}>Vidéo</MenuItem>
      </Select>
    </FormControl>
  )
}
