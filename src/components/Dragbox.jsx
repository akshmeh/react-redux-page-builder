/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import SingleDropWidget from "./SingleDropWidget"


function Dragbox({hanlderDragData}){
    const widget = useSelector((state)=>state.widget.value)
    function handleDragOver(event){
        event.preventDefault();
    }
    return(<>
    <div className="w-3/4 border border-dashed border-round p-4 m-3 border-slate-100" onDrop={(event)=>{hanlderDragData(event)}} onDragOver={(event)=>{handleDragOver(event)}}>
        {widget.length!=0?widget.map((element,index) => {
            return <SingleDropWidget key={index} element={element.widgetType} id={index}/>
        }):<div className="flex justify-center items-center h-full text-white">Drag & drop the widget to this area!</div>}
    </div>
    </>)
}
export default Dragbox;