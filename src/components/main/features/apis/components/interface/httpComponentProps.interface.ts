export class httpComponentsInputs {
    constructor(
        public readonly placeholder: string,
        public readonly required: boolean = false,
        public readonly type: string = "text",
        public valid: boolean = true,
        public message: string = ""
    ) { }
}

export class HttpComponentProps {
    constructor(
        public readonly method: "GET" | "POST" | "PATCH" | "DELETE" = "GET",
        public readonly name: string,
        public readonly info: string,
        public readonly componentLabel: string,
        public inputs: httpComponentsInputs[],
    ) { }
}


export const httpComponents: HttpComponentProps[] = [
    {
        method: "POST",
        name: "AuthComponent",
        info: "Para testar a API primeiramente é necessário autenticar-se com o token devolvido nesta rota",
        componentLabel: "Auth",
        inputs: [
            new httpComponentsInputs("nome", true),
            new httpComponentsInputs("email", true, "email"),
        ],
    },
    {
        method: "GET",
        name: "GetComponent",
        componentLabel: "Get",
        info: "Esta rota trás todos os itens na planilha caso um id não tenha sido informado no campo id",
        inputs: [
            new httpComponentsInputs("id", false, "number"),
        ],
    },
    {
        method: "POST",
        componentLabel: "Post",
        name: "PostComponent",
        info: "Esta rota cadastra um usuário na planilha",
        inputs: [
            new httpComponentsInputs("nome", true),
            new httpComponentsInputs("email", true, "email"),
            new httpComponentsInputs("recado")
        ],
    },
    {
        method: "PATCH",
        componentLabel: "Patch",
        name: "PatchComponent",
        info: "Esta rota altera um dos valores da planilha, você pode prencher o id e o/os campos que gostaria de alterar",
        inputs: [
            new httpComponentsInputs("id", true, "number"),
            new httpComponentsInputs("nome"),
            new httpComponentsInputs("email", false, "email"),
            new httpComponentsInputs("recado"),
        ],
    },
    {
        method: "DELETE",
        componentLabel: "Delete",
        name: "DeleteComponent",
        info: "Esta rota deleta um usuário da planilha",
        inputs: [
            new httpComponentsInputs("id", true, "number"),
        ],
    },
]