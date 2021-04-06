import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import MaterialListComp from './MaterialListComp';

const MaterialList = () => {
    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const listOfItems = () => {
        setNewItem((prevItems) => {
            return [...prevItems, item];
        })
        setItem(" ");
    }
    return(
        <>
           
                <div className="center_div">
                    <br/>
                        <h1 className="material_head">ToDo List</h1>
                    <br/>
                    <input className="material_input" type="text"
                    value={item} 
                    placeholder="Add items" 
                    onChange={itemEvent} />
                    <Button className="material_btn" onClick={listOfItems}>
                        <AddIcon/>
                    </Button>
                    <br/>
                        <ol>
                            {
                                newitem.map((currentItem, index) => {
                                    return (<MaterialListComp
                                        key={index}
                                        id={index}
                                        text={currentItem}
                                        />);
                                })
                            }
                        </ol>
                    <br/>
                </div>

        </>

    );
}

export default MaterialList;