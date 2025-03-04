import React from 'react';
import './mybooking.css';

function MyBookings() {
  // Sample booking data - replace with your actual data
  const bookings = [
    {
      id: 1,
      restaurant: "La Bella Italia",
      date: "March 10, 2025",
      time: "7:30 PM",
      guests: 4,
      status: "Confirmed",
      tableNo: "12"
    },
    {
      id: 2,
      restaurant: "Sushi Delight",
      date: "March 15, 2025",
      time: "6:00 PM",
      guests: 2,
      status: "Pending",
      tableNo: "Awaiting"
    },
    {
      id: 3,
      restaurant: "The Steakhouse",
      date: "March 18, 2025",
      time: "8:00 PM",
      guests: 6,
      status: "Confirmed",
      tableNo: "15"
    },
    {
      id: 4,
      restaurant: "Green Garden",
      date: "March 20, 2025",
      time: "7:00 PM",
      guests: 3,
      status: "Pending",
      tableNo: "Awaiting"
    },
    {
      id: 5,
      restaurant: "Spice Palace",
      date: "March 22, 2025",
      time: "6:30 PM",
      guests: 2,
      status: "Confirmed",
      tableNo: "7"
    }
  ];

  return (
    <div className="booking-container">
      <div className="booking-cards-grid">
        {bookings.map(booking => (
          <div key={booking.id} className="booking-card">
            <div className="booking-card-header">
              <h3>{booking.restaurant}</h3>
              <span className={`booking-status ${booking.status.toLowerCase()}`}>
                {booking.status}
              </span>
            </div>
            
            <div className="booking-card-details">
              <div className="booking-detail">
                <span className="detail-label">Date:</span>
                <span>{booking.date}</span>
              </div>
              <div className="booking-detail">
                <span className="detail-label">Time:</span>
                <span>{booking.time}</span>
              </div>
              <div className="booking-detail">
                <span className="detail-label">Guests:</span>
                <span>{booking.guests}</span>
              </div>
              <div className="booking-detail">
                <span className="detail-label">Table:</span>
                <span>{booking.tableNo}</span>
              </div>
            </div>
            
            <button className="booking-card-btn">
              Manage Booking
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;