import "./CartNotification.css";
import { useCart } from "./CartContext";
import { useEffect, useState } from "react";

const CartNotification = () => {
  const { notification } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (notification) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [notification]);

  if (!notification) {
    return null;
  }

  return (
    <div className={`cart-notification ${visible ? "show" : ""}`}>
      <span className="notification-icon">✔</span>
      <p>{notification.message}</p>
    </div>
  );
};

export default CartNotification;

