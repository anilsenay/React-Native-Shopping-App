import {shoeColors} from './consts/colors';
const {
  red,
  turquoise,
  blue,
  grey,
  whiteBlue,
  darkGrey,
  black,
  bluePurple,
  yellow,
  purple,
  whiteGrey,
  darkRed,
  soldier,
  green,
  lightBlue,
} = shoeColors;

const brands = [
  {id: 0, name: 'Nike', items: [0, 1, 2, 3, 4, 5, 6]},
  {id: 1, name: 'Adidas', items: [7, 8, 9, 10, 11, 12, 13]},
  {id: 2, name: 'Jordan', items: [14, 15, 16, 17, 18, 19, 20]},
  {id: 3, name: 'Puma', items: [21, 22, 23, 24, 25, 26]},
  {id: 4, name: 'Reebok', items: [27, 28, 29, 30, 31, 32]},
];

const allItems = [
  {
    id: 0,
    brand: 'Nike',
    model: 'Kyrie 6',
    price: '629.20',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/630002_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: red,
    sizes: [40, 42, 43, 45],
    type: ['new'],
  },
  {
    id: 1,
    brand: 'Nike',
    model: 'Air-Max 270',
    price: '469.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/H8050001_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: blue,
    sizes: [40, 42, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 2,
    brand: 'Nike',
    model: 'Air-Max 90',
    price: '520.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/J1285019_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: black,
    sizes: [40, 42, 43, 45],
    type: ['featured'],
  },
  {
    id: 3,
    brand: 'Nike',
    model: 'Air-Max React',
    price: '599.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/O4971001_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: grey,
    sizes: [39, 42, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 4,
    brand: 'Nike',
    model: 'PG 4',
    price: '729.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/5079100_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: whiteBlue,
    sizes: [41, 42, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 5,
    brand: 'Nike',
    model: "Air-Max Uptempo '95",
    price: '809.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/K0892101_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: red,
    sizes: [40, 42, 44, 45],
    type: ['upcoming'],
  },
  {
    id: 6,
    brand: 'Nike',
    model: 'LeBron Soldier XIII SFG',
    price: '839.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/2918100_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: darkGrey,
    sizes: [40, 41, 43, 45],
    type: ['upcoming'],
  },
  {
    id: 7,
    brand: 'Adidas',
    model: 'Ultraboost',
    price: '729.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/EG8102_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: yellow,
    sizes: [40, 42, 43, 44],
    type: ['new'],
  },
  {
    id: 8,
    brand: 'Adidas',
    model: 'Ultraboost 20',
    price: '929.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/EF1043_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: bluePurple,
    sizes: [40, 41, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 9,
    brand: 'Adidas',
    model: 'Ultraboost All Terrain',
    price: '629.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/EG8099_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: turquoise,
    sizes: [40, 42, 45],
    type: ['featured'],
  },
  {
    id: 10,
    brand: 'Adidas',
    model: 'Terrex Agravic Flow',
    price: '529.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/G26101_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: grey,
    sizes: [41, 42, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 11,
    brand: 'Adidas',
    model: 'PureBoost DPR',
    price: '429.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/BB6294_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: red,
    sizes: [40, 42, 43, 44, 45],
    type: ['new', 'featured'],
  },
  {
    id: 12,
    brand: 'Adidas',
    model: 'Pharrell Williams Human Race Solar',
    price: '999.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/EF2378G_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: whiteBlue,
    sizes: [39, 41, 43, 45],
    type: ['upcoming'],
  },
  {
    id: 13,
    brand: 'Adidas',
    model: 'Harden Vol. 4',
    price: '839.90',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/EH2456_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: purple,
    sizes: [40, 42, 43, 44],
    type: ['upcoming'],
  },
  {
    id: 14,
    brand: 'Jordan',
    model: '6 Rings',
    price: '839.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/W6993100_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: whiteGrey,
    sizes: [41, 42, 43, 45],
    type: ['new, featured'],
  },
  {
    id: 15,
    brand: 'Jordan',
    model: "B'Loyal",
    price: '899.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/15317011_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: red,
    sizes: [40, 41, 44, 45],
    type: ['new'],
  },
  {
    id: 16,
    brand: 'Jordan',
    model: 'Dub Zero',
    price: '859.30',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/11046116_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: darkRed,
    sizes: [40, 41, 44, 45],
    type: ['featured'],
  },
  {
    id: 17,
    brand: 'Jordan',
    model: 'True Flight',
    price: '880.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/T1493100_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: soldier,
    sizes: [40, 42, 43, 45],
    type: ['new, featured'],
  },
  {
    id: 18,
    brand: 'Jordan',
    model: 'Max Aura',
    price: '999.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/Q9084101_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: black,
    sizes: [41, 42, 43, 44],
    type: ['new, featured'],
  },
  {
    id: 19,
    brand: 'Jordan',
    model: 'Why Not Zer0.3',
    price: '1024.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/D3003102_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: green,
    sizes: [40, 42, 43, 44],
    type: ['new'],
  },
  {
    id: 20,
    brand: 'Jordan',
    model: 'AJ 1 Mid SE',
    price: '960.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/52542087_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: yellow,
    sizes: [38, 41, 42, 43],
    type: ['featured, upcoming'],
  },
  {
    id: 21,
    brand: 'Puma',
    model: 'RS-X3',
    price: '800.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/30649801_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: blue,
    sizes: [40, 42, 43, 44, 45],
    type: ['new, featured'],
  },
  {
    id: 22,
    brand: 'Puma',
    model: 'Sky Modern',
    price: '839.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/19404201_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: grey,
    sizes: [40, 41, 42, 43, 45],
    type: ['featured'],
  },
  {
    id: 23,
    brand: 'Puma',
    model: 'LQDCell',
    price: '830.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/19286205_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: lightBlue,
    sizes: [40, 42, 43, 45],
    type: ['new, featured'],
  },
  {
    id: 24,
    brand: 'Puma',
    model: 'RS-X',
    price: '859.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/37271501_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: green,
    sizes: [40, 42, 43, 45],
    type: ['upcoming'],
  },
  {
    id: 25,
    brand: 'Puma',
    model: 'Ralph Sampson Mid',
    price: '919.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/37084702_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: blue,
    sizes: [40, 41, 42, 43, 44, 45],
    type: ['upcoming, featured'],
  },
  {
    id: 26,
    brand: 'Puma',
    model: 'Style Rider',
    price: '839.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/002001M_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: whiteGrey,
    sizes: [40, 41, 42, 43, 45],
    type: ['new, featured'],
  },
  {
    id: 27,
    brand: 'Reebok',
    model: 'BB4600',
    price: '600.90',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/EH2135_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: whiteGrey,
    sizes: [40, 41, 43, 45],
    type: ['new, featured'],
  },
  {
    id: 28,
    brand: 'Reebok',
    model: 'DMX Daytona',
    price: '536.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/DV9725_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: red,
    sizes: [40, 42, 44, 45],
    type: ['featured'],
  },
  {
    id: 29,
    brand: 'Reebok',
    model: 'Classic Leather',
    price: '440.10',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/DV7027_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: whiteBlue,
    sizes: [39, 42, 44, 45],
    type: ['new'],
  },
  {
    id: 30,
    brand: 'Reebok',
    model: 'DMX Run 1600',
    price: '460.90',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/CN7737_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: grey,
    sizes: [40, 42, 43, 44],
    type: ['upcoming'],
  },
  {
    id: 31,
    brand: 'Reebok',
    model: 'Classic Leather Altered',
    price: '539.00',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/EH0129_a1?wid=630&hei=630&fmt=png-alpha',
    },
    backgroundColor: darkRed,
    sizes: [40, 42, 43, 44],
    type: ['new, featured'],
  },
  {
    id: 32,
    brand: 'Reebok',
    model: '4600',
    price: '369.90',
    imageURL: {
      uri:
        'https://images.footlocker.com/is/image/EBFL2/FV8497_a1?wid=640&hei=640&fmt=png-alpha',
    },
    backgroundColor: blue,
    sizes: [40, 41, 43, 45],
    type: ['upcoming, featured'],
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
  14: [
    'https://images.footlocker.com/is/image/EBFL2/W6993100_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/W6993100_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/W6993100_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  15: [
    'https://images.footlocker.com/is/image/EBFL2/15317011_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/15317011_a2?wid=630&hei=630&fmt=png-alpha',
  ],
  16: [
    'https://images.footlocker.com/is/image/EBFL2/11046116_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/11046116_a3?wid=630&hei=630&fmt=png-alpha',
  ],
  17: [
    'https://images.footlocker.com/is/image/EBFL2/T1493100_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/T1493100_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/T1493100_a4?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/T1493100_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  18: [
    'https://images.footlocker.com/is/image/EBFL2/Q9084101_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/Q9084101_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/Q9084101_a4?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/Q9084101_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  19: [
    'https://images.footlocker.com/is/image/EBFL2/D3003102_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/D3003102_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/D3003102_a4?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/D3003102_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  20: [
    'https://images.footlocker.com/is/image/EBFL2/52542087_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/52542087_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/52542087_a4?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/52542087_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  21: [
    'https://images.footlocker.com/is/image/EBFL2/30649801_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/30649801_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/30649801_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  22: [
    'https://images.footlocker.com/is/image/EBFL2/19404201_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/19404201_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/19404201_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  23: [
    'https://images.footlocker.com/is/image/EBFL2/19286205_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/19286205_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/19286205_a4?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/19286205_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  24: [
    'https://images.footlocker.com/is/image/EBFL2/37271501_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/37271501_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/37271501_a4?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/37271501_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  25: [
    'https://images.footlocker.com/is/image/EBFL2/37084702_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/37084702_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/37084702_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  26: [
    'https://images.footlocker.com/is/image/EBFL2/002001M_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/002001M_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/002001M_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  27: [
    'https://images.footlocker.com/is/image/EBFL2/EH2135_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EH2135_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EH2135_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  28: [
    'https://images.footlocker.com/is/image/EBFL2/DV9725_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/DV9725_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/DV9725_a4?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/DV9725_a5?wid=630&hei=630&fmt=png-alpha',
  ],
  29: [
    'https://images.footlocker.com/is/image/EBFL2/DV7027_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/DV7027_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/DV7027_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  30: [
    'https://images.footlocker.com/is/image/EBFL2/CN7737_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/CN7737_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/CN7737_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  31: [
    'https://images.footlocker.com/is/image/EBFL2/EH0129_a1?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EH0129_a3?wid=630&hei=630&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/EH0129_a4?wid=630&hei=630&fmt=png-alpha',
  ],
  32: [
    'https://images.footlocker.com/is/image/EBFL2/FV8497_a1?wid=640&hei=640&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/FV8497_a3?wid=30&hei=30&fmt=png-alpha',
    'https://images.footlocker.com/is/image/EBFL2/FV8497_a4?wid=630&hei=630&fmt=png-alpha',
  ],
};

export {brands, images, allItems};
