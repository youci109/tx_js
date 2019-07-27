import { connect } from 'react-redux';
import App from './App';
import { userAction } from 'module';


export default connect(null,{userAction})(App)