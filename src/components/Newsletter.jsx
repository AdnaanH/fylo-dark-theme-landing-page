import Button from '../components/Button'

const Newsletter = () => {
  return (
    <section className="w-full bg-FDarkBlue3 flex justify-center items-center sm:py-0 py-20">
        <div className="flex flex-col bg-FDarkBlue1 sm:w-8/12 w-11/12 justify-center items-center p-8 text-center shadow-lg sm:-mt-32 -mt-0">
            <h1 className='text-white font-bold  sm:text-4xl text-xl'>Get early access today</h1>
            <p className='sm:mt-8 mt-4 text-white sm:text-base text-sm sm:w-10/12 w-full'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                questions, our support team would be happy to help you.</p>
            <div className="w-full flex gap-4 sm:flex-row flex-col justify-between items-center mt-8">
                <input type="text" placeholder="email@example.com" className='sm:w-8/12 w-full px-6 py-3 rounded-3xl hover:border-none active:border-none' />
                <Button width='sm:w-4/12 w-full'>Get Started For Free</Button>
            </div>

        </div>

    </section>
  )
}

export default Newsletter
