import { MenuElement } from "./menu-element";

export const menu: MenuElement[] = [
    {
        id: 1,
        rout: '',
        name: 'Vehicles Module',
        icon: '',
        parentId: null,
        isGroup: true,
        children: [
            {
                id: 2,
                rout: 'vehicle/manufactures',
                name: 'Manufacturers',
                icon: '',
                parentId: 1,
                isGroup: false,
                children: null
            },
            {
                id: 3,
                rout: 'vehicle',
                name: 'My vehicles',
                icon: '',
                parentId: 1,
                isGroup: false,
                children: null
            }
        ]
    },
    {
        id: 10,
        rout: '',
        name: 'Settings',
        icon: '',
        parentId: null,
        isGroup: true,
        children: [
            {
                id: 11,
                rout: '',
                name: 'Countries',
                icon: '',
                parentId: 10,
                isGroup: false,
                children: null
            },
            {
                id: 12,
                rout: '',
                name: 'Fuel stations',
                icon: '',
                parentId: 10,
                isGroup: false,
                children: null
            },
            {
                id: 13,
                rout: '',
                name: 'Fuel types',
                icon: '',
                parentId: 10,
                isGroup: false,
                children: null
            }
        ]
    }

];