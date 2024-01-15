// import { useState } from 'react'
import SideBar from "./components/SideBar"
import Dragbox from './components/Dragbox';
import {useDispatch } from "react-redux";
import './index.css'
import { handleDrop } from "./reducer/WidgetReducer";


function App() {
  // const [widget, setWidget] = useState([])
  // const handleDragStart = (event,widgetType)=>{
  //   event.dataTransfer.setData("widgetType",widgetType)
  // }
  // function handleDrop (event){
  //   const widgetType=event.dataTransfer.getData("widgetType")+" "+widget.length
  //   setWidget([...widget,{widgetType}])
  // }
  // function handleDragOver (event){
  //   event.preventDefault();
  // }
  const dispatch = useDispatch();
  const handleDragStart =(event,widgetType)=>{
    event.dataTransfer.setData("widgetType",widgetType)
  }
  function hanlderDragData(event)  {
    const widgetType=event.dataTransfer.getData("widgetType");
    dispatch(handleDrop({widgetType,heading:"",content:"",contentTwo:"",imageURL:""}))
  }
const isLoggined = true;
  return (
    <>
    <div className="w-full flex bg-slate-700">
       {isLoggined && <SideBar handleDragStart={handleDragStart}/>}
       {isLoggined && <Dragbox hanlderDragData={hanlderDragData}/>}

    </div>
    </>
  )
}

export default App
