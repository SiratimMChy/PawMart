import { Link } from 'react-router'; 
import { PawPrint, Bone, Gift, Pill } from 'lucide-react';

const categories = [
  {
    title: 'Pets (Adoption)',
    value: 'Pets',
    path: '/Pets/all',
    icon: <PawPrint size={40} />,
    bgImage: 'https://i.ibb.co/Fbhz9gnV/pets.jpg',
  },
  {
    title: 'Pet Food',
    value: 'Food',
    path: '/Food/all',
    icon: <Bone size={40} />,
    bgImage: 'https://i.ibb.co/cfrKvQL/food.jpg',
  },
  {
    title: 'Accessories',
    value: 'Accessories',
    path: '/Accessories/all',
    icon: <Gift size={40} />,
    bgImage: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500',
  },
  {
    title: 'Pet Care Products',
    value: 'CareProducts',
     path: '/CareProducts/:category',
    icon: <Pill size={40} />,
    bgImage: 'https://i.ibb.co/4ZxNKc2N/pet-care.jpg',
  },
];


const CategoryCards = () => {
  return (
    <div>
        <h2 className='text-center text-3xl font-bold mt-5'>All Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-4 mb-8 px-5 lg:px-25">
      {categories.map(cat => (
        <div
          key={cat.value}
          className="relative group w-full shadow-md rounded-xl overflow-hidden h-64 border border-base-content/10"
          style={{
            backgroundImage: `url(${cat.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition"></div>
          
          <Link
            to={cat.path}
            className="relative z-10 flex flex-col items-center justify-center gap-3 p-6 text-center h-full"
          >
            <div className="text-white bg-blue-600 rounded-full flex items-center justify-center w-12 h-12">
              {cat.icon}
            </div>
            <h3 className="font-semibold text-xl text-white drop-shadow-lg">
              {cat.title}
            </h3>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CategoryCards;
