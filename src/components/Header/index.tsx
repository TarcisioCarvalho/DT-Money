import React from 'react'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoSvg from '../../assets/img/logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
        <HeaderContent>
            <img src={logoSvg} alt="" />
            <NewTransactionButton>Nova Transação</NewTransactionButton>
        </HeaderContent>
    </HeaderContainer>
  )
}
