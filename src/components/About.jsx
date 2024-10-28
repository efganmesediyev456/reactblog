import { motion } from 'framer-motion';

const About = () => (
  <>
  <motion.div
    initial={{ opacity: 0, x: '100vw' }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: '-100vw' }}
    transition={{ duration: 0.5 }}
  >
    <h1>Hakkımızda</h1>
  </motion.div>
  <motion.p drag dragConstraints={{left:-30,top:0, right:0, bottom:0}} dragElastic={0.5}>salam dostum</motion.p>
  </>
);

export default About;
