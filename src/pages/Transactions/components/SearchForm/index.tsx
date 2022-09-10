import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { SearchFormContainer } from './styles'

export const SearchForm = () => {
  return (
    <SearchFormContainer>
        <input type='text' placeholder='Busque por transações'/>
        <button type='submit' >
            <MagnifyingGlass size={28}/>
            Buscar</button>
    </SearchFormContainer>
  )
}
