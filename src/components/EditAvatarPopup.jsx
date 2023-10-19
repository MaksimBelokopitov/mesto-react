import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {
    return(
        <PopupWithForm 
          name = {'avatar'} 
          title = {'Обновить аватар'} 
          buttonText ={'Сохранить'} 
          isOpen ={isOpen}
          onClose={onClose}>
            <label className="popup__form-field">
            <input
              className="popup__input popup__input_type_avatar"
              type="url"
              name="avatar"
              placeholder="Ссылка на картинку"
              required
              id="input-profile-avatar"
            />
            <span className="popup__error input-avatar-error" ></span>
          </label>
        </PopupWithForm>
    );
};

export default EditAvatarPopup;