import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <img
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};
const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <img src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
const Features = () => {
  return (
    <div className="bg-blue-500 py-5 px-5 bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center text-white" id="features">
    <section className="container mx-auto px-5 py-7 md:px-16  text-white " >
      
      <span className="service-name text-center  ">WHATS THE FUNCTION</span>
      <h2 className="title text-center">ABOUT US</h2>

      {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/non-invasive-method.png"
          title="Non-Invasive"
          // desc="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <FeatureProduct
          imgSrc="/features/settings.png"
          title="Fully Automatic"
          // desc="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <FeatureProduct
          imgSrc="/features/selfcare.png"
          title="Personalized Care"
          // desc="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <FeatureProduct
          imgSrc="/features/decision-making.png"
          title="Discretion"
          // desc="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
         </div> */}
          </section>
        {/* <h2 className="title text-center ">Amazing useful features</h2> */}

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/non-invasive-method.png"
          title="Our Mission"
          desc="Experience comfort and ease with INNAIDE's non-invasive approach, eliminating the need for surgical interventions or uncomfortable treatments."
        />
        <QualityFeature
          imgSrc="/features/settings.png"
          title="Our Vision"
          desc="INNAIDE operates automatically, ensuring your pelvic floor muscles are strengthened with minimal effort on your part. Simply wear it and let the technology do the work."
        />
        <QualityFeature
          imgSrc="/features/selfcare.png"
          title="Our Aim"
          desc="Tailored specifically to your condition, INNAIDE adapts to provide customized support and stimulation, ensuring optimal results tailored to your body’s needs."
        />
        <QualityFeature
          imgSrc="/features/decision-making.png"
          title="Our Flagship Product"
          desc="Designed with privacy in mind, INNAIDE is discreet enough to be worn under your everyday clothing, allowing you to manage SUI without changing your lifestyle."
        />
     
     </div>
   
    </div>
  );
};

export default Features;