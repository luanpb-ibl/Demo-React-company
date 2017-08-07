import React from 'react';
import { Grid, Button } from 'react-bootstrap';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
 this.state = {
   loading:false,
   data:[]
  }
  }
  componentDidMount() {
  }
render() {
  //console.info('Home components => props: ', this.props);
  console.log(this.state.data)
    var listdata = this.state.data.map((data,index)=>{
    return  (
      <div key={index} className="row">
        <div className="col-sm-4">{data.title}</div>
        <div className="col-sm-4">{data.link}</div>
        <div className="col-sm-4">{data.guid}</div>
      </div>
    )
  });  
    return this.state.loading === true ? <h1>Loading...</h1> : (
      <Grid>
        <h1>Load data with fecth</h1>
        <p>
          <Button
            bsStyle="success"
            bsSize="large"
            href="http://react-bootstrap.github.io/components.html"
            target="_blank">
            View React Bootstrap Docs
        </Button>
        </p>
        <div className="row">
        <div className="col-sm-4"><h2>title</h2></div>
        <div className="col-sm-4"><h2>link</h2></div>
        <div className="col-sm-4"><h2>guid</h2></div>
      </div>
           {listdata} 
      </Grid>
    );
  }
}