import React from "react";

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
}

interface TransactionProviderProps{
    children: React.ReactNode;
}

export const TransactionContext = React.createContext({} as TransactionContextType);



  
export function TransactionProvider({children}:TransactionProviderProps){

    const [transactions,setTransactions] = React.useState<Transaction[]>([]);

    async function fetchTransactions(query?:string) {
        const url = new URL('http://localhost:3333/transactions');

        if(query) url.searchParams.append('q', query);

        const RESPONSE = await fetch(url);
        const JSON = await RESPONSE.json();
        setTransactions(JSON);
    }

    React.useEffect( () =>{
       fetchTransactions()
    } , [])

    return (
        <TransactionContext.Provider value={{transactions,fetchTransactions}}>
            {children}
        </TransactionContext.Provider>
    )
}