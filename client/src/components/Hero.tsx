
import React from 'react';
import { motion } from 'framer-motion';
import ProfileSection from './hero/ProfileSection';
import NameSection from './hero/NameSection';
import DescriptionSection from './hero/DescriptionSection';
import CTAButtons from './hero/CTAButtons';
import SocialLinks from './hero/SocialLinks';
import ScrollIndicator from './hero/ScrollIndicator';
import BackgroundElements from './hero/BackgroundElements';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <BackgroundElements />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <ProfileSection itemVariants={itemVariants} />
        <NameSection itemVariants={itemVariants} />
        <DescriptionSection itemVariants={itemVariants} />
        <CTAButtons itemVariants={itemVariants} />
        <SocialLinks itemVariants={itemVariants} />
        <ScrollIndicator itemVariants={itemVariants} />
      </motion.div>
    </div>
  );
};

export default Hero;
