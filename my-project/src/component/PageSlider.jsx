import React,{useState} from 'react'
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'



const sliderData =[
    {
            url:"https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_960_720.jpg" 
        },
        {
            url:"https://cdn.pixabay.com/photo/2014/09/11/18/23/tower-bridge-441853_960_720.jpg" 
        },
        {
            url:"https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg" 
        },
        {
            url:"https://cdn.pixabay.com/photo/2018/10/19/12/14/train-3758523_960_720.jpg" 
        },
        {
            url:"https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525_960_720.jpg" 
        },

];
const PageSlider = () => {
    const [slide, setSlide]=useState(0)

    //const length=sliderdata.length
    console.log (length)
    const prevslide =() =>{
        setSlide(slide == length -1 ?0:slide +1)
    }
    const nextslide =() =>{
        setSlide(slide == 0 ?length -1 :slide -1)
    }
    
  
    return (
        <div className='max-w-[1220px] max-auto relative flex justify-center items-center ml-36 py-12  ' >
            <BsArrowLeft onClick={prevslide} className='absolute top-[50%] text-4xl left-8'/>
            <BsArrowRight onClick={nextslide} className='absolute top-[50%] text-4xl right-8 '/>
          {sliderData?.map((item,index)=>(
            <div className={index==slide?'opacity-100':'opacity-0'}>
               {index == slide && (<img className='w-[100%] h-full md:rounded' src={item.url} alt="" /> )}
               
            </div>


          ))}


        </div>
    )
}

export default PageSlider