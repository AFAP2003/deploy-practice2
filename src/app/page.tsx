"use client"
import { Navbar } from "@/components/navbar";
import { ButtonProfile, ButtonPortfolio, ButtonSubmit } from "@/components/buttons"
import { Card, CardPortfolio } from "@/components/cards"
import { Footer } from "@/components/footer"
import contentfulClient from "@/contentful/contentfulClient";
import { TypePortfolioSkeleton,IContentfulAsset } from "@/contentful/types/portfolio.types";
import { useState,useEffect } from "react";

const getBlogPostsContentful = async ()=>{
  try{
    const data = await contentfulClient.getEntries<TypePortfolioSkeleton>({
      content_type: 'portfolio', // Specify the content type ID for "portfolio"

    });

    const result = data.items.map((item)=>
    ({
      image:  (item.fields.image as IContentfulAsset)?.fields.file.url || "",
      title: item.fields.title || '',
      date: item.fields.date || '',
      bodyOne: item.fields.bodyOne || '',
      bodyTwo: item.fields.bodyTwo || '',
      bodyThree:item.fields.bodyThree || '',
      bodyFour: item.fields.bodyFour || ''
    })
    )
    console.log(data.items)
    return result
  } catch(err){
    console.log(err)
  }
}

type ProcessedPortfolio = {
  image: string;
  title: string;
  date: string;
  bodyOne: string;
  bodyTwo: string;
  bodyThree: string;
  bodyFour: string;
};
export default function Home() {
  const [posts, setPosts] = useState<ProcessedPortfolio[] | undefined>([]);

  // Fetch Contentful data on component mount
  useEffect(() => {
    const loadContentfulData = async () => {
      const data = await getBlogPostsContentful();
      setPosts(data);
    };

    loadContentfulData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="h-[600px] bg-[#F5FCFF]" >

        <div className="flex sm:flex-row sm:justify-between flex-col  justify-between">

          <div className="text-black flex flex-col  justify-start relative sm:left-[250px] sm:top-[200px] p-4 mt-5 sm:mt-0 sm:p-0">
            <span className="font-bold">Hey, I am Andi</span>

            <p className="sm:text-[50px] text-[30px]  font-bold leading-tight">I create <span className="text-[#5E3BEE]">website</span> and <br />
              <span className="text-[#5E3BEE]">mobile application</span>
            </p>

            <span className="font-bold mt-2">Full-Stack Web Developer</span>

            <div className="hidden sm:block sm:relative sm:top-[50px] mt-4 sm:mt-0">
    <ButtonProfile />
  </div>        
          </div>
         
          <div className="self-center mt-10 sm:mt-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px]  rounded-full overflow-hidden  sm:relative sm:top-[150px] sm:right-[300px]">
            <img src="/foto profile website.JPG" className=" object-cover sm:w-full sm:h-full" alt="" />
          </div>

          <div className="sm:hidden flex self-center mt-20">
  <ButtonProfile />
</div>
        </div>

       
      </div>


      <div className="bg-white sm:h-[4500px] h-auto ">

        
      <div className="flex flex-col sm:flex-row sm:justify-between sm:pt-[100px] sm:ml-[200px]">



<img src="/about-me.png" className="flex self-center sm:self-auto w-[70%] sm:w-auto" alt="" id="about" />

<div className="p-4 sm:p-0 text-black flex flex-col  justify-start relative sm:mr-[200px] sm:pt-[200px]">
  <span className="font-bold">About</span>

  <span className="sm:text-[50px] text-[30px] font-bold  text-justify" >About Me
  </span>
  <span className="sm:w-[545px]">Bachelor of Computer Science at UCSI University, equipped with 8 months of hands-on internship experience in the IT
    industry. Skilled in HTML, CSS, Javascript, PHP, Java, Python, and SQL. I am a collaborative, communicative and have good attention to detail person. Eager to leverage my technical skills and problem-solving abilities to contribute to innovative projectsin the industry.
    Open to opportunities where I can apply my knowledge, continue learning, and grow within a dynamic development team.
  </span>
  <br />
  <div className=""><ButtonProfile /></div>

</div>



</div>

        <div className="flex flex-col justify-start text-black p-4 sm:ml-[120px] sm:pt-[100px]">
          <span className="font-bold">My skills</span>
          <span className="sm:text-[50px] text-[30px] font-bold">My Expertise</span>

          <div className="grid sm:grid-cols-4 sm:gap-y-[10px] self-center sm:self-auto grid-cols-2 gap-y-3 gap-x-10 sm:gap-x-0">
            <Card imageSrc="/html.png" text="HTML" />
            <Card imageSrc="/java-script.png" text="Javascript" />
            <Card imageSrc="/css-3.png" text="CSS" />
            <Card imageSrc="/python.png" text="Python" />
            <Card imageSrc="/java.png" text="Java" />
            <Card imageSrc="/php.png" text="PHP" />
            <Card imageSrc="/mysql.png" text="SQL" />


          </div>
        </div>


        <div className="flex flex-row justify-between sm:pt-[200px] p-4 sm:p-0">
          <div className="flex flex-col sm:ml-[150px] text-black">
            <span className="font-bold" id="portfolio">Recent Project</span>
            <span className="sm:text-[50px] text-[30px] font-bold" >My Portfolio</span>
          </div>

          <div className="sm:mr-[150px]">
            <ButtonPortfolio />
          </div>


        </div>

        <div className="flex flex-col  items-center sm:items-start   sm:items-center gap-[40px] mt-[50px] px-4 sm:px-0">
      {
        posts && posts.map((blog)=>
          <>
            <CardPortfolio
    imageSrc={`https:${blog.image}`}
    title={blog.title}
    time={blog.date}
    bodyOne={blog.bodyOne}
    bodyTwo={blog.bodyTwo}
    bodyThree={blog.bodyThree}
    bodyFour={blog.bodyFour}
  />
         
          </>
        )
      }

         

        </div>



        <div className="text-black flex flex-col sm:justify-center sm:items-center sm:mt-[100px] p-4 sm:p-0">
          <span className="font-bold self-center sm:self-auto" id="contact">Get In Touch</span>
          <span className="font-bold sm:text-[50px] text-[30px] self-center sm:self-auto">Contact me</span>
          <form action="">

            <div className="flex flex-col sm:flex-row sm:gap-[10px] sm:mt-[20px]">
              <div className="mt-[20px] sm:mt-[0px]">
                <label htmlFor="">First Name</label>
                <input type="text" id="first_name" className="bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[295px]" />

              </div>

              <div className="mt-[20px] sm:mt-[0px]">
                <label htmlFor="">Last Name</label>
                <input type="text" id="first_name" className="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[295px]" />

              </div>


            </div>

            <div className="flex flex-col sm:flex-row sm:gap-[10px] sm:mt-[20px]">
              <div className="mt-[20px] sm:mt-[0px]">
                <label htmlFor="">Email</label>
                <input type="text" id="first_name" className="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[295px]" />

              </div>

              <div className="mt-[20px] sm:mt-[0px]">
                <label htmlFor="">Phone Number</label>
                <input type="text" id="first_name" className="bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[295px]" />

              </div>



            </div>
            <div className="mt-[20px]">
              <label htmlFor="countries" className="block mb-2  text-black">Select an option</label>
              <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[600px]">
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
              <ButtonSubmit />
            </div>

          </form>
        </div>
      </div>



      <Footer />

    </div>


  );
}
