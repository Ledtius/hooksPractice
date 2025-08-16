const Box = ({ children, prove }) => {
  return (
    <>
      <div className="border-1 border-red-400 w-fit p-2">{children}</div>
      {prove}
    </>
  );
};

export default Box;
