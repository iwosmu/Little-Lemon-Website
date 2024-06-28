import React, { useState, useEffect } from "react";
import "../styles/bookingform.css";
import greek_salad from "../assets/greek_salad.jpg";
import bruchetta from "../assets/bruchetta.png";
import lemon_dessert from "../assets/lemon_dessert.jpg";

const BookingForm = ({ availableTimes, updateDate, submitForm }) => {
  const [resDate, setResDate] = useState(availableTimes[0]);
  const [resTime, setResTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      console.log("Failed to submit");
      return;
    }
    console.log("Reservation confirmed");
    console.log({ resDate, resTime, guests, occasion });
    submitForm({ resDate, resTime, guests, occasion });
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setResDate(newDate);
    updateDate(newDate);
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  useEffect(() => {
    const isValidDate = resDate >= getTodayDate();
    const isValidGuests = guests > 0 && guests <= 10;
    const isOccasionSelected = occasion !== "";

    setIsFormValid(isValidDate && isValidGuests && isOccasionSelected);
  }, [resDate, resTime, guests, occasion, availableTimes]);

  return (
    <div className="booking-form">
      <h1>Make a reservation</h1>
      <form onSubmit={handleSubmit} data-testid="booking-form">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={resDate}
          onChange={handleDateChange}
          min={getTodayDate()}
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={resTime}
          onChange={(e) => setResTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <div className="images">
          <img src={greek_salad} alt="greek salad" />
          <img src={bruchetta} alt="bruchetta" />
          <img src={lemon_dessert} alt="lemon dessert" />
        </div>

        {/* <input type="submit" value="Make Your reservation" /> */}
        <button type="submit" disabled={!isFormValid} className="submit-btn">
          Make Your reservation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
