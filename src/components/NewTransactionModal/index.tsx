import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContextSelector } from "use-context-selector";
import { TransactionContext } from '../../contexts/TransactionContext';

const newTransactionModalSchema = z.object({
  description : z.string(),
  price : z.number(),
  category : z.string(),
  type : z.enum(['outcome','income'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionModalSchema>;




export const NewTransactionModal = () => {

  const createTransaction = useContextSelector(TransactionContext, (context) =>context.createTransaction);

  const {register,handleSubmit, formState:{isSubmitting},control,reset} = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionModalSchema),
    defaultValues:{
      type: 'income' 
    }
  });
  
  
  
  async function handleCreateNewTransaction(data : NewTransactionFormInputs){
    createTransaction(data);
    reset();
  }
  
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

                  <Controller
                  control={control}
                  name ='type'
                  render={({field})=>{
                    return (
                      <TransactionType onValueChange={field.onChange} value = {field.value}>
                        <TransactionTypeButton value='income' variant='income'>
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton value='outcome' variant='outcome'>
                            <ArrowCircleDown size={24}/>
                            Saída
                        </TransactionTypeButton>
                      </TransactionType>
                    )
                  }}
                  />

                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>
               
              </Content>
            </Dialog.Portal>
            
  )
}
