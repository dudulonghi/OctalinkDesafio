import { CadastroData } from "../data/cadastroData";

export interface ApiResponse {
    products: CadastroData[];
    total: number;
    skip: number;
    limit: number;
}