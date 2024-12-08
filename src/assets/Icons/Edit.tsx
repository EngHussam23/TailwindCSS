import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function Edit({
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
      <path d="M17.0081 3.69886L15.5713 5.21645L18.8789 8.71007L20.3148 7.19248C20.532 6.96311 20.7044 6.69078 20.8219 6.39106C20.9395 6.09134 21 5.77009 21 5.44567C21 5.12124 20.9395 4.8 20.8219 4.50027C20.7044 4.20055 20.532 3.92823 20.3148 3.69886C19.8691 3.25025 19.2771 3 18.6615 3C18.0458 3 17.4538 3.25025 17.0081 3.69886Z" />
      <path d="M17.5562 10.1071L14.2486 6.6135L9.82865 11.2779C9.69788 11.4158 9.60869 11.5915 9.57234 11.7828L9.0803 14.403C9.05003 14.5626 9.05754 14.7275 9.10215 14.8833C9.14677 15.039 9.22711 15.1807 9.33605 15.2958C9.44498 15.4108 9.57914 15.4957 9.7266 15.5428C9.87405 15.59 10.0302 15.5979 10.1813 15.5659L12.6621 15.0423C12.8429 15.0037 13.0089 14.9095 13.1391 14.7715L17.5562 10.1071Z" />
      <path d="M9.82865 11.2779C9.69788 11.4158 9.60869 11.5915 9.57234 11.7828L9.0803 14.403C9.05003 14.5626 9.05754 14.7275 9.10215 14.8833C9.14677 15.039 9.22711 15.1807 9.33605 15.2958C9.44498 15.4108 9.57914 15.4957 9.7266 15.5428C9.87405 15.59 10.0302 15.5979 10.1813 15.5659L12.6621 15.0423C12.8429 15.0037 13.0089 14.9095 13.1391 14.7715L17.5562 10.1071L14.2486 6.6135L9.82865 11.2779Z" />
      <path d="M14.0315 15.9256C13.7702 16.2011 13.4376 16.3891 13.0755 16.466L9.76784 17.1645C9.46589 17.2282 9.15372 17.2122 8.85903 17.1179C8.56433 17.0237 8.29623 16.854 8.0785 16.624C7.86077 16.3941 7.70014 16.1109 7.61088 15.7996C7.52161 15.4884 7.50646 15.1587 7.56677 14.8397L8.22812 11.3461C8.30089 10.9637 8.47888 10.6124 8.7398 10.3363L13.3421 5.47531C13.3165 5.3832 13.3033 5.28775 13.3028 5.19175H5.02708C4.48962 5.19228 3.97431 5.41802 3.59426 5.81942C3.21422 6.22083 3.0005 6.76511 3 7.33278V18.859C3.0005 19.4266 3.21422 19.9709 3.59426 20.3723C3.97431 20.7737 4.48962 20.9995 5.02708 21H15.9398C16.4773 20.9995 16.9926 20.7737 17.3726 20.3723C17.7527 19.9709 17.9664 19.4266 17.9669 18.859V11.769L14.0315 15.9256Z" />
    </svg>
  );
}

export default Edit;
