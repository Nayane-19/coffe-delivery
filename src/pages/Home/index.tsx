import { Banner } from "../../Componentes/Banner";
import { Card } from "../../Componentes/Card";
import { coffes } from "../../mocks/coffes-mock";
import "./Home.scss"


export function Home() {
    return(
        <div className="Home">
            <Banner/>
            <h2>Nossos cafés</h2>
            <div className="coffes-cards">
                {coffes.map((coffe) => {
                    return (
                        <Card coffe={coffe} />
                    )
                })}
            </div>
        </div>
    )
}