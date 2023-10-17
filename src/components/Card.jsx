function Card({card, onCardClick}) {

  function handleClick() {
   onCardClick(card);
  };

  return(
    <li className="mesto__item">
      <button className="mesto__delete-button"></button>
      <img className="mesto__image" src={card.link} onClick={handleClick} />
      <div className="mesto__content">
        <h2 className="mesto__title">{card.name}</h2>
        <div className="mesto__like-container">
          <button className="mesto__like-button" type="button"></button>
          <p className="mesto__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};

export default Card
