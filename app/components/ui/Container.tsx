import {
  HTMLAttributes,
  ReactNode,
} from "react";

type ContainerProps =
  HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
  };

export default function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-[1600px]
        px-5
        md:px-8
        lg:px-12
        xl:px-16
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}