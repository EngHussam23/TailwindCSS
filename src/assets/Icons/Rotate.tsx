import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function Rotate({
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
      style={style}
      onClick={onClick}
      fill={color}
    >
      <path d="M20 11C19.447 11 19 11.448 19 12C19 15.86 15.859 19 12 19C10.152 19 8.403 18.26 7.111 17H10C10.553 17 11 16.552 11 16C11 15.448 10.553 15 10 15H5.253C5.055 14.959 4.848 14.983 4.651 15.07C4.633 15.077 4.614 15.08 4.596 15.088C4.583 15.095 4.569 15.094 4.556 15.101C4.529 15.117 4.514 15.143 4.488 15.16C4.201 15.337 4 15.639 4 16V21C4 21.552 4.447 22 5 22C5.553 22 6 21.552 6 21V18.68C7.63 20.141 9.755 21 12 21C16.963 21 21 16.962 21 12C21 11.448 20.553 11 20 11Z" />
      <path d="M5 12C5 8.14 8.141 5 12 5C13.848 5 15.597 5.74 16.889 7H14C13.447 7 13 7.448 13 8C13 8.552 13.447 9 14 9H18.745C18.944 9.042 19.153 9.017 19.35 8.929C19.368 8.922 19.387 8.919 19.405 8.911C19.418 8.904 19.432 8.905 19.445 8.898C19.472 8.882 19.487 8.856 19.513 8.839C19.799 8.663 20 8.361 20 8V3C20 2.448 19.553 2 19 2C18.447 2 18 2.448 18 3V5.32C16.37 3.859 14.245 3 12 3C7.037 3 3 7.038 3 12C3 12.552 3.447 13 4 13C4.553 13 5 12.552 5 12Z" />
    </svg>
  );
}

export default Rotate;
