import React from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart()

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.id, newQuantity)
  }

  const handleRemove = () => {
    removeItem(item.id)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{item.description}</p>
          <p className="text-blue-600 dark:text-blue-400 font-bold mt-2">${item.price.toFixed(2)}</p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <Minus className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </button>
          
          <span className="font-semibold min-w-[2rem] text-center text-gray-900 dark:text-white">
            {item.quantity}
          </span>
          
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <Plus className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="text-right">
          <p className="font-bold text-lg text-gray-900 dark:text-white">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
          <button
            onClick={handleRemove}
            className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 mt-2 transition-colors duration-200"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem