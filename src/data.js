const nike = [
  {
    id: 0,
    brand: 'Nike',
    model: 'Air-270',
    price: '129.00 TL',
    imageURL: require('./assets/products/nike/nike-zoom-red.png'),
    backgroundColor: '#EAA190',
    sizes: [40, 42, 43, 45],
    type: ['new'],
  },
  {
    id: 1,
    brand: 'Nike',
    model: 'Epic-React',
    price: '129.00 TL',
    imageURL: require('./assets/products/nike/nike-zoom.png'),
    backgroundColor: '#527AD1',
    sizes: [40, 42, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 2,
    brand: 'Nike',
    model: 'Air-Max',
    price: '129.00 TL',
    imageURL: require('./assets/products/nike/nike-airmax-huarache.png'),
    backgroundColor: '#01A7B1',
    sizes: [40, 42, 43, 45],
    type: ['featured'],
  },
  {
    id: 3,
    brand: 'Nike',
    model: 'Epic-React',
    price: '129.00 TL',
    imageURL: require('./assets/products/nike/nike-airmax.png'),
    backgroundColor: '#EAA190',
    sizes: [40, 42, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 4,
    brand: 'Nike',
    model: 'Air-Max',
    price: '129.00 TL',
    imageURL: require('./assets/products/nike/nike-zoom-green.png'),
    backgroundColor: '#01A7B1',
    sizes: [40, 42, 43, 45],
    type: ['new', 'featured'],
  },
  {
    id: 5,
    brand: 'Nike',
    model: 'Air-Max',
    price: '129.00 TL',
    imageURL: require('./assets/products/nike/nike-zoom-green.png'),
    backgroundColor: '#01A7B1',
    sizes: [40, 42, 43, 45],
    type: ['upcoming'],
  },
];

const brands = [
  {id: 0, name: 'Nike'},
  {id: 1, name: 'Adidas'},
  {id: 2, name: 'Jordan'},
  {id: 3, name: 'Puma'},
  {id: 4, name: 'Reebok'},
];

const products = {
  nike: nike,
  adidas: [],
  jordan: [],
  puma: [],
  reebok: [],
};

export {brands, products};
