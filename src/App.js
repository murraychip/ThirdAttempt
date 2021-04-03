
import Main from './Main.js'
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
      <div className="App">
          <AmplifySignOut />
          <Main />
    </div>
  );
}

export default withAuthenticator(App);