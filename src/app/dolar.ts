export interface Dolar {
    id: number;
    name: string;
    compra: number;
    venta: number;
  }

export interface DolarHistory {
    id: number;
    name: string;
    compra: number;
    venta: number;
    date: Date;
    created_at: Date;
    dolar: Dolar;
    dolar_id: number;
}