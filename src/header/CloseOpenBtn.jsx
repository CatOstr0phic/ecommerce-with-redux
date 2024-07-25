const CloseOpenBtn = ({ closeClick, isOpen }) => {
  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-[#eee] transition ease transform duration-300`;

  return (
    <div
      className=" flex gap-3 bg-blue-700 tems-center 
      justify-center p-1 px-2 rounded-sm text-white"
    >
      <button
        className=" flex flex-col h-5 w-4 mt-[3px] rounded "
        onClick={closeClick}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-1.5 group-hover:opacity-100"
              : "opacity- group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : " group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-2 group-hover:opacity-100"
              : " group-hover:opacity-100"
          }`}
        />
      </button>
      Categories
    </div>
  );
};
export default CloseOpenBtn;
