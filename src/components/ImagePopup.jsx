import { useEffect } from "react";

function ImagePopup({card, onClose, isOpen}) {
  
  const popupClose = onClose;
 
    function popupCloseEsc(event) {
        if(event.key === 'Escape') {
            popupClose()
        };
    };
    
    useEffect(() => {
        document.addEventListener('keydown', popupCloseEsc);
        return() => {
            document.removeEventListener('keydown', popupCloseEsc)
        }},
    []);

    return(
      <div onClick={e => (e.currentTarget === e.target) && popupClose()} className={`popup popup_high-opacity popup_type_figure ${isOpen? 'popup_opened' : ''}`}>
        <figure className="popup__figure">
          <button className="popup__button-close popup__button-close_figure popup__button-close_type_figure" onClick={onClose}></button>
          <img  className="popup__figure-image" src={card ?card.link : ''} />
          <figcaption className="popup__figure-subtitle">{card? card.name : ''}</figcaption>
        </figure>
      </div>
    );
  };

export default ImagePopup