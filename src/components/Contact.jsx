import { motion } from 'framer-motion';

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, x:'100vw' }}
    animate={{ opacity: 1, x:0 }}
    exit={{ opacity: 0, x:"-100vw" }}
    transition={{ duration: 0.5 }}
  >
    <h1>İletişim Sayfası</h1>
  </motion.div>
);

export default Contact;
