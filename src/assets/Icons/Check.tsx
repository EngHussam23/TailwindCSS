import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function Check({
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
      <path d="M9.72433 18C9.4632 18.0011 9.21203 17.8907 9.02454 17.6924L4.30195 12.693C4.20782 12.5927 4.13272 12.4732 4.08092 12.3413C4.02912 12.2094 4.00165 12.0676 4.00007 11.9241C3.99689 11.6343 4.09936 11.3549 4.28496 11.1475C4.47055 10.9401 4.72407 10.8217 4.98973 10.8182C5.25538 10.8147 5.51143 10.9265 5.70153 11.129L9.72832 15.3901L18.2978 6.31057C18.4881 6.10809 18.7444 5.99641 19.0103 6.00009C19.2761 6.00377 19.5297 6.12251 19.7153 6.3302C19.9009 6.53788 20.0033 6.8175 19.9999 7.10752C19.9965 7.39755 19.8877 7.67424 19.6973 7.87672L10.4241 17.6924C10.2366 17.8907 9.98546 18.0011 9.72433 18Z" />
    </svg>
  );
}

export default Check;
