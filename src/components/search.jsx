import React,{Component} from 'react';
import PropTypes from 'prop-types'



export default class Search extends Component{
static propTypes={
    setSearchName:PropTypes.func.isRequired
}

    input=null

    search=()=>{
        let searchName=this.input.value.trim()
        if(searchName){
            this.props.setSearchName(searchName)
        }
    }


render(){
    return (
        <section className="jumbotron">
          <h4 className="jumbotron-heading" style={{margin:'0 auto',width:300,paddingBottom:20}}>通过用户名搜索github的用户</h4>
          <div style={{margin:'0 auto',width:300}}>
            <input type="text" className="form-control" placeholder="请输入用户名" style={{marginBottom:20}}  ref={input=>this.input=input}/>
            <button type="button" className='btn btn-primary' onClick={this.search}>搜索</button>
          </div>
        </section>
        )

      }

}