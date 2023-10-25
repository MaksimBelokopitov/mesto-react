import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose, onUpdateUser}){

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 
  
  function handleSubmit(e) {
    e.preventDefault();

   onUpdateUser({
      name,
      about: description,
    });
  } 

  return(
    <PopupWithForm 
      name = {'profile'} 
      title = {'Редактирование профиля'} 
      buttonText ={'Сохранить'} 
      isOpen ={isOpen} 
      onClose={onClose}
      onSubmit={handleSubmit}>
      <label className="popup__form-field">
        <input
          className="popup__input popup__input_type_user-name"
          type="text"
          value={name ?? ''}
          onChange={e => { setName(e.target.value)}}
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
          value={description ?? ''}
          onChange={e => {setDescription(e.target.value)
          }}
      
        />
        <span className="popup__error input-profile-job-error" ></span>
      </label>
    </PopupWithForm>
    );
};

export default EditProfilePopup