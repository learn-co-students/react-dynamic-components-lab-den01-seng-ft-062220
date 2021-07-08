//your code here
import React, {Component } from 'react';
// import BlogPost from './BlogPost';


class X extends Component{
    render (){
        return(
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }

}

export default X;