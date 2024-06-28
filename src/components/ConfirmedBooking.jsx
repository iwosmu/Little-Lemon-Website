import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/confirmedbooking.css";

const ConfirmedBooking = () => {
  const location = useLocation();
  const formData = location.state.formData;
  return (
    <div className="container">
      <h1>Booking Confirmed</h1>
      <div className="booking-details">
        <p>Date: {formData.resDate}</p>
        <p>Time: {formData.resTime}</p>
        <p>Number of guests: {formData.guests}</p>
        <p>Occasion: {formData.occasion}</p>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
