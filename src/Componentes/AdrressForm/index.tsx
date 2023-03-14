import { MapPinLine } from "phosphor-react";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddressDataForm } from "../../@types/coffes";
import { StateStore } from "../../@types/reduce";
import addressSchema from "../../Schemas/addressSchema";
import { setAddress, setModal } from "../../store/action";
import "./AddressForm.scss";
import InputMask from "react-input-mask";
import * as alertify from 'alertifyjs';

export function AddressForm() {
  const [address, modal] = useSelector(
    (state: StateStore) => [state.CoffePersistentState.address, state.CoffePersistentState.modal]
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<AddressDataForm>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: addressSchema,
  });

  useEffect(() => {
    reset({
      ...address,
    });
  }, [address]);

  function onSubmit(address: AddressDataForm) {
    dispatch(setAddress(address));

    if(modal) dispatch(setModal());
    alertify.notify("Endereço adicionado com sucesso", "success", 3, null);
  }

  return (
    <div className="AddressForm">
      <div className="header">
        <MapPinLine size={20} />
        <div className="title">
          <h6>Endereço de Entrega</h6>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid-container">
          <div className="input-container cep">
            <div className="input-container">
            <Controller
                name="cep"
                control={control}
                render={({
                  field: { name, value, onChange },
                }) => (
                  <InputMask
                    mask="99999-999"
                    value={value}
                    name={name}
                    placeholder="CEP"
                    onChange={onChange}
                  />
                )}
              />
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
            <input type="text" placeholder="UF" {...register("state")} maxLength={2} />
            <span className="error">{errors.state?.message}</span>
          </div>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit-btn">
            Confirmar endereço
          </button>
        </div>
      </form>
    </div>
  );
}
