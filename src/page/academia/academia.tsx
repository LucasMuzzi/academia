import React, { useState } from "react";
import { Button, Collapse } from "antd"; // Importando Collapse do Ant Design
import "./academia.css"; // Importa o arquivo CSS

const { Panel } = Collapse;

const Academia: React.FC = () => {
  const [treinoSelecionado, setTreinoSelecionado] = useState<string>("Jiu-Jitsu");

  // Cria os horários
  const horarios = Array.from({ length: 19 }, (_, index) => {
    const hour = index + 6; // Começa às 6h
    return hour < 10 ? `0${hour}:00` : `${hour}:00`; // Formata para HH:MM
  });

  // Define os dias da semana
  const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

  // Cria os dados para a tabela
  const dataSource = diasDaSemana.map((dia) => ({
    dia,
    horarios,
    treino: "", // Adiciona um campo para indicar se há treino
  }));

  // Função para alterar o treino selecionado
  const handleButtonClick = (treino: string) => {
    setTreinoSelecionado(treino);
  };

  return (
    <div>
      <h1>Horários dos Treinos - {treinoSelecionado}</h1>
      <Button onClick={() => handleButtonClick("Jiu-Jitsu")}>Jiu-Jitsu</Button>
      <Button onClick={() => handleButtonClick("Muay Thai")}>Muay Thai</Button>
      <Button onClick={() => handleButtonClick("Krav Maga")}>Krav Maga</Button>

      <div className="collapse-container">
        {dataSource.map(({ dia, horarios, treino }) => (
          <Collapse key={dia}>
            <Panel header={dia} key={dia}>
              <div className="horarios-container">
                <div className="horarios">
                  {horarios.map((horario) => (
                    <div key={horario} className="horario">
                      {horario}
                    </div>
                  ))}
                </div>
                <div className="treino-status">
                  <span>{treino ? `Treino: ${treino}` : "Sem treino"}</span>
                </div>
              </div>
            </Panel>
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default Academia;
