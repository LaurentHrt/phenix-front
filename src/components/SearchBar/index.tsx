import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { ChangeEvent } from 'react'

interface SearchButtonProps {
  value: string
  onSearchChange: (e: string) => void
}

export default function SearchBar({
  value,
  onSearchChange,
}: SearchButtonProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value as string)
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
