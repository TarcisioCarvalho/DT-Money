import React from "react";
import { useContextSelector } from "use-context-selector";
import { TransactionContext } from "../contexts/TransactionContext";


export function useSummary(){

    const transactions = useContextSelector(TransactionContext, (context) => context.transactions);

    const summary = transactions.reduce((acc,transaction) =>{
      switch (transaction.type) {
        case 'income':
            acc.income += transaction.price;
            acc.total += transaction.price;
            break;
        case 'outcome':
            acc.outcome += transaction.price;
            acc.total -= transaction.price;
        default:
            break;
      }
        return acc
    }
    ,
    {
        income:0,
        outcome:0,
        total:0
    }
    
    )
    return summary;
}