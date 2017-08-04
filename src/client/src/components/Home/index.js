// From here we can use react-redux to connect them together
// OR just simply export the component

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Home from './home';
import * as loaddata from '../../reducers/loaddata';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  ...loaddata
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
