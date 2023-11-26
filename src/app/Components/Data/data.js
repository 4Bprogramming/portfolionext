import pequenos from "../../../../public/pequenos.PNG";
import aguila from "../../../../public/acp.png";
import coro from "../../../../public/coro.PNG";
import mireya from "../../../../public/mireya.PNG";
import acp from "../../../../public/acp.png";

export const clientImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "pequenos":
      return pequenos;
    case "Grupo Águila":
      return aguila;
    case "coro":
      return coro;
    case "mireya":
      return mireya;
    case "acp":
      return acp;
    default:
      break;
  }
};
export const clientData = [
  "Grupo Águila",
  "Centro P.G.",
  "Mireya",
  "Glendys",
  "Coro V.A.",
  "ACP",
];
