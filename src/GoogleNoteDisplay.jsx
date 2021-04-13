import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const GoogleNoteDisplay = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="google_note">
                <h1>{props.title}</h1>
                <br/>
                <p>{props.content}</p>
                <Button onClick={deleteNote}>
                    <DeleteOutlineIcon className='deleteIcon' />
                </Button>    
            </div>
        </>
    );
}

export default GoogleNoteDisplay;