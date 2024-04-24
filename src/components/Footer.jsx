import logo from '../assets/logo.svg'
import map from '../assets/icon-location.svg'
import phone from '../assets/icon-phone.svg'
import email from '../assets/icon-email.svg'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="min-h-96 bg-FDarkBlue3 flex flex-col gap-10 justify-start items-start sm:px-24 px-6 py-24">
        <div className="flex justify-start w-2/6">
            <img src={logo} alt="logo" />
        </div>
        <div className="flex sm:flex-row flex-col justify-between items-start gap-8 w-full">
            <div className="sm:w-4/12 w-full flex justify-start items-start gap-2">
                <img src={map} alt="" className='w-[20px] h-[30px]' />
                <p className='text-white text-base w-full'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className="sm:w-3/12 w-full flex flex-col gap-4">
                <h1 className='flex items-center gap-4 text-white text-base'><img src={phone} alt='phone icon' className='w-[20px] h-[20px]' />+1-543-123-4567</h1>
                <h1 className='flex items-center gap-4 text-white text-base'><img src={email} alt="email icon" />example@fylo.com</h1>
            </div>
            <ul className="sm:w-1/12 w-full flex flex-col gap-4 text-white font-normal text-xl">
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
            </ul>
            <ul className="sm:w-1/12 w-full flex flex-col gap-4 text-white font-normal text-xl">
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
            </ul>
            <div className="sm:w-2/12 w-full flex sm:justify-end justify-start items-center gap-4">
                <FaFacebook color='#ffffff' size='30' />
                <FaTwitter color='#ffffff' size='30' />
                <FaInstagram color='#ffffff' size='30' />
            </div>
        </div>
    </footer>
  )
}

export default Footer
