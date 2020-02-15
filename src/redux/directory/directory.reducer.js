const INITIAL_STATE = {
    sections: [
        {
          title: 'shoes',
          imageUrl: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          id: 1,
          linkUrl: 'shop/shoes'
        },
        {
          title: 'kids',
          imageUrl: 'https://images.unsplash.com/photo-1446042833391-66c26bc1afce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
          id: 2,
          linkUrl: 'shop/kids'
        },
        {
          title: 'originals',
          imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=643&q=80',
          id: 3,
          linkUrl: 'shop/originals'
        },
        {
          title: 'womens',
          imageUrl: 'https://images.unsplash.com/photo-1512664401326-cd1a54ccd52d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://images.unsplash.com/photo-1544658030-d0e5163c47f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;