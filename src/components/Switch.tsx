interface toggle {
    toggle: boolean;
    setToggle: any;
}

function Switch({toggle, setToggle}: toggle) {

    const toggleClass = ' transform translate-x-5';

    return (
      <div className="md:w-10 md:h-3 w-10 h-2 flex items-center bg-gray-200 rounded-full p-1 cursor-pointer"
        onClick={() => {
            setToggle(!toggle);
        }} >
  
        {/* Switch */}
            <div
                className =  {toggle  ? "bg-blue-600 md:w-5 md:h-5 h-4 w-3 rounded-full shadow-md transform" +   toggleClass :
                "bg-gray-400 md:w-5 md:h-5 h-4 w-3 rounded-full shadow-md transform"}
            >
            </div>
        </div>
    );
}
  
export default Switch;