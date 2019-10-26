import React, { Component } from 'react';
import { Card, BSmall, Blockquote , Button, Alert, ListGroup } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import './intro.css';

export default class App extends Component {
  render() {
    return (
    <div className="container mt-4 ">
        <Card>
            <Card.Header><span className="h3 text-success fonted">Step 4 : Adding APIS to speak to your data base. (You are now a user in your application)</span></Card.Header>
            <Card.Body>
            <Card.Title></Card.Title>
            <Card shadow>
                <Card.Body>
                    <Card.Title className="fonted">Cognito User Pools</Card.Title>
                    <Card.Text>
                        Using Cognito is more then Authentication. It registers users to your application. They are automatically given a user id and placed in a user pool. Go to AWS and log into the console. You will see a selection for Cognito under the list group Security, Identity, and Compliance. Click on the link and it will give 2 options. One being manage your user pools. Click this option, you will be brought to a screen where it list all user pools for the applications your AWS account is related to. If you look in the titles for these selections , in the string you will most likely see the this projects name. You can view the users and adjust log in settings here. Here is a guide to show your more in depth Cogntios resources. This guide is focused on getting you familiar with using Amplify.
                        <br/>
                        <br/> <BSmall text="success"><Button secondary sm active as="a" href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-dg.pdf">Cognito Guide</Button></BSmall>
                    </Card.Text>
                    </Card.Body>
                </Card>
            <hr/>
            <Card.Text>
               Now lets create the APIs to store and retrieve data from <span className="fonted">DynamoDB</span> which is AWS's default data base. No worries about effiency, it's used by the largest tech companies on the planet. It comes with an entire back end console to monitor every mutation made to your data flow. Open a new terminal in this projects root folder and run the following Npm command.
               <hr/>
                <h3 success className="type"><span className="high fonted">From your projects root folder in terminal run :</span> amplify add api</h3>

                <Card mb="2">
                    <Card.Header>You will be prompted to answer these questions in the terminal.</Card.Header>
                    <ListGroup flush>
                    <ListGroup.Item>? Please select from one of the below mentioned services: <span className="text-primary fonted">(GraphQL)</span></ListGroup.Item>
                    <ListGroup.Item>? Provide API name: <span className="text-primary fonted"> amplication </span></ListGroup.Item>
                    <ListGroup.Item>? Choose an authorization type for the API: <span className="text-primary fonted"> > Amazon Cognito User Pool </span> </ListGroup.Item>
                    <ListGroup.Item>? Do you have an annotated GraphQL schema? <span className="text-primary fonted"> No </span> </ListGroup.Item>
                    <ListGroup.Item>? Do you want a guided schema creation? <span className="text-primary fonted"> Yes </span> </ListGroup.Item>
                    <ListGroup.Item>? What best describes your project: <span className="text-primary fonted"> Single object with fields (e.g., “Todo” with ID, name, description)  </span> </ListGroup.Item>
                    <ListGroup.Item>? Do you want to edit the schema now? : <span className="text-primary fonted"> No </span> </ListGroup.Item>
                    </ListGroup>
                </Card>
                <h3 success className="type"><span className="high fonted">From your projects root folder in terminal run :</span> amplify push</h3>
                <hr/>
                <Card mb="2">
                    <Card.Header>You will be prompted to answer these questions in the terminal.</Card.Header>
                    <ListGroup flush>
                    <ListGroup.Item>? Do you want to generate code for your newly created GraphQL API : <span className="text-primary fonted">Yes</span></ListGroup.Item>
                    <ListGroup.Item>? Enter the file name pattern of graphql queries, mutations and subscriptions : <span className="text-primary fonted">(src\graphql\**\*.js)</span></ListGroup.Item>
                    <ListGroup.Item>? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions: <span className="text-primary fonted">Yes</span></ListGroup.Item>
                    <ListGroup.Item>? Enter maximum statement depth: <span className="text-primary fonted">increase from default if your schema is deeply nested] (2)</span></ListGroup.Item>
                    </ListGroup>
                </Card>
                <br/>
                You should have already started to gain comprehension for how Amplify works and how it relates to AWS. Now you can look in your aws-exports and the new data needed to use these services has been added. In the next section I will show you how to Alter the GraphQL so you know how to do so for your own future project.
                <hr/>
            </Card.Text>
            <Link to='/stepfive'><Button success>
            Next Step
            </Button>
            </Link>
            </Card.Body>
            <Card.Footer text="muted"></Card.Footer>
        </Card>
    </div>
    )
  }
}