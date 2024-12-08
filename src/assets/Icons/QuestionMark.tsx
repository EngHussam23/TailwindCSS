import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  size?: number;
  color?: string;
};

function QuestionMark({
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
      <path d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C20.9974 9.61385 20.0483 7.32619 18.3611 5.63893C16.6738 3.95167 14.3861 3.00262 12 3ZM12 17.4C11.822 17.4 11.648 17.3472 11.5 17.2483C11.352 17.1494 11.2366 17.0089 11.1685 16.8444C11.1004 16.68 11.0826 16.499 11.1173 16.3244C11.152 16.1498 11.2377 15.9895 11.3636 15.8636C11.4895 15.7377 11.6498 15.652 11.8244 15.6173C11.999 15.5826 12.18 15.6004 12.3444 15.6685C12.5089 15.7366 12.6494 15.852 12.7483 16C12.8472 16.148 12.9 16.322 12.9 16.5C12.9 16.7387 12.8052 16.9676 12.6364 17.1364C12.4676 17.3052 12.2387 17.4 12 17.4ZM12.9 13.3194V13.8C12.9 14.0387 12.8052 14.2676 12.6364 14.4364C12.4676 14.6052 12.2387 14.7 12 14.7C11.7613 14.7 11.5324 14.6052 11.3636 14.4364C11.1948 14.2676 11.1 14.0387 11.1 13.8V12.5238C11.1 12.4026 11.1245 12.2827 11.1719 12.1712C11.2194 12.0597 11.2889 11.9589 11.3763 11.8749C11.463 11.7904 11.5661 11.7246 11.6793 11.6816C11.7925 11.6385 11.9133 11.6192 12.0342 11.6247C12.2082 11.631 12.3817 11.6021 12.5442 11.5397C12.7068 11.4773 12.855 11.3827 12.9801 11.2616C13.1052 11.1404 13.2045 10.9953 13.2721 10.8348C13.3397 10.6744 13.3741 10.5019 13.3734 10.3278C13.3872 9.96976 13.2583 9.62088 13.0149 9.35791C12.7715 9.09495 12.4336 8.93944 12.0756 8.9256C11.7176 8.91175 11.3687 9.04071 11.1057 9.28409C10.8428 9.52748 10.6872 9.86536 10.6734 10.2234C10.6706 10.342 10.644 10.4588 10.5952 10.5669C10.5464 10.6751 10.4765 10.7723 10.3894 10.853C10.3024 10.9336 10.2001 10.996 10.0886 11.0364C9.97707 11.0768 9.85857 11.0945 9.7401 11.0883C9.50183 11.0789 9.27701 10.9754 9.11502 10.8004C8.95302 10.6254 8.8671 10.3933 8.8761 10.155C8.90165 9.57625 9.08631 9.01575 9.40977 8.53515C9.73322 8.05455 10.1829 7.67245 10.7095 7.43088C11.236 7.1893 11.819 7.09761 12.3943 7.16589C12.9695 7.23416 13.5149 7.45975 13.9702 7.81786C14.4256 8.17596 14.7734 8.65271 14.9754 9.19567C15.1774 9.73863 15.2257 10.3268 15.1151 10.8954C15.0045 11.4641 14.7392 11.9912 14.3484 12.4189C13.9576 12.8465 13.4564 13.1581 12.9 13.3194Z" />
    </svg>
  );
}

export default QuestionMark;
