function Button({ btnName, color, hoverColor, onClick }) {
  return (
    <>
      <button
        className={`${color} ${hoverColor} text-white font-bold py-2 px-4 rounded`}
        onClick={onClick}
      >
        {btnName}
      </button>
    </>
  );
}

export default Button;
