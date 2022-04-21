// import React, { Component } from 'react';

// export default class Hooks extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        count : 0
//     }
//   }

//   componentDidMount(){
//     document.title = `Title Change: ${this.state.count}`
//   }

//   componentDidUpdate(){
//     document.title = `Title Change: ${this.state.count}`
//   }

//   componentWillUnmount(){
//     document.title = `Component React Js`
//   }

//   onUpdate = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Nilai : {this.state.count}</h1>
//         <button className='btn btn-secondary' onClick={this.onUpdate}>Update nilai</button>
//       </div>
//     );
//   }
// }

import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Title Change: ${count}`
    return () => {
      document.title = `Component React Js`
    }
  });

  return (
    <div>
      <h1>Nilai : {count}</h1>
      <button onClick={() => setCount(count + 1)} className="btn btn-secondary">
        Update nilai{" "}
      </button>
    </div>
  );
};

export default Hooks;
