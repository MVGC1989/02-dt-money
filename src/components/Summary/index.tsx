import { useContext } from 'react';
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "../Summary/styles";

export function Summary (){
    const {transactions} = useContext(TransactionsContext)
    console.log(transactions)

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