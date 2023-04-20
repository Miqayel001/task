import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import Main from './Components/Main';




function App() {

  const [addButton, setAddButton] = useState (new Set([]));

  useEffect(() => {
    const item = localStorage.getItem('cards');
    
    if (item !== null ){
      setAddButton(new Set(JSON.parse(item)))

      

    }
  }, []);

 
  
  const addNewValueRandom = () => {
       let randomNumber = Math.random() * 100000 | 0;
       let oldAddButton = [...addButton];
        addButton.add(randomNumber);
        if(addButton.size === oldAddButton.length){
          addNewValueRandom()
        }

  }

  const closeCardApp = (number) => {
   
    let storageCloseCardApp = new Set([...addButton].filter((val) => val !== number));
    localStorage.setItem('cards', JSON.stringify([...storageCloseCardApp]));
     setAddButton(storageCloseCardApp);
     
  }

  const addButtonApp = () => {
    addNewValueRandom()
    localStorage.setItem('cards', JSON.stringify([...addButton]));
        setAddButton(new Set([...addButton]));
    
  }

  const sortCard = () => {
    
    let storageSortCard  = new Set ([...addButton].sort());
    localStorage.setItem('cards', JSON.stringify([...storageSortCard]));
    setAddButton(new Set ([...addButton].sort()))
  }

  return (
    <div className="App">
      <Header onSort={sortCard}  onAdd = {addButtonApp} />
   
      <Main addNewButton = {addButton} onDelete = {closeCardApp} />
    
   
     
    </div>
  );
}

export default App;
