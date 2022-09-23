import React from 'react'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog';
import logoSvg from '../../assets/img/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';

export const Header = () => {
  return (
    <HeaderContainer>
        <HeaderContent>
            <img src={logoSvg} alt="" />
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <NewTransactionButton>Nova Transação</NewTransactionButton>
              </Dialog.Trigger>
            
              <NewTransactionModal/>
            </Dialog.Root>
        </HeaderContent>
    </HeaderContainer>
  )
}
