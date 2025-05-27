import React, { useState, useEffect } from "react";
import Courts from "./Courts/Courts";
import Reservation from "./Reservations/Reservation";
import CUCourt from "./Courts/CUCourt";
import CUReservation from "./Reservations/CUReservation";
import { useParams } from "react-router-dom";

function Main() {
  const [page, setPage] = useState(null)
  const { id } = useParams();

  useEffect(()=>{
    const path = window.location.pathname
    if(path.includes("/courts")){
      setPage("courts")
    }
    if(path.includes("/courts/create")){
      setPage("create-court")
    }
    if(path.includes(`/courts/edit/${id}`)){
      setPage("update-court")
    }
    if(path.includes("/reservations")){
      setPage("reservations")
    }
    if(path.includes(`/reservations/create`)){
      setPage("create-reservation")
    }
    if(path.includes(`/reservations/edit/${id}`)){
      setPage("update-reservation")
    }
    if(path.includes("/home")){
      setPage("home")
    }
  })
  const styles ={
    container: {
      padding: '260px 0',
      fontSize:'80px',
      fontWeight:'bold',
      height: "calc(100vh - 53px)",
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflowY:'auto',
    },
  }
  return (
    <div style={{height:'calc(100vh - 53px)', width:'100%'}}>
      {page === 'courts' && (<Courts/>)}
      {page === 'create-court' && (<CUCourt/>)}
      {page === 'update-court' && (<CUCourt id={id}/>)}
      {page === 'reservations' && (<Reservation/>)}
      {page === 'create-reservation' && (<CUReservation />)}
      {page === 'update-reservation' && (<CUReservation id={id}/>)}
      {page === 'home' && (
        <div style={styles.container}>
          <p>Welcome to <br />Smash Court App </p>
        </div>
      )}
    </div>
  )
 
}

export default Main;
