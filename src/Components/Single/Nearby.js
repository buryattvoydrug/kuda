import axios from 'axios';
import React from 'react'

import '../../scss/Components/Single/Nearby.scss'
import CafeItem from '../CafeItem'


export default class Nearby extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      data:this.props.data,
      posts:[],
      error:''
    }
  }
  
  componentDidMount(){
    window.scrollTo(0, 0)
    const wordPressSiteUrl="https://localhost/wordpress";
    let tmp=[]
    this.state.data.map((item,index)=>(
      this.setState({loading:true},
        ()=>{
          axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts/${item}`)
          .then(res=>{
            tmp.push(res.data)
            this.setState({loading:false, posts:tmp})
          })
          .catch(error=>this.setState({loading:false,error:error.response}))
        }
      )
    ))
  }
  render() {
    // console.log(this.state.posts)
    return (
      <>
      {this.state.posts.map((item,index)=>(
        <section key={index} className="nearby">
        <h2 className="nearby__title">Заведения поблизости</h2>
        <div className="items-list">
            <CafeItem post={item} wide/>
            <CafeItem post={item} />
            <CafeItem post={item} />
        </div>
      </section>
      ))}
      
    </>
    )
  }
}