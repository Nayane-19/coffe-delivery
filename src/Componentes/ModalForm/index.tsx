import { X } from "phosphor-react";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/action";
import { AddressForm } from "../AdrressForm";
import "./ModalForm.scss";

export function ModalForm() {
    const distpatch = useDispatch();

    return (
         <div className="ModalForm">   
            <X size={32} weight="fill" onClick={() => distpatch(setModal())}/>     
            <div className="content">
                <AddressForm />
            </div>
        </div>
    )
}