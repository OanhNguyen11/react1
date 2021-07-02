import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name: "",
            tel: "",
            permission: ""
        }
    }
    
   
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value); 
        this.setState({
            [name]: value
        });

        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
        // console.log(item);

    }
    
    
        kiemTraTrangThai = () => {
            if(this.props.hienThiForm === true){
                return(
                    <div className="col">
                        <form>
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header">Thêm mới user vào hệ thống</div>
                            <div className="card-body text-primary">
                                <div className="form-group"> 
                                    <input type="text" name = "name" onChange = {(event) => this.isChange(event)} className="form-control"  placeholder="Ten User" />               
                                </div>
                                <div className="form-group"> 
                                    <input type="text" name = "tel" onChange = {(event) => this.isChange(event)} className="form-control"  placeholder="Dien thoai" />               
                                </div>
                                <div className="form-group"> 
                                    <select name = "permission" onChange = {(event) => this.isChange(event)} className="custom-select" required>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Nomal</option>
                                    </select>                
                                </div>
                                <div className="form-group">
                                    <input type = "reset"className="btn btn-block btn-primary" onClick = {(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} value ="Thêm mới" />
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                )
            }
        }

        render() {
           // console.log(this.state);
            
        return (
            
                <div>
                
                    {/* {this.hienThiNut() } */}
                   
                    {this.kiemTraTrangThai()}
                </div>
           

        );
    }
}

export default AddUser;