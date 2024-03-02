import { FormEvent, useState } from "react";
import { HttpService } from "./utils/http.service";
import { useAuthContext } from "../utils/auth.context";
import { httpResponseHandler } from "./utils/httpResponse.handler";
import "./http.components.css";

export function HttpComponentTemplate(httpComponentProps: HttpComponentProps) {
  const [body, setBody] = useState({});
  const { authToken, setAuthToken } = useAuthContext();
  const [response, setResponse]: [
    any,
    React.Dispatch<React.SetStateAction<any>>
  ] = useState("");

  async function enviaValores(
    formEvent: FormEvent<HTMLFormElement>,
    componentProps: HttpComponentProps
  ) {
    formEvent.preventDefault();

    setResponse("carregando...");

    console.log(body);

    HttpService({ ...httpComponentProps, authToken }, body)
      .then((res) => {
        if (!(res instanceof Response)) return res;

        if (res.ok) {
          setBody({});
          const inputs: HTMLInputElement[] = Array.from(document.querySelectorAll(`.${componentProps.name}-input`))

          inputs.forEach(input => input.value = "")
        }

        return res.json();
      })
      .then((json) => setResponse(json));
  }

  return (
    <form
      className="http-component-form"
      onSubmitCapture={(e) => enviaValores(e, httpComponentProps)}
    >
      <span className="http-component-info">{httpComponentProps.info}</span>
      <section className="http-component-inputs-container">
        {httpComponentProps.inputs.map((input) => {
          return (
            <input
              required={input.required}
              placeholder={input.placeholder}
              onChange={(event) => {
                setBody({ ...body, [input.placeholder]: event.target.value });
              }}
              className={`http-component-input ${input.type ?? "text"} ${httpComponentProps.name}-input`}
              type={input.type ?? "text"}
            />
          );
        })}
      </section>
      <button className="submmit-button">Enviar valores!</button>
      <section className="response-container">
        <pre className="response">{httpResponseHandler(response)}</pre>
        <button
          className="use-token"
          onClick={(event) => {
            event.preventDefault();
            setAuthToken(response.token);
          }}
          disabled={!response.token}
          style={{
            display:
              httpComponentProps.name === "AuthComponent" ? "block" : "none",
          }}
        >
          Usar Token
        </button>
      </section>
    </form>
  );
}

export const httpComponents: HttpComponentProps[] = [
  {
    method: "POST",
    name: "AuthComponent",
    info: "Para testar a API primeiramente é necessário autenticar-se com o token devolvido nesta rota",
    auth: true,
    inputs: [
      {
        placeholder: "nome",
        required: true,
      },
      {
        placeholder: "email",
        type: "email",
        required: true,
      },
    ],
  },
  {
    method: "GET",
    name: "GetComponent",
    info: "Esta rota trás todos os itens na planilha caso um id não tenha sido informado no campo id",
    inputs: [
      {
        placeholder: "id",
        type: "number",
      },
    ],
  },
  {
    method: "POST",
    name: "PostComponent",
    info: "Esta rota cadastra um usuário na planilha",
    inputs: [
      {
        placeholder: "nome",
        required: true,
      },
      {
        placeholder: "email",
        type: "email",
        required: true,
      },
      {
        placeholder: "recado",
      },
    ],
  },
  {
    method: "PATCH",
    name: "PatchComponent",
    info: "Esta rota altera um dos valores da planilha, nem todos os campos precisam ser preenchidos",
    inputs: [
      {
        placeholder: "id",
        required: true,
        type: "number",
      },
      {
        placeholder: "nome",
      },
      {
        placeholder: "email",
        type: "email",
      },
      {
        placeholder: "recado",
      },
    ],
  },
  {
    method: "DELETE",
    name: "DeleteComponent",
    info: "Esta rota deleta um usuário da planilha",
    inputs: [
      {
        placeholder: "id",
        type: "number",
        required: true,
      },
    ],
  },
];

export interface HttpComponentProps {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  name: string;
  info: string;
  // bodyType: any
  inputs: {
    placeholder: string;
    required?: boolean;
    type?: string;
  }[];
  auth?: boolean;
  authToken?: string;
}
