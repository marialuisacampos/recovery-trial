import React, { useState } from "react";
import Button from "../../components/Button";
import Error from "../../components/Error";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router"
import 'dotenv/config';

interface Props { }

const Signup = (props: Props) => {
  const router = useRouter()
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [idade, setIdade] = useState<number>();
  const [sexo, setSexo] = useState<string>("");
  const [praticaAtividade, setPraticaAtividade] = useState<boolean>();
  const [fraquezaMuscular, setFraquezaMuscular] = useState<boolean>();
  const [dificuldadeRespiratoria, setDificuldadeRespiratoria] =
    useState<boolean>();
  const [perdaDeMemoria, setPerdaDeMemoria] = useState<boolean>();
  const [acidenteEm12Meses, setAcidenteEm12Meses] = useState<boolean>();
  const [hipertensao, setHipertensao] = useState<boolean>();
  const [diabetes, setDiabetes] = useState<boolean>();
  const [doencasCardio, setDoencasCardio] = useState<boolean>();
  const [doencasPulmonares, setDoencasPulmonares] = useState<boolean>();


  const [error, setError] = useState<string>("");
  const [sucesso, setSucesso] = useState<string>("");

  const sendData = async (data: object) => {

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/users/singUp`,
      data)

    return response
  }

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (
      praticaAtividade == undefined ||
      fraquezaMuscular == undefined ||
      dificuldadeRespiratoria == undefined ||
      perdaDeMemoria == undefined ||
      acidenteEm12Meses == undefined ||
      hipertensao == undefined ||
      diabetes == undefined ||
      doencasCardio == undefined ||
      doencasPulmonares == undefined ||
      nome == "" ||
      email == "" ||
      senha == "" ||
      telefone == "" ||
      idade == undefined ||
      sexo == ""
    ) {
      setError("Preencha todos os campos.");
    }

    if (email && !email.match(regexEmail)) {
      setError("Digite um email válido");
    }

    setError("")
    const response = await sendData({
      nome,
      email,
      senha,
      telefone,
      idade,
      sexo,
      p_atividade_fisica: praticaAtividade,
      fraqueza_muscular: fraquezaMuscular,
      dificuldade_respiratoria: dificuldadeRespiratoria,
      perda_de_memoria: perdaDeMemoria,
      acidente_em_12_meses: acidenteEm12Meses,
      hipertensao,
      diabetes,
      doenca_cardiovasculares: doencasCardio,
      doencas_pulmonares: doencasPulmonares
    })

    if (response.status == 201) {
      setSucesso("Cadastro realizado com sucesso. Estamos te direcionando para o login.")
      setError("")
      setTimeout(() => router.push("/"), 3000)
    } else {
      setError("Algo deu errado, tente novamente mais tarde.")
    }


  };

  return (
    <div>
      <Navbar />
      <main className="pb-20 pt-44">
        <div className="containerBig">
          <form className="flex flex-col max-w-xs gap-2 pt-4 md:flex-row md:max-w-lg md:flex-wrap justify-center items-center">
            <div className="flex flex-col pb-4">
              <label className="label" htmlFor="nome">
                Nome
              </label>
              <input
                className="input"
                type="text"
                value={nome}
                name="nome"
                onChange={(e) => [setNome(e.target.value), setError("")]}
              />
            </div>

            <div className="flex flex-col pb-4">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input"
                type="text"
                value={email}
                name="email"
                onChange={(e) => [setEmail(e.target.value), setError("")]}
              />
            </div>

            <div className="flex flex-col pb-4">
              <label className="label" htmlFor="senha">
                Senha
              </label>
              <input
                className="input"
                type="password"
                value={senha}
                name="senha"
                onChange={(e) => [setSenha(e.target.value), setError("")]}
              />
            </div>

            <div className="flex flex-col pb-4">
              <label className="label" htmlFor="telefone">
                Telefone
              </label>
              <input
                className="input"
                type="text"
                value={telefone}
                name="telefone"
                onChange={(e) => [setTelefone(e.target.value), setError("")]}
              />
            </div>

            <div className="flex flex-col pb-4">
              <label className="label" htmlFor="idade">
                Idade
              </label>
              <input
                className="input"
                type="number"
                value={idade}
                name="idade"
                onChange={(e) => [
                  setIdade(parseInt(e.target.value)),
                  setError(""),
                ]}
              />
            </div>

            <div className="flex flex-col pb-4">
              <label className="label" htmlFor="sexo">
                Sexo
              </label>
              <select
                className="input"
                value={sexo}
                name="sexo"
                id="sexo"
                onChange={(e) => setSexo(e.target.value)}
              >
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Prefiro não responder">
                  Prefiro não responder
                </option>
              </select>
            </div>

            <div className="md:grid md:grid-cols-2">
              <div className="mb-4">
                <span className="label">Pratica atividade física?</span>
                <div className="">
                  <label className="mr-2" htmlFor="sim">
                    Sim
                  </label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="atividadeFisica"
                    id="sim"
                    onClick={(e) => {
                      setPraticaAtividade(true);
                    }}
                  />
                  <label className="mr-2" htmlFor="não">
                    Não
                  </label>
                  <input
                    type="radio"
                    name="atividadeFisica"
                    id="não"
                    onClick={(e) => {
                      setPraticaAtividade(false);
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <span className="label">Tem fraqueza muscular?</span>
                <div>
                  <label className="mr-2" htmlFor="sim">
                    Sim
                  </label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="fraquezaMuscular"
                    id="sim"
                    onClick={(e) => {
                      setFraquezaMuscular(true);
                    }}
                  />
                  <label className="mr-2" htmlFor="não">
                    Não
                  </label>
                  <input
                    type="radio"
                    name="fraquezaMuscular"
                    id="não"
                    onClick={(e) => {
                      setFraquezaMuscular(false);
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <span className="label">Tem dificuldade respiratória?</span>
                <div>
                  <label className="mr-2" htmlFor="sim">
                    Sim
                  </label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="dificuldadeRespiratoria"
                    id="sim"
                    onClick={(e) => {
                      setDificuldadeRespiratoria(true);
                    }}
                  />
                  <label className="mr-2" htmlFor="não">
                    Não
                  </label>
                  <input
                    type="radio"
                    name="dificuldadeRespiratoria"
                    id="não"
                    onClick={(e) => {
                      setDificuldadeRespiratoria(false);
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <span className="label">Tem perda de memória?</span>
                <div className="">
                  <label className="mr-2" htmlFor="sim">
                    Sim
                  </label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="perdaDeMemoria"
                    id="sim"
                    onClick={(e) => {
                      setPerdaDeMemoria(true);
                    }}
                  />
                  <label className="mr-2" htmlFor="não">
                    Não
                  </label>
                  <input
                    type="radio"
                    name="perdaDeMemoria"
                    id="não"
                    onClick={(e) => {
                      setPerdaDeMemoria(false);
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <span className="label">
                  Sofreu alguma queda nos últimos 12 meses?
                </span>
                <div>
                  <label className="mr-2" htmlFor="sim">
                    Sim
                  </label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="acidente12meses"
                    id="sim"
                    onClick={(e) => {
                      setAcidenteEm12Meses(true);
                    }}
                  />
                  <label className="mr-2" htmlFor="não">
                    Não
                  </label>
                  <input
                    type="radio"
                    name="acidente12meses"
                    id="não"
                    onClick={(e) => {
                      setAcidenteEm12Meses(false);
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <span className="label">Tem hipertensão?</span>
                <div>
                  <label className="mr-2" htmlFor="sim">
                    Sim
                  </label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="hipertensao"
                    id="sim"
                    onClick={(e) => {
                      setHipertensao(true);
                    }}
                  />
                  <label className="mr-2" htmlFor="não">
                    Não
                  </label>
                  <input
                    type="radio"
                    name="hipertensao"
                    id="não"
                    onClick={(e) => {
                      setHipertensao(false);
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <span className="label">Tem diabetes?</span>
                <div>
                  <label className="mr-2" htmlFor="sim">
                    Sim
                  </label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="diabetes"
                    id="sim"
                    onClick={(e) => {
                      setDiabetes(true);
                    }}
                  />
                  <label className="mr-2" htmlFor="não">
                    Não
                  </label>
                  <input
                    type="radio"
                    name="diabetes"
                    id="não"
                    onClick={(e) => {
                      setDiabetes(false);
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <span className="label">Tem doenças cardiovasculares?</span>
                <div>
                  <label className="mr-2" htmlFor="sim">
                    Sim
                  </label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="doencasCardio"
                    id="sim"
                    onClick={(e) => {
                      setDoencasCardio(true);
                    }}
                  />
                  <label className="mr-2" htmlFor="não">
                    Não
                  </label>
                  <input
                    type="radio"
                    name="doencasCardio"
                    id="não"
                    onClick={(e) => {
                      setDoencasCardio(false);
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <span className="label">Tem doenças pulmonares?</span>
                <div>
                  <label className="mr-2" htmlFor="sim">
                    Sim
                  </label>
                  <input
                    className="mr-2"
                    type="radio"
                    name="doencasPulmonares"
                    id="sim"
                    onClick={(e) => {
                      setDoencasPulmonares(true);
                    }}
                  />
                  <label className="mr-2" htmlFor="não">
                    Não
                  </label>
                  <input
                    type="radio"
                    name="doencasPulmonares"
                    id="não"
                    onClick={(e) => {
                      setDoencasPulmonares(false);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <Error Message={error} />
              <span className="text-green-600 mb-2 text-center">{sucesso}</span>

              <Button Text="Registrar" onClick={handleRegister} Type="submit" />
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
