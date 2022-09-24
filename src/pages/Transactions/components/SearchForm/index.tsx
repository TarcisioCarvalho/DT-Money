import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
  query:z.string()
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export const SearchForm = () => {

  const {register,handleSubmit,formState:{isSubmitting}} = useForm<SearchFormInputs>({
    resolver:zodResolver(searchFormSchema)
  });

  function handleSearchTransactions(data : SearchFormInputs){
    console.log(data);
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
