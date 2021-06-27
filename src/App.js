

import Hook_UseState from "./Component/demoHook/Hook_UseState.jsx"
import CycleMounting from "./Component/demoLifeCycle/CycleMounting.jsx"
import CycleUpdating from "./Component/demoLifeCycle/CycleUpdating.jsx"
import DemoPureComponent from "./Component/demoPureComponent/DemoPureComponent.jsx"
import CallbackFunction from './Component/ES6/CallbackFunction/CallbackFunction'

function App() {
  return (
    <div className="App">
      {/* <DemoPureComponent/> */}
      {/* <CycleMounting/> */}
      {/* <CycleUpdating/> */}
      {/* <CallbackFunction/> */}
      <Hook_UseState/>
    </div>
  );
}

export default App;
