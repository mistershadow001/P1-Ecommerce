const productsData = [
  {
    id: 1,
    image: 'https://www.designinfo.in/wp-content/uploads/2023/08/Sony-WH-CH520-White-2-485x485-optimized.webp',
    name: 'Wireless Headphones',
    category: 'Electronics',
    originalPrice: 199.99,
    discountedPrice: 149.99,
    
  },
  {
    id: 2,
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw97e0be58/images/Titan/Catalog/90165AP04_1.jpg?sw=600&sh=600',
    name: 'Smartwatch',
    category: 'Wearable Tech',
    originalPrice: 299.99,
    discountedPrice: 249.99,
    
  },
  {
    id: 3,
    image: 'https://assets.ajio.com/medias/sys_master/root/20240108/W0XA/659c124b74cb305fe00a10b1/-473Wx593H-469581571-white-MODEL.jpg',
    name: 'Running Shoes',
    category: 'Footwear',
    originalPrice: 120.00,
    discountedPrice: 99.99,
   
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOc0-0O_glRHKeEhMMueo3EGN27ArnNjVDg&s',
    name: 'Gaming Mouse',
    category: 'Accessories',
    originalPrice: 59.99,
    discountedPrice: 49.99,
   
  },
  {
    id: 5,
    image: 'https://img.freepik.com/free-photo/charger-usb-cable-type-c-orange-background_58702-4602.jpg',
    name: 'Portable Charger',
    category: 'Gadgets',
    originalPrice: 39.99,
    discountedPrice: 29.99,
    
  },
  {
    id: 6,
    name: "Nofilter",
    des: "pure cotton",
    image: "https://i.pinimg.com/736x/6e/ff/3c/6eff3c6f9ed6fea6ce92aee78d48f206.jpg",
    price: 100,
    originalPrice: 299.99,
    discountedPrice: 249.99,
    category: "Mens Clothing" // Added category for the entire array
  },
  {
    id: 7,
    name: "Nike",
    des: "leather jacket for men",
    image: "https://images-cdn.ubuy.co.in/653e0fce99eea545187d36f1-skado-mens-leather-jacket-real-leather.jpg",
    
    originalPrice: 299.99,
    discountedPrice: 249.99,
    category: "Mens Clothing" // Added category for the entire array
  },
  {
    id: 8,
    name: "System",
    des: "bomber jacket",
    image: "https://assets.ajio.com/medias/sys_master/root/20231111/FCOy/654f9cb4ddf77915197fd3cb/-473Wx593H-410408513-27e-MODEL.jpg",
    
    originalPrice: 299.99,
    discountedPrice: 249.99,
    category: "Mens Clothing" // Added category for the entire array
  },
  {
    id: 9,
    name: "System",
    des: "bomber jacket",
    image: "https://cdn-img.prettylittlething.com/6/7/5/1/6751a22dbb864fb45136e2a633ac6cdb4a89381e_CNB8493_1.jpg?imwidth=600",
   
    originalPrice: 299.99,
    discountedPrice: 249.99,
    category: "Mens Clothing" // Added category for the entire array
  },
  {
    id: 10,
    name: "System",
    des: "bomber jacket",
    image: "https://assets.ajio.com/medias/sys_master/root/20231111/FCOy/654f9cb4ddf77915197fd3cb/-473Wx593H-410408513-27e-MODEL.jpg",
    originalPrice: 299.99,
    discountedPrice: 249.99,
    category: "Mens Clothing" // Added category for the entire array
  },
  {
    id: 11,
    name: "System",
    des: "bomber jacket",
    image: "https://assets.ajio.com/medias/sys_master/root/20231111/FCOy/654f9cb4ddf77915197fd3cb/-473Wx593H-410408513-27e-MODEL.jpg",
    originalPrice: 299.99,
    discountedPrice: 249.99,
    category: "Mens Clothing" // Added category for the entire array
  },
  {
    id: 12,
    name: "adidas",
    des: "limited edition",
    image: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000018607447_437Wx649H_202404131831171.jpeg",
    category: "Shoes", // Added category
    originalPrice: 299.99,
    discountedPrice: 249.99
  },
  {
    id: 13,
    name: "Nike",
    des: "sport shoes",
    image: "https://assets.ajio.com/medias/sys_master/root/20231030/BVdS/653fcf66afa4cf41f5690063/-473Wx593H-469551549-white-MODEL.jpg",
    originalPrice: 299.99,
    discountedPrice: 249.99,
    category: "Shoes" // Added category
  },
  {
    id: 14,
    name: "spark",
    des: "comfort matters",
    originalPrice: 299.99,
    discountedPrice: 249.99,
    image: "https://assets.ajio.com/medias/sys_master/root/20240108/W0XA/659c124b74cb305fe00a10b1/-473Wx593H-469581571-white-MODEL.jpg",
    category: "Shoes" // Added category
  },
  {
    id: 15,
    name: "puma",
    des: "make it fast",
    originalPrice: 299.99,
    discountedPrice: 249.99,
    image: "https://media.vogue.in/wp-content/uploads/2021/06/Colourful-Shoes-by-Puma.jpg",
    category: "Shoes" // Added category
  },
  {
    id: 16,
    name: "woodland",
    des: "lasts longer",
    originalPrice: 299.99,
    discountedPrice: 249.99,
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/t/q/m/-original-imaggckgvpad5hgp.jpeg?q=20&crop=false",
    category: "Shoes" // Added category
  },
  {
    id: 17,
    name: "polo",
    originalPrice: 299.99,
    discountedPrice: 249.99,
    des: "be a man of game",
    image: "https://assets.ajio.com/medias/sys_master/root/20230816/HtwA/64dceb82a9b42d15c9b24506/-1117Wx1400H-469232628-navy-MODEL.jpg",
    category: "Shoes" // Added category
  }
  // Add more products here
];

export default productsData;
