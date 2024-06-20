import React, { ReactNode, useEffect, useRef } from "react";

interface IToast{
    className?: string;
    timer?: number;
    children: ReactNode;
}

const Toast:React.FC<IToast> = ({className, timer, children}) => {

    const toastRef = useRef(null);

    useEffect(() => {
        const useTextContent = toastRef.current!.textContent;

        console.log(useTextContent.split(' '));

    }, []);

    const useGetToastTimer = () => {
        
    }


    return (
        <div className={`aria-toast${className ? ` ${className}` : ''}`}
             aria-live="polite"
             ref={toastRef}>
            { children }
        </div>
    )
}

export default Toast;