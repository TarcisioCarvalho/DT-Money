import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionModalSchema = z.object({
  description : z.string(),
  price : z.number(),
  category : z.string(),
  //type : z.enum(['outcome','income'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionModalSchema>;


function handleCreateNewTransaction(data : NewTransactionFormInputs){
  console.log(data);
}

export const NewTransactionModal = () => {


  const {register,handleSubmit, formState:{isSubmitting}} = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionModalSchema)
  });

  return (
            <Dialog.Portal>
              <Overlay/>
              <Content>
              
                <Dialog.Title>Nova Transação</Dialog.Title>
                    <CloseButton>
                        <X size={24}/>
                    </CloseButton>
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input type="text" placeholder='Descrição' required
                    {...register('description')}
                    />
                    <input type="number" placeholder='Preço' required
                    {...register('price', {valueAsNumber:true})}
                    />
                    <input type='text' placeholder = 'Categoria' required
                    {...register('category')}
                    />

                    <TransactionType>
                        <TransactionTypeButton value='income' variant='income'>
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton value='outcome' variant='outcome'>
                            <ArrowCircleDown size={24}/>
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>
               
              </Content>
            </Dialog.Portal>
            
  )
}
