import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";

import { login } from "src/store/reducers";
import { createUser } from "src/store/reducers/user";
import { Button, Input, Select } from "src/components";
import { CountryListType, IFormData } from "./types";

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  lastName: z.string().min(1, "Sobrenome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  country: z.string().min(1, "País é obrigatório"),
});

export const Form = () => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState<CountryListType>([]);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IFormData>({ resolver: zodResolver(formSchema) });

  function onSubmit(data: IFormData) {
    dispatch(createUser(data));
    dispatch(login());
  }

  useEffect(() => {
    fetch("/countries.json")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <form name="signup" className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Cadastro de usuário</h1>

      <Input
        error={errors.name}
        {...register("name", { required: true })}
        label="Nome"
      />
      <Input
        error={errors.lastName}
        {...register("lastName", { required: true })}
        label="Sobrenome"
      />
      <Input
        error={errors.email}
        {...register("email", { required: true })}
        label="E-mail"
        type="email"
      />
      <Select
        error={errors.country}
        {...register("country", { required: true })}
        label="País"
      >
        <option value="">Selecione</option>
        {countries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </Select>

      <div className="button-wrapper">
        <Button type="submit">Acessar</Button>
      </div>
    </form>
  );
};
