import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { InferType, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Flex } from "../../components/Flex/Flex";
import FormTextField from "../../components/TextField/FormTextField";
import { availableClasses, dates } from "../Dates/Dates";
import axios from "axios";

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
  const [disabled, setDisabled] = React.useState(false);
  const [hasSent, setHasSent] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(0);
  const [selectedClass, setSelectedClass] = React.useState(
    availableClasses[0][0].title
  );

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
    if (!data.telefone || !data.email || !data.name) return;
    setDisabled(true);
    const finalData = {
      ...data,
      date: dates[selectedDate].date,
      class: selectedClass,
    };
    axios
      .post(
        "https://hook.us1.make.com/t157c5vpq5kgkmh29svdlsn83u8kfhxv",
        finalData
      )
      .then(() => {
        setHasSent(true);
        setDisabled(false);
      });
  };

  return (
    <Flex
      direction="col"
      justify={hasSent ? "center" : "start"}
      align={hasSent ? "center" : "start"}
      className="max-w-[412px] min-h-[400px] md:max-w-[200px] xl:max-w-[412px] lg:max-w-[352px] gap-5 2xl:gap-8 rounded-sm bg-white pb-6 pt-4 px-6 2xl:p-6"
    >
      {hasSent ? (
        <>
          <p className="text-center text-[20px] 2xl:text-[24px] font-[500] leading-[29px] text-neutral-pure900">
            Pronto! Seu cadastro foi realizado com sucesso. <br />
            Chegue 10 minutos antes da sua palestra começar, caso contrário, sua
            vaga será disponibilizada para outro participante.
          </p>
        </>
      ) : (
        <>
          <p className="text-[20px] 2xl:text-[24px] font-[500] leading-[29px] text-neutral-pure900">
            Faça a sua inscrição!
          </p>
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
                  htmlFor="data"
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
                        setSelectedDate(
                          dates.indexOf(dates[parseInt(e.target.value)])
                        );
                        setSelectedClass(
                          availableClasses[
                            dates.indexOf(dates[parseInt(e.target.value)])
                          ][0].title || "Rinomodelação com Sofiderm."
                        );
                        field.onChange(e);
                      }}
                    >
                      <option disabled selected>
                        Selecione uma data
                      </option>
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
                        field.onChange(e);
                      }}
                    >
                      <option disabled selected>
                        Selecione uma aula
                      </option>
                      {availableClasses[selectedDate]?.map((date, index) => (
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
                placeholder="(00) 00000-0000"
              />
              <button
                disabled={disabled}
                type="submit"
                className="py-3 rounded-sm bg-[#07D767] hover:bg-[rgb(128,252,140,0.8)]"
              >
                <p className="text-[rgb(0,0,0,0.87)">Confirmar Inscrição</p>
              </button>
            </Flex>
          </form>
        </>
      )}
    </Flex>
  );
}

export default Form;
