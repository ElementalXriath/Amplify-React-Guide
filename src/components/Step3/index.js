import React, { Component } from 'react';
import { Card, BSmall, Blockquote , Button, Alert, ListGroup } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import './intro.css';

export default class App extends Component {
  render() {
    return (
    <div className="container mt-4 ">
        <Card>
            <Card.Header><span className="h3 text-success fonted">Step 3 : Add AWS Authenication to your project.</span></Card.Header>
            <Card.Body>
            <Card.Title>Using your first AWS | <span className="fonted">Cognito</span></Card.Title>
            <Card>
            <Card.Body>
              <Card.Title>What is Cognito</Card.Title>
              <Card.Text>
              Amazon Cognito is a simple user identity and data synchronization service that helps you securely manage and synchronize app data for your users across their mobile devices. You can create unique identities for your users through a number of public login providers (Amazon, Facebook, and Google) and also support unauthenticated guests. You can save app data locally on users’ devices allowing your applications to work even when the devices are offline. With Amazon Cognito, you can save any kind of data in the AWS Cloud, such as app preferences or game state, without writing any backend code or managing any infrastructure. This means you can focus on creating great app experiences instead of having to worry about building and managing a backend solution to handle identity management, network state, storage, and sync.
              </Card.Text>
            </Card.Body>
          </Card>
            <hr/>
            <Card.Text>
               Now its time to start using the web services for your project. First were going to add a very advance Authenication to your project by using <span className="text-warning fonted">Cognito</span>.
                <br/>
                <hr/>
                <h3 success><span className="high fonted">From your project's root folder in terminal run :</span> amplify add auth</h3>
                <Card mb="2">
                    <Card.Header>You will be prompted to answer these questions in the terminal.</Card.Header>
                    <ListGroup flush>
                    <ListGroup.Item>? Do you want to use the default authentication and security configuration? <span className="text-primary fonted">(default configuration)</span> </ListGroup.Item>
                    <ListGroup.Item>? How do you want users to be able to sign in? <span className="text-primary fonted">Choose which ever fits your project</span></ListGroup.Item>
                    <ListGroup.Item>? Do you want to configure advanced settings?<span className="text-primary fonted"> No I am done</span></ListGroup.Item>
                    </ListGroup>
                </Card>
          
                It will now add authentication data needed to your backend and aws-exports. Now we have to push the internal changes we've made to project to your AWS account. This command will push the exports changes and recieve a new set of data such as identy pools. When a new user sings into your app his data can be viewed from the aws console on browser from the coginto idenity pool.
                <hr/>
                <h3 success><span className="high fonted">From your projects root folder in terminal run :</span> amplify push</h3>
                <hr/>

                
                <span className="text-primary fonted"> Current Environment: src<br/>

                    | Category | Resource name       | Operation | Provider plugin   |<br/>
                    | -------- | ------------------- | --------- | ----------------- |<br/>
                    | Auth     | amplication8171876b | Create    | awscloudformation |<br/>
                    ? Are you sure you want to continue? Yes </span>
                <hr/>
                Now look in your aws-exports after the push is complete and see the new set of data added. Again never alter this manually is can damage the algorithm and not be repaired with out extensive migraines.
                <br/>
                <hr/>
                How to add the Authenication to the actual code ? Very simple. Inside of the projects root folder I have added a text file called <span className="fonted text-primary">newappjs</span>. Replace the code in your app.js with this script. I have added notes that will explain the new script in detail and process that is taking place. After you do this you will need to save and refresh. You will be greeted by a AWS login for your application. Log in and take the next steps.

            </Card.Text>
            <Link to='/stepthree'><Button success>
            After the new app.js code has been inputed save and refresh.
            </Button>
            </Link>
            </Card.Body>
            <Card.Footer text="muted"></Card.Footer>
        </Card>
    </div>
    )
  }
}