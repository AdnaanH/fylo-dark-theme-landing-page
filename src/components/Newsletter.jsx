import Button from '../components/Button'

const Newsletter = () => {
  return (
    <section className="w-full bg-FDarkBlue3 flex justify-center items-center">
        <div className="flex flex-col bg-FDarkBlue1 w-8/12 justify-center items-center p-8 text-center shadow-lg -mt-32">
            <h1 className='text-white font-bold  text-4xl'>Get early access today</h1>
            <p className='mt-8 text-white w-10/12'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                questions, our support team would be happy to help you.</p>
            <div className="w-full flex justify-between items-center mt-8">
                <input type="text" placeholder="email@example.com" className='w-8/12 px-6 py-3 rounded-3xl hover:border-none active:border-none' />
                <Button width='4/12'>Get Started For Free</Button>
            </div>

        </div>

    </section>
  )
}

export default Newsletter
