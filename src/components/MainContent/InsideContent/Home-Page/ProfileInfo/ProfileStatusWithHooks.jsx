import React, {useState} from 'react';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatusThunk(status)
    }

    const onStatusChange = (e) => {
        setStatus( e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus={true}/>
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;