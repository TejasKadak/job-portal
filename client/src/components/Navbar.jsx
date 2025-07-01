import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../context/AppContext';


const Navbar = () => {

  const {openSignIn} = useClerk();
  const {user} = useUser();

  const navigate = useNavigate();

  const {setShowRecruiterLogin} = useContext(AppContext)

  return (
    <div className='shadow py-4'>
      <div className='container px-4 sm:px-6 md:px-10 2xl:px-20 mx-auto flex flex-wrap sm:flex-nowrap justify-between items-center'>
        <img onClick={()=> navigate('/')}
        className='h-10 w-auto cursor-pointer max-w-full rounded-xl object-contain' 
        src={assets.logo} alt="" />
        {
          user
          ?<div className='flex items-center gap-3'>
            <Link to={'/applications'}>Applied Jobs</Link>
            <p>|</p>
            <p className='max-sm:hidden'>Hi, {user.firstName + " " + user.lastName}</p>
            <UserButton/>
          </div>
          :<div className='flex gap-4 max-sm:text-xs'>
            <button onClick={e => setShowRecruiterLogin(true)} className='text-gray-600'>Recruiter Login</button>
            <button onClick={ e => openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
        </div>
        }
        
      </div>
    </div>
  )
}

export default Navbar
