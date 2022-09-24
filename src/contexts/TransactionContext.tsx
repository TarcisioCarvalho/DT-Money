import React from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

interface Transaction{
    id:number;
    description:string;
    category: string;
    type:'income' | 'outcome';
    price:number;
    createdAt:string;
}

interface TransactionContextType{
    transactions : Transaction[];
    fetchTransactions : (query?:string) => Promise<void>;
    createTransaction : (data:CreateTransactionInput) => Promise<void>;
}

interface TransactionProviderProps{
    children: React.ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

interface CreateTransactionInput{
    description:string;
    price:number;
    category:string;
    type : 'income' | 'outcome';
}


  
export function TransactionProvider({children}:TransactionProviderProps){

    const [transactions,setTransactions] = React.useState<Transaction[]>([]);

    const fetchTransactions = React.useCallback( async  (query?:string) => {
        /*  const url = new URL('/transactions');
 
         if(query) url.searchParams.append('q', query);
 
         const RESPONSE = await fetch(url);
         const JSON = await RESPONSE.json(); */
 
         const RESPONSE = await api.get('transactions',{
             params:{
                 q: query,
                 _sort:'createdAt',
                 _order:'desc'
             }
         })
         setTransactions(RESPONSE.data);
     },[]) 

     const createTransaction = React.useCallback( async (data : CreateTransactionInput) => {

        const {description,price,category,type} = data;

       const response =  await api.post('transactions',{
        description,
        price,
        category,
        type,
        createdAt: new Date()
    })
        setTransactions(state => [response.data,...state]);
    },[])

    React.useEffect( () =>{
       fetchTransactions()
    } , [])

    return (
        <TransactionContext.Provider value={{transactions,fetchTransactions,createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}