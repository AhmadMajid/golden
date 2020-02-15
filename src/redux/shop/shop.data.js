const SHOP_DATA = {
    shoes: {
      id: 1,
      title: 'Shoes',
      routeName: 'shoes',
      items: [
        {
          id: 1,
          name: 'Nike Tanjun',
          imageUrl: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/uwjw39b1xdsbtmfnxjqm/tanjun-shoe-MkTmejeq.jpg',
          price: 60,
          stock: 12
        },
        {
          id: 2,
          name: 'Nike Air Max 270',
          imageUrl: 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a0697e54-a067-49ab-9337-75b40474da8c/air-max-270-react-shoe-kSBKQM.jpg',
          price: 150,
          stock: 12
        },
        {
          id: 3,
          name: 'Converse Chuck Taylor low',
          imageUrl: 'https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dw60d6c093/images/hi-res/147137F_standard.png?sw=580&sh=580&sm=fit',
          price: 35,
          stock: 12
        },
        {
          id: 4,
          name: 'Jordan XI',
          imageUrl: 'https://stockx-360.imgix.net/Air-Jordan-11-Retro-Concord-2018/Images/Air-Jordan-11-Retro-Concord-2018/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1566585772&w=1000',
          price: 95,
          stock: 12
        },
        {
          id: 5,
          name: 'Nike Air Huarache',
          imageUrl: 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/g67suqbfveukmf5y9sez/air-huarache-run-id-shoe.jpg',
          price: 110,
          stock: 12
        },
        {
          id: 6,
          name: 'Vans Ward',
          imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcReGKbs-K0l3qS7pHAz2Ck2pl4eObzJDbndpLxrfehxtw85J97WdXqKrrAzYWbg4JnP1WqlTSNdyfT2aZ1ow6yVeh7YHAqeW5ORvDvj_lfckb9J4A-xMVfSsQ&usqp=CAE',
          price: 43,
          stock: 12
        },
        {
          id: 7,
          name: 'Nike Revolution 4',
          imageUrl: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/izla4yefqrkidjwjqgeh/revolution-4-running-shoe-KdTw2f.jpg',
          price: 43,
          stock: 12
        },
        {
          id: 8,
          name: 'Nike Flex Contact',
          imageUrl: 'https://images.sportsdirect.com/images/products/12142540_l.jpg',
          price: 46,
          stock: 12
        },
        {
          id: 9,
          name: 'Adidas Yeezy Boost 350 v2',
          imageUrl: 'https://cms-cdn.thesolesupplier.co.uk/2019/09/YEEZY-350-v2-Yecheil.jpg',
          price: 179,
          stock: 12
        },
      ]
    },
    kids: {
      id: 2,
      title: 'Kids',
      routeName: 'kids',
      items: [
        {
          id: 10,
          name: 'Native Unisex Kids Jefferson Slip-On Sneaker',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71B7TURGdqL._UX500_.jpg',
          price: 27,
          stock: 12
        },
        {
          id: 11,
          name: 'Saucony Kids Baby Jazz H&l-K Sneaker',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61ipVR4S%2B%2BL._AC_UL200_SR200,200_.jpg',
          price: 25,
          stock: 12
        },
        {
          id: 12,
          name: 'COODO Toddler Kids Sneakers Boys Girls Cute Casual Running Shoes',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/715nF9LCyyL._AC_UL200_SR200,200_.jpg',
          price: 15,
          stock: 12
        },
        {
          id: 13,
          name: 'COODO Toddler/Little Kid Boys Girls Shoes Running Sports Sneakers',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71kVs1GzEzL._AC_UL200_SR200,200_.jpg',
          price: 15,
          stock: 12
        },
        {
          id: 14,
          name: 'PUMA Kids Cabana Racer Velcro Sneaker',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/716Y6zoN1BL._AC_UL200_SR200,200_.jpg',
          price: 23,
          stock: 12
        },
        {
          id: 15,
          name: 'WETIKE Kids Shoes Boys Girls Sneakers Running Tennis Wrestling Athletic Gym Shoes Slip-on Soft Knit Sock Shoes',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71zEmLggHvL._AC_UL200_SR200,200_.jpg',
          price: 21,
          stock: 12
        },
        {
          id: 16,
          name: 'Under Armour Kids Pre School Assert 8 Alternate Closure Sneaker',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51ZP9k7z09L._AC_UL200_SR200,200_.jpg',
          price: 30,
          stock: 12
        },
        {
          id: 17,
          name: 'Weestep Toddler Little Kid Boys and Girls Slip On Canvas Sneakers',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71zTFoo-AKL._AC_UL200_SR200,200_.jpg',
          price: 17,
          stock: 12
        },
      ]
    },
    originals: {
      id: 3,
      title: 'Originals',
      routeName: 'originals',
      items: [
        {
          id: 18,
          name: 'Dobell Gold Patent Contemporary Dress Shoes',
          imageUrl: 'https://www.dobell.co.uk/media/product/98d/dobell-gold-patent-contemporary-dress-shoes-fwlzm18dm0-8a0.jpg',
          price: 40,
          stock: 12
        },
        {
          id: 19,
          name: 'Mens Comfort Shoes PU Fall Casual Oxfords Wear Proof Gold',
          imageUrl: 'https://li0.rightinthebox.com/images/384x384/201811/zzcnjy1543473880714.jpg',
          price: 39,
          stock: 12
        },
        {
          id: 20,
          name: 'Mens Comfort Shoes Patent Leather Spring / Fall Sneakers Mid-Calf Boots Gold Party & Evening / EU40',
          imageUrl: 'https://li0.rightinthebox.com/images/384x384/201710/iyowyd1509071979229.jpg',
          price: 31,
          stock: 12
        },
        {
          id: 21,
          name: 'Boys USB Charging LED / Comfort / LED Shoes Leatherette Sneakers Little Kids(4-7ys) / Big Kids(7years +) Walking Shoes Hook & Loop / Gold Fall / Winter / Rubber / EU39',
          imageUrl: 'https://li0.rightinthebox.com/images/384x384/201708/exifjo1502420853053.jpg',
          price: 24,
          stock: 12
        },
        {
          id: 22,
          name: 'Dobell Champagne Patent Contemporary Dress Shoes',
          imageUrl: 'https://www.dobell.co.uk/media/product/500/dobell-champagne-patent-contemporary-dress-shoes-fwlcm33dm0-830.jpg',
          price: 40,
          stock: 12
        },
      ]
    },
    womens: {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'VIFUUR Water Sports Shoes Barefoot Quick-Dry Aqua Yoga Socks Slip-on for Women',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71QK%2Bl-BN5L._AC_UL200_SR200,200_.jpg',
          price: 9,
          stock: 12
        },
        {
          id: 24,
          name: 'Womens Walking Shoes Sock Sneakers - Mesh Slip On Air Cushion Lady Girls Modern Jazz Dance Easy Shoes Platform Loafers',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61Nh8BmRvoL._AC_UL200_SR200,200_.jpg',
          price: 23,
          stock: 12
        },
        {
          id: 25,
          name: 'Brooks Womens Ghost 11 Running Shoe',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91LymcrH2qL._AC_UL200_SR200,200_.jpg',
          price: 53,
          stock: 12
        },
        {
          id: 26,
          name: 'adidas Womens Cloudfoam Pure Running Shoe',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71hXy-Dy6jL._AC_UL200_SR200,200_.jpg',
          price: 36,
          stock: 12
        },
        {
          id: 27,
          name: 'Womens Water Shoes Barefoot Quick-Dry Aqua Socks for Beach Swim Surf Yoga Exercise',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61pnXmIhBvL._AC_UL200_SR200,200_.jpg',
          price: 10,
          stock: 12
        },
        {
          id: 28,
          name: 'Crocs Womens Classic Lined Clog | Indoor and Outdoor Fuzzy Slipper',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51GgOW7jgxL._AC_UL200_SR200,200_.jpg',
          price: 30,
          stock: 12
        },
        {
          id: 29,
          name: 'ULTRAIDEAS Womens Cozy Memory Foam Slippers Fuzzy Wool-Like Plush Fleece Lined House Shoes w/Indoor, Outdoor Anti-Skid Rubber Sole',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71ZCl6xZ7bL._AC_UL200_SR200,200_.jpg',
          price: 20,
          stock: 12
        },
      ]
    },
    mens: {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Vans black & white old skool trainers',
          imageUrl: 'https://d2ob0iztsaxy5v.cloudfront.net/product/340051/3400517270_main.jpg',
          price: 60,
          stock: 12
        },
        {
          id: 31,
          name: 'Nike Air Force 1 07',
          imageUrl: 'https://d2ob0iztsaxy5v.cloudfront.net/product/340964/3409647020_main.jpg',
          price: 80,
          stock: 12
        },
        {
          id: 32,
          name: 'Adidas Gazelle',
          imageUrl: 'https://d2ob0iztsaxy5v.cloudfront.net/product/340569/3405697050_main.jpg',
          price: 70,
          stock: 12
        },
        {
          id: 33,
          name: 'Converse All Star Hi Top',
          imageUrl: 'https://d2ob0iztsaxy5v.cloudfront.net/product/340140/3401407070_main.jpg',
          price: 55,
          stock: 12
        },
        {
          id: 34,
          name: 'Nike Air Force 1 07',
          imageUrl: 'https://d2ob0iztsaxy5v.cloudfront.net/product/340964/3409641020_main.jpg',
          price: 80,
          stock: 12
        },
        {
          id: 35,
          name: 'Dr Martens Combs Tech',
          imageUrl: 'https://d2ob0iztsaxy5v.cloudfront.net/product/322122/3221227060_main.jpg',
          price: 99,
          stock: 12
        },
      ]
    }
};
  
  export default SHOP_DATA;