import { useState } from 'react';
import {Modal} from '../Modal';

export const ModalExample = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpen}>Open Modal</button>

            {isOpen && (
                <Modal onClose={handleClose}>
                    <p> This is a modal</p>
                    <div>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </Modal>
            )}
        </div>
    );
};