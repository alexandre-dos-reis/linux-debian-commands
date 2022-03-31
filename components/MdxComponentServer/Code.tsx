type CodeProps = {
  sign: string;
  children: React.ReactChild;
};

const Code = ({ sign, children }: CodeProps) => {
  return (
    <>
      <code>
        {/* <span className="sign">{sign}</span>  */}
        {children}
      </code>
    </>
  );
};

export default Code;
