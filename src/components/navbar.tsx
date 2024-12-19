import { ButtonNavbar } from "./buttons";
export function Navbar() {
    return (
        <>
            <nav className="text-black bg-white flex flex-col justify-between items-center sm:flex-row  sm:h-[70px] p-4" id="navbar">
                <a href="#navbar">                
                    <img src="/portfolio logo.png" className=" sm:flex sm:flex-row sm:items-center h-[50px] sm:ml-[50px]" alt="" />
                </a>
                <div className="sm:gap-[50px] gap-4 flex flex-col sm:flex-row items-center mt-4">
                    <a href="#navbar" className=" hover:text-[#5E3BEE]">Home</a>
                    <a href="#portfolio" className=" hover:text-[#5E3BEE]">Portfolio</a>
                    <a href="#about" className=" hover:text-[#5E3BEE]">About me</a>
                    <a href="#contact" className=" hover:text-[#5E3BEE]">Contact</a>
                </div>
                <div className="sm:flex sm:items-center sm:mr-[50px] mt-[16px] sm:mt-[0px]">
                    <ButtonNavbar />
                </div>

            </nav>




        </>
    );
}
