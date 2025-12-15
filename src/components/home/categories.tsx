import React from 'react';

import { Button } from '../ui';
import { ServiceArrorIcon } from '@/icon';

interface Category {
  id: number;
  title: string;
  services: string;
  image: string;
}

const Categories: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      title: 'Police Clearance',
      services: '10 services',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Home affairs',
      services: '10 services',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Divorce Order',
      services: '10 services',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Apostille',
      services: '10 services',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Embassy Attestation',
      services: '10 services',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: "Driver's License",
      services: '10 services',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="container px-4 pt-[35px] xl:pt-[48px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Categories</h2>
     
        <Button className='bg-transparent text-black border rounded-full'>See all</Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative bg-secondary rounded-2xl p-4  transition-all duration-300 cursor-pointer "
          >
            <div className="flex items-center gap-4">
              {/* Image */}
              <div className="shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 mb-1 truncate">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500">{category.services}</p>
              </div>

              {/* Arrow Icon */}
              <div className="shrink-0 w-8 h-8  flex items-center justify-center transition-colors">
                <ServiceArrorIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;