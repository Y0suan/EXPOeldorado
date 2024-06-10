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
          <p className="mt-6 text-lg leading-8 text-gray-600">
          RUBROS Y SUBRUBROS
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 flex flex-col ">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {/* <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  </div> */}
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                <Link href={feature.link} className=' bg-[#C86351] text-white p-2 px-10 rounded-full px-4 mt-4'  >Hace Click</Link>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  )
}

export default preInscripcion



