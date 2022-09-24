import React from 'react'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import { PriceHighLight, TransactionContainer, TransactionTable } from './styles'




export const Transactions = () => {

   

    const transactions = useContextSelector(TransactionContext, (context) => context.transactions);

  return (
    <div>
        <Header/>
        <Summary/>
        <TransactionContainer>
            <SearchForm/>
        <TransactionTable>
            <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td width='50%'>{transaction.description}</td>
                        <td><PriceHighLight variant={transaction.type}>{transaction.type  === 'outcome' && '- ' } {priceFormatter.format(transaction.price)}</PriceHighLight></td>
                        <td>{transaction.category}</td>
                        <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                    </tr>
                ))}
            </tbody>
        </TransactionTable>
        </TransactionContainer>
    </div>
  )
}
