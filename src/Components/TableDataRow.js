import React, { Component } from 'react';

class TableDataRow extends Component {

    permissionShow = () => {
        console.log(this.props.permission);
        if(this.props.permission === 1){return "Admin";}
        else if(this.props.permission === 2){return "Moderator";}
        else {return "Nomal";}
    }

    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser)
    }

    render() {
        return (
            <tr>
                <td >{this.props.stt + 1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn btn-group">
                    <div onClick = {()=>this.editClick()} className="btn btn-warning sua"><i className="fa fa-edit " />Sửa</div>
                    <div className="btn btn-danger xoa"  onClick = {(idUser) => this.deleteButtonClick(this.props.id)}><i className="fa fa-delete " />Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;