import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";

interface ReactCustomElement extends JSX.Element {
  children: {
    type: string
  }
}

// type PreProps = {
//   children: JSX.Element | JSX.Element[];
// } 

const Pre = (props: ReactCustomElement) => {
  if (typeof props !== "string" && props.children.type === "code") {
    return <>{props.children}</>;
  }

  return <pre {...props} />;
};

type MdxComponentProps = {
  code: string;
};

const MdxComponent = ({ code }: MdxComponentProps) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  // @ts-ignore
  return <Component components={{ pre: Pre }} />;
};

export default MdxComponent;
