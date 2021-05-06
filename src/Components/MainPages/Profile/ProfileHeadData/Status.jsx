import React from "react";
import style from './Status.model.css';

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state= {isChange : false, status: props.status};
        this.handleChange = this.handleChange.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
    }
    componentDidMount() {
    }
    handleChange (event){
       this.setState({status: event.target.value})
    }
    onChangeStatus(){
        this.setState({isChange: !this.state.isChange})
        this.props.updateStatus(this.state.status)
    }
    render() {
        return  <div>
            { !this.state.isChange
                ? <div style={style.edit} onClick={this.onChangeStatus}>{this.state.status}</div>
                :<input value={this.state.status} onChange={this.handleChange}
                        onBlur={this.onChangeStatus} autoFocus={true}/>
            }
            </div>
    }
}
//export default Status;