// components

import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import TestimonialSlider from '../../components/TestimonialSlider';

const Testimonials = () => {
  return (
    <div className='h-full bg-primary/30 py-36 items-center'>
      <div className='container mx-auto h-full py-32 flex flex-col justify-center'>
        {/* title */}
        <h2 className='h2 mb-8 xl:mb-0 text-center'>
          What client <span className='text-accent'>say.</span>
        </h2>
        {/* slide */}
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
