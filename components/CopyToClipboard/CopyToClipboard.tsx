import copy from "clipboard-copy";

type CopyToClipboardProps = {
  children: React.ReactNode;
  stringToCopy: string;
};

const CopyToClipboard = ({
  children,
  stringToCopy: valueToCopy,
}: CopyToClipboardProps) => {
  return <div onClick={() => copy(valueToCopy)}>{children}</div>;
};

export default CopyToClipboard;