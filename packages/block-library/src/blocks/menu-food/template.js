const TEMPLATE = [
  [
    'novablocks/menu-food-section', { sectionTitle: 'Starters' },
    [
      [ 'novablocks/menu-food-item',
        {
          title: 'Pea & Mint Soup',
          description: 'Server with focaccia bread',
          price: '$8.00',
          showPrices: true,
          showDescription: true,
          enableSalePrice: true,
          salePrice: '$5.00'
        }
      ],
      [ 'novablocks/menu-food-item',
        {
          title: 'Beef Meatballs',
          description: 'In a spicy tomato sauce',
          price: '$10.50',
          showPrices: true,
          showDescription: true
        }
      ],
      [ 'novablocks/menu-food-item',
        {
          title: 'Hummus & Baba Ganoush Dip',
          description: 'Olive & grilled flatbread',
          price: '$12.00',
          showPrices: true,
          showDescription: true
        }
      ],
    ]
  ],

  [
    'novablocks/menu-food-section', { sectionTitle: 'Desserts' },
    [
      [ 'novablocks/menu-food-item',
        {
          title: 'Dark Chocolate & Brownie Delice',
          description: 'Fudge bits & salted caramel ice cream',
          price: '$6.50',
          showPrices: true,
          showDescription: true
        }
      ],
      [ 'novablocks/menu-food-item',
        {
          title: 'Berry Cheesecake Trifle',
          description: 'Fresh raspberries & strawberries, sable cookie',
          price: '$6.50',
          showPrices: true,
          showDescription: true,
          enableHighlightFoodItem: true,
          highlightLabel: 'New'
        }
      ],
      [ 'novablocks/menu-food-item',
        {
          title: 'Caramelised Lemon Tart',
          description: 'Meringue crisps, gin & tonic ice cream',
          price: '$6.50',
          showPrices: true,
          showDescription: true
        }
      ],
    ]
  ],

  [
    'novablocks/menu-food-section', { sectionTitle: 'Main Course' },
    [
      [ 'novablocks/menu-food-item',
        {
          title: 'The Classic Burger',
          description: 'Chargrilled, with or without bacon, on a brioche bun & fries',
          price: '$15.50',
          showPrices: true,
          showDescription: true
        }
      ],
      [ 'novablocks/menu-food-item',
        {
          title: 'Roast Salmon',
          description: 'Hollandaise sauce, green beans & potato galette',
          price: '$19.50',
          showPrices: true,
          showDescription: true
        }
      ],
      [ 'novablocks/menu-food-item',
        {
          title: 'Tagliatelle Pesto Chicken',
          description: 'Roasted Mediterranean vegetables, tomato and herb sauce',
          price: '$15.00',
          showPrices: true,
          showDescription: true,
          enableHighlightFoodItem: true,
          highlightLabel: 'Chef Selection'
        }
      ],
      [ 'novablocks/menu-food-item',
        {
          title: 'Confit de Canard ',
          description: 'Duck confit, white bean & ham cassoulet, wilted spinach',
          price: '$12.15',
          showPrices: true,
          showDescription: true
        }
      ],
      [ 'novablocks/menu-food-item',
        {
          title: 'Roasted Steak Roulade',
          description: 'Mint parsley with apple cider vinegar, salt, sugar & spices',
          price: '$14.95',
          showPrices: true,
          showDescription: true
        }
      ],
      [ 'novablocks/menu-food-item',
        {
          title: 'Cornish-mackerel',
          description: 'Marinated tomatoes, fragrant curry, tamarillo',
          price: '$10.45',
          showPrices: true,
          showDescription: true
        }
      ],
      [ 'novablocks/menu-food-item',
        {
          title: 'Lobster & Cucumber Soup',
          description: 'Lobster salad, smoked onion, rock samphire & sorrel',
          price: '$24.95',
          showPrices: true,
          showDescription: true
        }
      ],
    ]
  ],
];

export default TEMPLATE;
