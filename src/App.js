import React, { useState } from 'react'
import ToDoList from './Components/ToDoList'
 import  './App.css'

const App = () => {

    const [inputList,setInputList]=useState('')
    const [Items, setItems] = useState([])
    const itemsEvent = (e) => {
        setInputList(e.target.value)

    }
    const listofItems = () => { 
        setItems(   (oldItems) => {
            return [...oldItems,inputList]
        }  )
        setInputList("")
     
    }
    const deleteItems = (id) => {
        console.log('deleted')
        setItems( (oldItems) => {
            return oldItems.filter( (arrElem, index) => {
                return index !==id 
            })
        } )
    }


    return(
<>
<div className='main_div'>
    <div className='center_div'>
        <br />
        <h1>Shooping cart</h1>
        <br />

        <input type='text' placeholder='Enter text' 
        value={inputList}
        onChange={itemsEvent}/>
        <button onClick={listofItems}>+</button>
       

        <ol>
          { 
            Items.map(   (itemval,index)=> {
              return   <ToDoList
              key={index}
              id={index} 
              text={itemval}
              onSelect={deleteItems}
              />

            })}
        </ol>


    </div>
</div>



</>


    )
}
export default App