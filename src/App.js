// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     var helloWorld = "Welcome to Hacker News";
//     return (
//       <div className="App">
//         <h2>{helloWorld}</h2>
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://reduxjs.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {list.map(item => (
//           <div key={item.objectID}>
//             <span><a href="{item.url}">{item.title}</a></span>
//             <span>{item.author}</span>
//             <span>{item.num_comments}</span>
//             <span>{item.points}</span>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// function isSearched(searchTerm){
//   return function(item) {
//     // Some condition which returns true or false
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: ""
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  // onDismiss(id) {
  //   const updatedlist = this.state.list.filte(function isNotId(item) {
  //     return item.objectID !== id;
  //   })
  // }

  // onDismiss(id) {
  //   function isNotId(item) {
  //     return item.objectID !== id;
  //   }
  //   const updatedList = this.state.list.filter(isNotId);
  // }

  // onDismiss(id) {
  //   const isNotId = item => item.objectID !== id;

  //   const updatedList = this.state.list.filter(isNotId);
  // }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  onSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    // console.log(this.state.searchTerm);
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.onSearchChange} />
        </form>
        {list.filter(isSearched(searchTerm)).map(item => {
          const onHandleDismiss = () => this.onDismiss(item.objectID);

          return (
            <div key={item.objectID}>
              <span><a href="{item.url}">{item.title}</a></span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span><button onClick={onHandleDismiss} type="button">Dismiss</button></span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
