import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { InfoCoffe } from "../InfoCoffe";
import CoffeImg from "../../assets/coffe-banner.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Banner.scss"


export function Banner() {
    return (
        <div className="Banner">
            <div className="left-container">
                <div className="title">
                    <h1>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <span>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora 
                    </span>
                </div>
                <div className="grid-options">
                    <InfoCoffe className="yellow-dark" icon={<ShoppingCart size={13} weight="fill" />} >
                        Compra simples e segura
                    </InfoCoffe>
                    <InfoCoffe className="yellow-dark" icon={<Package size={13} weight="fill" />} >
                        Embalagem mantém o café intacto
                    </InfoCoffe>
                    <InfoCoffe className="yellow-dark" icon={<Timer size={13} weight="fill" />} >
                        Entrega rápida e rastreada
                    </InfoCoffe>
                    <InfoCoffe className="yellow-dark" icon={<Coffee size={13} weight="fill" />} >
                        O café chega fresquinho até você
                    </InfoCoffe>
                </div>
            </div>
            <LazyLoadImage src={CoffeImg} alt="coffe-banner" effect="blur" />
        </div>
    )
}