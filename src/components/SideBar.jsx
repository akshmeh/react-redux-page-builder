/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
export default function SideBar({handleDragStart}){
    var widgetTypes=["Single Column","Two Column","Content/Img Column","Img/Content Column"]
    return(<>
    <div className="sidebar w-1/4 p-5 bg-slate-800 h-screen flex gap-3 flex-col justify-between" >
        <div>

        {widgetTypes.map((element, index)=>{
             return <div key={index}className="section-component bg-white p-3 text-black text-xl text-center cursor-pointer mb-5 rounded" draggable 
        onDragStart={(e)=>handleDragStart(e,element)}>
            {element}
        </div>
        })}
        </div>
       <Link to="/react-redux-page-builder/preview-page" className="bg-blue-200 py-3 text-center">Preview Page</Link>
    </div>
    </>)
}