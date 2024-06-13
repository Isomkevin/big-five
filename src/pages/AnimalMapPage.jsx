// pages/AnimalMapPage.js
import { Box } from '@chakra-ui/react';
import AnimalMap from '../components/MapViewerComponent2';


const markerData = [
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

const AnimalMapPage = () => (
  <Box>
    <AnimalMap markerData={markerData} />
  </Box>
);

export default AnimalMapPage;
