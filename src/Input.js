import { Component } from "react";
import image from './star.png';

export class Input extends Component{

        state={
            textInput:"",
            list: []
        }

    onChangeEvent(event){
        this.setState({textInput: event})
    }
    addText(item){
        if(item === ''){
            alert("Dream on! Your dreams will definitely come true!")
        }
        else{
        let listArray = this.state.list;
        listArray.push(item);
        this.setState({list: listArray, textInput: ''})
    }}
    crossWord(event){
        const li = event.target;
        li.classList.toggle('styleWord')
    }
    delete(){
        let listArrey = this.state.list;
        listArrey =[];
        this.setState({list: listArrey})
    }
    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div >error: src refspec main does not match any
            error: failed to push some refs to 'https://github.com/Katyusha88/wish-list.git'
                <form onSubmit={this.onFormSubmit}>
                   <div>
                    <input placeholder="Time to dream..." 
                     type="text"
                     onChange={(event) => {this.onChangeEvent(event.target.value)}} 
                     value={this.state.textInput}/>
                    <button className="add" onClick={() => this.addText(this.state.textInput)}>ADD</button>
                    </div>

            <ul>
                {this.state.list.map((item, index) => (<li key={index} onClick={this.crossWord}><img src={image}width="30px" alt="srats"/>   {item}</li>))}
            </ul>

                    <div>
                       <button className="delete" onClick={() => this.delete()}>DELETE</button>
                    </div>
                </form>
            </div>
        )
    }
}