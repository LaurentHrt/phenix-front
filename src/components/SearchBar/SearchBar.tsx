import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

interface SearchButtonProps {
  onSearchChange: any
}

export default function SearchBar({ onSearchChange }: SearchButtonProps) {
  const [input, setInput] = useState('')
  const handleChange = (event: any) => {
    setInput(event?.target.value ?? '')
    onSearchChange(event?.target.value ?? '')
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
      value={input}
      onChange={handleChange}
    />
  )
}
