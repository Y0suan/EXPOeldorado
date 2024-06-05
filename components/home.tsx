import Link from 'next/link'
import React from 'react'

export const HomeExpo = () => {
  return (
    <div className=' w-[100%] sm:h-[100vh] h-auto overflow-hidden bg-white fondoFondoTotal '>
        <div className=' overflow-hidden  w-[100%] sm:h-3/6 h-auto sm:p-16 p-8 sm:px-28 flex justify-between items-center sm:flex-row flex-col sm:gap-0 gap-16 ' >
            <div>
                <img className='h-36' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1717068302/logo_expo_tccmy6.png' ></img>
                <h3 className='text-lg pt-2 text-gray-900 ' >La exposición a cielo abierto <span className='font-semibold' >más grande de la provincia</span> </h3>
            </div>
            <div className='flex justify-center items-center sm:gap-16'>
                <img className='sm:w-60 w-40 h-5 sm:h-8' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1717068302/misiones_qaiyem.png' ></img>
                <img className='sm:h-28  h-20' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1717070415/avancemos_kpykjk.png' ></img>
            </div>
        </div>
        <div className=' overflow-hidden p-10 sm:px-32  w-[100%] sm:h-3/6 h-auto fondoExpo flex justify-between sm:flex-row flex-col sm:gap-0 gap-8' >
            <div className='text-white m-[-8px] ' >
            <h2 className='font-bold sm:text-4xl ' >!La Expo te espera!</h2>
            <h3 className='font-light text-xl ' >del 14 al 17 de Noviembre</h3>
            </div>
            <Link className=' m-[-8px] sm:mr-60 bg-[#C86351] rounded-full text-white font-semibold w-fit h-fit px-4 py-2' href="/preInscripcion"  >PRE-INSCRIBETE ACÁ</Link>
            <img className=' invisible sm:visible  absolute w-[60vw] sm:bottom-[-40px] sm:left-[250px]  ' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1717068302/trama_trqzqh.png' ></img>
        </div>
    </div>
  )
}
