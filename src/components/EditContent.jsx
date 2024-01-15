/* eslint-disable react/prop-types */
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCopyData } from '../reducer/WidgetReducer';

export default function EditContent({id}){
  const widget = useSelector((state)=> state.widget.value)
  const [storeData, setStoreData] = useState(false);
  const dispatch = useDispatch();
     const [valueHeading, setValueHeading] = useState(widget[id].heading?widget[id].heading:"");
    const [valueContent, setValueContent] = useState(widget[id].content?widget[id].content:"");
    const [valueContentTwo, setValueContentTwo] = useState(widget[id].contentTwo?widget[id].contentTwo:"");
    const [valueImage, setValueImage] = useState(widget[id].imageURL?widget[id].imageURL:"");
    const widgetType = widget[id].widgetType;
    const heading = {
        toolbar: [
          [{ 'header': [1, 2,3,4,5,6,false] }]
        ],
      },
      formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ],
        content = {
        toolbar: [
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
    }
    function handleSaveData(){
      const data ={
        heading:valueHeading,
        content: valueContent,
        contentTwo:valueContentTwo,
        imageURL:valueImage
      }
        dispatch(setCopyData({data,id}))
        setStoreData(true)
    }
    return(<>
    <div className='bg-stone-300 p-4 mb-5'>
    <h3 className='text-2xl text-black mb-3'>Heading</h3>
    <ReactQuill theme="snow" value={valueHeading} onChange={setValueHeading}  modules={heading} formats={formats} className='bg-white p-6 text-black'/>
    <h3 className='text-2xl text-black my-3'>Content</h3>
    <ReactQuill theme="snow" value={valueContent} onChange={setValueContent}  modules={content} formats={formats} className='bg-white p-6 text-black'/>
    {widgetType == "Two Column"&&<>
    <h3 className='text-2xl text-black my-3'>Content Two</h3>
    <ReactQuill theme="snow" value={valueContentTwo} onChange={setValueContentTwo}  modules={content} formats={formats} className='bg-white p-6 text-black'/></>}
    {widgetType == "Content/Img Column"&&<><h3 className='text-2xl text-black my-3'>Image URL</h3><input type='text' placeholder='Image URL' value={valueImage} onChange={(event)=>setValueImage(event.target.value)} className='w-full my-3 p-3'/></>}
    {widgetType == "Img/Content Column"&&<><h3 className='text-2xl text-black my-3'>Image URL</h3><input type='text' placeholder='Image URL' value={valueImage} onChange={(event)=>setValueImage(event.target.value)} className='w-full my-3 p-3'/></>}
    {storeData?<button type="button" role='button' className='bg-lime-500 mt-5 cursor-not-allowed' disabled>Done</button>:<button type="button" role='button' onClick={handleSaveData} className='bg-lime-500 mt-5 cursor-pointer'>Save</button>}
    </div>
    </>)
}