// Product object
export const Product = {
    id: String,
    name: String,
    description: String,
    price: Number,
    category: String,
    image: String,
    rating: Number,
    reviews: Number,
    vendorId: String,
    inStock: Boolean,
  };
  
  // Vendor object
  export const Vendor = {
    id: String,
    name: String,
    shopName: String,
    description: String,
    category: String,
    rating: Number,
    reviews: Number,
    image: String,
  };
  
  // CartItem object
  export const CartItem = {
    product: Product,
    quantity: Number,
  };
  
  // User object
  export const User = {
    id: String,
    name: String,
    email: String,
    role: ['user', 'vendor', 'admin'],
  };
  
  // Category values
  export const Category = [
    'building-materials',
    'tools',
    'electrical',
    'plumbing',
    'flooring',
    'paint',
    'hardware',
    'safety-equipment',
  ];
  
  // Mapping category names
  export const categoryNames = {
    'building-materials': 'Building Materials',
    'tools': 'Tools & Equipment',
    'electrical': 'Electrical',
    'plumbing': 'Plumbing',
    'flooring': 'Flooring & Tiles',
    'paint': 'Paint & Supplies',
    'hardware': 'Hardware',
    'safety-equipment': 'Safety Equipment',
  };
  