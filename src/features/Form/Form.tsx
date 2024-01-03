import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Flex } from '../../components/Flex/Flex';
import FormTextField from '../../components/TextField/FormTextField';

const schema = object({
  name: string().required("Insira seu nome."),
  email: string()
    .email("E-mail inválido!")
    .required("Insira seu melhor e-mail!"),
  telefone: string().required("Insira seu telefone."),
});

type IFormValues = InferType<typeof schema>;

function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      name: "",
      telefone: "",
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
      <Flex className="gap-6" direction="col">
        <FormTextField
          control={control}
          name="name"
          errors={errors}
          className="w-[100%]"
          label="Nome*"
          placeholder="Seu nome"
        />
        <FormTextField
          control={control}
          name="email"
          errors={errors}
          className="w-[100%]"
          label="Endereço de e-mail*"
          placeholder="Seu melhor e-mail"
        />
        <FormTextField
          control={control}
          name="telefone"
          errors={errors}
          className="w-[100%] border-b-black border-b-[2px]"
          label="Telefone*"
          mask='(99) 99999-9999'
        />
        <p className='leading-[24px] text-[16px] text-neutral-pure500'>Ao enviar o formulário, você concorda com a <span className='underline font-[600] text-neutral-pure900'>Política de Privacidade</span>.</p>
        <button
          type="submit"
          className="py-3 rounded-sm bg-[#07D767] hover:bg-[rgb(128,252,140,0.8)]"
        >
          <p className="text-[rgb(0,0,0,0.87)">Enviar mensagem</p>
        </button>
      </Flex>
    </form>
  )
}

export default Form