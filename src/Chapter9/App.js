import React, { Component } from 'react';

import CSSModule from './SassExample/SassComponent'

class App extends Component {
	render() {
		return(	
		<div>
			<CSSModule />
		</div>
		);
	}
}

// import SassComponent from './SassExample/SassComponent'

// class App extends Component {
// 	render() {
// 		return(	
// 		<div>
// 			<SassComponent />
// 		</div>
// 		);
// 	}
// }

// import ScrollBox from './ScrollBox/ScrollBox'

// class App extends Component {
// 	render() {
// 		return(	
// 		<div>
// 			<ScrollBox ref={ref=>this.scrollBox=ref}/>
// 			<button onClick={() => this.scrollBox.scrollToBottom()}>
// 				맨 밑으로
// 			</button>
// 		</div>
// 		);
// 	}
// }

// import ValidationSample from './validationSamples/ValidationSample'

// class App extends Component {
// 	render() {
// 		return(
// 			<ValidationSample />
// 		);
// 	}
// }


// import FuncComp from './classAndFuncComp/Func.js';
// import ClassComp from './classAndFuncComp/Class.js';

// function App() {
//   return (
//     <div className="App">
//       <FuncComp 
// 		  name="Sangyeop-lee"
// 		  favoriteNumber={3}
// 	  >
// 		  sangyeop
// 	  </FuncComp>
// 	  <br />
// 	  <br />
// 	  <ClassComp 
// 		  favoriteNumber={4}
// 	  />
//     </div>
//   );
// }

export default App;
