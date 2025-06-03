export interface MenuItem {
    id: number
    name: string
    description: string
    price: number
    category: string
    image: string
  }
  
  export interface CartItem extends MenuItem {
    quantity: number
  }
  
  export interface Order {
    id: string
    customerName: string
    phone: string
    address: string
    items: CartItem[]
    total: number
    status: 'pending' | 'completed' | 'cancelled'
    createdAt: Date
  }