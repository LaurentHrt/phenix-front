import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

interface SortButtonProps {
  onSortChange: any
}

export default function SortButton({ onSortChange }: SortButtonProps) {
  const [sort, setSort] = useState('likes')
  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string)
    onSortChange(event.target.value as string)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="sort">Trier par</InputLabel>
      <Select
        labelId="sort"
        id="sort"
        value={sort}
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
