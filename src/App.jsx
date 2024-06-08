import React from 'react'
import NamiraLogo from './assets/img/logo-monochrome.svg'

function App() {
  return (
    <main className='bg-gray-50 h-screen'>
      <div className='bg-gray-900 py-3 px-5 md:px-0'>
        <div className='container mx-auto flex items-center justify-between'>
          <div>
            <p className='text-white text-xs space-x-2'>
              <i className="fa-solid fa-location-dot"></i>
              <span>Jl. Cibungkul RT.05 RW.13, Kel. Sukamajukaler</span>
            </p>
          </div>
          <div className='flex items-center gap-8'>
            <a href="#" className='flex items-center gap-2 text-white'>
              <i className="fa-brands fa-whatsapp"></i>
              <span className='text-xs'>+62822 1989 9705</span>
            </a>
            <a href="#" className='hidden md:flex items-center gap-2 text-white'>
              <i className="fa-brands fa-instagram"></i>
              <span className='text-xs'>@kanglerian</span>
            </a>
          </div>
        </div>
      </div>
      <nav className='bg-orange-600 shadow-lg py-8'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0'>
          <div className='w-full md:w-1/3'>
            <a href="#" className='flex justify-center md:justify-start items-center gap-5'>
              <img src={NamiraLogo} alt="" className='w-12' />
              <span className='font-bold text-white'>Ayumi Printing</span>
            </a>
          </div>
          <div className='w-auto flex flex-col md:flex-row justify-center items-center gap-8 px-10 md:px-0 md:gap-8'>
            <ul className='w-full flex flex-col md:flex-row items-center justify-center gap-5 md:gap-3'>
              <li>
                <a href="#" className='text-white hover:text-gray-800 text-sm font-bold px-3 py-2'>Beranda</a>
              </li>
              <li>
                <a href="#" className='text-white hover:text-gray-800 text-sm px-3 py-2'>Souvenir Pernikahan</a>
              </li>
              <li>
                <a href="#" className='text-white hover:text-gray-800 text-sm px-3 py-2'>Percetakan & Desain</a>
              </li>
              <li>
                <a href="#" className='text-white hover:text-gray-800 text-sm px-3 py-2'>Pulsa & Token Listrik</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  )
}

export default App