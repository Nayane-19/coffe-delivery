import { ReactNode } from "react"
import "./Button.scss"

interface ButtonProps {
    children: ReactNode;
    className: string;
}

export function Button({ children, className }: ButtonProps) {
    return (
        <button className={`Button ${className}`}>
            {children}
        </button>
    )
}