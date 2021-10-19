import React from 'react';
import { useHistory } from 'react-router-dom';
import Detail from '../Pages/Detail/Detail';

function App()
{
    let history = useHistory ();
    const handleClick = () => {
       history.push ('/details');
    }    

    return (
       <div className="App">
          <button onClick={handleClick}><Detail></Detail> </button>
       </div>
    );
}
    