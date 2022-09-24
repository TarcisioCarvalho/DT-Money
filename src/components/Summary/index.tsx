import { ArrowCircleUp,ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import React from 'react'
import { TransactionContext } from '../../contexts/TransactionContext'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'
import { SummaryCardContainer, SummaryContainer } from './styles'

export const Summary = () => {

    const summary = useSummary();
    
  return (

    <SummaryContainer>
        <SummaryCardContainer>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp size={32} color='#00b37e'/>
            </header>
            <strong>{priceFormatter.format(summary.income)}</strong>
        </SummaryCardContainer>
        <SummaryCardContainer>
            <header>
                <span>Sáidas</span>
                <ArrowCircleDown size={32} color='#f75a68'/>
            </header>
            <strong>{priceFormatter.format(summary.outcome)}</strong>
        </SummaryCardContainer>
        <SummaryCardContainer>
            <header>
                <span>Total</span>
                <CurrencyDollar size={32} color='#fff'/>
            </header>
            <strong>{priceFormatter.format(summary.total)}</strong>
        </SummaryCardContainer>
    </SummaryContainer>
  )
}
