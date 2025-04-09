import React from 'react';

// Example data structure - move this outside or fetch it later
const merchItems = [
    { id: 1, img: 'https://f4.bcbits.com/img/0031999101_37.jpg', name: 'Product Name 1', price: '$19.99' },
    { id: 2, img: 'https://f4.bcbits.com/img/0031999038_37.jpg', name: 'Product Name 2', price: '$19.99' },
    { id: 3, img: 'https://f4.bcbits.com/img/0031410433_37.jpg', name: 'Product Name 3', price: '$19.99' },
    { id: 4, img: 'https://f4.bcbits.com/img/0031409323_37.jpg', name: 'Product Name 4', price: '$19.99' },
    // Add the rest of your merch items here...
    { id: 5, img: 'https://f4.bcbits.com/img/0031409323_37.jpg', name: 'Product Name 5', price: '$19.99' },
    { id: 6, img: 'https://f4.bcbits.com/img/0031999038_37.jpg', name: 'Product Name 6', price: '$19.99' },
     // ... continue for all items
];


function MerchContent() {
  return (
    <>
      <h1>MERCH</h1>
      {/* The grid container logic is handled by TvContainer adding 'grid-view' class */}
      {/* Map over the data to create merch items */}
      {merchItems.map(item => (
        <div className="merch-item" key={item.id}> {/* Add unique key */}
          <img src={item.img} alt={item.name} />
          <div className="product-name">{item.name}</div>
          <div className="product-price">{item.price}</div>
        </div>
      ))}
    </>
  );
}

export default MerchContent;
