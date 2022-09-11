import React from 'react'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog';
import logoSvg from '../../assets/img/logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
        <HeaderContent>
            <img src={logoSvg} alt="" />
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <NewTransactionButton>Nova Transação</NewTransactionButton>
              </Dialog.Trigger>
            
            <Dialog.Portal>
              <Dialog.Overlay/>
              <Dialog.Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <Dialog.Close/>
              </Dialog.Content>
            </Dialog.Portal>
            </Dialog.Root>
        </HeaderContent>
    </HeaderContainer>
  )
}
