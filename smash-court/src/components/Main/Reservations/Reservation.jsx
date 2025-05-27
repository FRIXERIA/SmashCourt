import React, { useContext, useState } from 'react'
import { Context } from '../../../context/Context'
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';

function Reservation() {
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
            backgroundColor: '#ff5252', 
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
        const { bookings, token,userBookings, deleteBooking } = useContext(Context);
         const jwtData =jwtDecode(token)
        const userId = jwtData.userId
        const [selectedStatus, setSelectedStatus] = useState('');
        const bookingslist = userBookings ? userBookings : [];       
        const sortedBookings = bookingslist.sort((a, b) => b.id - a.id);
        const adminBookingslist = bookings ? bookings : [];       
        const adminSortedBookings = adminBookingslist.filter((court) => (selectedStatus ? court.status === selectedStatus : true)).sort((a, b) => a.id - b.id);
        return (
          <div style={styles.container}>
            {userId !== 1 && (
                 <>
                 <h2 style={styles.header}>My Reservations</h2>
                 {!sortedBookings || sortedBookings.length === 0 && (
                      <p style={styles.noCourts}>No Bookings available</p>
                 )}
                 {sortedBookings && (
                     <ul style={styles.list}>
                     {sortedBookings.map((booking) => {
                         return (
                             <li key={booking.id} style={styles.listItem}>
                             <div style={{ width: "75%" }}>
                                 <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                 <div style={styles.courtDetails2}><b>Booking Court:</b>{booking.court.name}</div>
                                 <div style={styles.courtDetails2}><b>Booking Date:</b>{booking.bookingDate.split("T")[0]}</div>
                                 <div style={styles.courtDetails2}><b>Location:</b>{booking.court.location}</div>
                                 <div style={styles.courtDetails2}><b>Start Time:</b>{booking.startTime}</div>
                                 <div style={styles.courtDetails2}><b>End Time:</b>{booking.endTime}</div>
                                 </div>
                             </div>
                             <div style={{...styles.courtDetails1,color: booking.status === 'confirmed' ? 'green' : 'red',}}>{booking.status}</div>
                           </li>
                         )
                     }
                     )}
                   </ul>
                 )}
                 </>
            )}
            {userId === 1 && (
                 <>
                 <h2 style={styles.header}>Reservations Management</h2>
                 {!adminSortedBookings || adminSortedBookings.length === 0 && (
                      <p style={styles.noCourts}>No Bookings available</p>
                 )}
                 {adminSortedBookings && (
                     <ul style={styles.list}>
                        <div style={{ display: "flex", gap: "20px", margin: "10px 0" }}>
                  <p style={{ textAlign: "left", fontSize: "20px" }}>
                    <b>Bookings Status:</b>
                  </p>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    style={styles.sortType}
                  >
                    <option value="" disabled>
                      Select Booking Status
                    </option>
                    <option value="confirmed">Confirmed</option>
                    <option value="canceled">Canceled</option>
                  </select>
                 
                </div>
                     {adminSortedBookings.map((booking) => {
                         return (
                           <li key={booking.id} style={styles.listItem}>
                             <div style={{ width: "75%" }}>
                               <div
                                 style={{
                                   display: "flex",
                                   flexDirection: "column",
                                   gap: "10px",
                                 }}
                               >
                                <div style={styles.courtDetails2}>
                                   <b>User:</b>
                                   {booking.user.username}
                                 </div>
                                 <div style={styles.courtDetails2}>
                                   <b>Booking Court:</b>
                                   {booking.court.name}
                                 </div>
                                 <div style={styles.courtDetails2}>
                                   <b>Booking Date:</b>
                                   {booking.bookingDate.split("T")[0]}
                                 </div>
                                 <div style={styles.courtDetails2}>
                                   <b>Location:</b>
                                   {booking.court.location}
                                 </div>
                                 <div style={styles.courtDetails2}>
                                   <b>Start Time:</b>
                                   {booking.startTime}
                                 </div>
                                 <div style={styles.courtDetails2}>
                                   <b>End Time:</b>
                                   {booking.endTime}
                                 </div>
                                 
                               </div>
                             </div>
                             <div style={{display:'flex',flexDirection:'column', justifyContent:'space-between',alignItems:'end'}}>
                             <div
                               style={{
                                 ...styles.courtDetails1,
                                 color:
                                   booking.status === "confirmed"
                                     ? "green"
                                     : "red",
                               }}
                             >
                               {booking.status}
                             </div>
                             <div style={{display:'flex'}}>
                             <Link to={{pathname: `/reservations/edit/${booking.id}`}}>
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
                            onClick={() => deleteBooking(booking.id)}
                          >
                            Delete
                          </button>
                             </div>
                             </div>
                             
                           </li>
                         );
                     }
                     )}
                   </ul>
                 )}
                 </>
            )}
           
          
             
          </div>
        );
  
}

export default Reservation