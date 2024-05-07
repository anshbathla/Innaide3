import { useState } from 'react';
import styles from './FaqAccordion.module.css';

const faqs = [
  {
    question: 'What is Next.js?',
    answer: 'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.'
  },
  {
    question: 'What is Next.js?',
    answer: 'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.'
  },
  {
    question: 'What is Next.js?',
    answer: 'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.'
  },
  {
    question: 'Why use Next.js?',
    answer: 'Next.js provides a lot of features like fast refresh, image optimization, internationalization, and more out of the box.'
  },
  // Add more FAQs as needed
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="FAQ" >
    <h1 className={styles.faqTitle} >Do you have any Questions? </h1>
    <div className={styles.accordion}>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.item}>
          <button className={styles.question} onClick={() => handleToggle(index)}>
            {faq.question}
            <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
          </button>
          {activeIndex === index && <div className={styles.answer}>{faq.answer}</div>}
        </div>
       
      ))}
      </div>
    </div>
  );
};

export default FaqAccordion;