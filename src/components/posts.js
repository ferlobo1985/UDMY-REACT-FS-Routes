import React,{ Component} from 'react';
import { withRouter } from '../hoc/withRouter';

class Posts extends Component {

    render(){
        console.log(this.props)
        return (
            <>
                Posts
            </>
        )
    }
    
}

export default withRouter(Posts);