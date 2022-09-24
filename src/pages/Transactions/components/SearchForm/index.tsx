import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { TransactionContext } from '../../../../contexts/TransactionContext';
import { useContextSelector } from 'use-context-selector';

const searchFormSchema = z.object({
  query:z.string()
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

 export const SearchForm = () => {

  const fetchTransactions = useContextSelector(TransactionContext, (context) => context.fetchTransactions);

  const {register,handleSubmit,formState:{isSubmitting}} = useForm<SearchFormInputs>({
    resolver:zodResolver(searchFormSchema)
  });

  function handleSearchTransactions(data : SearchFormInputs){
    fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
        <input type='text' placeholder='Busque por transações'
        {...register('query')}
        />
        <button type='submit' disabled = {isSubmitting}>
            <MagnifyingGlass size={28}/>
            Buscar</button>
    </SearchFormContainer>
  )
}


