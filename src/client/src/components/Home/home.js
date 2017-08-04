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
//get data with fetch
loadData() {
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json.items,
        });
      });
  }
  componentDidMount() {
    this.loadData();
    //this.props.loadData()
  
  }
render() {
  //console.info('Home components => props: ', this.props);
  console.log(this.state.data)
    var listdata = this.state.data.map((data,index)=>{
    return  (
      <div key={index} class="row">
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
        <div class="row">
        <div className="col-sm-4"><h2>title</h2></div>
        <div className="col-sm-4"><h2>link</h2></div>
        <div className="col-sm-4"><h2>guid</h2></div>
      </div>
           {listdata} 
      </Grid>
    );
  }
}