import React from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionContext'
import { SearchForm } from './components/SearchForm'
import { PriceHighLight, TransactionContainer, TransactionTable } from './styles'




export const Transactions = () => {

   

    const {transactions} = React.useContext(TransactionContext);

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
                        <td><PriceHighLight variant={transaction.type}>R$ {transaction.price}</PriceHighLight></td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>
                ))}
            </tbody>
        </TransactionTable>
        </TransactionContainer>
    </div>
  )
}
