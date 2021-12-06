import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'

import { Container } from "../Summary/styles";

export function Summary (){
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="saidas" />
                </header>
                <strong> -R$100,00</strong>
            </div>

            <div className="green">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="total" />
                </header>
                <strong>R$4000,00</strong>
            </div>
        </Container>
    )
}