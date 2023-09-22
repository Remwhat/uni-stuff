import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
import './style.css';

export function getHotelsData() {
  return hotelsData;
}

export function getHotel(hotelID) {
  return hotelsData.find((hotel) => hotelID == hotelID);
}

const hotelsData = [
  {
    hotelID: 1,
    name: 'Palm Springs',
    location: 'Mallorca',
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/370564672.jpg?k=4f37af06c05a6f5dfc7db5e8e71d2eb66cae6eec36af7a4a4cd7a25d65ceb941&o=&hp=1',
    description: 'Vackert hotell vid havets front i underbara Mallorca',
    price: 1300,
    category: 'Spain',
  },
  {
    hotelID: 2,
    name: 'Palm Springs',
    location: 'Mallorca',
    image:
      'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg',
    description: 'Vackert hotell vid havets front i underbara Mallorca',
    price: 950,
    category: 'Spain',
  },
  {
    hotelID: 3,
    name: 'Palm Springs',
    location: 'Mallorca',
    image:
      'https://www.maybourne.com/siteassets/exquisite-hotels/exquisite-hotels-mbh-pool-1920-720.jpg',
    description: 'Vackert hotell vid havets front i underbara Mallorca',
    price: 1780,
    category: 'Italy',
  },
  {
    hotelID: 4,
    name: 'Palm Springs',
    location: 'Mallorca',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/1e/e3/50/jw-marriott-hotel-mumbai.jpg?w=1200&h=-1&s=1',
    description: 'Vackert hotell vid havets front i underbara Mallorca',
    price: 900,
    category: 'Italy',
  },
  {
    hotelID: 5,
    name: 'Palm Springs',
    location: 'Mallorca',
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/22443294.jpg?k=fc9d8a13beb15e92eb0479d21af7e66ae55f8da78f5b45b1b63a2937a52fb3d0&o=&hp=1',
    description: 'Vackert hotell vid havets front i underbara Mallorca',
    price: 700,
    category: 'Italy',
  },
];
