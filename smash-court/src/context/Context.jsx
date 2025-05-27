import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const Context = createContext();
const ContextProvider = (props) => {
  // const address = "http://localhost:3333";
  const address = "http://s671int511v016.sit.kmutt.ac.th:3333";
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [validateUsername, setValidateUsername] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [validatePasswordConfirm, setValidatePasswordConfirm] = useState("");
  const [courts, setCourts] = useState([])
  const [bookings, setBookings] = useState([])
  const [court, setCourt] = useState([])
  const [booking, setBooking] = useState([])
  const [userBookings, setUserBookings] = useState([])
  const [regisMsg, setRegisMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState('');
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  useEffect(()=>{
    const storeToken = sessionStorage.getItem("token")
    if(storeToken){
      setToken(storeToken)
      getAllCourts()
      getAllBookings()
      getUserBookings()
    }
  },[])
  const handleLogin = async () => {
    try {
      if (!username && !password) {
        setValidateUsername("Please enter a username");
        setValidatePassword("Please enter a password");
      } else if (!password || !username) {
        !username && password
          ? setValidateUsername("Please enter a username")
          : setValidatePassword("Please enter a password");
      } else if (username && password) {
        const res = await axios.post(
          `${address}/api/users/login`,
          {
            username: username,
            password: password,
          },
          {}
        );
        const data = res.data;
        if (res.status === 200) {
          sessionStorage.setItem("token", data.token);
          setPassword("");
          setUsername("");
          setValidateUsername('')
          setValidatePassword('');
          navigate("/home");
          setErrorMsg('')
          setToken(sessionStorage.getItem("token"))
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMsg('Invalid username or password');
    }
  };
  const handleRegister = async () => {
    try {
        if (!username && !password && !password_confirmation) {
            setValidateUsername("Please enter a username");
            setValidatePassword("Please enter a password");
            setPasswordConfirmation("Please enter a password confirmation")
          } else if (!password || !username ||!password_confirmation) {
            if (!username) {
                setValidateUsername("Please enter a username");
              }
              if (!password) {
                setValidatePassword("Please enter a password");
              }
              if (password.length<7) {
                setValidatePassword('A password should more than 7 characters')
              }
              if (!password_confirmation) {
                setValidatePasswordConfirm("Please enter a password confirmation");
              }
              if(password !== password_confirmation){
                setValidatePasswordConfirm('Passwords do not match')
              }
          }else if (username && password) {
      const res = await axios.post(
        `${address}/api/users/register`,
        {
          username: username,
          password: password,
          password_confirmation: password_confirmation,
        },
        {}
      );
      const data = res.data;
      if (res.status === 200) {
        setRegisMsg(
          "Register a new user complete!! You can back to login again"
        );
        // setToken(data.token);
        setPassword("");
        setPasswordConfirmation("");
        setUsername("");
        setValidateUsername("");
        setValidatePassword("");
        setValidatePasswordConfirm("");
        setErrorMsg("");
      }
    }
    } catch (error) {
        if (error.response.data[0].field ==='password') {
            setValidatePasswordConfirm(error.response.data[0].message)
        }
        if (error.response.data[0].field ==='username') {
            setValidateUsername(error.response.data[0].message)
        }
      setErrorMsg('Failed to register a new user. Please try again');

    }
  };
  const handleLogout = async () => {
    sessionStorage.removeItem("token");
    setToken("");
    setErrorMsg("");
    setRegisMsg("");
    setValidateUsername("");
    setValidatePassword("");
    setValidatePasswordConfirm("");
    setPassword("");
    setPasswordConfirmation("");
    setUsername("");
    try {
      const res = await axios.get(`${address}/api/users/logout`);
      if (res.status === 200) {
        if(res.data){
          navigate('/login');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getAllCourts = async () => {
    try {
      const res = await axios.get(`${address}/api/courts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 200) {
        const data = res.data;
        setCourts(data);
      }
    } catch (error) {}
  };
  const getCourt = async (id) => {
    try {
      const res = await axios.get(`${address}/api/courts/${id}`,{
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.status === 200) {
        const data = res.data;
        setCourt(data);
        return data;
      }
    } catch (error) {
        console.error(error)
    }
  }
  const getBooking = async (id) => {
    try {
      const res = await axios.get(`${address}/api/bookings/${id}`,{
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.status === 200) {
        const data = res.data.data;
        setBooking(data);
        return data;
      }
    } catch (error) {
        console.error(error)
    }
  }
  const createCourt = async(data) => {
    const formData = data
    try {
      const res = await axios.post(`${address}/api/courts`, {
        name:formData.name,
        location: formData.location,
        price_per_hour:formData.price_per_hour,
        status: formData.status,
        opening_time: formData.opening_time,
        closing_time: formData.closing_time,
        type: formData.type,
      },{
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.status === 201) {
        const data = res.data;
      
        
      }
      await getAllCourts()
      window.location.href = '/courts'
    } catch (error) {
      console.error(error)
    }
  }
  const updateCourt = async(id,data) => {
    try {
      const res = await axios.put(`${address}/api/courts/${id}`, {
        name:data.name,
        location: data.location,
        price_per_hour:data.price_per_hour,
        status: data.status,
        opening_time: data.opening_time,
        closing_time: data.closing_time,
        type: data.type,
      },{
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.status === 200) {
        const data = res.data;
      }
      await getAllCourts()
      window.location.href = '/courts'
    } catch (error) {
      console.error(error)
    }
  }
  const deleteCourt = async(id) => {
    try {
      const res = await axios.delete(`${address}/api/courts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.status === 200) {
        getAllCourts()
      }
    } catch (error) {
      console.error(error)
    }
  }
  const getAllBookings = async () => {
    try {
      const res = await axios.get(`${address}/api/bookings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 200) {
        const data = res.data.data;
        setBookings(data);
        return data;
      }
    } catch (error) {console.error(error)}
  };
  const getUserBookings = async () => {
    const jwtData = jwtDecode(token)
    try {
      const res = await axios.get(`${address}/api/bookings/user/${jwtData.userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 200) {
        const data = res.data.data;
        setUserBookings(data);
      }
    } catch (error) {console.error(error)}
  };
  const createBooking = async (formData) => {
    try {
      const res = await axios.post(`${address}/api/bookings/create`, {
        userId: formData.userId,
        courtId: formData.courtId,
        bookingDate: formData.bookingDate,
        startTime: formData.startTime,
        endTime: formData.endTime,
        status:formData.status
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.statusCode === 201) {
        const result = res.data
      }
       await getAllBookings()
      window.location.href = '/reservations'
    } catch (error) {
      console.error(error)
    }
  }
  const updateBooking = async(id, formData) => {
    try {
      const res = await axios.put(`${address}/api/bookings/${id}`, {
        userId: formData.userId,
        courtId: formData.courtId,
        bookingDate: formData.bookingDate,
        startTime: formData.startTime,
        endTime: formData.endTime,
        status:formData.status
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.statusCode === 201) { 
        const result = res.data
      }
       await getAllBookings()
      window.location.href = '/reservations'
    } catch (error) {
      console.error(error)
    }
  }
  const deleteBooking = async(id) => {
    try {
      const res = await axios.delete(`${address}/api/bookings/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.status === 200) {
        getAllBookings()
      }
    } catch (error) {
      console.error(error)
    }
  }
  const contextvalue = {
    username,
    setUsername,
    password,
    setPassword,
    token,
    setToken,
    handleLogin,
    navigate,
    password,
    password_confirmation,
    setPasswordConfirmation,
    handleRegister,
    regisMsg,
    setRegisMsg,
    validateUsername,
    validatePassword,
    setValidateUsername,
    setValidatePassword,
    setValidatePasswordConfirm,
    validatePasswordConfirm,
    errorMsg,
    setErrorMsg,
    handleLogout,
    getAllCourts,
    getAllBookings,
    courts,
    bookings,
    getCourt, 
    userBookings,getUserBookings,
    createCourt,updateCourt, deleteCourt,
    court,
    booking,
    getBooking, createBooking,deleteBooking,updateBooking,deleteBooking
  };
  return (
    <Context.Provider value={contextvalue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
