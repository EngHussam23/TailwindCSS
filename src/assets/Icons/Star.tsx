import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function Star({ className, style, onClick, color, size = 24 }: IconProps) {
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
      <path d="M20.9309 9.77014C20.8523 9.51399 20.7061 9.28614 20.509 9.11276C20.3119 8.93938 20.072 8.8275 19.8167 8.78996L15.2708 8.10083L13.2377 3.80361C13.1238 3.56242 12.9474 3.35932 12.7286 3.21729C12.5097 3.07527 12.2571 3 11.9994 3C11.7416 3 11.489 3.07527 11.2702 3.21729C11.0513 3.35932 10.8749 3.56242 10.761 3.80361L8.7279 8.10083L4.18205 8.78996C3.92717 8.82875 3.68775 8.94111 3.49084 9.11435C3.29393 9.28759 3.14737 9.51482 3.06772 9.77036C2.98806 10.0259 2.97848 10.2996 3.04005 10.5605C3.10162 10.8214 3.2319 11.0592 3.41616 11.247L6.70652 14.5922L5.92983 19.3147C5.88556 19.5798 5.91343 19.8525 6.0103 20.1019C6.10717 20.3512 6.26914 20.5672 6.47781 20.7254C6.68648 20.8835 6.93349 20.9774 7.19076 20.9964C7.44804 21.0154 7.70526 20.9588 7.93321 20.8329L11.9994 18.6031L16.0655 20.8329C16.2936 20.9576 16.5505 21.0134 16.8073 20.9939C17.0641 20.9743 17.3106 20.8804 17.5189 20.7225C17.7272 20.5646 17.8891 20.3492 17.9863 20.1004C18.0835 19.8517 18.1121 19.5795 18.0689 19.3147L17.2922 14.5922L20.5826 11.246C20.7677 11.0591 20.8987 10.8214 20.9603 10.5604C21.0219 10.2993 21.0117 10.0254 20.9309 9.77014Z" />
    </svg>
  );
}

export default Star;
