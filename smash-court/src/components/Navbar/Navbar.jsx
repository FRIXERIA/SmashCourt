import { useContext } from 'react';
import { IoIosLogOut } from "react-icons/io";
import { Context } from '../../context/Context';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const  Navbar = () =>{
    const {handleLogout, token} = useContext(Context)
    const jwtData = jwtDecode(token)
    const navigate = useNavigate()
    const toggleTitleButton = ()=>{
        navigate('/home');
    }
    return (
    <div style={{backgroundColor:'#24317b',color:'honeydew'}}>
        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between', margin:'0 20px 0 40px'}}>
            <div>
            <h1  style={{cursor:'pointer'}} onClick={toggleTitleButton}>Smash Court</h1>
            </div>
            <div style={{display:'flex', flexDirection:'row',alignItems:'center', gap:'20px'}}>
                <span style={{fontSize:'20px'}}><b style={{paddingRight:'10px'}}>User:</b>{jwtData.username}</span>
                <IoIosLogOut size={30} onClick={handleLogout} style={{cursor:'pointer'}}/>
            </div>
        </div>
    </div>
    )
}
export default Navbar;