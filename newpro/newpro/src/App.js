import './App.css';
import { useDeferredValue, useState , useTransition} from 'react';

let a = new Array(10000).fill(0);


function App() {
  let [name, setName] = useState('');
  let [isPending,startTransition] = useTransition()  
  let state = useDeferredValue(state)
  return (
    <div className="App">
      <input onChange={(e) => {
        startTransition(()=>{
          setName(e.target.value)  
        })
        }}/>
      {
        a.map(()=>{
          return <div>{name}</div>
        })
      }
    </div>
    
  );
}

export default App;
