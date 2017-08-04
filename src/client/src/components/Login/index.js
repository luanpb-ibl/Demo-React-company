// From here we can use react-redux to connect them together
// OR just simply export the component

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as authActions from '../../reducers/auth';
import * as loginAction from '../../actions/loginAction';

import Login from './login';

const mapStateToProps = (state) => ({
 ...state
  // ngocdam: state.rdLoginReducer,
  // product: ngocdam: state.product
});
const mapDispatchToProps = {
  // ...authActions,
  ...loginAction,
  // ...productsAction
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
