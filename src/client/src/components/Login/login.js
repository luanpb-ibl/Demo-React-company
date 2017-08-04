import React from 'react';
import { Grid, Button, Modal, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
  }
  close() {
    this.setState({ showModal: false });
  }

  open=()=> {
    this.setState({ showModal: true });
  }
  login = () => {
    this.props.authenticate();
  }
  render() {
    return (
      <div>
        {this.renderOnPage()}
        {/* {this.renderDialog()} */}
      </div>
    );
  }

  handleClick = (e) => {
    e.preventDefault();
  //  this.props.loginReducer()
    // let us=this.refs.username.value;
    // let pass=this.refs.password.value;
    // console.log(us + pass)
    // if (us === "test" & pass === "password") {
    //   this.login()
    // }
    // dispatch(action)
    console.info('Login handleClick => props: ', this.props);
    this.props.acLogin({
      username: this.refs.username.value, 
      password: this.refs.password.value
    });
  }

  renderOnPage() {
    //console.log('Login reducer => props: ', this.props.loginReducer({type:"LOGIN"}));
    console.info('Login component => props: ', this.props);
    const { location } = this.props;
    const from = location && location.state ? location.state.from : { pathname: '/' };
    return (
      <Grid>
        <form onSubmit={this.handleClick}>
                <div className="form-group">
                  <label>User name: </label>
                  <input className="form-control" type="text" ref="username" />
                </div>
                <div className="form-group">
                  <label>Password: </label>
                  <input className="form-control" type="password" ref="password" />
                </div>
                <div className="form-group">
                  <label>Sign in: </label>
                    {/* <Button bsStyle="success" onClick={() => this.login()}>Log in</Button>  */}
                  <button className="btn btn-primary" id="signin" type="submit" name="signin">Sign in</button>
                </div>
              </form>
      </Grid>
    )
  }

  renderDialog() {
//    console.info('Login component => props: ', this.props);

    const { location } = this.props;
    const from = location && location.state ? location.state.from : { pathname: '/' };

    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
    return (
      <Modal show={this.state.showModal} onHide={() => this.close()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

          <h4>Popover in a modal</h4>
          <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

          <h4>Tooltips in a modal</h4>
          <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>
          <hr />
          <Grid>
            <div className="row">
        <div className="col-sm-6">
              <h2>Form login</h2>
              <form onSubmit={this.handleClick}>
                <div className="form-group">
                  <label>User name: </label>
                  <input className="form-control" type="text" ref="username" />
                </div>
                <div className="form-group">
                  <label>Password: </label>
                  <input className="form-control" type="password" ref="password" />
                </div>
                <div className="form-group">
                  <label>Sign in: </label>
                    {/* <Button bsStyle="success" onClick={() => this.login()}>Log in</Button>  */}
                  <button className="btn btn-primary" id="signin" type="submit" name="signin">Sign in</button>
                </div>
              </form>
            </div>
            </div>
          </Grid>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.close()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
};
