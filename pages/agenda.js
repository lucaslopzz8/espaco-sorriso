
import { useState } from 'react';

const agendamentos = [
  { nome: "Maria", profissional: "Dr. Lucas", procedimento: "Limpeza", horario: "10:00", status: "azul" },
  { nome: "João", profissional: "Dra. Carla", procedimento: "Nutrição", horario: "11:00", status: "roxo" },
  { nome: "Ana", profissional: "Dr. Lucas", procedimento: "Clareamento", horario: "14:00", status: "verde" }
];

const cores = {
  azul: "#00aaff",
  roxo: "#a060ff",
  vermelho: "#ff4d4f",
  verde: "#52c41a"
};

export default function Agenda() {
  const [dados, setDados] = useState(agendamentos);

  return (
    <div style={{ padding: 20 }}>
      <h2>Agenda por Profissional</h2>
      {dados.map((item, i) => (
        <div key={i} style={{
          backgroundColor: cores[item.status],
          color: "#fff",
          padding: 10,
          marginBottom: 10,
          borderRadius: 6
        }}>
          <strong>{item.horario}</strong> - {item.nome} ({item.procedimento}) com <b>{item.profissional}</b>
        </div>
      ))}
    </div>
  );
}
