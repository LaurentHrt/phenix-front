import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { ChangeEvent } from 'react'

interface SearchButtonProps {
  value: string
  onChange: (e: string) => void
}

export default function SearchBar({ value, onChange }: SearchButtonProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as string)
  }

  return (
    <TextField
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      name="searchbar"
      label="Rechercher"
      variant="outlined"
      value={value}
      onChange={handleChange}
    />
  )
}
