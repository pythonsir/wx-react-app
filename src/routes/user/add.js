import React,{PureComponent} from 'react'
import {connect} from 'react-redux'

/**
 *  用户列表
 */
class UserAdd extends PureComponent{


    componentDidMount(){

        this.props.changetitle("用户管理—添加")


    }

    render(){


        return(
        
            <div>用户管理添加</div>

        )
    }


}

export default connect ((state)=>(
    {
        state
    }
))(UserAdd)