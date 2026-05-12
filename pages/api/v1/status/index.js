import database from "infra/database.js";

async function status(resquest, response) {
  const result = await database.query("SELECT 1 + 1 as SUM;");
  console.log(result.rows);
  response.status(200).json({ text: "um passo de cada vez, nunca desistir!" });
}

export default status;
