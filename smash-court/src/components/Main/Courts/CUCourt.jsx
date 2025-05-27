import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../context/Context';

export default function  CUCourt({id}) {
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
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    location: '',
    opening_time: '',
    closing_time: '',
    price_per_hour: 0,
    status: '',
  });
  const {createCourt,updateCourt,getCourt, getAllCourts} = useContext(Context)
  useEffect(()=>{
    if (id) {
      getCourt(id)
        .then((response) => {
          if (response) {
            setFormData({
              name: response.name || "",
              type: response.type || "",
              location: response.location || "",
              opening_time: response.openingTime || "",
              closing_time: response.closingTime || "",
              price_per_hour: response.pricePerHour || 0,
              status: response.status || "",
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
      updateCourt(id, formData);
      getAllCourts()
    } else createCourt(formData);getAllCourts();
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>{id ? `Edit Court` : "Create New Court"}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ ...styles.formGroup }}>
          <label
            style={{ ...{ ...styles.label, display: "flex" }, display: "flex" }}
          >
            Court Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={{ ...styles.label, display: "flex" }}>Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="" disabled>
              Select Type
            </option>
            <option value="Tennis">Tennis</option>
            <option value="Badminton">Badminton</option>
          </select>
        </div>
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
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={{ ...styles.label, display: "flex" }}>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={{ ...styles.label, display: "flex" }}>
            Opening Time
          </label>
          <select
            name="opening_time"
            value={formData.opening_time}
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
            Closing Time
          </label>
          <select
            name="closing_time"
            value={formData.closing_time}
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
        <div style={styles.formGroup}>
          <label style={{ ...styles.label, display: "flex" }}>
            Price per Hour (฿)
          </label>
          <input
            type="number"
            name="price_per_hour"
            value={formData.price_per_hour}
            onChange={handleChange}
            style={styles.input}
            required
          />
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
            style={{ ...styles.btn, display: "flex", backgroundColor: "#4CAF50" }}
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
