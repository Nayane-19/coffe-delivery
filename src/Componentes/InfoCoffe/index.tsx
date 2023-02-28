import { ReactNode } from "react"
import "./InfoCoffe.scss"

interface InfoCoffeProps {
    children: ReactNode;
    icon: ReactNode;
    className: "yellow" | "yellow-dark" | "purpler-dark" | "base-text";
}

export function InfoCoffe({children, icon, className}: InfoCoffeProps) {
    return (
        <div className="InfoCoffe">
            <div className={`circle-icon ${className}`}>
                {icon}
            </div>
            {children}
        </div>
    )
}