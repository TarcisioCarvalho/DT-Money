import { ThemeProvider } from 'styled-components'
import { TransactionProvider } from './contexts/TransactionContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'


function App() {
 

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <Transactions/>
      </TransactionProvider>
      <GlobalStyle/>
    </ThemeProvider>
    
  )
}

export default App
