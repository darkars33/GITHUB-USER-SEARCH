import React, {useState, useEffect} from 'react'
import { CiSearch } from "react-icons/ci";
import axios from 'axios';
import toast from 'react-hot-toast';
import Repo from './repo';
import { FaLocationDot } from "react-icons/fa6";



const Home = () => {

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState('');

  const fetchUser = async (name) =>{
    try {
      const response= await axios.get(`https://api.github.com/users/${name}`);
      if(response){
        toast.success('Successfully created!');
      }
      setUser(response.data);
      setRepos(response.data.repos_url)
    } catch (error) {
      toast.error('User not found');
      console.log(error.message);
    }
  }

// useEffect(()=>{
//   fetchUser();
// },[])

const handleSubmit = (e) =>{
  e.preventDefault();
  fetchUser(username);
}

// console.log(user)
// console.log(repos);

  return (
    <div className='w-full p-5 flex flex-col items-center justify-center gap-10'>
      <nav className='p-5 bg-white w-[70%] rounded-xl flex justify-around'>
          <h1 className='text-black font-bold text-[2rem]'>GitHub User Search</h1>
          <form action="" className='w-[50%] flex items-center relative' onSubmit={handleSubmit}>
            <input type="text" className='p-2 w-[100%] bg-slate-300 rounded-3xl focus:outline-none px-4' placeholder='Search username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <CiSearch  className='text-[2rem] absolute right-4'/>
          </form>
        </nav> 
        
          {user && (
            <div className='p-6 max-w-[40%] bg-slate-600 rounded-xl'>
            <div className='flex  items-center gap-10'>
              <div className='flex flex-col w-[50%] '>
              <img src={user.avatar_url} alt="" className='w-24 h-24 rounded-full'/>
              <h1 className='text-white text-[20px] font-bold'>{user.name}</h1>
              <h1 className='text-white text-[18px]'>{user.login}</h1>
              </div>
              <div className='flex flex-col  gap-3'>
              <h1 className='text-white text-[20px] '>{user.bio}</h1>
              <h1 className='text-white text-[18px]'>{user.location}</h1>
              <div className='flex gap-4'>
              <h1 className='text-white text-lg '>{user.followers} followers</h1>
              <h1 className='text-white text-lg '>{user.following} following</h1>
              </div>
              </div>
            </div>
            </div>
          )}
          {user && <Repo repos={repos}/>}
    </div>
  )
}

export default Home;
