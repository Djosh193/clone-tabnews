function status(resquest, response) {
  response.status(200).json({ text: "um passo de cada vez, nunca desistir!" });
}

export default status;
