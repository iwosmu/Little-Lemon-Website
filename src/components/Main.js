import React, { useEffect, useReducer, useState } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Home from './Home';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.times;
    default:
      return state;
  }
};

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
const submitAPI = function(formData) {
  return true;
};

const Main = () => {
  const navigate = useNavigate();
  const submitForm = async (formData) =>{
    const result = await submitAPI(formData);
    if(result){
      navigate('/confirmation');
    }
    else{
      alert('Failed to submit');
  }
}

  const [currentDate, setCurrentDate] = useState(new Date());
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  const initializeTimes = () => {
    const times = fetchAPI(currentDate);
    dispatch({ type: "UPDATE_TIMES", times: times });
  };

  useEffect(() => {
    initializeTimes();
  }, [currentDate]);

  const updateDate = (newDate) => {
    setCurrentDate(new Date(newDate));
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<BookingForm availableTimes={availableTimes} updateDate={updateDate} submitForm={submitForm}/>} />
        <Route path="/confirmation" element={<ConfirmedBooking/>} />
      </Routes>
    </main>
  );
};

export default Main
