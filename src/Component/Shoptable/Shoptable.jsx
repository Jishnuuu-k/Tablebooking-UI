import React, { useState } from 'react';
import './Shoptable.css'; // You'll need to create this CSS file

function Shoptable() {
  const [formData, setFormData] = useState({
    tableCount: '',
    seatCount: '',
    tableRate: '',
    tableId: '',
    date: ''
  });
  const [savedData, setSavedData] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show confirmation dialog instead of submitting immediately
    setShowConfirmDialog(true);
  };

  const confirmSubmit = () => {
    console.log('Form submitted:', formData);
    
    // Save the form data to display
    setSavedData({...formData});
    
    // Hide confirmation dialog
    setShowConfirmDialog(false);
    
    // Show success message
    setShowConfirmation(true);
    
    // Hide confirmation message after 3 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
    
    // Clear form fields
    setFormData({
      tableCount: '',
      seatCount: '',
      tableRate: '',
      tableId: '',
      date: ''
    });
  };

  const cancelSubmit = () => {
    setShowConfirmDialog(false);
  };

  return (
    <div className="page-wrapper">
      <div className="shop-table-container">
        <h2>Restaurant Table Management</h2>
        
        {/* Success Message */}
        {showConfirmation && (
          <div className="confirmation-message">
            Table details saved successfully!
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="table-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tableCount">Tables Count:</label>
              <input
                type="number"
                id="tableCount"
                name="tableCount"
                value={formData.tableCount}
                onChange={handleChange}
                placeholder="How many tables"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="seatCount">Seats Per Table:</label>
              <input
                type="number"
                id="seatCount"
                name="seatCount"
                value={formData.seatCount}
                onChange={handleChange}
                placeholder="How many seats"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tableRate">Table Rate ($):</label>
              <input
                type="number"
                id="tableRate"
                name="tableRate"
                value={formData.tableRate}
                onChange={handleChange}
                placeholder="Rate for the table"
                step="0.01"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="tableId">Table ID:</label>
              <input
                type="text"
                id="tableId"
                name="tableId"
                value={formData.tableId}
                onChange={handleChange}
                placeholder="Table identifier"
                required
              />
            </div>
          </div>

          <div className="form-row date-row">
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">Save Table</button>
        </form>
        
        {/* Confirmation Dialog */}
        {showConfirmDialog && (
          <div className="overlay">
            <div className="confirm-dialog">
              <h3>Confirm Table Details</h3>
              <p>Please review the following information:</p>
              
              <div className="confirm-details">
                <div className="confirm-item">
                  <span className="confirm-label">Tables Count:</span>
                  <span className="confirm-value">{formData.tableCount}</span>
                </div>
                <div className="confirm-item">
                  <span className="confirm-label">Seats Per Table:</span>
                  <span className="confirm-value">{formData.seatCount}</span>
                </div>
                <div className="confirm-item">
                  <span className="confirm-label">Table Rate:</span>
                  <span className="confirm-value">${formData.tableRate}</span>
                </div>
                <div className="confirm-item">
                  <span className="confirm-label">Table ID:</span>
                  <span className="confirm-value">{formData.tableId}</span>
                </div>
                <div className="confirm-item">
                  <span className="confirm-label">Date:</span>
                  <span className="confirm-value">{formData.date}</span>
                </div>
              </div>
              
              <div className="confirm-buttons">
                <button className="cancel-btn" onClick={cancelSubmit}>Cancel</button>
                <button className="confirm-btn" onClick={confirmSubmit}>Confirm</button>
              </div>
            </div>
          </div>
        )}
        
        {/* Display saved details */}
        {savedData && (
          <div className="saved-details">
            <h3>Saved Table Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Tables Count:</span>
                <span className="detail-value">{savedData.tableCount}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Seats Per Table:</span>
                <span className="detail-value">{savedData.seatCount}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Table Rate:</span>
                <span className="detail-value">${savedData.tableRate}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Table ID:</span>
                <span className="detail-value">{savedData.tableId}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Date:</span>
                <span className="detail-value">{savedData.date}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shoptable;