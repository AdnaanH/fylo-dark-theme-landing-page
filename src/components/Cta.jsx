import introStay from '../assets/illustration-stay-productive.png' 
import arrow from '../assets/icon-arrow.svg'

const Cta = () => {
  return (
    <section className="sm:min-h-screen min-h-96 flex sm:flex-row flex-col sm:gap-10 gap-4 justify-between items-center sm:px-24 px-6 sm:py-0 py-28">
        <div className="sm:w-6/12 w-full block">
          <img src={introStay} alt="intro" />
        </div>
        <div className="sm:w-6/12 w-full flex flex-col">
          <h1 className='flex sm:flex-col flex-row sm:text-4xl text-lg text-white font-bold mb-6'>Stay productive, <span> wherever you are</span></h1>
          <p className='mb-4 text-lg text-white font-light'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
              storage needs.</p>
          <p className='mb-4 text-lg text-white font-light'>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
              attachments required.</p>
          <h3 className='flex items-center justify-between cursor-pointer text-xl border-b-2 border-FCyan sm:w-5/12 w-8/12 py-2 text-FCyan'>See how Fylo works <img src={arrow} alt="" className='mr-1 w-[30px] h-[30px]' /></h3>
        </div>
    </section>
  )
}

export default Cta
