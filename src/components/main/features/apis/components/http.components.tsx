import { useState } from "react";
import { HttpService } from "./utils/http.service";
import { httpResponseHandler } from "./utils/httpResponse.handler";
import { Button } from "@mui/material";
import { useAuthContext } from "../../../../utils/auth.context";
import { HttpComponentProps } from "./interface/httpComponentProps.interface";
import SendIcon from "@mui/icons-material/Send";
import "./http.components.css";
import { handleValidation } from "./utils/checkInputs";

export function HttpComponentTemplate(httpComponentProps: HttpComponentProps) {
  const { authToken, setAuthToken } = useAuthContext();
  const [body, setBody] = useState({});
  const [response, setResponse]: [
    any,
    React.Dispatch<React.SetStateAction<any>>
  ] = useState("");

  async function enviaValores(
    reactMouseEvent: React.MouseEvent<HTMLButtonElement>
  ) {
    reactMouseEvent.preventDefault();
    
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      `input.${httpComponentProps.name}-input`
    );

    const {valid, mimicArray} = handleValidation(inputs, httpComponentProps.inputs);

    if(!valid) {
      console.log(mimicArray)
      httpComponentProps.inputs = mimicArray
      console.log(httpComponentProps)
      setBody({...body})
      return;
    }

    setResponse("carregando...");
    
    HttpService(httpComponentProps, authToken, body)
      .then((res) => {
        if (!(res instanceof Response)) return res;

        if (res.ok) {
          setBody({});
          inputs.forEach((input) => {
            input.value = "";
            console.log(`input ${input} limpo`);
          });
        }

        return res.json();
      })
      .then((json) => setResponse(json));
  }

  return (
    <form className="http-component-form" key={httpComponentProps.name}>
      <p className="http-component-info">{httpComponentProps.info}</p>
      <section className="http-component-inputs-container">
        {httpComponentProps.inputs.map((input) => {
          return (
            <div className="input-field inline">
              <label htmlFor="email_inline">{input.placeholder}</label>
              <input
                required={input.required}
                className={`${httpComponentProps.name}-input`}
                onChange={(event) => {
                  setBody({ ...body, [input.placeholder]: event.target.value });
                }}
                type={input.type ?? "text"}
                alt={input.placeholder}
              />
              <span
                className="helper-text"
                style={input.valid ? {} : { color: "red" }}
                data-error="wrong"
              >
                {input.message}
              </span>
            </div>
          );
        })}
      </section>
      <Button
        className="submit-button"
        variant="outlined"
        style={{color: "black"}}
        size="medium"
        endIcon={<SendIcon />}
        onClick={enviaValores}
      >
        Enviar valores!
      </Button>
      <section className="response-container">
        <Button
          size="small"
          variant="contained"
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
        </Button>
        <pre className="response">{httpResponseHandler(response)}</pre>
      </section>
    </form>
  );
}
