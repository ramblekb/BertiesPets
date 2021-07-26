import { TableContainer } from '@material-ui/core';
import './App.css';
import BTable from './components/BTable';
import PTable from './components/PTable';

function App() {
  return (
    <TableContainer>
         <PTable />
     <BTable />
     </TableContainer>
    );
}

export default App;
