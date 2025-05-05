import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import VendorsPage from './pages/VendorsPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/vendors" element={<VendorsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;