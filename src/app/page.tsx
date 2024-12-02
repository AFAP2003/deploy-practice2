import { Navbar } from "@/components/navbar";
import { ButtonProfile, ButtonPortfolio,ButtonSubmit } from "@/components/buttons"
import { Card, CardPortfolio } from "@/components/cards"
import {Footer} from "@/components/footer"
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-[600px] bg-[#F5FCFF]" >

        <div className="flex flex-row justify-between">

          <div className="text-black flex flex-col  justify-start relative left-[250px] top-[200px]">
            <span className="font-bold">Hey, I am Andi</span>

            <p className="text-[50px] font-bold leading-tight">I create <span className="text-[#5E3BEE]">website</span> and <br />
            <span className="text-[#5E3BEE]">mobile application</span>
            </p>
            

            <div className="relative top-[50px]"><ButtonProfile /></div>

          </div>

          <div className="w-[400px] h-[400px]  rounded-full overflow-hidden  relative top-[150px] right-[300px]">
            <img src="/foto profile website.JPG" className=" object-cover w-full h-full" alt="" />
          </div>


        </div>


      </div>


      <div className="bg-white h-[3000px] ">
        <div className="flex flex-col justify-start text-black relative ml-[120px] pt-[100px]">
          <span className="font-bold">My skills</span>
          <span className="text-[50px] font-bold">My Expertise</span>

          <div className="grid grid-cols-4 gap-y-[10px]">
            <Card imageSrc="/html.png" text="HTML" />
            <Card  imageSrc="/java-script.png" text="Javascript"/>
            <Card  imageSrc="/css-3.png" text="CSS"/>
            <Card  imageSrc="/python.png" text="Python"/>
            <Card  imageSrc="/java.png" text="Java"/>
            <Card  imageSrc="/php.png" text="PHP"/>
            <Card  imageSrc="/mysql.png" text="SQL"/>
           

          </div>
        </div>

        <div className="flex flex-row justify-between pt-[100px] ml-[200px]">



            <img src="/about-me.png" className=" " alt="" id="about" />

          <div className="text-black flex flex-col  justify-start relative mr-[200px] pt-[200px]">
            <span className="font-bold">About</span>

            <span className="text-[50px] font-bold  text-justify" >About Me
            </span>
            <span className="w-[545px]">Bachelor of Computer Science at UCSI University, equipped with 8 months of hands-on internship experience in the IT
industry. Eager to leverage my technical skills and problem-solving abilities to contribute to innovative projectsin the industry.
Open to opportunities where I can apply my knowledge, continue learning, and grow within a dynamic development team.
            </span>
            <br />
            <div className=""><ButtonProfile /></div>

          </div>



        </div>


        <div className="flex flex-row justify-between pt-[200px]">
          <div className="flex flex-col ml-[150px] text-black">
            <span className="font-bold" id="portfolio">Recent Project</span>
            <span className="text-[50px] font-bold" >My Portfolio</span>
          </div>

          <div className="mr-[150px]">
            <ButtonPortfolio />
          </div>


        </div>

        <div className="flex flex-row justify-center gap-[40px] mt-[50px]">

          <CardPortfolio imageSrc='/portfolio1.jpg' title="All in One Task Planner App" text="Developed an All-in-One Task Planner mobile app with features for managing tasks across multiple categories (e.g., Personal Planner, Study Planner), eliminating the need for multiple apps. Implemented local data saving, ensuring users can access notes even after closing the app or restarting their phone. Leveraged the Flutter framework to streamline development and successfully deliver the project within the deadline."/>
          <CardPortfolio imageSrc='/portfolio2.png' title="Supplement Landing Pages" text="Developed 6 landing pages during my internship, utilizing HTML, CSS, JavaScript, and Bootstrap, enhanced user
engagement and conversion rates.Supplement Landing Pages"/>
          <CardPortfolio imageSrc='/portfolio3.png' title="Film Planner App" text="Refined the UI to align with evolving requirements, enhancing usability and the overall user experience (UX). Identified and resolved platform-specific bugs to ensure seamless operation on both Android and iOS. Implemented new functionalities to expand the app's capabilities, while converting Android apps to iOS to increase accessibility and reach a broader audience."/>

        </div>



        <div className="text-black flex flex-col justify-center items-center mt-[100px]">
          <span className="font-bold" id="contact">Get In Touch</span>
          <span className="font-bold text-[50px]">Contact me</span>
          <form action="">

            <div className="flex flex-row gap-[10px] mt-[20px]">
              <div>
                <label htmlFor="">First Name</label>
                <input type="text" id="first_name" className="bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[295px]" />

              </div>

              <div>
                <label htmlFor="">Last Name</label>
                <input type="text" id="first_name" className="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[295px]" />

              </div>


            </div>

            <div className="flex flex-row gap-[10px] mt-[20px]">
              <div>
                <label htmlFor="">Email</label>
                <input type="text" id="first_name" className="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[295px]" />

              </div>

              <div>
                <label htmlFor="">Phone Number</label>
                <input type="text" id="first_name" className="bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[295px]" />

              </div>



            </div>
            <div className="mt-[20px]">
              <label htmlFor="countries" className="block mb-2  text-black">Select an option</label>
              <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[600px]">
                <option selected className="text-black">Choose a topic</option>
                
              </select>
            </div>

            <div>

              <label htmlFor="message" className="block mb-2 font-medium text-black mt-[20px]">Your message</label>
              <textarea id="message" className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
              
            </div>
            <div className="mt-[20px]">
              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              <label htmlFor="default-checkbox" className="ms-2 font-medium  text-black">I accept the terms</label>
            </div>
            <div className="flex flex-row justify-center mt-[20px]">
            <ButtonSubmit/>
            </div>
            
          </form>
        </div>
      </div>



      <Footer/>
    
    </div>


  );
}
