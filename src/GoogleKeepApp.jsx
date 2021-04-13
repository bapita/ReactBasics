import React, {useState} from 'react';
import GoogleHeader from './GoogleHeader';
import GoogleCreateNote from './GoogleCreateNote';
import GoogleNoteDisplay from './GoogleNoteDisplay';

const GoogleKeepApp = () => {

    const [additem, setAddItem] = useState([]);

    const addNote = (note) => {

        setAddItem((prevData) => {
            return [...prevData,note];
        })
        console.log(note);
    }

    const onDelete = (id) => {
        setAddItem((olddata)=>
            olddata.filter((currentData, indexNo) => {
                return indexNo !== id;
            })
        );
    }
    
    return (
        <>
            <GoogleHeader />
            <GoogleCreateNote passNote={addNote} />
            <div className="google_note_display">
            
                {
                    additem.map((currentData, indexNo) => {
                        return <GoogleNoteDisplay
                            key={indexNo}
                            id ={indexNo}
                            title={currentData.title}
                            content={currentData.content}
                            deleteItem={onDelete}
                        />;
                    })
                }
            </div>
        </>
    );
}

export default GoogleKeepApp;