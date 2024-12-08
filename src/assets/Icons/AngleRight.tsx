import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function AngleRight({
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
      <path d="M15.3841 10.5951L9.68309 5.26906C9.28009 4.89306 8.64609 4.91306 8.27009 5.31706C7.89309 5.72106 7.91409 6.35406 8.31709 6.73106L13.9581 12.0001L8.31709 17.2691C7.91409 17.6461 7.89209 18.2791 8.26909 18.6831C8.46609 18.8941 8.73209 19.0001 9.00009 19.0001C9.24509 19.0001 9.49009 18.9111 9.68309 18.7311L15.3841 13.4051C15.7811 13.0331 16.0001 12.5351 16.0001 12.0001C16.0001 11.4651 15.7811 10.9671 15.3841 10.5951Z" />
    </svg>
  );
}

export default AngleRight;
