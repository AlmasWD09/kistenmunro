import React from 'react';

interface CustomBtnProps {
  children?: React.ReactNode;
  text?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
  as?: 'button' | 'a';
  href?: string;
}

const CustomBtn: React.FC<CustomBtnProps> = ({
  children,
  text,
  icon,
  showIcon = true,
  onClick,
  className = '',
  textClassName = '',
  iconContainerClassName = '',
  iconClassName = '',
  as = 'button',
  href,
  ...props
}) => {
  const baseClasses = "cursor-pointer flex items-center gap-3 bg-primary text-white px-1 rounded-full transition-colors group";
  
  const content = (
    <>
      <span className={`text-[12px] md:text-base font-medium py-2 xl:py-4 pl-4 ${textClassName}`}>
        {children || text}
      </span>
      
      {showIcon && icon && (
        <div className={`flex items-center justify-center w-7 h-7 xl:w-12 xl:h-12 bg-white rounded-full group-hover:bg-slate-100 transition-colors ${iconContainerClassName}`}>
          <div className={`w-6 h-6 xl:w-8 xl:h-8 ${iconClassName}`}>
            {icon}
          </div>
        </div>
      )}
    </>
  );

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};

export default CustomBtn;