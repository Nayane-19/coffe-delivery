import * as yup from "yup";
import { AddressDataForm } from "../@types/coffes";
import Shape from "../@types/shape";
import { yupResolver } from "@hookform/resolvers/yup";

export const addressSchema = yup.object().shape<
Shape<AddressDataForm>>({
  cep: yup.string().required("Campo obrigatório").nullable(),
  city: yup.string().required("Campo obrigatório").nullable(),
  neighborhood: yup.string().required("Campo obrigatório").nullable(),
  number: yup.string().nullable().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório").nullable(),
  street: yup.string().required("Campo obrigatório").nullable(),
});

export default yupResolver(addressSchema);