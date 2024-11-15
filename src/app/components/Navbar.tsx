import Link from "next/link";
import Image from "next/image";


export default function Navbar(){
    return(
      <div className="flex justify-evenly bg-black align-middle">

        <div className="sticky mt-2 top-0 col-span-2">
          <Image src={"/images/logo.webp"} alt="LOGO" width={75} height={75}/>
        </div>

        <div className="text-3xl text-blue-400 font-semibold col-span-10 py-6">
          <h1>Smart Traffic Evaluation and Monitoring System</h1>
        </div>

        <div className="flex text-xl text-white justify-around gap-4 py-7">
        <Link href={'/'}>Home</Link>
        <Link href={'/About'}>About</Link>
        <Link href={'/Contact'}>Contact</Link>
        <Link href={'/Pricing'}>Pricing</Link>
        <Link href={'/Login'}>Login</Link>
        <Link href={'/Signup'}>Signup</Link>
        </div>

      </div>
      
        
    )
}