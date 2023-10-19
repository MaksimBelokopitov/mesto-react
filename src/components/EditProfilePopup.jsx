import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}){
    return(
        <PopupWithForm 
          name = {'profile'} 
          title = {'Редактирование профиля'} 
          buttonText ={'Сохранить'} 
          isOpen ={isOpen} 
          onClose={onClose}>
            <label className="popup__form-field">
            <input
              className="popup__input popup__input_type_user-name"
              type="text"
              name="name"
              placeholder="Введите ваше имя"
              required
              minLength="2"
              maxLength="40"
              id="input-profile-name"
            />
            <span className="popup__error input-profile-name-error" ></span>
        </label>
        <label className="popup__form-field">
            <input
              className="popup__input popup__input_type_user-job"
              type="text"
              name="about"
              placeholder="Напишите информацию о себе"
              required
              minLength="2"
              maxLength="200"
              id="input-profile-job"
            />
            <span className="popup__error input-profile-job-error" ></span>
        </label>
      </PopupWithForm>
    );
};

export default EditProfilePopup