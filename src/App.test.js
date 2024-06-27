import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Main from './components/Main'
import Home from './components/Home'

test('checks if BookingForm is there', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', {name: /Reservations/i});
  fireEvent.click(linkElement);
  const bookingForm = screen.getByTestId('booking-form');
  expect(bookingForm).toBeInTheDocument();
});

test('checks if BookingForm can be submitted', async () => {
  render(<App />);
  const linkElement = screen.getByRole('link', {name: /Reservations/i});
  fireEvent.click(linkElement);
  const consoleSpy = jest.spyOn(console, 'log');

  fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: { value: '2023-04-22' },
  });
  fireEvent.change(screen.getByLabelText(/Choose time/i), {
    target: { value: '18:00' },
  });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), {
    target: { value: '4' },
  });
  fireEvent.change(screen.getByLabelText(/Occasion/i), {
    target: { value: 'Birthday' },
  });
  fireEvent.submit(screen.getByTestId('booking-form'));

expect(consoleSpy).toHaveBeenCalledWith('Reservation confirmed');

consoleSpy.mockRestore();
});