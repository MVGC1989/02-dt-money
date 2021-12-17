import Modal from 'react-modal'
import { useState } from 'react'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import {TransactionsProvider} from "./TransactionsContext"

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){//abrir modal
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){//fechar modal
        setIsNewTransactionModalOpen(false)
    }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal ={handleOpenNewTransactionModal}/>

      <Dashboard/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}/>

      <GlobalStyle/>
    </TransactionsProvider>
  );
}


