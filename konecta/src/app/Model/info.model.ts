export interface Info {
    id: number;
    title: string;
    content: string;
    state: number;
    categoria_id: number;
    type: string;
    likes: number;
    dislikes: number;
    favoritos: number;
    vistas: number; 
    tags: string[];
    name: string;
    position: number;
    icon: string;
    base_id: number;
    parent_id: boolean;
    articulo_id: number;
    publication_date: number;
    user_id: number;
    reply_to: boolean;
    text: string;
    username: string;
}