const initialState = {
  attractions: {
    list: [
        {
        id: 1,
        title: 'Washington Square',
        description: `Washington Square is a park in the North Beach district of San Francisco, California, and is one of the city’s first parks, established in 1847.
                      It is bordered by sidewalk cafes and restaurants such as Mama's (restaurant) and the Liguria Bakery as well as the Sts. Peter and Paul Church.
                      The Square is a natural community gathering place with a long history. Festivals, free movie nights and other special events are hosted there throughout the year.`,
        rating: 4,
        address: 'Filbert St & Stockton St., San Francisco, CA 94133, USA',
        location: {
          lat: 37.8008515,
          lng: -122.4121678
        },
        image: 'http://sfrecpark.org/wp-content/uploads/washington-square-586x286.jpg',
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
        title: 'The Embarcadero Waterfront',
        description: `The Embarcadero is the eastern waterfront and roadway of the Port of San Francisco, San Francisco, California, along San Francisco Bay.
                      It was constructed on reclaimed land along a three mile long[2] engineered seawall, from which piers extend into the bay.
                      It derives its name from the Spanish verb embarcar, meaning "to embark"; embarcadero itself means "the place to embark".
                      The Central Embarcadero Piers Historic District was added to the National Register of Historic Places on November 20, 2002`,
        rating: 3,
        address: 'Pier 7 The Embarcadero, San Francisco, CA 94111, Embarcadero, SoMa, South Beach',
        location: {
          lat: 37.7993643,
          lng: -122.3995737
        },
        image: 'http://stockarch.com/files/12/06/san_francisco_waterfront.jpg',
        reviews: []
      },
      {
        id: 3,
        title: 'Civic Center',
        description: `The Civic Center in San Francisco, California, is an area of a few blocks north of the intersection of Market Street and Van Ness Avenue that contains many of the city's largest government and cultural institutions.
                      It has two large plazas (Civic Center Plaza and United Nations Plaza) and a number of buildings in classical architectural style. The Bill Graham Civic Auditorium (formerly the Exposition Auditorium),
                      [5] the United Nations Charter was signed in the War Memorial Veterans Building's Herbst Theatre in 1945, leading to the creation of the United Nations. It is also where the 1951 Treaty of San Francisco
                      (the peace treaty that officially ended the Pacific War with the Empire of Japan, which had surrendered in 1945) was signed. The San Francisco Civic Center was designated a National Historic Landmark in 1987[6] and
                      listed in the National Register of Historic Places on October 10, 1978.[4]`,
        rating: 4,
        address: 'Off Of Van Ness, San Francisco, CA 94118',
        location: {
          lat: 37.7778616,
          lng: -122.4222351
        },
        image: 'http://farm3.static.flickr.com/2579/3952254348_08f832a931.jpg',
        reviews: []
      },
      {
        id: 4,
        title: 'Union Square',
        description: `Union Square is a 2.6-acre (1.1 ha) public plaza bordered by Geary, Powell, Post and Stockton Streets in downtown San Francisco, California.
                      "Union Square" also refers to the central shopping, hotel, and theater district that surrounds the plaza for several blocks.
                      The area got its name because it was once used for rallies and support for the Union Army during the American Civil War,[2] earning its designation as a California Historical Landmark.
                      [1] Today, this one-block plaza and surrounding area is one of the largest collections of department stores, upscale boutiques, gift shops, art galleries, and beauty salons in the United States,
                      making Union Square a major tourist destination, a vital, cosmopolitan gathering place in downtown San Francisco, and one of the world's premier shopping districts.
                      [citation needed] Grand hotels and small inns, as well as repertory, off-Broadway, and single-act theaters also contribute to the area's dynamic, 24-hour character.`,
        rating: 1,
        address: '333 Post St, San Francisco, CA 94108, USA',
        location: {
          lat: 37.7879426,
          lng: -122.4096943
        },
        image: 'http://dguides.com/images/sanfrancisco/shopping/union-square.jpg',
        reviews: []
      },
      {
        id: 5,
        title: 'Chinatown',
        description: `The Chinatown centered on Grant Avenue and Stockton Street in San Francisco, California, (Chinese: 唐人街; pinyin: tángrénjiē; Jyutping: tong4 jan4 gaai1) is the oldest Chinatown in North America and the largest Chinese community outside Asia.
                      It is the oldest of the four notable Chinatowns in the city.[4][5][6][7][8][9][10] Since its establishment in 1848,[11] it has been highly important and influential in the history and culture of ethnic Chinese immigrants in North America.
                      Chinatown is an enclave that continues to retain its own customs, languages, places of worship, social clubs, and identity. There are two hospitals, numerous parks and squares, a post office, and other infrastructure.
                      While recent immigrants and the elderly choose to live in here because of the availability of affordable housing and their familiarity with the culture,[12] the place is also a major tourist attraction, drawing more visitors annually than the Golden Gate Bridge.[13]`,
        rating: 1,
        address: 'Grant Avenue, San Francisco, CA 94108',
        location: {
          lat: 37.7921052,
          lng: -122.4080749
        },
        image: 'http://yourbigtour.com/wp-content/uploads/2014/12/bt013-Chinatown-San-Francisco.jpg',
        reviews: []
      },
      {
        id: 6,
        title: 'Golden Gate Park',
        description: `Golden Gate Park, located in San Francisco, California, United States, is a large urban park consisting of 1,017 acres (412 ha) of public grounds. It is administered by the San Francisco Recreation & Parks Department, which began in 1871 to oversee the development of Golden Gate Park.
                      Configured as a rectangle, it is similar in shape but 20 percent larger than Central Park in New York, to which it is often compared. It is over three miles (4.8 km) long east to west, and about half a mile (0.8 km) north to south.[3] With 13 million visitors annually,
                      Golden Gate is the fifth most-visited city park in the United States after Central Park in New York City, Lincoln Park in Chicago, and Balboa and Mission Bay Parks in San Diego.[1]`,
        rating: 1,
        address: '501 Stanyan St, San Francisco, CA 94117-1898',
        location: {
          lat: 37.769425,
          lng: -122.4884025
        },
        image: 'http://californiahwc.altervista.org/slider/images/Golgen_Gate_Park_San_Francisco/img2L.jpg',
        reviews: []
      },
      {
        id: 7,
        title: 'Alamo Square',
        description: `Alamo Square is a residential neighborhood and park in San Francisco, California, in the Western Addition. Its boundaries are not well-defined, but are generally considered to be Webster Street on the east, Golden Gate Avenue on the north, Divisadero Street on the west, and Fell Street on the south.
                      Alamo Square Park, the neighborhood's focal point and namesake, consists of four city blocks at the top of a hill overlooking much of downtown San Francisco, with a number of large and architecturally distinctive mansions along the perimeter, including the "Painted Ladies", a well-known postcard motif.
                      The park is bordered by Hayes Street to the south, Steiner Street to the east, Fulton Street to the north, and Scott Street to the west. Named after the lone cottonwood tree ("alamo" in Spanish), Alamo Hill, was a watering hole on the horseback trail from Mission Dolores to the Presidio in the 1800s.
                      In 1856, Mayor James Van Ness created a 12.7 acre park surrounding the watering hole, creating "Alamo Square".[4]`,
        rating: 1,
        address: 'Steiner St Hayes St, San Francisco, CA 94115',
        location: {
          lat: 37.7777489,
          lng: -122.4355421
        },
        image: 'https://sfbay.ca/home/wp-content/uploads/2013/08/alamo.jpg',
        reviews: []
      },
      {
        id: 8,
        title: 'Palace of Fine Arts',
        description: `The Palace of Fine Arts in the Marina District of San Francisco, California, is a monumental structure originally constructed for the 1915 Panama-Pacific Exposition in order to exhibit works of art presented there. One of only a few surviving structures from the Exposition, it is still situated on its original site.
                      It was rebuilt in 1965, and renovation of the lagoon, walkways, and a seismic retrofit were completed in early 2009.
                      In addition to hosting art exhibitions, it remains a popular attraction for tourists and locals and is a favorite location for weddings and wedding party photographs for couples throughout the San Francisco Bay Area and such an icon that a miniature replica of it was built in Disney's California Adventure in Anaheim.[3]`,
        rating: 1,
        address: '3301 Lyon St, San Francisco, CA 94123, USA',
        location: {
          lat: 37.8020687,
          lng: -122.4509549
        },
        image: 'https://p931z2nb6eo1jytzj2ufrzyoiz-wpengine.netdna-ssl.com/arts/wp-content/uploads/sites/2/2015/11/Palace_of_Fine_Artsatnight.jpg',
        reviews: []
      }
    ],
    nextReviewId: 3,
  },
  tours: {
    list: [
      {
        id: 1,
        title: 'The first tour',
        description: 'This is the first tour',
        image: 'http://www.lessons4living.com/images/penclchk.gif',
        attractions: [1, 2],
      },
      {
        id: 2,
        title: 'The secoud tour',
        description: 'This is the second tour',
        image: 'http://www.lessons4living.com/images/penclchk.gif',
        attractions: [1, 3, 4],
      },
      {
        id: 3,
        title: 'The secoud tour',
        description: 'This is the second tour',
        image: 'http://www.lessons4living.com/images/penclchk.gif',
        attractions: [5, 6, 7, 8],
      }
    ]
  },
  filters: {
    category: {
      value: 'attractions',
    },
  }
}

export default initialState;
