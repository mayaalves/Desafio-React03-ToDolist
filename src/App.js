import React, {Component} from "react"
import './App.css'

class App extends Component{

  state = {
    tarefa: '',
    lista:[]
  }

  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value 
    })
  }

  Add = (event) =>{
    let{tarefa, lista} = this.state
    if(tarefa != ''){
      this.setState({
        lista: lista.concat({
          tarefa: tarefa, 
          id: Date.now(),
        }),
        tarefa: '',
      })
    }
    event.preventDefault()
  }

  remover = (id) => {
    let{lista} =this.state
    this.setState({
      lista: lista.filter((item) => {
       return item.id != id
      })
    })
  }

  render(){
    return(
      <div className="central">
        <h1>Lista de tarefa</h1>
        <form onSubmit={this.Add}>
        <input onChange={this.handleChange} type="text" value={this.state.tarefa}/>
        <button onClick={this.Add}>ADD</button>
        {this.state.lista.map((item) =>(
          <ul>
            <li>{item.tarefa}</li>
            <img onClick={() => {this.remover(item.id)}} src="https://img.icons8.com/pastel-glyph/64/000000/trash.png"/>
          </ul>
        ))}
        </form>
      </div>
    )
  }
}

export default App;

