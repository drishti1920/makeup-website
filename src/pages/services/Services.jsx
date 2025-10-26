import Heading from '../../components/common/heading/Heading';
import styles from "../about-us/AboutUs.module.css";
import ServicesSection from '../../components/section/services/ServicesSection';

const Services = () => {
  return (
    <div className={styles.AboutusPage}>
      <Heading heading="Services" />
      <ServicesSection />
  
    </div>
  );
};

export default Services;
