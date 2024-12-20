import Image from "next/image"


export function Carousel(){
    return(
        <div className="flex flex-col  justify-between  bg-white border p-8 shadow rounded-lg min-h-[272px]">
      <div className="max-w-xl ">
        <p className="text-lg text-gray-600 italic">“Working with you has been a game-changer for our project. Their ability to analyze complex problems and deliver efficient, scalable solutions is unparalleled. Not only did they meet our expectations, but they exceeded them by introducing innovative features we hadn’t even considered. I wouldn’t hesitate to recommend you to anyone looking for a top-notch software developer.”

</p>
        
      </div>
      <div className="mt-4 flex justify-center ">
         <div className="">
         <h3 className="text-black font-bold ">Sophia Reynolds
         </h3>
         </div>
        
        </div>
      {/* Navigation Dots */}
    
    </div>
    )
}
export function CarouselTwo(){
    return(
        <div className="flex flex-col  justify-between  bg-white border shadow p-8 rounded-lg min-h-[272px]">
      <div className="max-w-xl ">
        <p className="text-lg text-gray-600 italic">“I had the pleasure of collaborating with you on a critical software upgrade for our company. Their expertise in coding and system optimization streamlined our operations significantly. They possess a rare combination of technical skill and creativity that every developer should aspire to have. Truly an asset to any team!”

</p>
        
      </div>
      <div className="mt-4 flex justify-center ">
         <div className="">
         <h3 className="text-black font-bold">James Carter
         </h3>


         </div>
        
        </div>
      {/* Navigation Dots */}
    
    </div>
    )
}

export function CarouselThree(){
    return(
        <div className="flex flex-col  justify-between  bg-white border shadow p-8 rounded-lg min-h-[272px]">
      <div className="max-w-xl ">
        <p className="text-lg text-gray-600 italic">“As a freelance developer, you helped us bring our e-commerce platform to life. Their attention to detail and ability to communicate technical concepts in an understandable way made the entire process smooth and stress-free. The final product was not only functional but also elegant and user-friendly. We look forward to working with them again!”

</p>
        
      </div>
      <div className="mt-4 flex justify-center ">
         <div className="">
         <h3 className="text-black font-bold">Emily Chen
         </h3>


         </div>
        
        </div>
      {/* Navigation Dots */}
    
    </div>
    )
}