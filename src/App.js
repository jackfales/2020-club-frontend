/* eslint-disable react/jsx-filename-extension */
import Amplify from 'aws-amplify';
// import { withAuthenticator } from 'aws-amplify-react';
import { withRouter } from 'react-router-dom';
// eslint-disable-next-line camelcase
import aws_exports from './aws-exports';
import Main from './components/Main/Main';
import './App.scss';

Amplify.configure(aws_exports);

const App = withRouter(Main);

export default App;
