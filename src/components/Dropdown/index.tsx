import { StyledDropdown } from './style'

export default function Dropdown() {
  return (
    <StyledDropdown>
      <div className="custom-select">
        <div role="button" className="custom-select__trigger">
          <span>Popularité</span>
          <div className="arrow"></div>
        </div>
        <div className="custom-options" role="listbox">
          <div className="custom-option selected" data-value="popularite">
            Popularité
          </div>
          <div className="custom-option" data-value="date">
            Date
          </div>
          <div className="custom-option" data-value="titre">
            Titre
          </div>
        </div>
      </div>
    </StyledDropdown>
  )
}
