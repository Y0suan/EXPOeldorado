import Link from 'next/link'
import React from 'react'


const features = [
  {
    name: 'ALIMENTOS Y BEBIDAS',
    description:
      'Patio de Comidas y Bebidas - Food Truck Anfiteatro - Envasados Caseros - Cerbeza Artesanal - Bares - Paseo de Comida y Bebidas',
      link:"https://docs.google.com/forms/d/e/1FAIpQLSfdzF6eiheMYLRwowrXKUIrVWL_n6AlzZ8Rz6lK1eQ6Ub4AAA/viewform"
  },
  {
    name: 'PRODUCTOS Y SERVICIOS',
    description:
      'Comercio - Industrias - Grandes Expositores M2 - Comercio Por Catalogo - Banderas Publicitarias 2X1 - Publicidad Grafica O Reels En Pantalla Anfiteatro Escenario Principal - Publicidad Grafica O Reels En Pantalla Escenario Alternativo  - Publicidad Grafica O Reels En Pantalla Voz De La Expo - Artesanos Y Artistas- Carpinteria - Vendedores Ambulantes Por Dia - Manualidades - Viveros Y Afines -Juegos Mecanicos -Parque De Diversiones M2 - Infantiles - Vehiculos ',
      link:"https://docs.google.com/forms/d/e/1FAIpQLSeaSDnyDhb1mYs9W_tU55W-TZcbnwKnuNvbuPm0eLONt9w9sQ/viewform"
  },
  {
    name: 'RUBROS SIN COSTO',
    description:
      'Ganaderia - Instituciones - Prensa - Maquinarias ',
    link:"#"
  },
]

const preInscripcion = () => {
  return (
    <div className='bg-white relative isolate overflow-hidden bg-gray-900 w-[100%] ' > 


<img
          src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1717503486/WhatsApp_Image_2024-06-04_at_8.54.51_AM_1_w0ts8a.jpg"
          alt=""
          className="opacity-25 absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#6eff46] to-[#6f76ff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#6eff46] to-[#6f76ff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>



      <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Expo Eldorado 2024</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          ¡Bienvenidos a Expo Eldorado!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-900">
          <Link className='hover:text-gray-500 my-10 font-semibold' href={"https://drive.google.com/file/d/1BFYnX0VJm29MVrvLdarr5NPNkVs6AOHJ/view"} >REGLAMENTO EXPO ELDORADO, CHECK DISPONIBLE PARA DESCARGA</Link>
          </p>
        </div>
        <div className="mt-10 w-full h-auto flex sm:justify-center flex-wrap gap-8">
          <div className='w-fit h-auto text-gray-900 font-semibold flex flex-col' >
            <h2 className='text-xl font-bold text-blue-600 ' >RUBROS SIN COSTO</h2>
            <Link className='hover:text-center ease-in duration-900 delay-200'  href={"https://docs.google.com/forms/d/e/1FAIpQLSf7S-R_jqPTR76usdG0dZyhakTRmIlkYk5Ay_Cl9V4LZu9iDQ/closedform"} >Prensa</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSe6doynK_8PhzULSdZKhgiseeaYtJKmQFuyHzaG_VUiUQyb4w/closedform"} > Instituciones</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSctxfL53QPPSZWbquUGM5KhSh0v60Dk3H6AcDPa_00xcGMoAA/closedform"} > Ganadería</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSc76N3M6JC5jQjQ89cewSk3BIVdtTb3d-_qNLLyZmgDhq91mw/closedform"} > Maquinarias</Link>
          </div>
          <div className='w-fit h-auto text-gray-900 font-semibold flex flex-col' >
            <h2 className='text-xl font-bold text-blue-600 ' >RUBRO DE PRODUCTOS Y SERVICIOS</h2>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSctxfL53QPPSZWbquUGM5KhSh0v60Dk3H6AcDPa_00xcGMoAA/closedform"} >Vivero y Afines</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSe26Jfg2fip6JUdQDE6ZcSBkagKRIjq_jsT4yGwpOll0R576w/closedform"} >Vehículos</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSe26Jfg2fip6JUdQDE6ZcSBkagKRIjq_jsT4yGwpOll0R576w/closedform"} >Pauta Publicitaria</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSfZZ-tihAsIMtfiW7053piLnZVAF3IC3H-KAkaOiRLBmtZKHA/closedform"} >Parque de Diversiones</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSe3D1RLQdrA2BvtZCK1RE_qvbXRhqITeurWDCYhXaiOWj5xrQ/closedform"} >Manualidades</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSeijdYF5iY5r1JNdPEchdxVnjr8kkdC-iTiwoJeJ5ANC3-3zg/closedform"} >Juegos Mecánicos</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSczlMwADBtzgxM4_SvJUbNKP3s6VSCGClLrju4syxcZxlXRpA/closedform"} >Infantiles</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSfXp-06AVavHzC194P4cLeJwduuiCSDj6es-iGNPQ0iCntb5w/closedform"} >Grandes Expositores</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSdwH4neznm4cGc6ymcMsYVOjeh8dLbuBM6QWaQWSWdfRGvUxA/closedform"} >Comercio por Catalogo</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSeaSDnyDhb1mYs9W_tU55W-TZcbnwKnuNvbuPm0eLONt9w9sQ/closedform"} >Comercio</Link>
            <Link  className='hover:text-center' href={"https://docs.google.com/forms/d/e/1FAIpQLScv33a6opDWv9q9nsOCWZs0fI8OGFydHIeB4yTsUoAQEOswLw/closedform"} >Carpintería</Link>
            <Link className='hover:text-center' href={"https://docs.google.com/forms/d/e/1FAIpQLSf8qfzUxud9kahMAtlshVRg0hfxxbXIf6icUUXcVzfTGDYbzw/closedform"} >Artesanos</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSdVx2syjd-Xtej749o4yanYZjnlcw4dy2u0GBzKZHGN4jjfxw/closedform"} >Vendedores Ambulantes</Link>
          </div>
          <div className='w-fit h-auto text-gray-900 font-semibold flex flex-col' >
            <h2 className='text-xl text-blue-600  font-bold' >RUBRO DE ALIMENTOS Y BEBIDAS</h2>
            <Link className='hover:text-center' href={"https://docs.google.com/forms/d/e/1FAIpQLScmh7Q-B6FNzlOAck1Duh3PyrEzDw4eCSUbzp_R777MqQxCyQ/closedform"} >Sub-evento</Link>
            <Link className='hover:text-center' href={"https://docs.google.com/forms/d/e/1FAIpQLSeQVu9ayVqhcyhX4vA96AjXpAqfueSd_FiePYHjxXwkCXXbwg/closedform"} >Envasados Caseros</Link>
            <Link className='hover:text-center'  href={"https://docs.google.com/forms/d/e/1FAIpQLSeRgLdDwnTMlrvKDau_5bh7Q00NTUai8Pp2DhnneGNjlklmvg/closedform"} > Cerveza Artesanal</Link>
            <Link  className='hover:text-center' href={"https://docs.google.com/forms/d/e/1FAIpQLSfdzF6eiheMYLRwowrXKUIrVWL_n6AlzZ8Rz6lK1eQ6Ub4AAA/closedform"} >Patio de comidas y bebidas,<br/> Food Truck Anfiteatro,<br/> Paseo de Comidas y Bebidas,<br/> Bares</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default preInscripcion



