import React ,{Component} from 'react'

import { Badge } from 'antd';

class Main extends Component{

    
    render() {
      return (
        <div>
        <Badge count={5}>
          <a href="#" className="head-example" />
        </Badge>
        <Badge count={0} showZero>
          <a href="#" className="head-example" />
        </Badge>
      </div>
      );
    }

}

export default Main;