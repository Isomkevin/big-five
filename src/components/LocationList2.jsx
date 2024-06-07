import React from 'react';

const parks = [
  {
    name: 'Serengeti National Park',
    location: 'Tanzania',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661843615544-b2c973491c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VyZW5nZXRpJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww',
    animals: ['Lions', 'Elephants', 'Zebras', 'Giraffes'],
  },
  {
    name: 'Maasai Mara National Reserve',
    location: 'Kenya',
    imageUrl:
      'https://images.unsplash.com/photo-1517384161621-5773b87f4cd4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    animals: ['Wildebeest', 'Lions', 'Cheetahs', 'Elephants'],
  },
  {
    name: 'Amboseli National Park',
    location: 'Kenya',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661811791855-532fdea19159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW1ib3NlbGklMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDA%3D',
    animals: ['Elephants', 'Lions', 'Buffalo', 'Leopards'],
  },
  {
    name: 'Bwindi Impenetrable National Park',
    location: 'Uganda',
    imageUrl:
      'https://th.bing.com/th/id/OIP.dgzME0Ra3qn57rCaw8gJMwHaEK?rs=1&pid=ImgDetMain',
    animals: ['Mountain Gorillas', 'Chimpanzees', 'Elephants', 'Birds'],
  },
  {
    name: 'Ngorongoro Conservation Area',
    location: 'Tanzania',
    imageUrl:
      'https://th.bing.com/th/id/OIP.wapPkB9bFb5Jts6Feq90jgHaE8?rs=1&pid=ImgDetMain',
    animals: ['Lions', 'Rhinos', 'Elephants', 'Leopards'],
  },
  {
    name: 'Queen Elizabeth National Park',
    location: 'Uganda',
    imageUrl:
      'https://th.bing.com/th/id/OIP.ZL4KB1aPUpC-5pTgI0ZPywAAAA?rs=1&pid=ImgDetMain',
    animals: ['Lions', 'Hippos', 'Elephants', 'Crocodiles'],
  },
];

export default function TouristVenue() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {parks.map((park) => (
        <div
          key={park.name}
          className="overflow-hidden rounded-lg bg-white shadow-md transition transform hover:scale-105 hover:shadow-lg"
        >
          <img
            className="w-full h-48 object-cover"
            src={park.imageUrl}
            alt={park.name}
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900">{park.name}</h2>
            <p className="mt-2 text-sm text-gray-600">{park.location}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {park.animals.map((animal) => (
                <span
                  key={animal}
                  className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800"
                >
                  {animal}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
