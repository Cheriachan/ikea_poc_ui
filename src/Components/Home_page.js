import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Home_page = ({Token,}) => { 
const navigate=useNavigate();
const access_token= localStorage.getItem('access_token');
useEffect(()=>{
//Retrieving the access token from the local storage

const roles=JSON.parse(localStorage.getItem('roles'));
console.log(roles);
console.log(access_token);
//Redirecting to login Page if access token is not found
if(!access_token){
 navigate('/');
                 }
                },[navigate]);

const handleLogout=()=>{
localStorage.clear();
navigate('/');
    
                        }
    

  return (
    <>
    <div className="flex justify-center items-center h-screen bg-yellow-400">
            <button 
                className="bg-blue-700 hover:bg-blue-500 focus:outline-none focus:border-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>

    </>
  )
}

export default Home_page
