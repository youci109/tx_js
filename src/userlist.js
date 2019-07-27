import React, { Component } from 'react';
import { connect } from 'react-redux'
import userAction from './actions'

class User extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }

    componentDidMount(){

        this.props.userAction();
                
    }

    componentWillMount(){
       fetch("http://localhost:8081/rest2/users")
            .then(res => res.json())
            .then(data => {
                this.setState({users:data});
            })
    }

    deleteUser = (userId) => {

         fetch("http://localhost:8081/rest/user?userId=" + userId , {
            method: "DELETE",
            headers: {
                "content-Type": "application/json"
            }
        })
    }

    render(){
        return(
           <div>
               <br></br>
               <table className="table">
                   <thead>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>编号</th>
                    <th>状态</th>
                    <th>操作</th>
                   </thead>
                   <tbody>
                        {this.state.users.map( user => {
                            const userId = user.userId
                            return <tr key={user.userId}> 
                                    <td>{user.userName}</td> 
                                    <td>{user.userSex}</td>
                                    <td>{user.userAge}</td>
                                    <td>{user.userNo}</td>
                                    <td>{user.userState}</td>
                                    <td><button type="button" onClick={()=>this.deleteUser(userId)}>删除</button></td>
                                    </tr>
                        })}
                    </tbody>
                </table>
           </div>
            );
    }
}


export default connect(null,{userAction})(User);