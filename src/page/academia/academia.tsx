/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button, Table } from "antd";
import { treinos } from "@/src/page/academia/horarios";
import "./academia.css";

const Academia: React.FC = () => {
  const [treinoSelecionado, setTreinoSelecionado] = useState<string>("Jiu-Jitsu");

  // Cria os dias da semana
  const diasDaSemana = Object.keys(treinos[treinoSelecionado]);

  // Extrai todos os horários disponíveis
  const todosHorarios = Array.from(
    new Set(
      diasDaSemana
        .flatMap((dia) => treinos[treinoSelecionado][dia].map(({ hora }) => hora))
    )
  ).sort(); // Ordena os horários

  // Configuração das colunas
  const columns = [
    {
      title: "Horário",
      dataIndex: "hora",
      key: "hora",
      width: 150,
    },
    ...diasDaSemana.map((dia) => ({
      title: dia,
      dataIndex: dia,
      key: dia,
      render: (descricao: string) => (
        <div
          style={{
            padding: "0.5rem",
            backgroundColor: "transparent",
          }}
        >
          {descricao || "--"}
        </div>
      ),
    })),
  ];

  // Cria os dados para a tabela
  const dataSource = todosHorarios.map((hora) => {
    const rowData: any = { hora }; // Cada linha começa com o horário
    diasDaSemana.forEach((dia) => {
      const treino = treinos[treinoSelecionado][dia].find(
        (t) => t.hora === hora
      );
      rowData[dia] = treino ? treino.descricao : null;
    });
    return rowData;
  });

  const handleButtonClick = (treino: string) => {
    setTreinoSelecionado(treino);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>
        Horários dos Treinos - {treinoSelecionado}
      </h1>

      <div className="treino-buttons">
        <Button onClick={() => handleButtonClick("Jiu-Jitsu")}>
          Jiu-Jitsu
        </Button>
        <Button onClick={() => handleButtonClick("Muay Thai")}>
          Muay Thai
        </Button>
        <Button onClick={() => handleButtonClick("Krav Maga")}>
          Krav Maga
        </Button>
      </div>

      {/* Envolvendo a tabela em um contêiner com overflow-x */}
      <div className="tabela-overflow">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          rowKey="hora"
          style={{ marginTop: "1rem" }}
        />
      </div>
    </div>
  );
};

export default Academia;
