import { ReactNode } from "react"
import "./Button.scss"

interface ButtonProps {
    children: ReactNode;
    className: string;
    onClick?: any;
}

export function Button({ children, className, onClick}: ButtonProps) {
    return (
        <button className={`Button ${className}`} onClick={onClick} >
            {children}
        </button>
    )
}