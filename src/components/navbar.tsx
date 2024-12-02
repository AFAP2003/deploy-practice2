import { ButtonNavbar, ButtonProfile } from "./buttons";
export function Navbar() {
    return (
        <>
            <nav className="text-black bg-white flex flex-row justify-between h-[70px] " id="navbar">
                <a href="#navbar">                <img src="/portfolio logo.png" className=" flex items-center h-[50px] ml-[50px]" alt="" />
                </a>
                <div className="gap-[50px] flex  items-center ">
                    <a href="#navbar" className=" hover:text-[#5E3BEE]">Home</a>
                    <a href="#portfolio" className=" hover:text-[#5E3BEE]">Portfolio</a>
                    <a href="#about" className=" hover:text-[#5E3BEE]">About me</a>
                    <a href="#contact" className=" hover:text-[#5E3BEE]">Contact</a>
                </div>
                <div className="flex items-center mr-[50px]">
                    <ButtonNavbar />
                </div>

            </nav>


         

        </>
    );
}
