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
    <ul role="list" className="divide-y divide-gray-100">
      {parks.map((park) => (
        <li
          key={park.name}
          className="flex flex-col sm:flex-row justify-between gap-x-6 py-5"
        >
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={park.imageUrl}
              alt={park.name}
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {park.name}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                {park.location}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                {park.animals.join(', ')}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
