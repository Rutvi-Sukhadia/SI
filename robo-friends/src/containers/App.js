import React,{Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


//Props are just input or properties, we never modify them and use pure components/functions like cCard or CardList
//State - object that describes app, and here state is robots and whatever is entered in the search box => its able to change
//Parent feeds state into child component
//for using state we use class instead of functions, these are called smart components 
class App extends Component {
    constructor(){
        super();
        this.state = {  //adding state and what we need the state to describe
            robots: [],
            searchfield:''
        }
    }

    onSearchChange = (event) => {   //Always use arrow functions while creating own methods, this makes sure that 'this' refers to App's object
        this.setState({ searchfield: event.target.value });
    }

    render(){
        const {robots,searchfield} = this.state;
        const filteredRobobts = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(robots.length===0){
            return (
                <div className="tc">
                    <h1 className="f1">Robo-Friends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <h3>Loading...</h3>
                </div>
                
            );
        }
        else{
            return (
                <div className="tc">
                    <h1 className="f1">Robo-Friends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobobts} />
                    </Scroll>
                </div>
                
            );
        }
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }
    
}

export default App;
