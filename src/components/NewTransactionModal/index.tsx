import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from '../NewTransactionModal/styles'


import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'


interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose}: NewTransactionProps){
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"//colocar nova clase para estilizar o modal e o overlay
            className="react-modal-content"       
            >

            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close">
                <img src={closeImg} alt="close" />
            </button>

            <Container> 
                <h2>Cadastrar Transação</h2>
                
                <input 
                    placeholder="Título"
                />

                <input 
                    type="number"
                    placeholder="Valor"
                />

                <TransactionTypeContainer>
                    <button 
                        type="button">
                        <img src={IncomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </button>

                    <button 
                        type="button">
                        <img src={OutcomeImg} alt="saida" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>
                
                <input 
                    placeholder="Categoria"
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}
