import {
  UtensilsCrossed,
  BedDouble,
  DoorClosed,
  Baby,
  Sofa,
  Tv,
  LampDesk,
  Briefcase,
  Home,
} from 'lucide-react';
import type { Service } from '../types/service';

export const categories = [
  'All',
  'Living Spaces',
  'Private Spaces',
  'Functional Areas',
  'Specialized',
];

export const services: Service[] = [
  {
    id: '1',
    icon: UtensilsCrossed,
    title: 'Modular Kitchens',
    description:
      'Bespoke modular kitchens combining innovation and elegance. Crafted with smart storage, premium materials, and seamless modular units that blend style with utility.',
    category: 'Functional Areas',
    image:
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://media.designcafe.com/wp-content/uploads/2020/05/09150825/blue-and-white-modular-kitchen-design.jpg',
    ],
    tags: ['Modern', 'Storage Solutions', 'Custom Design'],
    featured: true,
  },
  {
    id: '2',
    icon: BedDouble,
    title: 'Personalized Bedrooms',
    description:
      'Luxury meets comfort with custom-designed bedrooms. From bed back paneling to elegant lighting and wardrobes, every detail reflects your unique personality and lifestyle.',
    category: 'Private Spaces',
    image:
      'https://i.pinimg.com/736x/37/9c/26/379c2620acd5172bc5cb16a0ba062712.jpg',
    gallery: [
      'https://images.alphacoders.com/740/thumb-1920-740968.jpg',
      'https://www.homelane.com/blog/wp-content/uploads/2022/10/panel-pvc-room-designs.jpg',
      'https://events.rumah123.com/wp-content/uploads/sites/38/2023/03/21165023/Ukuran-Kamar-Tidur-4x6-Meter-1024x687.jpg',
    ],
    tags: ['Luxury', 'Comfort', 'Lighting'],
    featured: true,
  },
  {
    id: '3',
    icon: DoorClosed,
    title: 'Functional Wardrobes',
    description:
      'Custom wardrobes designed for efficiency and elegance. Explore walk-in closets, wall-mounted units, and tinted glass designs that redefine organized living.',
    category: 'Private Spaces',
    image:
      'https://media.designcafe.com/wp-content/uploads/2021/10/30135203/wardrobe-finished-in-slate-with-open-shelf.jpg',
    gallery: [
      'https://images.livspace-cdn.com/w:1200/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-1657179080-NnXAg/wardrobe-1657179096-XjS7i/kid-bedroom-1-1658836616-nY8Uc.png',
      'https://i.pinimg.com/736x/e6/b7/8a/e6b78a56f2847b34f3570197dd068ea4.jpg',
      'https://images.livspace-cdn.com/w:1440/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-1657179080-NnXAg/wardrobe-1657179096-XjS7i/wardrobe-04-1664369521-zemvs.jpg',
    ],
    tags: ['Organization', 'Walk-in Closets', 'Glass Designs'],
    featured: false,
  },
  {
    id: '4',
    icon: Baby,
    title: 'Functional Kids Room',
    description:
      'Vibrant, safe, and creative spaces for kids. Designed with playful decor, smart storage, and ergonomic layouts that grow with your child\'s imagination.',
    category: 'Specialized',
    image:
      'https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/spaces/childrens-room/five-pieces-of-furniture-essential-to-a-functional-kids-room/Title-kids-room-interior-design.jpg',
    gallery: [
      'https://cdn.home-designing.com/wp-content/uploads/2020/09/shared-kids-room.jpg',
      'https://cdn.decorilla.com/online-decorating/wp-content/uploads/2020/09/Colorful-rainbow-themed-kids-room-interior-design-scaled.jpg',
      'https://i.pinimg.com/originals/09/5b/97/095b97688975ed76c99b5a9e3c88322e.jpg',
    ],
    tags: ['Playful', 'Safe Design', 'Smart Storage'],
    featured: false,
  },
  {
    id: '5',
    icon: Sofa,
    title: 'Living Room Interiors',
    description:
      'Stylish and comfortable living spaces designed to bring warmth and sophistication. From statement walls to custom furniture, we create spaces that feel like home.',
    category: 'Living Spaces',
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://wallup.net/wp-content/uploads/2014/08/interior-design-living-room.jpg',
      'https://www.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-interior-design-grey-living-room2.png',
      'https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Warmth', 'Statement Walls', 'Custom Furniture'],
    featured: true,
  },
  {
    id: '6',
    icon: Tv,
    title: 'Elegant Entertainment Units',
    description:
      'Transform your living area with entertainment units that combine functionality and design—perfect for displaying your TV, decor, and collectibles in style.',
    category: 'Living Spaces',
    image:
      'https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://simplinteriors.com/wp-content/uploads/2021/04/LUXURY-LIVING-ROOM-e1617724022897-1024x942.jpg',
      'https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-1657179080-NnXAg/tv-unit-1657603921-6y6tm/living-view-3-option-2-1-1-1662029420-4RCM2.jpg',
      'https://i.pinimg.com/originals/34/7a/6d/347a6d8835e0be95bbfb649a40ac76c7.jpg',
    ],
    tags: ['Entertainment', 'Display', 'Modern'],
    featured: false,
  },
  {
    id: '7',
    icon: LampDesk,
    title: 'Divine Pooja Rooms',
    description:
      'Peaceful and sacred spaces crafted with devotion. From traditional temple-style setups to modern minimalist sanctuaries, we design pooja rooms that inspire serenity.',
    category: 'Specialized',
    image:
      'https://i.pinimg.com/originals/dc/a4/f7/dca4f7b2702c9d4ce8760df4227ab0e8.jpg',
    gallery: [
      'https://www.decorpot.com/images/350390464top-interior-design-essentials-for-pooja-rooms-in-chennai-homes.jpg',
      'https://www.mchoiceinterior.com/images/services/pooja-cupboards3.jpg',
      'https://i.pinimg.com/originals/6f/4f/e6/6f4fe631b78897576eb88fd843d3b42c.jpg',
    ],
    tags: ['Sacred', 'Traditional', 'Minimalist'],
    featured: false,
  },
  {
    id: '8',
    icon: UtensilsCrossed,
    title: 'Elegant Dining Room Designs',
    description:
      'Make every meal special with elegantly designed dining rooms featuring bespoke furniture, statement lighting, and decor that celebrates togetherness.',
    category: 'Living Spaces',
    image:
      'https://rperryclark.decoratingden.com/wp-content/uploads/sites/208/2021/10/0503A1-19.jpg',
    gallery: [
      'https://www.decorilla.com/online-decorating/wp-content/uploads/2021/08/Formal-dining-room-ideas-by-Decorilla-designer-Farzaneh-K-.jpg',
      'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://www.decorilla.com/online-decorating/wp-content/uploads/2023/04/Bespoke-open-concept-design-by-Dina-H.jpeg',
    ],
    tags: ['Elegant', 'Bespoke', 'Statement Lighting'],
    featured: false,
  },
  {
    id: '9',
    icon: Briefcase,
    title: 'Functional Home Office Designs',
    description:
      'Boost productivity and creativity with ergonomic home office designs featuring intelligent layouts, inspiring decor, and functional organization.',
    category: 'Functional Areas',
    image:
      'https://www.sanfrandesign.com/wp-content/uploads/2020/08/Worry-About-Function.jpg',
    gallery: [
      'https://stylesatlife.com/wp-content/uploads/2020/01/Best-Office-Interior-Designs.jpg',
      'https://i.pinimg.com/originals/0c/e5/73/0ce573d1f7d0e1a25f5cb7c1369e0443.jpg',
      'https://i.pinimg.com/originals/3a/c7/4c/3ac74ccdca56d98a5a980e9c831cc792.jpg',
    ],
    tags: ['Ergonomic', 'Productivity', 'Organization'],
    featured: false,
  },
  {
    id: '10',
    icon: Home,
    title: 'Complete Home Makeovers',
    description:
      'Transform your entire home with our comprehensive design solutions. We handle everything from concept to completion, ensuring a cohesive and stunning result throughout your space.',
    category: 'Specialized',
    image:
      'https://media.aws.smithandsons.com.au/images/1454/1454-original.jpg',
    gallery: [
      'https://ahouseinthehills.com/wp-content/uploads/2024/06/Modern-Makeovers-Interior-Design-Secrets-to-Refresh-Your-Home.webp',
      'https://media.aws.smithandsons.com.au/images/15849/15849-original.jpg',
      'https://www.garageliving.com/hs-fs/hubfs/garage-remodels-garage-improvement-month.jpg?width=1080&name=garage-remodels-garage-improvement-month.jpg',
    ],
    tags: ['Complete Solutions', 'Cohesive Design', 'Full Service'],
    featured: true,
  },
];
