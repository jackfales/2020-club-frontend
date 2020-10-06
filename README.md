
## SLO Hack Web App 2020

This repository hold the code for the frontend and backend of SLO Hack's 2020 club website, main event website, and application portal.

### Running the Frontend locally

In order to run the frontend locally simply run  `npm start` in the main directory. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Running the Backend locally

In order to run the backend locally you will need to navigate to `/amplify/backend/functionslohacksAPI/src`. Then run `node index.js`. This should start up a local express server on port 3000. If you plan to run both the frontend and backend at the same time you might have to run this server on another port. To do so edit the code in app.js and give it a different port number to listen on.

### Contributing

In order to contribute to this repository your code must meet the coding style standards. You can check if your code passes the coding style by running `npm run lint` in the main directory of the project. If your code does not pass the style standards it will not be accepted into this repository.

This is also a commitizen friendly repository which means **your commits will NOT be accepted if they are not commitizen friendly**. That means in order to commit to this repository you must run `git cz` instead of git commit.

**You may not push your code to the master branch, all new code must be first pushed to the dev branch and will subsequently be merged into the master branch at the end of each sprint.**

### AWS Help

Our project is managed by AWS Amplify and you may need to work with some parts of AWS for your tasks. Our account alias on AWS is **slo-hacks**. If you ever forget your password or need more permissions than you are granted, message JP on slack I can help you with that. We will be using [AWS Cognito](https://us-west-2.console.aws.amazon.com/cognito/home) for User authentication and [AWS API Gateway](https://us-west-2.console.aws.amazon.com/apigateway/home) to host our Backend API. 
