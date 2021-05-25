import React, { Component, useState } from "react";
// import '../styles/App.css';

class App extends Component {
    render() {

       const names=[{id:"relativeListItem1",rel:"abhishek"},{id:"relativeListItem12",rel:"Vishwa"}];

       const namelist=names.map((name)=>
           <li key={name.id}>{name.rel}</li>
       )

        return (
            <div id="main">
                <ol key={"relativeList"}>{namelist}</ol>
                {/* Do not remove the main div */}
                
            </div>
        )
    }
}


export default App;