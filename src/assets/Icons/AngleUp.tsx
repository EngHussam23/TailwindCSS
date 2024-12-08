import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function AngleUp({
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
      <path d="M18.7311 14.313L13.4051 8.597C12.6621 7.801 11.3391 7.801 10.5951 8.597L5.26909 14.312C4.89209 14.716 4.91409 15.351 5.31709 15.729C5.72109 16.108 6.35309 16.086 6.73109 15.681L12.0001 10.027L17.2691 15.682C17.4661 15.893 17.7331 16 18.0001 16C18.2451 16 18.4901 15.911 18.6831 15.73C19.0861 15.351 19.1081 14.717 18.7311 14.313Z" />
    </svg>
  );
}

export default AngleUp;
