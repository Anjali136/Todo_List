import React from 'react'
import { useAuth } from '../context/UserContext'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Navbar() {
    const navigate=useNavigate();
    const {username}=useAuth();
    const token=Cookies.get('token');
    
    const handleuserAuth=()=>{
        navigate('/auth')
    }

    const handlelogout=()=>{
        Cookies.remove('id');
        Cookies.remove('token');
        
        toast("Logout Successfully",{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme:"dark",
        });
        navigate('/auth')
        window.location.reload();
    }
  return (
    <nav className='flex justify-between bg-[#022c22] h-14 items-center'>
        <h1 className='text-white text-4xl ml-8 font-bold'>ToDO</h1>

        <p className='text-2xl font-medium text-blue-200 font-mono'> {username?`Welcome ${username.toUpperCase()}`:""}</p>
        <header>
           <ul>
            {token? <p className='text-white text-xl font-medium mr-7 cursor-pointer' onClick={handlelogout}>Logout</p>:<p className='text-white text-xl font-medium mr-7 cursor-pointer' onClick={handleuserAuth}>Login</p>}
           </ul>
        </header>
    </nav>
  )
}

export default Navbar