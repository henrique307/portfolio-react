import { HttpComponentProps, httpComponentsInputs } from "../interface/httpComponentProps.interface"

function validateInputs(inputs: NodeListOf<HTMLInputElement>): string[] {

    let invalidArray = []

    for (let i = 0; i < inputs.length; i++) {
        if (!!inputs[i].required && inputs[i].value === "") {
            console.log(`input ${inputs[i].alt} inválido`)
            invalidArray.push(inputs[i].alt)
        }
    }

    console.log(invalidArray)

    return invalidArray

}

export function handleValidation(inputs: NodeListOf<HTMLInputElement>, inputsProps: httpComponentsInputs[]) {
    const invalidArray = validateInputs(inputs);
    let mimicArray = inputsProps
    let valid = true

    for (let i = 0; i < mimicArray.length; i++) {
        if (invalidArray.includes(mimicArray[i].placeholder)) {
            mimicArray.splice(i, 1, {...mimicArray[i], message: "Este campo deve ser preenchido", valid: false})
            valid = false
        } else {mimicArray.splice(i, 1, {...mimicArray[i], message: "", valid: true})}
    }

    return {valid, mimicArray}
}