import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { ISortType } from '../../utils/type'

export interface ISortItem {
  value: ISortType
  display: string
}

interface ISortButtonProps {
  value: ISortType
  onChange: (e: ISortType) => void
  items: ISortItem[]
}

export default function SortButton({
  value,
  onChange,
  items,
}: ISortButtonProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as ISortType)
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
        {items.map((item: ISortItem) => (
          <MenuItem key={item.value} value={item.value}>
            {item.display}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
