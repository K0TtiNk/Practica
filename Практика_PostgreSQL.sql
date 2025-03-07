SELECT 
    customers.name, 
    customers.email
FROM 
    customers 
JOIN 
    orders ON customers.customer_id =  orders.customer_id
GROUP BY 
    customers.customer_id, customers.name, customers.email
HAVING 
    SUM(orders.amount) > 10000 AND COUNT(orders.order_id) > 5;