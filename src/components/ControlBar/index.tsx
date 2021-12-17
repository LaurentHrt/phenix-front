import FilterButton from '../FilterButton'
import SearchBar from '../SearchBar'
import SortButton from '../SortButton'
import { StyledControlsContainer } from './style'
import SimpleButton from '../SimpleButton/index'
import { filterValues, sortValues } from '../../utils/type'

interface ControlBarProps {
  sortValue: sortValues
  handleSortChange: (e: sortValues) => void
  filterValue: filterValues
  handleFilterChange: (e: filterValues) => void
  searchValue: string
  handleSearchChange: (e: string) => void
  handleClickReset: () => void
}

export default function ControlBar({
  sortValue,
  handleSortChange,
  filterValue,
  handleFilterChange,
  searchValue,
  handleSearchChange,
  handleClickReset,
}: ControlBarProps) {
  return (
    <StyledControlsContainer>
      <SortButton onSortChange={handleSortChange} value={sortValue} />
      <FilterButton onFilterChange={handleFilterChange} value={filterValue} />
      <SearchBar onSearchChange={handleSearchChange} value={searchValue} />
      <SimpleButton text="Réinitialiser" onClick={handleClickReset} />
    </StyledControlsContainer>
  )
}
