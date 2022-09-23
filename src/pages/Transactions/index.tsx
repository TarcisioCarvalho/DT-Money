import React from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { PriceHighLight, TransactionContainer, TransactionTable } from './styles'


interface Transaction{
    id:number;
    description:string;
    category: string;
    type:'income' | 'outcome';
    price:number;
    createdAt:string;
}

export const Transactions = () => {

    const [transactions,setTransactions] = React.useState<Transaction[]>([]);

    async function req() {
        const RESPONSE = await fetch('http://localhost:3333/transactions');
        const JSON = await RESPONSE.json();
        
        setTransactions(JSON);
        return JSON;
    }

    React.useEffect( () =>{
       req()
    } , [])
  return (
    <div>
        <Header/>
        <Summary/>
        <TransactionContainer>
            <SearchForm/>
        <TransactionTable>
            <tbody>
                {transactions.map(transaction => (
                    <tr>
                        <td width='50%'>{transaction.description}</td>
                        <td><PriceHighLight variant={transaction.type}>R$ {transaction.price}</PriceHighLight></td>
                        <td>{transaction.category}</td>
                        <td>13/04/2022</td>
                    </tr>
                ))}
                <tr>
                    <td width='50%'>Desenvolvimento de site</td>
                    <td><PriceHighLight variant='income'>R$ 12.000,00</PriceHighLight></td>
                    <td>Venda</td>
                    <td>13/04/2022</td>
                </tr>
                <tr>
                    <td width='50%'>Hamburguer</td>
                    <td><PriceHighLight variant='outcome'>- R$ 59,00</PriceHighLight></td>
                    <td>Alimentação</td>
                    <td>10/04/2022</td>
                </tr>
            </tbody>
        </TransactionTable>
        </TransactionContainer>
    </div>
  )
}
