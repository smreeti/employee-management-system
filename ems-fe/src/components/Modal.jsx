import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({ children, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Open the dialog only when rendered
    if (!dialog.open) dialog.showModal();
  }, []);

  return createPortal(
    <dialog className="modal" ref={dialogRef} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal') // Make sure this exists in HTML
  );
}