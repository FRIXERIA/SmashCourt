import React, { useContext, useState } from 'react'
import { Context } from '../../../context/Context'
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function Courts() {
    const styles = {
        container: {
          padding: '20px',
          height: "calc(100vh - 53px)",
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflowY:'auto',
        },
        header: {
          fontSize: '30px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#333',
        },
        noCourts: {
          fontSize: '18px',
          color: '#888',
        },
        list: {
          listStyleType: 'none',
          padding: 0,

        },
        listItem: {
          display: 'flex',
          justifyContent: 'space-between',
          padding: '15px',
          marginBottom: '10px',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
        },
        courtName: {
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#333',
          textAlign: 'left'
        },
        courtDetails1: {
          fontSize: '20px',
          color: '#555',
          fontWeight:'bold',
        },
        courtDetails2: {
          fontSize: '16px',
          color: '#555',
          textAlign:'left'
        },
        sortType:{
            textAlign: 'left',
            fontSize: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '10px',
            padding: '0px 10px',
            border: '1px solid #ccc',
        },
        btn:{
            backgroundColor: '#ff6b6b', 
            color: '#fff', 
            padding: '5px 20px',
            fontSize: '16px', 
            fontWeight: 'bold', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease', 
            
        }
      };
      const { courts,token, deleteCourt } = useContext(Context);
      const courtList = courts ? courts : [];
      const [selectedType, setSelectedType] = useState('');
      const [selectedStatus, setSelectedStatus] = useState('');
      const jwtData =jwtDecode(token)
        const userId = jwtData.userId
      const sortedCourts = courtList
    .filter((court) => (selectedType ? court.type === selectedType : true))
    .filter((court) => (selectedStatus ? court.status === selectedStatus : true))
    .sort((a, b) => a.id - b.id);
    const toggleResetButton = () =>{
        setSelectedType('');
        setSelectedStatus('');
    }
      return (
        <div style={styles.container}>
          <h2 style={styles.header}>List of Courts</h2>
          {sortedCourts.length === 0 ? (
            <p style={styles.noCourts}>No courts available</p>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", gap: "20px", margin: "10px 0" }}>
                  <p style={{ textAlign: "left", fontSize: "20px" }}>
                    <b>Court Type:</b>
                  </p>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    style={styles.sortType}
                  >
                    <option value="" disabled>
                      Select Court Type
                    </option>
                    <option value="Tennis">Tennis</option>
                    <option value="Badminton">Badminton</option>
                  </select>
                  <p style={{ textAlign: "left", fontSize: "20px" }}>
                    <b>Court Status:</b>
                  </p>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    style={styles.sortType}
                  >
                    <option value="" disabled>
                      Select Court Status
                    </option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                  </select>
                </div>
                <div>
                  <button
                    style={styles.btn}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#ff5252")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#ff6b6b")
                    }
                    onClick={toggleResetButton}
                  >
                    Reset
                  </button>
                  {userId !== 1 &&(
                    <Link
                            to={{
                              pathname: `/reservations/create`}}
                          >
                            <button
                              style={{
                                ...styles.btn,
                              marginLeft: "10px",
                              backgroundColor: "green",
                              }}
                              onMouseEnter={(e) =>
                                (e.target.style.backgroundColor = "#32CD32")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.backgroundColor = "green")
                              }
                            >
                              Booking Court
                            </button>
                    </Link>
                  )}
                  {userId === 1 &&(
                    <Link
                            to={{
                              pathname: `/courts/create`}}
                          >
                            <button
                              style={{
                                ...styles.btn,
                              marginLeft: "10px",
                              backgroundColor: "green",
                              }}
                              onMouseEnter={(e) =>
                                (e.target.style.backgroundColor = "#32CD32")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.backgroundColor = "green")
                              }
                            >
                              Add Court
                            </button>
                    </Link>
                  )}
                </div>
              </div>

              <ul style={styles.list}>
                {sortedCourts.map((court) => (
                  <li
                    id={court.id}
                    key={court.id}
                    style={styles.listItem}
                    // onClick={() => getCourt(court.id)}
                  >
                    <div style={{ width: "75%" }}>
                      <div style={styles.courtName}>{court.name}</div>
                      <div style={styles.courtDetails2}>
                        <b>Type:</b> {court.type}
                      </div>
                      <div style={styles.courtDetails2}>
                        <b>Opening Time:</b> {court.openingTime}
                      </div>
                      <div style={styles.courtDetails2}>
                        <b>Closing Time:</b> {court.closingTime}
                      </div>
                      <div style={styles.courtDetails2}>
                        <b>Price:</b> {court.pricePerHour} ฿
                      </div>
                      <div style={styles.courtDetails2}>
                        <b>Status:</b> {court.status}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "end",
                      }}
                    >
                      <div style={styles.courtDetails1}>{court.location}</div>
                      {userId === 1 && (
                        <div style={{ display: "flex" }}>
                          <Link
                            to={{
                              pathname: `/courts/edit/${court.id}`}}
                          >
                            <button
                              style={{
                                ...styles.btn,
                              marginLeft: "10px",
                              backgroundColor: "green",
                              }}
                              onMouseEnter={(e) =>
                                (e.target.style.backgroundColor = "#32CD32")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.backgroundColor = "green")
                              }
                            >
                              Edit
                            </button>
                          </Link>
                          <button
                            id={court.id}
                            style={{
                              ...styles.btn,
                              marginLeft: "10px",
                            }}
                            onMouseEnter={(e) =>
                              (e.target.style.backgroundColor = "#ff5252")
                            }
                            onMouseLeave={(e) =>
                              (e.target.style.backgroundColor = "#ff6b6b")
                            }
                            onClick={() => deleteCourt(court.id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      );
}
