import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { IFilterType } from '../../utils/type'

export interface IFilterItem {
  value: IFilterType
  display: string
}

interface IFilterButtonProps {
  value: IFilterType
  onChange: (e: IFilterType) => void
  items: IFilterItem[]
}

export default function FilterButton({
  value,
  onChange,
  items,
}: IFilterButtonProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as IFilterType)
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
        {items.map((item: IFilterItem) => (
          <MenuItem value={item.value}>{item.display}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
