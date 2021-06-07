import React,{Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import Searchbox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import {setSearchField} from '../actions';

//Tells what state one needs to listen to and send down as props
const mapStateToProps = state => ({
    searchField: state.searchField
})

//Tells what props one needs to listen to that are actions that needs to get dispatched
const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
})

//Props are just input or properties, we never modify them and use pure components/functions like cCard or CardList
//State - object that describes app, and here state is robots and whatever is entered in the search box => its able to change
//Parent feeds state into child component
//for using state we use class instead of functions, these are called smart components 
class App extends Component {
    constructor(){
        super();
        this.state = {  //adding state and what we need the state to describe
            robots: [],
        }
    }
    /*
    onSearchChange = (event) => {   //Always use arrow functions while creating own methods, this makes sure that 'this' refers to App's object
        this.setState({ searchfield: event.target.value });
    }
    */

    render(){
        const {robots} = this.state;
        const {searchField,onSearchChange} = this.props;
        const filteredRobobts = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(robots.length===0){
            return (
                <div className="tc">
                    <h1 className="f1">Robo-Friends</h1>
                    <Searchbox searchChange={onSearchChange}/>
                    <h3>Loading...</h3>
                </div>
                
            );
        }
        else{
            return (
                <div className="tc">
                    <h1 className="f1">Robo-Friends</h1>
                    <Searchbox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobobts} />
                        </ErrorBoundary>
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
