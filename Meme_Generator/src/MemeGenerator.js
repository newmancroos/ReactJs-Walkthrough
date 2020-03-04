import React, { Component } from 'react'

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state ={
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            allMemeImages:[]
        }
        this.changeHanlder = this.changeHanlder.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount()
    {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response =>{
            const {memes} = response.data
            //console.log(memes)
            this.setState({allMemeImages:memes})
        })
    }
    changeHanlder(e)
    {
        const {type, name, value} = e.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit(e)
    {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
        const selectedmeme = this.state.allMemeImages[randNum]
        this.setState({
            randomImage : selectedmeme.url
        })
    }
    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="topText"
                        placeholder="Top Text"
                        value = {this.state.topText}
                        onChange={this.changeHanlder}
                    />
                    <br/>
                    <input 
                        type="text" 
                        name="bottomText"
                        placeholder="Bottom Text"
                        value= {this.state.bottomText}
                        onChange={this.changeHanlder}
                    />
                    <br /><br />
                   <button>Gen</button>
               </form>
               <div>
                    <h2>{this.state.topText}</h2>
                    <img src={this.state.randomImage} alt="" />
                    <h2>{this.state.bottomText}</h2>
               </div>
            </div>
        )
    }
}

export default MemeGenerator