
export const categories: string[] = ['Pizza', 'Sushi', 'Burgers', 'Vegetariano', 'Saladas'];


export type RestaurantType = {
  id: number;
  name: string;
  image: string;
};
export const restaurants: RestaurantType[] = [
  {
    id: 1,
    name: 'Restaurante 1',
    image: 'https://static.wixstatic.com/media/6e2bd8_e40fc024a9ad4b01bedca68dd2fef25c~mv2.png/v1/fill/w_640,h_340,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6e2bd8_e40fc024a9ad4b01bedca68dd2fef25c~mv2.png'
  },
  {
    id: 2,
    name: 'Restaurante 2',
    image: 'https://gkpb.com.br/wp-content/uploads/2023/12/gkpb-promo-bk-2-25-whopper-696x392.jpg.webp'
  },
];


export type ProductType = {
  id: string;
  name: string;
  restaurant: string;
  imageUrl: string;
  rating: number;
  price: number;
  description: string;
  category: string;
};

export const productData:ProductType[] = [
  {
    id: '1',
    name: 'Pizza Margherita',
    restaurant: 'Pizzaria Italiana',
    imageUrl: 'https://www.minhareceita.com.br/app/uploads/2022/12/pizza-de-pepperoni-caseira-portal-minha-receita.jpg',
    rating: 4.7,
    price: 29.99,
    description: 'Deliciosa pizza Margherita com molho de tomate, queijo e manjericão fresco.',
    category: 'Italian',
  },
  {
    id: '2',
    name: 'Sushi Combo',
    restaurant: 'Sushi Place',
    imageUrl: 'https://cdn.awsli.com.br/2500x2500/1922/1922270/produto/184514759/34579538ea.jpg',
    rating: 4.5,
    price: 39.99,
    description: 'Combo de sushi com os melhores cortes de salmão, atum e peixe branco.',
    category: 'Japanese',
  },
  {
    id: '3',
    name: 'Hambúrguer Clássico',
    restaurant: 'Burger House',
    imageUrl: 'https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/05/mafe-estudio-LV2p9Utbkbw-unsplash.jpg',
    rating: 4.2,
    price: 14.50,
    description: 'Hambúrguer clássico com carne suculenta, queijo derretido, alface e tomate.',
    category: 'American',
  },
  {
    id: '4',
    name: 'Hot-Dog Clássico',
    restaurant: 'Burger House',
    imageUrl: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/31/istock-143175178-1iuy9pef5iz3q.jpg',
    rating: 4.2,
    price: 19.99,
    description: 'Hot-Dog clássico com salsicha, molho de tomate e cebola crocante.',
    category: 'American',
  },
];