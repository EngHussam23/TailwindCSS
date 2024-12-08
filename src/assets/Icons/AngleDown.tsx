import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function AngleDown({
  className,
  style,
  onClick,
  color,
  size = 24,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      style={style}
      fill={color}
    >
      <path d="M11.9996 16.0001C11.4726 16.0001 10.9606 15.7751 10.5956 15.3841L5.26956 9.68306C4.89256 9.27905 4.91356 8.64606 5.31656 8.26906C5.71956 7.89406 6.35356 7.91406 6.72956 8.31706L11.9996 13.9571L17.2696 8.31706C17.6456 7.91306 18.2806 7.89306 18.6826 8.26906C19.0856 8.64606 19.1076 9.27905 18.7306 9.68306L13.4046 15.3841C13.0386 15.7751 12.5266 16.0001 11.9996 16.0001Z" />
    </svg>
  );
}

export default AngleDown;
