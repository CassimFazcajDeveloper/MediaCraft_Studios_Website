import { highlights, stats } from "@/data";
import Image from "next/image";
import IntegrationsSection from "./right";


const About = () => {
  return (
    <>
    <div data-aos="fade-up"  className="bg-gray-900">
      {/* section heading */}

      <div data-aos-delay="300" className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* image */}
        
        {/* content */}
        <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold text-gray-400 dark:text-yellow-300">
                No More Tutorial Hell
            </h3>
            <p className="text-muted-foreground leading-relaxed">
                Random YouTube videos won&apos;t get you hired. Every course follows a deliberate structure — each lesson builds on the last, so nothing falls through the cracks.
            </p>

            <p className="text-muted-foreground leading-relaxed">
                Random YouTube videos won&apos;t get you hired. Every course follows a deliberate structure — each lesson builds on the last, so nothing falls through the cracks.
            </p>
            
            {/* highlights */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {highlights.map((item) =>{
               return <div key={item.text} className="flex items-center gap-3 text-3m">
                <div className="w-8 h-8 rounded-lg bg-blue-500/200 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-blue-700 dark:text-yellow-300" />
                </div>
                <span className="text-muted-foreground">{item.text}</span>
               </div>     
                })}
            </div> */}
           

        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <IntegrationsSection/>
          </div>
        </div>
      </div>
       {/* ratings */}
       <div className="mt-18  w-[80%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(((stat)=>{
                return <div key={stat.label} className="bg-white-900 dark:bg-blue-500/10 shadow rounded-xl p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gray-400 mb-2">
                        {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground dark:text-muted-foreground">{stat.label}</div>
                </div>
            }))}
        </div>
       </div>
    </div>
    
    </>
  );
};

export default About;
