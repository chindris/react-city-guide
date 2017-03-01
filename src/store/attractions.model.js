const attractions = [
  {
    id: 1,
    title: 'Location 1',
    description: 'Some description for the location 1',
    rating: 4,
    address: 'Address of location 1',
    location: {
      lat: 47.321,
      lng: 49.342
    },
    image: 'https://lh4.ggpht.com/wKrDLLmmxjfRG2-E-k5L5BUuHWpCOe4lWRF7oVs1Gzdn5e5yvr8fj-ORTlBF43U47yI=w300',
    reviews: [
      {
        id: 1,
        rating: 3,
        text: 'This is a medium place'
      }
    ]
  },
  {
    id: 2,
    title: 'Location 2',
    description: 'Some description for the location 2',
    rating: 4,
    address: 'Address of location 2',
    location: {
      lat: 37.321,
      lng: 79.342
    },
    image: 'http://www.lessons4living.com/images/penclchk.gif',
    reviews: []
  }
];

export default attractions;