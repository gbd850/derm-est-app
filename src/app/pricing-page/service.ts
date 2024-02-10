export interface Service {
    name: string,
    price: string
}

export interface ServiceCategory {
    name: string,
    note?: string,
    services: Service[]
}