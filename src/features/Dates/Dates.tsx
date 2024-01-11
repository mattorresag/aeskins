import React from "react";
import { Flex } from "../../components/Flex/Flex";
import { DateCard } from "../../components/DateCard/DateCard";
import { ProgramacaoCard } from "../../components/ProgramacaoCard/ProgramacaoCard";

export const dates = [
  {
    date: "24 de jan, 2024",
    day: "quarta-feira",
  },
  {
    date: "25 de jan, 2024",
    day: "quinta-feira",
  },
  {
    date: "26 de jan, 2024",
    day: "sexta-feira",
  },
  {
    date: "27 de jan, 2024",
    day: "sábado",
  },
];

export const programacao = [
  [
    {
      avatar: "/assets/matheus.jpg",
      name: "Matheus Macedo",
      start: "10:00",
      end: "11:00",
      title: "Rinomodelação com Sofiderm.",
    },
    {
      avatar: "/assets/lidia.jpg",
      name: "Lídia Dantas",
      start: "11:00",
      end: "12:00",
      title:
        "Harmonização Facial vs Naturalidade, individualizando o tratamento com Sofiderm.",
    },
    {
      avatar: "/assets/amanda.jpg",
      name: "Amanda Lopes",
      start: "14:00",
      end: "15:00",
      title: "Soluções de harmonização facial para o dia-a-dia clínico.",
    },
    {
      avatar: "/assets/daniela.jpg",
      name: "Daniela Cardoso",
      start: "15:00",
      end: "16:00",
      title: "Tratamento do terço inferior e linha mandibular com Sofiderm.",
    },
    {
      avatar: "/assets/marcela.jpg",
      name: "Marcela Espaladori",
      start: "16:00",
      end: "17:00",
      title:
        "Tratamento da região perioral e lábios associando técnicas de preenchimento com Sofiderm.",
    },
    {
      avatar: "/assets/matheus.jpg",
      name: "Matheus Macedo",
      start: "17:00",
      end: "18:00",
      title: "Preenchimento de Têmporas com Sofiderm.",
    },
  ],
  [
    {
      avatar: "/assets/marcela.jpg",
      name: "Marcela Espaladori",
      start: "10:00",
      end: "11:00",
      title:
        "Tratamento da região perioral e lábios associando técnicas de preenchimento com Sofiderm.",
    },
    {
      avatar: "/assets/fernanda.jpg",
      name: "Fernanda Zanini",
      start: "11:00",
      end: "12:00",
      title: "Soluções de harmonização facial para o dia-a-dia clínico.",
    },
    {
      avatar: "/assets/lidia.jpg",
      name: "Lídia Dantas",
      start: "14:00",
      end: "15:00",
      title:
        "Harmonização Facial vs Naturalidade, individualizando o tratamento com Sofiderm.",
    },
    {
      avatar: "/assets/matheus.jpg",
      name: "Matheus Macedo",
      start: "15:00",
      end: "16:00",
      title: "Volumização e projeção de glúteo com Sofiderm Sub-skin.",
    },
    {
      avatar: "/assets/amanda.jpg",
      name: "Amanda Lopes",
      start: "16:00",
      end: "17:00",
      title: "Ultrassom da face usando os preenchedores Sofiderm.",
    },
    {
      avatar: "/assets/daniel.jpg",
      name: "Daniel Machado",
      start: "17:00",
      end: "18:00",
      title: "Tratamento do terço inferior e linha mandibular com Sofiderm.",
    },
  ],
  [
    {
      avatar: "/assets/amanda.jpg",
      name: "Amanda Lopes",
      start: "10:00",
      end: "11:00",
      title: "Soluções de harmonização facial para o dia-a-dia clínico.",
    },
    {
      avatar: "/assets/lidia.jpg",
      name: "Lídia Dantas",
      start: "11:00",
      end: "12:00",
      title:
        "Harmonização Facial vs Naturalidade, individualizando o tratamento com Sofiderm.",
    },
    {
      avatar: "/assets/matheus.jpg",
      name: "Matheus Macedo",
      start: "14:00",
      end: "15:00",
      title: "Rinomodelação com Sofiderm.",
    },
    {
      avatar: "/assets/fernanda.jpg",
      name: "Fernanda Zanini",
      start: "15:00",
      end: "16:00",
      title:
        "Tratamento da região perioral e lábios associando técnicas de preenchimento com Sofiderm.",
    },
    {
      avatar: "/assets/daniela.jpg",
      name: "Daniela Cardoso",
      start: "16:00",
      end: "17:00",
      title:
        "10 seringas em 1, simplificando o tratamento full face com Sofiderm.",
    },
    {
      avatar: "/assets/diogo.jpg",
      name: "Diogo Lustosa",
      start: "17:00",
      end: "18:00",
      title: "Tratamento do terço inferior e linha mandibular com Sofiderm.",
    },
  ],
  [
    {
      avatar: "/assets/marcela.jpg",
      name: "Marcela Espaladori",
      start: "10:00",
      end: "11:00",
      title:
        "Tratamento da região perioral e lábios associando técnicas de preenchimento com Sofiderm.",
    },
    {
      avatar: "/assets/lidia.jpg",
      name: "Lídia Dantas",
      start: "11:00",
      end: "12:00",
      title:
        "Harmonização Facial vs Naturalidade, individualizando o tratamento com Sofiderm.",
    },
    {
      avatar: "/assets/daniel.jpg",
      name: "Daniel Machado",
      start: "14:00",
      end: "15:00",
      title: "Rinomodelação com Sofiderm.",
    },
    {
      avatar: "/assets/amanda.jpg",
      name: "Amanda Lopes",
      start: "15:00",
      end: "16:00",
      title: "Ultrasom da face usando os preenchedores Sofiderm.",
    },
    {
      avatar: "/assets/fernanda.jpg",
      name: "Fernanda Zanini",
      start: "16:00",
      end: "17:00",
      title:
        "Como a reologia do ácido hialurônico garante um melhor resultado.",
    },
    {
      avatar: "/assets/matheus.jpg",
      name: "Matheus Macedo",
      start: "17:00",
      end: "18:00",
      title: "Tratamento do terço inferior e linha mandibular com Sofiderm.",
    },
  ],
];

export const availableClasses = [
  [
    {
      avatar: "/assets/matheus.jpg",
      name: "Matheus Macedo",
      start: "17:00",
      end: "18:00",
      title: "Preenchimento de Têmporas com Sofiderm.",
    },
  ],
  [
    {
      avatar: "/assets/marcela.jpg",
      name: "Marcela Espaladori",
      start: "10:00",
      end: "11:00",
      title:
        "Tratamento da região perioral e lábios associando técnicas de preenchimento com Sofiderm.",
    },
    {
      avatar: "/assets/matheus.jpg",
      name: "Matheus Macedo",
      start: "15:00",
      end: "16:00",
      title: "Volumização e projeção de glúteo com Sofiderm Sub-skin.",
    },
    {
      avatar: "/assets/amanda.jpg",
      name: "Amanda Lopes",
      start: "16:00",
      end: "17:00",
      title: "Ultrassom da face usando os preenchedores Sofiderm.",
    },
    {
      avatar: "/assets/daniel.jpg",
      name: "Daniel Machado",
      start: "17:00",
      end: "18:00",
      title: "Tratamento do terço inferior e linha mandibular com Sofiderm.",
    },
  ],
  [
    {
      avatar: "/assets/fernanda.jpg",
      name: "Fernanda Zanini",
      start: "15:00",
      end: "16:00",
      title:
        "Tratamento da região perioral e lábios associando técnicas de preenchimento com Sofiderm.",
    },
    {
      avatar: "/assets/daniela.jpg",
      name: "Daniela Cardoso",
      start: "16:00",
      end: "17:00",
      title:
        "10 seringas em 1, simplificando o tratamento full face com Sofiderm.",
    },
    {
      avatar: "/assets/diogo.jpg",
      name: "Diogo Lustosa",
      start: "17:00",
      end: "18:00",
      title: "Tratamento do terço inferior e linha mandibular com Sofiderm.",
    },
  ],
  [
    {
      avatar: "/assets/marcela.jpg",
      name: "Marcela Espaladori",
      start: "10:00",
      end: "11:00",
      title:
        "Tratamento da região perioral e lábios associando técnicas de preenchimento com Sofiderm.",
    },
    {
      avatar: "/assets/daniel.jpg",
      name: "Daniel Machado",
      start: "14:00",
      end: "15:00",
      title: "Rinomodelação com Sofiderm.",
    },
    {
      avatar: "/assets/amanda.jpg",
      name: "Amanda Lopes",
      start: "15:00",
      end: "16:00",
      title: "Ultrasom da face usando os preenchedores Sofiderm.",
    },
    {
      avatar: "/assets/fernanda.jpg",
      name: "Fernanda Zanini",
      start: "16:00",
      end: "17:00",
      title:
        "Como a reologia do ácido hialurônico garante um melhor resultado.",
    },
    {
      avatar: "/assets/matheus.jpg",
      name: "Matheus Macedo",
      start: "17:00",
      end: "18:00",
      title: "Tratamento do terço inferior e linha mandibular com Sofiderm.",
    },
  ],
];

export const Dates = () => {
  const [selectedDate, setSelectedDate] = React.useState(0);
  return (
    <Flex direction="col" className="gap-6  pl-6 lg:py-0 xl:pl-0 ">
      <Flex className="relative w-full" align="center">
        <Flex
          align="center"
          className="bg-neutral-pure100 w-full lg:gap-8 overflow-x-auto overflow-y-hidden"
        >
          {dates.map((date, index) => (
            <Flex
              key={date.date}
              className=" cursor-pointer"
              onClick={() => setSelectedDate(index)}
            >
              <DateCard
                date={date.date}
                day={date.day}
                selected={selectedDate === index}
              />
            </Flex>
          ))}
        </Flex>
        <Flex className="absolute right-2 lg:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="24"
              width="24"
              height="24"
              rx="12"
              transform="rotate(90 24 0)"
              fill="white"
            />
            <path d="M10 8L14 12L10 16" stroke="#7C7C83" stroke-width="1.5" />
          </svg>
        </Flex>
      </Flex>
      <Flex direction="col" className="gap-2 pr-6  md:pr-0">
        {programacao[selectedDate]?.map((programacao) => (
          <Flex
            key={`${programacao.name} - ${programacao.title} - ${selectedDate} `}
          >
            <ProgramacaoCard {...programacao} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
