interface Person {
    name: string,
    age: number,
    email?: string, // "?" optional property
    [key: string]: any // avoid "any" usually because there is no check for this
}

const Brianne: Person = {
    name: "Brianne Camesi",
    age: 30,
    email: "brianne.camesi@gmail.com"
}

type numOrString = number|string

const arr: Array<numOrString> = [1,2,3,"4"]