import React, { useContext, useEffect, useState } from 'react'
import { auth } from './firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged ,signInWithEmailAndPassword} from 'firebase/auth';


const authcontext =React.createContext();

export function useauth(){
    return useContext(authcontext)
}

export  function Authprovider({children}) {
  const[currentuser,setcurrentuser]=useState();

const signup= (email,password)=>{
   return createUserWithEmailAndPassword( auth ,email,password) //it is changed that in firebase v9 auth.createuser...... is changed that it is integrated at firebase/auth as a function by it self
}
const login=(email,password)=>{
  return signInWithEmailAndPassword(auth , email,password)
}


useEffect(()=>{
   const unsubscribe= onAuthStateChanged( auth ,user =>{ // awarness is needed here that auth is called first because we have to profe for it our illigabelity as approval
        setcurrentuser(user);
    })

    return unsubscribe;
},[])



    const value = {  // it have to be an object dont forget this
       currentuser,
       signup,
        login,
    }
  return (
    <>
      <authcontext.Provider value={value}>
         {children}
      </authcontext.Provider>
    </>
  )
}
