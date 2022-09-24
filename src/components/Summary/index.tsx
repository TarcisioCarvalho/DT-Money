import { ArrowCircleUp,ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import React from 'react'
import { TransactionContext } from '../../contexts/TransactionContext'
import { SummaryCardContainer, SummaryContainer } from './styles'

export const Summary = () => {
    const {transactions} = React.useContext(TransactionContext);
    
  return (
    <SummaryContainer>
        <SummaryCardContainer>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp size={32} color='#00b37e'/>
            </header>
            <strong>R$ 1.700,00</strong>
        </SummaryCardContainer>
        <SummaryCardContainer>
            <header>
                <span>Sáidas</span>
                <ArrowCircleDown size={32} color='#f75a68'/>
            </header>
            <strong>R$ 1.700,00</strong>
        </SummaryCardContainer>
        <SummaryCardContainer>
            <header>
                <span>Total</span>
                <CurrencyDollar size={32} color='#fff'/>
            </header>
            <strong>R$ 1.700,00</strong>
        </SummaryCardContainer>
    </SummaryContainer>
  )
}
