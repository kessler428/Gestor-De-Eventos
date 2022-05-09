export interface ModalProps {
    openModal: boolean,
}

export interface PropsEventData {
    mes: string;
    dia: number;
    img: string;
    title: string;
    lugar: string;
    fecha: string;
}
export interface TipoDeEventos {
    id: number;
    Tipo: string;
}

export interface CategoriasDeEventos {
    id: number;
    categoria: string;
}