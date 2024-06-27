import React, {useState, useEffect, useReducer} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import BookingForm from './BookingForm';

const timesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // For now, returns the same times regardless of the date
        return ["12:00", "13:30", "16:00", "20:00"];
      default:
        return state;
    }
  };

  const initializeTimes = () => {
    return ["12:00", "13:30", "18:00", "20:00"];
  };

  const Main = () => {
      const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

      return (
          <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reservations" element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} />} />
          </Routes>
          </main>
      );
  };

  export default Main;