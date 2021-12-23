import FilterButton, { IFilterItem } from '../FilterButton'
import SearchBar from '../SearchBar'
import SortButton, { ISortItem } from '../SortButton'
import { StyledControlsContainer } from './style'
import SimpleButton from '../SimpleButton/index'
import type { IFilterType, ISortType } from '../../utils/type'

interface ISort {
  value: ISortType
  items: ISortItem[]
  handleChange: (e: ISortType) => void
}
interface IFilter {
  value: IFilterType
  items: IFilterItem[]
  handleChange: (e: IFilterType) => void
}

interface ISearch {
  value: string
  handleChange: (e: string) => void
}

interface ControlBarProps {
  sort?: ISort
  filter?: IFilter
  search?: ISearch
  handleClickReset?: () => void
}

export default function ControlBar({
  sort,
  filter,
  search,
  handleClickReset,
}: ControlBarProps) {
  return (
    <StyledControlsContainer>
      {sort && (
        <SortButton
          onChange={sort.handleChange}
          value={sort.value}
          items={sort.items}
        />
      )}
      {filter && (
        <FilterButton
          onChange={filter.handleChange}
          value={filter.value}
          items={filter.items}
        />
      )}
      {search && (
        <SearchBar onChange={search?.handleChange} value={search?.value} />
      )}
      {handleClickReset && (
        <SimpleButton text="Réinitialiser" onClick={handleClickReset} />
      )}
    </StyledControlsContainer>
  )
}
