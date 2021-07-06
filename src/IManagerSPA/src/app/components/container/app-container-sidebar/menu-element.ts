
export interface MenuElement {

    id: number;
    rout: string;
    name: string;
    icon: string;
    parentId: number;
    isGroup: boolean;
    children: MenuElement[];

}