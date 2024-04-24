const Testimony = ({testimony}) => {
  return (
    <div className="sm:w-4/12 w-full gap-6 flex flex-col bg-FDarkBlue4 shadow-xl p-6 rounded-md">
        <p className="mt-2 text-base text-white text-medium">{testimony.comment}</p>
        <div className="flex justify-start items-center gap-4">
            <img src={testimony.imgUrl} alt="" className="w-[30px] h-[30px] rounded-full" />
            <div className="flex flex-col text-white">
                <strong>{testimony.name}</strong>
                <small>{testimony.position}</small>
            </div>
        </div>
    </div>
  )
}

export default Testimony
