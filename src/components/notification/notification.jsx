import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import './notification.css';



const Notification = () => {

    const { notification } = useContext(CartContext)


    if (!notification) {
        return null;
    }


    return(
        <>
            <div className="notification">
                {notification}
            </div>
        </>
    )
}

export default Notification;