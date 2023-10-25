import { useEffect } from "react"

function PopupWithForm({name, title, children, buttonText, isOpen, onClose, onSubmit}){

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
        <div onClick={e => (e.currentTarget === e.target) && popupClose()} className= {`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className="popup__button-close" type="button" onClick={onClose}></button>
                <h2 className='popup__title'>{title}</h2>
                <form 
                    action="submit" 
                    className={`popup__form popup__form_type_${name}`} 
                    name={name}
                    onSubmit={onSubmit}
                    noValidate>
                        {children}
                        <button className="popup__button" type="submit">{buttonText}</button>
                </form>
            </div>
        </div>
    );
};

export default PopupWithForm