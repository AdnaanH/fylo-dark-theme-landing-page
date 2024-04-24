const Card = ({children}) => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center sm:w-3/6 w-full h-[300px] bg-transparent px-4 py-8'>
      {children}
    </div>
  )
}

export default Card
