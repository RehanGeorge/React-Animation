import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  const hiddenAnimationState = { opacity: 0, y: 30 }
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        initial={hiddenAnimationState} 
        animate={{ opacity: 1, y: 0}}
        exit={hiddenAnimationState}
        open className="modal">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
