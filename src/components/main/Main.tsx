interface MainProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Main = (props: MainProps) => <main>{props.children}</main>;
