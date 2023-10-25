import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, {useState, useEffect}  from 'react';
import EditProfilePopup from "./components/EditProfilePopup";
import AddPlacePopup from "./components/AddPlacePopup";
import EditAvatarPopup from "./components/EditAvatarPopup";
import ImagePopup from "./components/ImagePopup";
import api from "./components/utils/Api";
import { CurrentUserContext } from "./context/CurrentUserContext";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isimagePopup, setIsImagePopup] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() =>{
    api.getPageData()
    .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
    })
    .catch((err) => {
      console.log(`Ошибка.....: ${err}`);
    });
  },[]);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
  
    api.changeLikeStatus(card._id, !isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(`Ошибка.....: ${err}`);
    });
  };

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() =>{
      const newCardList = cards.filter((selectedCard) =>  card._id !== selectedCard._id);
      setCards(newCardList)
    })
    .catch((err) => {
      console.log(`Ошибка.....: ${err}`);
    });
  }

  function handleUpdateUser(param){
    api.setUserInfo(param)
    .then((data) =>{
      setCurrentUser(data);
      closeAllPopup()
    })
    .catch((err) => {
      console.log(`Ошибка.....: ${err}`);
    });
  };

  function handleUpdateAvatar(param) {
    api.setUserAvatar(param)
    .then((data) =>{
      setCurrentUser(data);
      closeAllPopup()
    })
    .catch((err) => {
      console.log(`Ошибка.....: ${err}`);
    });
  };

  function handleAddPlace(param){
 
    api.createNewCard(param)
    .then((data) => {
      setCards([data, ...cards])
      closeAllPopup()
    })
    .catch((err) => {
      console.log(`Ошибка.....: ${err}`);
    });
  }
    
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick} 
          onCardClick={handleCardClick} 
          cards = {cards}
          onCardLike = {handleCardLike}
          onCardDelete = {handleCardDelete}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose = {closeAllPopup} onUpdateUser={handleUpdateUser}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose = {closeAllPopup} onAddPlace={handleAddPlace} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose = {closeAllPopup} onUpdateAvatar={handleUpdateAvatar} />
        <ImagePopup   card={selectedCard}  onClose={closeAllPopup} isOpen={isimagePopup} />
      </div>  
    </CurrentUserContext.Provider>
  );
};

export default App;

     
 