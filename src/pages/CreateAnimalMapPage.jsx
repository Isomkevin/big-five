// pages/AnimalMapPage.js
import { Box } from '@chakra-ui/react';
import AnimalMap from '../components/MapCreatorComponent';


const testMarkerData = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello Kevin, I am pop up 1",
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello kevin, I am pop up 2",
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello kevin, I am pop up 3",
  },
];


const markerData = [
  {
    geocode: [-1.4061, 35.0045],
    popUp: "Maasai Mara National Reserve: Famous for the Great Migration and diverse wildlife.",
  },
  {
    geocode: [-1.3818633251447625, 36.863318956463544],
    popUp: "Nairobi National Park: The only national park within a capital city, home to lions, giraffes, and rhinos.",
  },
  {
    geocode: [-3.3614, 38.0017],
    popUp: "Tsavo East National Park: Known for large herds of elephants and the Yatta Plateau.",
  },
  {
    geocode: [-0.4797, 37.8988],
    popUp: "Mount Kenya National Park: A UNESCO World Heritage Site with diverse ecosystems and wildlife.",
  },
  {
    geocode: [-0.2986, 36.0723],
    popUp: "Lake Nakuru National Park: Famous for flamingos and rhinos.",
  },
];

const AnimalMapPage = () => (
  <Box>
    <AnimalMap markerData={markerData} />
  </Box>
);

export default AnimalMapPage;
