

import { memo } from "react"
import Hook_UseEffect from "./Component/demoHook/Hook_UseEffect.jsx"
import Hook_UseState from "./Component/demoHook/Hook_UseState.jsx"
import Hook_UseCallBack from "./Component/demoHook/Hook_UseCallBack"
import CycleMounting from "./Component/demoLifeCycle/CycleMounting.jsx"
import CycleUpdating from "./Component/demoLifeCycle/CycleUpdating.jsx"
import DemoPureComponent from "./Component/demoPureComponent/DemoPureComponent.jsx"
import CallbackFunction from './Component/ES6/CallbackFunction/CallbackFunction'
import React_memo from './Component/demoHook/React_memo.jsx'
import Hook_UseMemo from "./Component/demoHook/Hook_UseMemo.jsx"


function App() {
  return (
    <div className="App">
      {/* <DemoPureComponent/> */}
      {/* <CycleMounting/> */}
      {/* <CycleUpdating/> */}
      {/* <CallbackFunction/> */}
      {/* <Hook_UseState/> */}
      {/* <Hook_UseEffect/> */}
      {/* <React_memo/> */}
      {/* <Hook_UseCallBack/> */}
      <Hook_UseMemo/>
    </div>
  );
}

export default App;
