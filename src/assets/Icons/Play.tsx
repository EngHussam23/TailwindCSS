import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function Play({
  className,
  style,
  onClick,
  size = 24,
  color,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      onClick={onClick}
      fill={color}
    >
      <path d="M19.017 10.2887L7.01102 3.27267C6.70584 3.09544 6.35949 3.00142 6.00658 3.00002C5.65368 2.99861 5.30659 3.08987 5.00002 3.26467C4.69552 3.43561 4.44225 3.68484 4.26643 3.98655C4.09061 4.28825 3.99863 4.63147 4.00002 4.98067V19.0127C3.99863 19.3619 4.09061 19.7051 4.26643 20.0068C4.44225 20.3085 4.69552 20.5577 5.00002 20.7287C5.30648 20.9043 5.65385 20.9961 6.00709 20.9947C6.36033 20.9933 6.70696 20.8988 7.01202 20.7207L19.019 13.7047C19.3181 13.531 19.5664 13.2818 19.739 12.9821C19.9115 12.6824 20.0024 12.3425 20.0024 11.9967C20.0024 11.6508 19.9115 11.311 19.739 11.0112C19.5664 10.7115 19.3181 10.4623 19.019 10.2887H19.017Z" />
    </svg>
  );
}

export default Play;
