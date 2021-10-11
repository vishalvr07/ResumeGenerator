
import FirstPage from './FirstPage'

import { selectUser } from './userSlice';

import Resume from './resume'
import {useSelector} from 'react-redux'


function App() {
 
 const user = useSelector(selectUser)

 
 return (
    <div>
    { user ? <Resume/> : <FirstPage/> }

    </div>

  );
}

export default App;


