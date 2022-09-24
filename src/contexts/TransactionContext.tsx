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
}

interface TransactionProviderProps{
    children: React.ReactNode;
}

export const TransactionContext = React.createContext({} as TransactionContextType);



  
export function TransactionProvider({children}:TransactionProviderProps){

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
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}