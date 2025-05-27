import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { jwtDecode } from "jwt-decode";

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { getAllCourts,getAllBookings, getUserBookings,token} = useContext(Context)
  const jwtData =jwtDecode(token)
  const userId = jwtData.userId
  const handleItemClick = (index) => {
    if (index === 0) {
      setActiveIndex(index);
      getAllCourts()
    } 
    if (index === 1 && userId !== 1){
      setActiveIndex(index)
      getUserBookings()
    }
    if (index === 1 && userId === 1){
      setActiveIndex(index)
      getAllBookings()
    }
  };
  const styles = {
    sidebar: {
      height: "calc(100vh - 53px)",
      width: "25%",
      backgroundColor: "#f4f4f4",
      padding: "10px",
      fontWeight:'bold'
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      transition: "background-color 0.3s",
      cursor: "pointer",
    },
    itemText: {
      fontSize: "25px",
      color: "#333",
      textDecoration: "none", 
    },
  };
  return (
    <div style={styles.sidebar}>
      {userId !== 1 && (
        <ul style={styles.list}>
        <li
          style={{
            ...styles.listItem,
            backgroundColor: activeIndex === 0 ? "#ddd" : "transparent",
          }}
        >
          <Link to="/courts" style={styles.itemText} onClick={() => handleItemClick(0)}>
          <div>
          Courts
          </div>
          </Link>
        </li>
        <li
          style={{
            ...styles.listItem,
            backgroundColor: activeIndex === 1 ? "#ddd" : "transparent",
          }}
        >
          <Link to="/reservations" style={styles.itemText} onClick={() => handleItemClick(1)}>
            <div>My Reservation</div>
          </Link>
        </li>
      </ul>
      )}
      {userId == 1 && (
        <ul style={styles.list}>
        <li
          style={{
            ...styles.listItem,
            backgroundColor: activeIndex === 0 ? "#ddd" : "transparent",
          }}
        >
          <Link to="/courts" style={styles.itemText} onClick={() => handleItemClick(0)}>
          <div>
          Courts
          </div>
          </Link>
        </li>
        <li
          style={{
            ...styles.listItem,
            backgroundColor: activeIndex === 1 ? "#ddd" : "transparent",
          }}
        >
          <Link to="/reservations" style={styles.itemText} onClick={() => handleItemClick(1)}>
            <div>Reservations Management</div>
          </Link>
        </li>
      </ul>
      )}
      
    </div>
  );
}



export default Sidebar;
