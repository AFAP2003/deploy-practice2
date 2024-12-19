export function Footer() {
    return (
        <div className="h-[300px] bg-[#F5FCFF] sm:pl-[50px] sm:pr-[50px]" id="footer">
            <div className="p-4 sm:p-0 flex flex-col items-center sm:items-auto sm:flex-row sm:justify-between">
                <a href="#navbar">            <img src="/portfolio logo.png" className=" flex items-center h-[50px] " alt="" />
                </a>
                <div className="sm:gap-[40px] gap-[15px] flex  items-center text-black mt-4 sm:mt-0">
                    <a href="#navbar" className="hover:text-[#5E3BEE]">Home</a>
                    <a href="#portfolio" className="hover:text-[#5E3BEE]">Portfolio</a>
                    <a href="#about" className="hover:text-[#5E3BEE]">About me</a>
                    <a href="#contact" className="hover:text-[#5E3BEE]">Contact</a>
                </div>
                <div className="flex flex-row  sm:gap-[10px] gap-[15px] items-center mt-4 sm:mt-0" >
                    <a href="#footer">                <img src="/facebook icon.png" className="w-[30px] h-[30px]" alt="" />
                    </a>
                    <a href="#footer">                <img src="/instagram icon.png" className="w-[30px] h-[30px] " alt="" />
                    </a>
                    <a href="#footer">                <img src="/twitter icon.png" className="w-[30px] h-[30px] " alt="" />
                    </a>
                    <a href="#footer">                <img src="/linkedin icon.png" className="w-[30px] h-[30px]" alt="" />
                    </a>
                </div>
            </div>
            <hr className="sm:mt-[100px]" />
            <div className="flex flex-col items-center gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:mt-[100px] mt-[20px]">
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