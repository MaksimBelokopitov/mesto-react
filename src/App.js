import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, {useState}  from 'react';
import EditProfilePopup from "./components/EditProfilePopup";
import AddPlacePopup from "./components/AddPlacePopup";
import EditAvatarPopup from "./components/EditAvatarPopup";
import ImagePopup from "./components/ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isimagePopup, setIsImagePopup] = useState(false);

  function closeAllPopup(){
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false);
    setIsImagePopup(false);
    setSelectedCard({});
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
     setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setIsImagePopup(true);
    setSelectedCard(card);
  };
    
  return (
    <div className="App">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose = {closeAllPopup} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose = {closeAllPopup} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose = {closeAllPopup} />
      <ImagePopup   card={selectedCard}  onClose={closeAllPopup} isOpen={isimagePopup} />
    </div>  
  );
};

export default App;

     
 