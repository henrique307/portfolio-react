export interface Projeto {
    titulo: string,
    descricao: string,
    componente: () => JSX.Element,
    classe: string
}