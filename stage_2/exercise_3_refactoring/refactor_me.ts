/**
   * Customer Order Processing System
   * This file contains functions for analyzing and processing customer orders.
   * There are several opportunities for refactoring and improvement.
   */

// Customer order data structure
interface Order {
    id: string;
    customerName: string;
    items: OrderItem[];
    date: Date;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    priority: 'low' | 'medium' | 'high';
}

interface OrderItem {
    productId: string;
    name: string;
    quantity: number;
    unitPrice: number;
    category: string;
}

// Sample data
const sampleOrders: Order[] = [
    {
      id: "ORD-001",
      customerName: "Alice Johnson",
      items: [
        { productId: "P100", name: "Laptop", quantity: 1, unitPrice: 1200, category: "electronics" },
        { productId: "P101", name: "Mouse", quantity: 2, unitPrice: 25, category: "electronics" }
      ],
      date: new Date('2023-05-15'),
      status: 'delivered',
      priority: 'medium'
    },
    {
      id: "ORD-002",
      customerName: "Bob Smith",
      items: [
        { productId: "P200", name: "T-shirt", quantity: 3, unitPrice: 20, category: "clothing" },
        { productId: "P201", name: "Jeans", quantity: 1, unitPrice: 50, category: "clothing" }
      ],
      date: new Date('2023-06-20'),
      status: 'pending',
      priority: 'high'
    },
    {
      id: "ORD-003",
      customerName: "Charlie Brown",
      items: [
        { productId: "P100", name: "Laptop", quantity: 1, unitPrice: 1200, category: "electronics" },
        { productId: "P300", name: "Coffee Maker", quantity: 1, unitPrice: 80, category: "appliances" }
      ],
      date: new Date('2023-06-25'),
      status: 'shipped',
      priority: 'low'
    }
];

/**
   * Calculates the total value of all orders
   */
function calculateTotalOrdersValue(orders: Order[]): number {
    let total = 0;
  
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      for (let j = 0; j < order.items.length; j++) {
        const item = order.items[j];
        const itemTotal = item.quantity * item.unitPrice;
        total = total + itemTotal;
      }
    }
  
    return total;
}

/**
   * Finds all high priority orders that are still pending
   */
function findUrgentOrders(orders: Order[]): Order[] {
    const result: Order[] = [];
  
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      if (order.priority === 'high') {
        if (order.status === 'pending') {
          result.push(order);
        }
      }
    }
  
    return result;
}

/**
   * Calculates the total value of orders for a specific product
   */
function calculateProductRevenue(orders: Order[], productId: string): number {
    let productTotal = 0;
  
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      for (let j = 0; j < order.items.length; j++) {
        const item = order.items[j];
        if (item.productId === productId) {
          const itemTotal = item.quantity * item.unitPrice;
          productTotal = productTotal + itemTotal;
        }
      }
    }
  
    return productTotal;
}

/**
   * Finds the most popular product categories (by quantity ordered)
   */
function findPopularCategories(orders: Order[]): Array<{category: string, quantity: number}> {
    // Step 1: Count items by category
    const categoryCounts: Record<string, number> = {};
  
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      for (let j = 0; j < order.items.length; j++) {
        const item = order.items[j];
        if (!categoryCounts[item.category]) {
          categoryCounts[item.category] = 0;
        }
        const newCount = categoryCounts[item.category] + item.quantity;
        categoryCounts[item.category] = newCount;
      }
    }
  
    // Step 2: Convert to array
    const result: Array<{category: string, quantity: number}> = [];
    for (const category in categoryCounts) {
      const quantity = categoryCounts[category];
      result.push({ category: category, quantity: quantity });
    }
  
    // Step 3: Sort by quantity (descending)
    for (let i = 0; i < result.length; i++) {
      for (let j = i + 1; j < result.length; j++) {
        if (result[j].quantity > result[i].quantity) {
          const temp = result[i];
          result[i] = result[j];
          result[j] = temp;
        }
      }
    }
  
    return result;
}

/**
   * Generates a report of pending orders by customer
   */
function generatePendingOrdersReport(orders: Order[]): Array<{customerName: string, orderCount: number, totalValue: number}> {
    const customerData: Record<string, {orderCount: number, totalValue: number}> = {};
  
    // Count and sum by customer
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
    
      // Skip non-pending orders
      if (order.status !== 'pending') {
        continue;
      }
    
      // Calculate order value
      let orderValue = 0;
      for (let j = 0; j < order.items.length; j++) {
        const item = order.items[j];
        orderValue = orderValue + (item.quantity * item.unitPrice);
      }
    
      // Add to customer data
      if (!customerData[order.customerName]) {
        customerData[order.customerName] = {
          orderCount: 0,
          totalValue: 0
        };
      }
    
      customerData[order.customerName].orderCount += 1;
      customerData[order.customerName].totalValue += orderValue;
    }
  
    // Convert to array
    const result: Array<{customerName: string, orderCount: number, totalValue: number}> = [];
  
    for (const customerName in customerData) {
      result.push({
        customerName: customerName,
        orderCount: customerData[customerName].orderCount,
        totalValue: customerData[customerName].totalValue
      });
    }
  
    return result;
}

// Example usage
console.log("Total Order Value:", calculateTotalOrdersValue(sampleOrders));
console.log("Urgent Orders:", findUrgentOrders(sampleOrders));
console.log("Revenue for Laptop (P100):", calculateProductRevenue(sampleOrders, "P100"));
console.log("Popular Categories:", findPopularCategories(sampleOrders));
console.log("Pending Orders Report:", generatePendingOrdersReport(sampleOrders));
