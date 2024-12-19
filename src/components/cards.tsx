
type CardProps = {
    imageSrc: string;
    text: string
}
export function Card({ imageSrc, text }: CardProps) {
    return (
        <div className="sm:h-[180px] sm:w-[250px] h-[150px] w-[125px] bg-[#F5FCFF]">
            <div className="flex flex-col items-center pt-[20px]">
                <img src={imageSrc} className="" alt="" />
                <span className="mt-[30px]">{text}</span>
            </div>
        </div>
    )
}
type CardPortfolioProps = {
    imageSrc: string;
    title: string;
    time:string; // Explicitly declare the type for imageSrc
    bodyOne:string | undefined;
    bodyTwo:string | undefined;
    bodyThree:string | undefined;
    bodyFour:string | undefined;
};
export function CardPortfolio({ imageSrc,  title,time,bodyOne,bodyTwo,bodyThree,bodyFour }: CardPortfolioProps) {
    return (


        <div className="sm:w-[1000px] bg-white border border-gray-200 rounded-lg shadow ">
            <div className="flex flex-row justify-center bg-[#F5FCFF]">
                <img className="rounded-t-lg h-[224px] " src={imageSrc} alt="" />

            </div>
            <div className="p-5 ">
               <div className="text-black flex flex-col sm:flex-row sm:justify-between sm:items-center">
               <a href="#">
                    <h6 className="mb-2 text-2xl font-bold  text-black">{title}</h6>
                </a>
                <span>{time}</span>
               </div>
                <div className="mt-4 sm:mt-0" >
                                <p className="mb-3 font-normal text-black">{bodyOne}</p>

                </div>
                  <div className="mt-4 sm:mt-0" >
                  <p className="mb-3 font-normal text-black">{bodyTwo}</p>

  </div>
    <div className="mt-4 sm:mt-0" >
    <p className="mb-3 font-normal text-black">{bodyThree}</p>

</div>

<div className="mt-4 sm:mt-0" >
    <p className="mb-3 font-normal text-black">{bodyFour}</p>

</div>
                            
                
                <a href="#portfolio" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#5E3BEE] rounded-lg hover:bg-[#4C2FCF] focus:ring-4 focus:outline-none ">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>

    )
}