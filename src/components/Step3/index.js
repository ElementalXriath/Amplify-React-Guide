import React, { Component } from 'react';
import { Card, BSmall, Blockquote , Button, Alert } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import './intro.css';

export default class App extends Component {
  render() {
    return (
    <div className="container mt-4 ">
        <Card text="center">
            <Card.Header><span className="h3 text-success">Step 3 : Add AWS Authenication to your project.</span></Card.Header>
            <Card.Body>
            <Card.Title>Using your first AWS, Cognito</Card.Title>
            <hr/>
            <Card.Text>
               Now its time to start using the web services for your project. First were going to add a very advance Authenication to your project by using <span className="text-warning">AWS-Cognito</span>.
                <br/>
                <hr/>
                <h3 success><span className="high">From your project's root folder in terminal run :</span> amplify add auth</h3>
                <hr/>
                After a few seconds it will promt you to input some information in your terminal. Simply type in the data and hit enter to continue to the next question. Here is a small guide to help you.
                <hr/>
                 Do you want to use the default authentication and security configuration?  (default configuration)
                <hr/>
                How do you want users to be able to sign in? Choose which ever fits your project
                <hr/>
                Do you want to configure advanced settings? No I am done
                <hr/>
                It will now add authentication data needed to your backend and aws-exports. Now we have to push the internal changes weve made to project to your AWS account. This command will push the exports changes and recieve a new set of data such as identy pools. When a new user sings into your app his data can be viewed from the aws console on browser from the coginto idenity pool.
                <hr/>
                <h3 success><span className="high">From your projects root folder in terminal run :</span> amplify push</h3>
                <hr/>

                
                    Current Environment: src<br/>

                    | Category | Resource name       | Operation | Provider plugin   |<br/>
                    | -------- | ------------------- | --------- | ----------------- |<br/>
                    | Auth     | amplication8171876b | Create    | awscloudformation |<br/>
                    ? Are you sure you want to continue? Yes
                <hr/>
                Now look in your aws-exports after the push is complete and see the new set of data added. Again never alter this manually is can damage the algorithm and not be repaired with out extensive migraines.
                <hr/>
                Now how to add the new authentication to the actuall code? Very simple!
                <br/>
                It will now add authentication data needed to your back end and aws-exports. Now we have to push the internal changes you have made to project to your AWS account. This command will push the exports changes and receive a new set of data such as identity pools. When a new user sings into your app his data can be viewed from the aws console on browser from the Cognito identity pool.  

            </Card.Text>
            <Link to='/stepthree'><Button success>
            Next Step
            </Button>
            </Link>
            </Card.Body>
            <Card.Footer text="muted">Note : If you want to share your AWS with another developer you can create guest users from the AWS dashboard in the browser.</Card.Footer>
        </Card>
    </div>
    )
  }
}