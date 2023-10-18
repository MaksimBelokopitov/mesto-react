import { useState, useEffect } from "react";
import api from "./utils/Api";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [initialCards, setInitialCard] = useState([]);

    useEffect(() => {
        api.getPageData()
        .then(([userData, cardsData]) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setInitialCard(...initialCards, cardsData);
        })
        .catch((err) => {
            console.log(`Ошибка.....: ${err}`);
          });
        },  
    []);
 
    return(
        <main className="main">
            <section className="profile">
                <div className="profile__images" onClick={onEditAvatar}>
                    <img alt="Фото профиля" className="profile__avatar" src={userAvatar} />
                </div>
                <div className="profile__info">
                    <div className="profile__top-row">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="mesto">
                <ul  className="mesto__list">
                    {initialCards.map((item) => (
                            <Card key={item._id} card={item} onCardClick={onCardClick}  />   
                    ))
                    };
                </ul>
             </section>
            </main>
    );
};

export default Main