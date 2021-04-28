import React from "react";

export default class ArrMessages extends React.Component {
   constructor(props) {
      super(props);
      this.state = { textArray: ["first"] };

      this.addTextToArr = this.addTextToArr.bind(this);
   }

   addTextToArr() {
      this.setState(state => ({
         textArray: this.state.textArray.concat("new elem")
      }))
   }

   render() {
      const arrlength = this.state.textArray.length;
      return (<div>
         <p>Task 6** You can see {arrlength} {arrlength == 1 ? "element" : "elements"}: {this.state.textArray.join(', ')}</p>
         <button type="button" onClick={this.addTextToArr}>AddNewElement</button>
      </div>)
   }
};



