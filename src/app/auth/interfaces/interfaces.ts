export interface AuthResponce {
    ok: boolean;
    id?: string;
    name?: string;
    token?: string;
    msg?: string;
    email?: string
}

export interface Usuario {
    id: string,
    name: string,
    email: string
}