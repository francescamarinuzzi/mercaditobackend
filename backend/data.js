import bcrypt from 'bcrypt';



const data = {
  users: [
    {
      name: 'Fran',
      email: 'fmarinuzzi@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true
    },
    {
      name: 'Paolo',
      email: 'pmarinuzzi@gmail.com',
      password: bcrypt.hashSync('12344', 8),
      isAdmin: false
    }
  ],
    products: [
      {
        name: 'Nike Shirt',
        image: 'images/p1.png',
        brand: 'Nike',
        category: 'Shirts',
        condition: 'new',
        description: 'high quality product',
        price: 120,
        stock: 10,
      },
      {
        name: 'Adidas Fit Shirt',
        image: '/images/p2.png',
        brand: 'Adidas',
        category: 'Shirts',
        condition: 'new',
        description: 'high quality product',
        price: 100,
        stock: 20,

        
      },
      {
        name: 'Lacoste Shirt',
        image: '/images/p3.png',
        brand: 'Lacoste',
        category: 'Shirts',
        condition: 'new',
        description: 'high quality product',
        price: 220,
        stock: 0,
        
        
        
      },
      {
        name: 'Nike Slim Pant',
        image: '/images/p4.png',
        brand: 'Nike',
        category: 'Pants',
        condition: 'used',
        description: 'high quality product',
        price: 78,
        stock: 15,

      },
      {

        name: 'Puma Slim Pant',
        image: '/images/p5.png',
        brand: 'Puma',
        category: 'Pants',
        condition: 'new',
        description: 'high quality product',
        price: 65,
        stock: 5,

      },
      {

        name: 'Air Jordan 1 Low',
        image: '/images/p6.png',
        brand: 'Nike',
        category: 'Shoes',
        condition: 'used',
        description: 'high quality product',
        price: 139,
        stock: 12,

      },
      {
    
        name: 'Air Force 1',
        image: '/images/p7.png',
        brand: 'Nike',
        category: 'Shoes',
        condition: 'new',
        description: 'high quality product',
        price: 139,
        stock: 12,

      },
      {
        
        name: 'Stan Smith',
        image: '/images/p8.png',
        brand: 'Adidas',
        category: 'Shoes',
        condition: 'new',
        description: 'high quality product',
        price: 139,
        stock: 12,

      },
    ],
  };
  export default data;