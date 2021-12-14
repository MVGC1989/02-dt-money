import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox} from '../NewTransactionModal/styles'


import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'


interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose}: NewTransactionProps){
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    

    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()

        const data = {title, value, category,type}
        
        api.post('/transactions', data)
    }


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

            <Container onSubmit={handleCreateNewTransaction}> 
                <h2>Cadastrar Transação</h2>
                
                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        onClick={() => {setType ('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                        type="button">
                        <img src={IncomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        isActive={type === 'withdraw'}
                        activeColor="red"
                        onClick={() => {setType ('withdraw')}}>
                        
                        <img src={OutcomeImg} alt="saida" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                
                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}
