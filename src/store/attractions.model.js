const initialState = {
  attractions: {
    list: [
        {
        id: 1,
        title: 'Location 1',
        description: 'Some description for the location 1',
        rating: 4,
        address: 'Address of location 1',
        location: {
          lat: 37.778519,
          lng: -122.405640
        },
        image: 'https://lh4.ggpht.com/wKrDLLmmxjfRG2-E-k5L5BUuHWpCOe4lWRF7oVs1Gzdn5e5yvr8fj-ORTlBF43U47yI=w300',
        reviews: [
          {
            id: 1,
            rating: 3,
            text: 'This is a medium place'
          },
          {
            id: 2,
            rating: 5,
            text: 'This is just awesome'
          }
        ]
      },
      {
        id: 2,
        title: 'Location 2',
        description: 'Some description for the location 2',
        rating: 3,
        address: 'Address of location 2',
        location: {
          lat: 37.759703,
          lng: -122.428093
        },
        image: 'http://www.lessons4living.com/images/penclchk.gif',
        reviews: []
      }
    ],
    nextReviewId: 3,
  }
}

export default initialState;