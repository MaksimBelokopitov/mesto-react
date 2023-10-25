import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const [placeName, setPlaceName] = useState('');
  const [placeLink, setPlaceLink] = useState('')

  function handleAddPlaceSubmit(e){
    e.preventDefault();

    onAddPlace({
      name: placeName,
      link: placeLink
    })
  }
    return (
        <PopupWithForm 
          name = {'mesto'} 
          title = {'Новое место'} 
          buttonText ={'Сохранить'} 
          isOpen ={isOpen} 
          onClose={onClose}
          onSubmit={handleAddPlaceSubmit}>
            <label className="popup__form-field">
            <input
              className="popup__input popup__input_type_mesto-name"
              type="text"
              value={placeName}
              onChange={e => { setPlaceName(e.target.value)}}
              name="name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
              id="input-mesto-name"
            />
            <span className="popup__error input-mesto-name-error" ></span>
          </label>
          <label className="popup__form-field">
            <input
              className="popup__input popup__input_type_mesto-image"
              type="url"
              value={placeLink}
              onChange={e => { setPlaceLink(e.target.value)}}
              name="link"
              placeholder="Ссылка на картинку"
              required
              id="input-mesto-image"
            />
            <span className="popup__error input-mesto-image-error" ></span>
          </label>
        </PopupWithForm>
    );
};

export default AddPlacePopup