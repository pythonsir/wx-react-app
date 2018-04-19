import React,{PureComponent} from 'react'
import {connect} from 'react-redux'

/**
 *  用户列表
 */
class UserList extends PureComponent{


    componentDidMount(){

        this.props.changetitle("用户管理")

    }

    render(){
        return(
        
            <div>用户222222管理</div>

        )
    }

}

export default connect ((state)=>(
    {
        state
    }
))(UserList)