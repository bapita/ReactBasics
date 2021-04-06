import React, {useState} from 'react';
import TodoDelete from './TodoDelete';
import MaterialList from './MaterialList';

const ToDoList = () => {
    const [item, setItem] = useState("");
    const [itemList, setItemList] = useState([]); // creating an empty array 

    const itemEvents = (event) => {
        setItem(event.target.value);
    }

    const listItems = () => {
        setItemList((oldItems) => {
            return [...oldItems, item]; // using spread operator 
        });

        setItem(""); // clearing the text box containing previous value before + btn click
    }

    // to delete the item from the list 
    const deleteItems = (id) => {
        console.log('deleted');
        setItemList((oldItems) => {
            return oldItems.filter((arrElm, index) => {
                return index !== id;
            })
        })
    }

    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1 className="todoHeading">ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add your items" 
                value={item}
                onChange={itemEvents}/>
                <button className= "todoBtn" onClick={listItems}> + </button>

                <ol>
                {/* <li>{item}</li> */}
                {/* using map method, the items from array are called and shown one by one */}
                {itemList.map((itemval, index) => {

                 return  <TodoDelete
                 key={index}
                 id ={index}
                 text={itemval}
                 onSelect={deleteItems}
                 />;
                    
                })}
                </ol>
            </div>
            <MaterialList />
        </div>
        </>
    );
}

export default ToDoList;