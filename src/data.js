const brands = [
  {id: 0, name: 'Nike', items: [0, 1, 2, 3, 4, 5, 6]},
  {id: 1, name: 'Adidas', items: [7, 8, 9, 10, 11, 12, 13]},
  {id: 2, name: 'Jordan'},
  {id: 3, name: 'Puma'},
  {id: 4, name: 'Reebok'},
];

const allItems = [
  {
    id: 0,
    brand: 'Nike',
    model: 'Kyrie 6',
    price: '129.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/630002_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: '#EAA190',
    sizes: [40, 42, 43, 45],
    type: ['new'],
  },
  {
    id: 1,
    brand: 'Nike',
    model: 'Air-Max 270',
    price: '129.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/H8050001_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: '#527AD1',
    sizes: [40, 42, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 2,
    brand: 'Nike',
    model: 'Air-Max 90',
    price: '129.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/J1285019_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: '#01A7B1',
    sizes: [40, 42, 43, 45],
    type: ['featured'],
  },
  {
    id: 3,
    brand: 'Nike',
    model: 'Air-Max React',
    price: '129.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/O4971001_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: '#EAA190',
    sizes: [40, 42, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 4,
    brand: 'Nike',
    model: 'PG 4',
    price: '129.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/5079100_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: '#01A7B1',
    sizes: [40, 42, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 5,
    brand: 'Nike',
    model: "Air-Max Uptempo '95",
    price: '129.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/K0892101_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: '#EAA190',
    sizes: [40, 42, 43, 45],
    type: ['upcoming'],
  },
  {
    id: 6,
    brand: 'Nike',
    model: 'LeBron Soldier XIII SFG',
    price: '839.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/2918100_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: '#01A7B1',
    sizes: [40, 42, 43, 45],
    type: ['upcoming'],
  },
  {
    id: 7,
    brand: 'Adidas',
    model: 'Ultraboost',
    price: '129.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/EG8102_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: '#EAA190',
    sizes: [40, 42, 43, 45],
    type: ['new'],
  },
  {
    id: 8,
    brand: 'Adidas',
    model: 'Ultraboost 20',
    price: '129.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/EF1043_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: '#527AD1',
    sizes: [40, 42, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 9,
    brand: 'Adidas',
    model: 'Ultraboost All Terrain',
    price: '129.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/EG8099_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: '#01A7B1',
    sizes: [40, 42, 43, 45],
    type: ['featured'],
  },
  {
    id: 10,
    brand: 'Adidas',
    model: 'Terrex Agravic Flow',
    price: '129.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/G26101_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: '#EAA190',
    sizes: [40, 42, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 11,
    brand: 'Adidas',
    model: 'PureBoost DPR',
    price: '129.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/BB6294_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: '#01A7B1',
    sizes: [40, 42, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 12,
    brand: 'Adidas',
    model: 'Pharrell Williams Human Race Solar',
    price: '129.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/EF2378G_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: '#EAA190',
    sizes: [40, 42, 43, 45],
    type: ['upcoming'],
  },
  {
    id: 13,
    brand: 'Adidas',
    model: 'Harden Vol. 4',
    price: '839.00 TL',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/EH2456_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: '#01A7B1',
    sizes: [40, 42, 43, 45],
    type: ['upcoming'],
  },
];

const images = {
  0: [
    'https://images.footlocker.com/is/image/EBFL2/630002_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/630002_a4?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/630002_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/630002_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  1: [
    'https://images.footlocker.com/is/image/EBFL2/H8050001_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/H8050001_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/H8050001_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  2: [
    'https://images.footlocker.com/is/image/EBFL2/J1285019_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/J1285019_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/J1285019_a4?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/J1285019_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  3: [
    'https://images.footlocker.com/is/image/EBFL2/O4971001_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/O4971001_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/O4971001_a4?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/O4971001_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  4: [
    'https://images.footlocker.com/is/image/EBFL2/5079100_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/5079100_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/5079100_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  5: [
    'https://images.footlocker.com/is/image/EBFL2/K0892101_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/K0892101_a2?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/K0892101_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/K0892101_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  6: [
    'https://images.footlocker.com/is/image/EBFL2/2918100_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/2918100_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/2918100_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  7: [
    'https://images.footlocker.com/is/image/EBFL2/EG8102_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EG8102_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EG8102_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  8: [
    'https://images.footlocker.com/is/image/EBFL2/EF1043_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EF1043_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EF1043_a4?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EF1043_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  9: [
    'https://images.footlocker.com/is/image/EBFL2/EG8099_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EG8099_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EG8099_a4?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EG8099_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  10: [
    'https://images.footlocker.com/is/image/EBFL2/G26101_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/G26101_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/G26101_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  11: [
    'https://images.footlocker.com/is/image/EBFL2/BB6294_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/BB6294_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/BB6294_a4?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/BB6294_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  12: [
    'https://images.footlocker.com/is/image/EBFL2/EF2378G_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EF2378G_a3?wid=630&hei=630&fmt=png-alpha',
  ],
  13: [
    'https://images.footlocker.com/is/image/EBFL2/EH2456_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EH2456_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EH2456_a4?wid=630&hei=630&fmt=png-alpha',
  ],
};

export {brands, images, allItems};
