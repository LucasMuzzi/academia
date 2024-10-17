interface Horario {
  hora: string;
  descricao: string;
}

interface TreinosPorDia {
  [dia: string]: Horario[];
}

interface Treinos {
  [treino: string]: TreinosPorDia;
}

export const treinos: Treinos = {
  "Jiu-Jitsu": {
    Segunda: [
      { hora: "06:00", descricao: "ADULTO" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "KIDS" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "ADULTOS" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "ADULTOS" },
      { hora: "22:00", descricao: "" },
    ],
    Terça: [
      { hora: "06:00", descricao: "" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "ADULTO" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "SUBMISSION" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "" },
      { hora: "22:00", descricao: "" },
    ],
    Quarta: [
      { hora: "06:00", descricao: "ADULTO" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "KIDS" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "ADULTO" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "ADULTO" },
      { hora: "22:00", descricao: "" },
    ],
    Quinta: [
      { hora: "06:00", descricao: "" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "ADULTO" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "SUBMISSION" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "" },
      { hora: "22:00", descricao: "" },
    ],
    Sexta: [
      { hora: "06:00", descricao: "ADULTO" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "KIDS" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "ADULTO" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "ADULTO" },
      { hora: "22:00", descricao: "" },
    ],
  },
  "Muay Thai": {
    Segunda: [
      { hora: "06:00", descricao: "" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "" },
      { hora: "22:00", descricao: "" },
    ],
    Terça: [
      { hora: "06:00", descricao: "" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "" },
      { hora: "22:00", descricao: "" },
    ],
    Quarta: [
      { hora: "06:00", descricao: "" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "" },
      { hora: "22:00", descricao: "" },
    ],
    Quinta: [
      { hora: "06:00", descricao: "" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "" },
      { hora: "22:00", descricao: "" },
    ],
    Sexta: [
      { hora: "06:00", descricao: "" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "" },
      { hora: "22:00", descricao: "" },
    ],
  },
  "Krav Maga": {
    Segunda: [
      { hora: "06:00", descricao: "" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "" },
      { hora: "22:00", descricao: "" },
    ],
    Terça: [
      { hora: "06:00", descricao: "" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "" },
      { hora: "22:00", descricao: "" },
    ],
    Quarta: [
      { hora: "06:00", descricao: "" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "" },
      { hora: "22:00", descricao: "" },
    ],
    Quinta: [
      { hora: "06:00", descricao: "" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "" },
      { hora: "22:00", descricao: "" },
    ],
    Sexta: [
      { hora: "06:00", descricao: "" },
      { hora: "07:00", descricao: "" },
      { hora: "08:00", descricao: "" },
      { hora: "09:00", descricao: "" },
      { hora: "10:00", descricao: "" },
      { hora: "11:00", descricao: "" },
      { hora: "12:00", descricao: "" },
      { hora: "13:00", descricao: "" },
      { hora: "14:00", descricao: "" },
      { hora: "15:00", descricao: "" },
      { hora: "16:00", descricao: "" },
      { hora: "17:00", descricao: "" },
      { hora: "18:00", descricao: "" },
      { hora: "19:00", descricao: "" },
      { hora: "20:00", descricao: "" },
      { hora: "21:00", descricao: "" },
      { hora: "22:00", descricao: "" },
    ],
  },
};
