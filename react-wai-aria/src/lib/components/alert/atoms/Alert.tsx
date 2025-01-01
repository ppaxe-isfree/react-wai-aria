import React, { ReactNode } from 'react';

interface AlertProps {
    className?: string;
    id?: string;
    children: ReactNode;
}

const Alert:React.FC<AlertProps> = ({className, children}) => {
    return (
        <div className={`alert${className ? ` ${className}` : ''}`}
             role="alert">
            { children }
        </div>
    )
}

export default Alert;