import React, { useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../../context/Context';
import { jwtDecode } from 'jwt-decode';
function CUReservation({id}) {
  const styles = {
    container: {
      padding: '20px',
      height: "calc(100vh - 53px)",
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflowY: 'auto',
    },
    header: {
      fontSize: '30px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    select: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      backgroundColor: '#f0f0f0',
    },
    btn: {
      backgroundColor: '#ff5252',
      color: '#fff',
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.3s ease',
    },
  };
  const {
    courts,
    getBooking,
    createBooking,
    updateBooking,
    token,
  } = useContext(Context);
  const jwtData = jwtDecode(token)
  const userId = jwtData.userId
  const [formData, setFormData] = useState({
    courtId: 0 || '',
    userId: userId ||'',
    bookingDate: '',
    startTime: '',
    endTime: '',
    status: '',
  });
  useEffect(()=>{
    if (id) {
      getBooking(id)
        .then((response) => {
          if (response) {
            setFormData({
              courtId: response[0].courtId || 0,
              userId: response[0].userId || userId,
              bookingDate: response[0].bookingDate || "",
              startTime: response[0].startTime || "",
              endTime: response[0].endTime || "",
              status: response[0].status || ""
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching court data:", error);
        });}
  },[id])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateBooking(id, formData);
    } 
    if(!id) {
      createBooking(formData);
    }
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>{id ?'Edit Bookings':'Bookings'}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ ...styles.formGroup }}>
          <label
            style={{ ...{ ...styles.label, display: "flex" }, display: "flex" }}
          >
            Booking Date:
          </label>
          <input
            type="text"
            name="bookingDate"
            value={formData.bookingDate.split("T")[0]}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={{ ...styles.label, display: "flex" }}>
            Start Time:
          </label>
          <select
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="" disabled>
              Select Opening Time
            </option>
            {Array.from({ length: 18 }, (_, i) => {
              const hour = 6 + i;
              const time = `${hour.toString().padStart(2, "0")}.00`;
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              );
            })}
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={{ ...styles.label, display: "flex" }}>
            End Time:
          </label>
          <select
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="" disabled>
              Select Closing Time
            </option>
            {Array.from({ length: 18 }, (_, i) => {
              const hour = 6 + i;
              const time = `${hour.toString().padStart(2, "0")}.00`;
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              );
            })}
          </select>
        </div>        
        <hr />
        {}
        <div style={styles.formGroup}>
          <label style={{ ...styles.label, display: "flex" }}>
            Court
          </label>
          <select
            name="courtId"
            value={formData.courtId}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="" disabled>
              Select Court
            </option>
            {courts.map((court) => {
              return (
                <option key={court.id} value={court.id}>
                  {court.name}
                </option>
              );
            })}
          </select>
        </div>      
        <hr />
        <div style={styles.formGroup}>
          <label style={{ ...styles.label, display: "flex" }}>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="confirmed">Confirm</option>
            <option value="canceled">Cancel</option>
          </select>
        </div>
        {id ? (
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="submit"
              style={{ ...styles.btn, display: "flex", backgroundColor: "#4CAF50" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
            >
              Update
            </button>
            <Link to={'/courts'} style={{ textDecoration: "none" }}>
            <button
              type="button"
              style={{ ...styles.btn, display: "flex" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff5252")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6b6b")}
            >
              Cancel
            </button>
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "10px" }}>
            <button
            type="submit"
            style={{ ...styles.btn, display: "flex",backgroundColor: "#4CAF50" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          >
            Create
          </button>
          <Link to={'/courts'} style={{ textDecoration: "none" }}>
            <button
              type="button"
              style={{ ...styles.btn, display: "flex" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff5252")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6b6b")}
            >
              Cancel
            </button>
            </Link>
          </div>
          
        )}
      </form>
    </div>
  );
}

export default CUReservation