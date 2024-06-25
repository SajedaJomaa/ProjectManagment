import { forwardRef,useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";
const  Modal= forwardRef(function Modal({ children, buttonCaption },ref) {
    const dialog = useRef();
    
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });
    
    return createPortal(
        <dialog ref={dialog} className="p-4 rounded-md shadow backdrop:bg-stone-900/90-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
            <Button>{buttonCaption}</Button></form></dialog>
        , document.getElementById('modal-root'));
});

export default Modal;