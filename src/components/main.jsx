import React,{Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'



export default class Main extends Component{
    static propTypes={
        searchName:PropTypes.string.isRequired
    }

    state={
        initView:true,
        loading:false,
        users:[],
        errorMsg:null
    }
    componentWillReceiveProps=(newProps)=>{
        this.setState({
            initView:false,
            loading:true
        })
        let Url=`https://api.github.com/search/users?q=${newProps.searchName}`
        axios.get(Url)
        .then(response=>{
            const resp=response.data
            console.log(resp.items)
            const users=resp.items.map(user=>({
                name:user.login,url:user.html_url,avatarUrl:user.avatar_url
            }))
            this.setState({
                loading:false,
                users
            })
        })
        .catch(error=>{
            this.setState({
                loading:false,
                errorMsg:error.message
            })
        })

    }

render(){
if(this.state.initView){
return <h2>请输入关键字搜索。。。</h2>
}else if(this.state.loading){
    return <h2>正在加载中。。。</h2>
}else if(this.state.errorMsg){
    return <h2>{this.state.errorMsg}</h2>
}else{
    return (
        <div className="row">
            {
            this.state.users.map((user,index)=>(
            <div className="card" key={index}>
            <a href={user.url} target="_blank" rel="noopener noreferrer">
              <img src={user.avatarUrl} alt='' style={{width:100}}/>
            </a>
            <p className="card-text">{user.name}</p>
            </div>
                ))
            }
        </div>

    )
}
    }

}