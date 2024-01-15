/* eslint-disable react/prop-types */
import { useState } from "react"
import EditContent from "./EditContent"
import { deleteData } from "../reducer/WidgetReducer"
import { useDispatch } from "react-redux"

export default function SingleDropWidget({element,id}){
    const [editable,setEditable] = useState(false)
    const dispatch = useDispatch()
    return(<>
    <div className="w-full bg-white text-black p-2 mb-2 flex justify-between items-center">
                {element}
                <div>
                {editable?<button role="button" onClick={()=>{setEditable(false)}} className="bg-red-500 text-white">close</button>:
                <button role="button" onClick={()=>{setEditable(true)}} className="bg-lime-500">Edit</button>}
                <button role="button" onClick={()=>{dispatch(deleteData(id))}} className="bg-red-500 text-white ml-5">Delete</button>
                </div>
            </div>
            { editable && <EditContent id={id}/>}
    </>)
}