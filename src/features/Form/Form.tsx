import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Flex } from '../../components/Flex/Flex';
import FormTextField from '../../components/TextField/FormTextField';
import { dates, programacao } from '../Dates/Dates';

const schema = object({
  name: string().required("Insira seu nome."),
  email: string()
    .email("E-mail inválido!")
    .required("Insira seu melhor e-mail!"),
  telefone: string().required("Insira seu telefone."),
  date: string().required("Insira uma data."),
  class: string().required("Insira uma turma."),
});

type IFormValues = InferType<typeof schema>;

function Form() {
  const [selectedDate, setSelectedDate] = React.useState(0)
  const [selectedClass, setSelectedClass] = React.useState('Rinomodelação com Sofiderm.')

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
      date: "24 de jan, 2024",
      class: "Rinomodelação com Sofiderm.",
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const finalData = {
      ...data,
      date: dates[selectedDate].date,
      class: selectedClass,
    }
    console.log(finalData);
  };

  return (
    <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
      <Flex className="gap-2 xl:gap-4 2xl:gap-6" direction="col">
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
        <Flex direction="col" className="gap-1 w-full">
          <label
            htmlFor='data'
            className="2xl:text-[14px] text-[12px] text-neutral-pure400 font-[500]"
          >
            Data escolhida*
          </label>
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <select
                {...field}
                defaultValue={dates[0].date}
                className="w-[100%] 2xl:text-[16px] bg-white text-[14px] border-b-grey-300 border-b-[1px]"
                onChange={(e) => {
                  setSelectedDate(dates.indexOf(dates[parseInt(e.target.value)]))
                  setSelectedClass(programacao[dates.indexOf(dates[parseInt(e.target.value)])][0].title || 'Rinomodelação com Sofiderm.');
                  field.onChange(e)
                }}
              >
                <option disabled selected>Selecione uma data</option>
                {dates.map((date, index) => (
                  <option key={index} value={index}>
                    {date.date}
                  </option>
                ))}
              </select>
            )}
          />
        </Flex>
        <Flex direction="col" className="gap-1 w-full">
          <label
            htmlFor="class"
            className="2xl:text-[14px] text-[12px] text-neutral-pure400 font-[500]"
          >
            Aula escolhida*
          </label>
          <Controller
            control={control}
            name="class"
            render={({ field }) => (
              <select
                {...field}
                value={selectedClass}
                className="w-[100%] 2xl:text-[16px] bg-white text-[14px] border-b-grey-300 border-b-[1px]"
                onChange={(e) => {
                  setSelectedClass(e.target.value);
                  field.onChange(e)
                }}
              >
                <option disabled selected>Selecione uma aula</option>
                {programacao[selectedDate]?.map((date, index) => (
                  <option key={index} value={date.title}>
                    {date.start} às {date.end} - {date.title}
                  </option>
                ))}
              </select>
            )}
          />
        </Flex>
        <FormTextField
          control={control}
          name="telefone"
          errors={errors}
          className="w-[100%] border-b-black border-b-[2px]"
          label="Telefone*"
          mask='(99) 99999-9999'
        />
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