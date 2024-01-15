import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import parse from 'html-react-parser';
export default function PreviewPage(){
    const widget = useSelector(state=>state.widget.value)
    // var widgetTypes=["Single Column","Two Column","Content/Img Column","Img/Content Column"]
    return(<>
        {widget.length>0?
        <Link to="/react-redux-page-builder/" className="bg-red-500 text-white py-3 px-2 rounded absolute top-0 left-0 hover:text-red-800 hover:bg-white"> Back to Page Builder</Link>:""
        }
    <main className="text-white">
        {widget.length>0?
        widget.map((element,index)=>{
            const heading = element.heading==""?"<div></div>":element.heading;
            const content = element.content==""?"<div></div>":element.content;
                const colorDiff = index%2==0+1;
            if(element.widgetType == "Single Column"){
                return <section key={`${element.widgetType} ${index}`} className={`w-full text-center p-10 ${colorDiff?"bg-slate-400":"bg-slate-700"}`}>
                    <div className="mb-8">
                        {parse(heading)}
                    </div>
                    <div>
                        {parse(content)}
                    </div>
                </section>
            }
            if(element.widgetType == "Two Column"){
                const contentTwo = element.contentTwo==""?"<div></div>":element.contentTwo;
                return <section key={`${element.widgetType} ${index}`} className={`w-full text-center p-10 ${colorDiff?"bg-slate-400":"bg-slate-700"}`}>
                    <div className="mb-8">
                        {parse(heading)}
                    </div>
                    <div className="w-full flex">

                    <div className="w-1/2 p-3">
                        {parse(content)}
                    </div>
                    <div className="w-1/2 p-3">
                        {parse(contentTwo)}
                    </div>
                    </div>
                </section>
            }
            if(element.widgetType == "Img/Content Column"){
                return <section key={`${element.widgetType} ${index}`} className={`w-full text-center p-10 ${colorDiff?"bg-slate-400":"bg-slate-700"}`}>
                    <div className="flex">
                    <div  className="w-1/2">
                        <img src={element.imageURL==""?"https://wiki.dave.eu/images/4/47/Placeholder.png":element.imageURL} className="w-full"/>
                    </div>
                    <div className="w-1/2 flex justify-center flex-col">
                        {parse(heading)}
                        {parse(content)}
                    </div>
                   
                    </div>
                </section>
            }
            if(element.widgetType == "Content/Img Column"){
                return <section key={`${element.widgetType} ${index}`} className={`w-full text-center p-10 ${colorDiff?"bg-slate-400":"bg-slate-700"}`}>
                    <div className="flex">

                    <div className="w-1/2 flex justify-center flex-col">
                        {parse(heading)}
                        {parse(content)}
                    </div>
                    <div  className="w-1/2">
                        <img src={element.imageURL==""?"https://wiki.dave.eu/images/4/47/Placeholder.png":element.imageURL} className="w-full"/>
                    </div>
                    </div>
                </section>
            }
        })  
        :
        <div className="text-center"><h1 className="text-3xl mb-8">No widgets are added!</h1><Link to="/react-redux-page-builder/" className="bg-red-500 text-white py-3 px-2 rounded mt-5 hover:text-red-800 hover:bg-white">Page Builder</Link></div>
        }
        </main>
        </>)
}