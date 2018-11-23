import React from 'react'
import ReactDOM from 'react-dom';
import { image } from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

class App extends React.Component {
  render() {
    return(
      <div className="ui container comments">
        <h3 className="ui dividing header">Comments</h3>
        <ApprovalCard>
          <CommentDetail
            author="Sam" 
            timeAgo="Today at 4:45M" 
            content = " Nice blog posts"
            avatar={image.avatar()} 
          />        
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Alex" 
            timeAgo="Today at 6:00PM" 
            content = "I like the subject"
            avatar={image.avatar()}
          />  
        </ApprovalCard>      
        <ApprovalCard>
          <CommentDetail 
            author="Jane" 
            timeAgo="Yesterday at 2:05 AM" 
            content = "Hi It's so Good"
            avatar={image.avatar()}
          />  
        </ApprovalCard>      
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));