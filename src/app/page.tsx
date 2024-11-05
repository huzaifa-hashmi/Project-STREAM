import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-2">
      
      <div>
      <Image src={"/images/fyp img.jpg"} alt="bg image home" width={1920} height={1080}/>
      </div>


      <div className="grid grid-rows-4 align-middle px-10">

      

      <h1 className="text-6xl">Your Very Own Traffic Analyzer</h1>

      <p className="text-3xl font-serif">
        
        Monitors traffic via visual feed and gets you desired analytics...
      </p>
      
      
      <Link href={'/About'}  className="text-3xl text-[#182069] border-t-neutral-950 font-semibold"><button>click here to learn more</button></Link>

      <p className="text-3xl font-serif">Use our finely curated traffic insights as per your needs and case</p>



      </div>
    </div>
  );
}
