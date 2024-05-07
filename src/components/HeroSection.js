import Image from "next/image";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44" id="home">
  <div className="md:w-full container px-5 md:px-16 mx-auto flex flex-col md:flex-row items-start justify-center text-left"> 
    <div className="md:w-2/3 lg:w-1/2 mr-0 md:mr-10 mb-6 md:mb-0">
      <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
        <p>INNAIDE:  </p>
        <p> Smart Wearable Shorts</p>
      </h1>
      <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
        INNAIDE is your cutting-edge solution, a pair of smart wearable shorts designed specifically to manage Stress Urinary Incontinence (SUI) effectively and comfortably. Tailored to strengthen your pelvic floor muscles through customized, non-invasive stimulation, INNAIDE grants you the freedom and confidence to embrace everyday activities without worry, empowering you to reclaim your life without boundaries. 
 


      </p>
      
      <button className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-blue-600 hover: hover:bg-transparent hover-text rounded-full">
        <Link href="https://www.linkedin.com/in/vishvarajbiotech" target="_blank">
          Explore
        </Link>
      </button>
    </div>
    <div>
      <Image
        src="/features/product2.png"
        width="500"
        height="500"
         style={{ borderRadius: '20px' }}
      />
    </div>
  </div>
  
</section>


  );
};

export default HeroSection;
