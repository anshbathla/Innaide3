import Image from "next/image";
import styles from './FaqAccordion.module.css';

const Card = ({ imgSrc, title }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <Image
        src={imgSrc}
        width={50}
        height={50}
        alt="community image"
        className="mx-auto"
      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="leading-loose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
        tempor.
      </p>
    </div>
  );
};

const USP = () => {
  return (
    <section className="container mx-auto px-16 lg:px-32">
        <h1 className={styles.faqTitle}> OUR USP</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2 lg:gap-16 text-center mx-auto">
        <Card imgSrc="/community/1.svg" title="Sleep Better" />
        <Card imgSrc="/community/2.svg" title="Stay Calm" />
        <Card imgSrc="/community/3.svg" title="Safe" />
      </div>
    </section>
  );
};

export default USP;