import ReactModal from 'react-modal'
import { MouseEventHandler } from 'react'
import './style'
import { StyledContactModal } from './style'

interface ContactModalProps {
  isOpen: boolean
  handleCloseModal: MouseEventHandler<HTMLButtonElement>
}

export default function ContactModal({
  handleCloseModal,
  isOpen,
}: ContactModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
    >
      <StyledContactModal>
        <button className="content__close" onClick={handleCloseModal}>
          ×
        </button>

        <div className="content__form">
          {/* <form name="contact" action="index.js" method="get" onSubmit=""> */}
          <p id="contactModalTitle" className="content__title">
            Contactez-moi
            <br />
            Mimi Keel
          </p>
          <div className="formData" data-error="Veuillez entrer votre prénom">
            <label htmlFor="firstname">Prénom</label>
            <input
              id="firstname"
              className="text-control"
              type="text"
              name="firstname"
              minLength={2}
              placeholder="Jean"
              required={true}
            />
          </div>
          <div className="formData">
            <label htmlFor="lastname">Nom</label>
            <input
              id="lastname"
              className="text-control"
              type="text"
              name="lastname"
              placeholder="Dupont"
            />
          </div>
          <div className="formData" data-error="L'e-mail entré est invalide">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              className="text-control"
              type="email"
              name="email"
              placeholder="jean.dupont@mail.com"
            />
          </div>
          <div className="formData" data-error="Vous devez écrire un message">
            <label htmlFor="message">Votre message</label>
            <textarea
              id="message"
              className="textarea-control"
              name="message"
              placeholder="Votre message..."
              maxLength={500}
            ></textarea>
          </div>

          <div className="content__btn-submit">
            <input className="button" type="submit" value="Envoyer" />
          </div>
          {/* </form> */}
        </div>
        <div className="content__confirmation">Merci de votre message !</div>
      </StyledContactModal>
    </ReactModal>
  )
}
