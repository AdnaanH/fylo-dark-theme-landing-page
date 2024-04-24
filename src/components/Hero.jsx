import intro from '../assets/illustration-intro.png'
import Button from './Button'

const Hero = ({
  title = 'All your files in one secure location, accessible anywhere.',
  subtitle = 'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.'
}) => {
  return (
    <section className='w-full flex flex-col justify-center items-center sm:min-h-screen min-h-96 pb-20 bg-FDarkBlue1 sm:px-16 px-6'>
        <img src={intro} alt="introduction" />
        <h1 className='sm:w-8/12 w-11/12 sm:text-5xl text-2xl text-center font-FOpenSans py-6 mt-4 text-white'>{title}</h1>
        <p className='sm:w-6/12 w-11/12 text-center sm:text-xl text-base text-white mb-10'>{subtitle}</p>
        <Button width='sm:w-3/12 w-6/12'>Get Started</Button>
    </section>
  )
}

export default Hero
