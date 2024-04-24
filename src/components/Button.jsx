const Button = ({ children, bg = 'bg-gradient-to-r from-FCyan to-FBlue', text = 'text-white', width = 'w-2/12' }) => {
  return (
    <button className={`${bg} ${text} ${width} px-6 py-3 font-BeVietnam shadow-md font-bold text-base rounded-3xl`}>{children}</button>
  );
};

export default Button;
