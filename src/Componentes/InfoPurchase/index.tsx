import { ReactNode } from "react"
import "./InfoPurchase.scss"

interface InfoPurchaseProps {
    icon: ReactNode;
    title: ReactNode;
    subtitle: ReactNode;
    className: "purple" | "yellow" | "yellow-dark";
}

export function InfoPurchase({icon, title, subtitle, className}: InfoPurchaseProps) {
    return (
        <div className="InfoPurchase">
            <div className={`icon-container ${className}`}>
                {icon}
            </div>
            <div className="right-info">
                {title}
                {subtitle}
            </div>
        </div>
    )
}