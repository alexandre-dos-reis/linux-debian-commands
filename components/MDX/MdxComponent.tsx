import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

type MdxComponentProps = {
  code: string;
};

const MdxComponent = ({ code }: MdxComponentProps) => {
  const Component = useMemo(
    () => getMDXComponent(code),
    [code]
  );

  return <Component/>
};

export default MdxComponent;
