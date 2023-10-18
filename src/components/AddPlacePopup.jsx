import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose}) {
    return (
        <PopupWithForm 
          name = {'mesto'} 
          title = {'Новое место'} 
          button ={'Сохранить'} 
          isOpen ={isOpen} 
          onClose={onClose}>
            <label className="popup__form-field">
            <input
              className="popup__input popup__input_type_mesto-name"
              type="text"
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
              name="link"
              placeholder="Ссылка на картинку"
              required
              id="input-mesto-image"
            />
            <span className="popup__error input-mesto-image-error" ></span>
          </label>
          <button className="popup__button" type="submit">Сохранить</button>
        </PopupWithForm>
    );
};

export default AddPlacePopup