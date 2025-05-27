import { useContext, useState } from "react";
import { Context } from "../../context/Context";
const Login = () => {
    const {
      username,
      setUsername,
      password,
      setPassword,
      handleLogin,
      password_confirmation,
      setPasswordConfirmation,
      handleRegister,
      regisMsg,
      setRegisMsg,
      validateUsername,
      validatePassword,
      validatePasswordConfirm,
      errorMsg,
      setErrorMsg,
      setValidateUsername,
      setValidatePassword,
      setValidatePasswordConfirm,
    } = useContext(Context);
    const [isLogin, setIsLogin] = useState(true)
    const toggleBackButton =()=>{
      setIsLogin(!isLogin);
      setRegisMsg('')
      setErrorMsg('')
    }
    const toggleSignUpButton =()=>{
      setIsLogin(false)
    }
    const toggleResetButton =()=>{
      setUsername('')
      setPassword('')
      setPasswordConfirmation('')
      setValidateUsername('')
      setValidatePassword('')
      setValidatePasswordConfirm('')
      setRegisMsg('')
      setErrorMsg('')
    }
  return (
    <div style={{height:'100vh',display:"flex",width:'100%'}}>
      <div style={{width:'100%',backgroundColor:"#24317b",color:'honeydew'}}>
        <div style={{padding:'350px 0 0 0', fontWeight:'bold',fontSize:'120px',textAlign:'center'}}>
          Smash Court
          </div>
      </div>
      <div style={{width:'60%',margin:'280px 40px'}}>
        <div style={{textAlign:'left',fontWeight:'bold',fontSize:'50px'}}>{isLogin ? 'Login':'Register'}</div>
        {regisMsg && (<div style={{color:'green', fontWeight:'bold'}}>{regisMsg}</div>)}
        {errorMsg && (<div style={{color:'red', fontWeight:'bold'}}>{errorMsg}</div>)}
        {isLogin ? (
          <>
          <div id='username' style={{display:'flex', flexDirection:'column'}}>
            <p style={{fontSize:'30px', fontWeight:'bold',marginTop:'10px'}}>Username:</p>
            <input type="text" id="username" placeholder="Username" style={{width:'100%'}} 
            value={username} onChange={(e)=> setUsername(e.target.value)} required />
            {validateUsername && (<div style={{color:'red', marginTop:'5px'}}>{validateUsername}</div>)}
        </div>
        <div id='password'>
            <p 
            style={{fontSize:'30px', fontWeight:'bold',marginTop:'10px'}}>
                Password:</p>
            <input 
            type="password" id="password" placeholder="password"style={{width:'100%'}} 
            value={password} onChange={(e)=> setPassword(e.target.value)} required/>
            {validatePassword && (<div style={{color:'red', marginTop:'5px'}}>{validatePassword}</div>)}

        </div>
          </>
        ):(
          <>
          <div id='username' style={{display:'flex', flexDirection:'column'}}>
            <p style={{fontSize:'30px', fontWeight:'bold',marginTop:'10px'}}>Username:</p>
            <input type="text" id="username" placeholder="Username" style={{width:'100%'}} 
            value={username} onChange={(e)=> setUsername(e.target.value)} required />
            {validateUsername && (<div style={{color:'red', marginTop:'5px'}}>{validateUsername}</div>)}
        </div>
        <div id='password'>
            <p 
            style={{fontSize:'30px', fontWeight:'bold',marginTop:'10px'}}>
                Password:</p>
            <input 
            type="password" id="password" placeholder="Password"style={{width:'100%'}} 
            value={password} onChange={(e)=> setPassword(e.target.value)} required/>
            {validatePassword && (<div style={{color:'red', marginTop:'5px'}}>{validatePassword}</div>)}
        </div>
        <div id='password-confirm'>
            <p 
            style={{fontSize:'30px', fontWeight:'bold',marginTop:'10px'}}>
                Confirm Password:</p>
            <input 
            type="password" id="password-confirm" placeholder="Confirm Password"style={{width:'100%'}} 
            value={password_confirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)} required/>
            {validatePasswordConfirm && (<div style={{color:'red', marginTop:'5px'}}>{validatePasswordConfirm}</div>)}
        </div>
        <button onClick={toggleResetButton} style={{padding:'0 20px',fontWeight:'bold', marginTop:'10px'}}>Reset</button>
          </>
        )}
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          {isLogin ?(
            <>
              <button 
              style={{marginTop:'20px',padding:'10px',width:'100px', fontWeight:'bold',cursor:'pointer'}} 
              type="button" id="login-btn" onClick={handleLogin} disabled={!username&&!password}>Login</button>
              <button 
              style={{marginTop:'20px', padding:'10px',width:'100px', fontWeight:'bold', cursor:'pointer'}}   
              type="button" id="signup-btn" onClick={toggleSignUpButton}>Sign up</button>
            </>
          ):(
            <>
              <button 
              style={{marginTop:'20px', padding:'10px',width:'100px', fontWeight:'bold'}}  
              type="button" id="signup-btn" onClick={handleRegister} disabled={!username&&!password&&!password_confirmation}>Register</button>
                <button 
              style={{marginTop:'20px',padding:'10px',width:'100px', fontWeight:'bold'}} 
              type="button" id="login-btn" onClick={toggleBackButton}>Back</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
