import { MapPinLine } from "phosphor-react";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { AddressDataForm } from "../../@types/coffes";
import "./AddressForm.scss";

export function AddressForm() {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<AddressDataForm>();

  return (
    <div className="AddressForm">
      <div className="header">
        <MapPinLine size={20} />
        <div className="title">
          <h6>Endereço de Entrega</h6>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </div>
      <form action="">
        <div className="grid-container">
          <div className="input-container cep">
            <div className="input-container">
              <input type="number" placeholder="CEP" {...register("cep")} />
              <span className="error">{errors.cep?.message}</span>
            </div>
          </div>
          <div className="input-container street">
            <input type="text" placeholder="Rua" {...register("street")} />
            <span className="error">{errors.street?.message}</span>
          </div>
          <div className="input-container number">
            <input type="number" placeholder="Número" {...register("number")} />
            <span className="error">{errors.number?.message}</span>
          </div>
          <div className="input-container complement">
            <input
              type="text"
              placeholder="Complemento"
              {...register("clomplement")}
            />
            <span className="error">{errors.clomplement?.message}</span>
          </div>
          <div className="input-container neighborhood">
            <input
              type="text"
              placeholder="Bairro"
              {...register("neighborhood")}
            />
            <span className="error">{errors.neighborhood?.message}</span>
          </div>
          <div className="input-container city">
            <input type="text" placeholder="Cidade" {...register("city")} />
            <span className="error">{errors.city?.message}</span>
          </div>
          <div className="input-container state">
            <input type="text" placeholder="UF" {...register("state")} />
            <span className="error">{errors.state?.message}</span>
          </div>
        </div>
      </form>
    </div>
  );
}
