import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center sm:py-14 py-10 sm:px-16 px-6 bg-FDarkBlue1">
        <div className='w-3/12 '>
            <img src={logo} alt="logo"  />
        </div>
        <ul className='sm:w-3/12 w-6/12 flex flex-row justify-between items-center'>
            <li className='text-white font-FRaleway font-medium text-normal sm:text-xl text-sm cursor-pointer hover:font-bold hover:underline ease-out'>Features</li>
            <li className='text-white font-FRaleway font-medium text-normal sm:text-xl text-sm cursor-pointer hover:font-bold hover:underline ease-out'>Team</li>
            <li className='text-white font-FRaleway font-medium text-normal sm:text-xl text-sm cursor-pointer hover:font-bold hover:underline ease-out'>Sign in</li>
        </ul>
    </header>
  )
}

export default Header
