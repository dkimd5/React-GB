import React from "react";
import "./arrMessages.scss";

export default class ArrMessages extends React.Component {
   constructor(props) {
      super(props);
      this.state = { textArray: ["first"] };

      // this.addTextToArr = this.addTextToArr.bind(this);
   }

   addTextToArr = () => {
      this.setState(state => ({
         textArray: [...state.textArray, ("new elem")]
         //TODO: destructurisation instead concat
      }))
   }

   render() {
      const arrlength = this.state.textArray.length;
      return (
         <div>
            <p className="task6text">Task 6** You can see { arrlength } { arrlength == 1 ? "element" : "elements" }: { this.state.textArray.join(', ') }</p>
            <button className="addElButton" type="button" onClick={ this.addTextToArr }>AddNewElement</button>
         </div>
      )
   }
};



