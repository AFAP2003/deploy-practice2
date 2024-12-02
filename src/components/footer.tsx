export function Footer(){
    return(
        <div className="h-[300px] bg-[#F5FCFF] pl-[50px] pr-[50px]" id="footer">
            <div className="flex flex-row justify-between">
                <a href="#navbar">            <img src="/portfolio logo.png" className=" flex items-center h-[50px] " alt="" />
                </a>
            <div className="gap-[40px] flex  items-center text-black">
                    <a href="#navbar" className="hover:text-[#5E3BEE]">Home</a>
                    <a href="#portfolio" className="hover:text-[#5E3BEE]">Portfolio</a>
                    <a href="#about" className="hover:text-[#5E3BEE]">About me</a>
                    <a href="#contact" className="hover:text-[#5E3BEE]">Contact</a>
                </div>
            <div className="flex flex-row  gap-[10px] items-center" >
                <a href="#footer">                <img src="/facebook icon.png" className="w-[30px] h-[30px]"alt="" />
                </a>
                <a href="#footer">                <img src="/instagram icon.png" className="w-[30px] h-[30px] "alt="" />
                </a>
                <a href="#footer">                <img src="/twitter icon.png" className="w-[30px] h-[30px] "alt="" />
                </a>
                <a href="#footer">                <img src="/linkedin icon.png" className="w-[30px] h-[30px]" alt="" />
                </a>
                </div>
            </div>
            <hr className="mt-[100px]"/>
           <div className="flex flex-row justify-between mt-[100px]">
           <div>
                <span className="text-black">Made by Andi Farrel Athalla Pasha</span>

            </div>
            <div className="flex flex-row gap-[10px] text-black">
                <a href="#footer">Privacy Policy</a>
                <a href="#footer">Terms of Service</a>
                <a href="#footer">Cookies Settings</a>
            </div>

           </div>

        </div>
    )
}