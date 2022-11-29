export interface Menu {
    version: number;
    items: Menu_Item[];
}

export interface Menu_Item {
    id: number;
    name: string;
    cost: string;
    description?: string;
}

export const MOCKED_MENU: Menu = {
    version: 1,
    items: [
        {
            id: 0,
            name: 'Potatoes',
            cost: '31',
        },
        {
            id: 1,
            name: 'French fries',
            cost: '23',
        },
        {
            id: 2,
            name: 'Salad',
            cost: '45',
            description: 'only potatoes',
        },
        {
            id: 3,
            name: 'Puree',
            cost: '81',
            description: 'from potatoes',
        },
    ]
};