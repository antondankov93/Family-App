import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }


    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatusThunk(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
        let a = this.state;
        let b = this.props;
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.activateEditMode} placeholder={'awesome'}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;