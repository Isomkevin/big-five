import React from 'react';

const parks = [
  {
    name: 'Serengeti National Park',
    location: 'Tanzania',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661843615544-b2c973491c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VyZW5nZXRpJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww',
    animals: ['Lions', 'Elephants', 'Zebras', 'Giraffes'],
    bestTimeToVisit: 'June to October',
    activities: ['Game drives', 'Hot air ballooning', 'Bird watching'],
  },
  {
    name: 'Maasai Mara National Reserve',
    location: 'Kenya',
    imageUrl:
      'https://images.unsplash.com/photo-1517384161621-5773b87f4cd4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    animals: ['Wildebeest', 'Lions', 'Cheetahs', 'Elephants'],
    bestTimeToVisit: 'July to October',
    activities: ['Game drives', 'Cultural visits', 'Walking safaris'],
  },
  {
    name: 'Amboseli National Park',
    location: 'Kenya',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661811791855-532fdea19159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW1ib3NlbGklMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDA%3D',
    animals: ['Elephants', 'Lions', 'Buffalo', 'Leopards'],
    bestTimeToVisit: 'June to October',
    activities: ['Game drives', 'Bird watching', 'Photography'],
  },
  {
    name: 'Bwindi Impenetrable National Park',
    location: 'Uganda',
    imageUrl:
      'https://th.bing.com/th/id/OIP.dgzME0Ra3qn57rCaw8gJMwHaEK?rs=1&pid=ImgDetMain',
    animals: ['Mountain Gorillas', 'Chimpanzees', 'Elephants', 'Birds'],
    bestTimeToVisit: 'June to August and December to February',
    activities: ['Gorilla trekking', 'Bird watching', 'Nature walks'],
  },
  {
    name: 'Ngorongoro Conservation Area',
    location: 'Tanzania',
    imageUrl:
      'https://th.bing.com/th/id/OIP.wapPkB9bFb5Jts6Feq90jgHaE8?rs=1&pid=ImgDetMain',
    animals: ['Lions', 'Rhinos', 'Elephants', 'Leopards'],
    bestTimeToVisit: 'June to October',
    activities: ['Game drives', 'Cultural visits', 'Hiking'],
  },
  {
    name: 'Queen Elizabeth National Park',
    location: 'Uganda',
    imageUrl:
      'https://th.bing.com/th/id/OIP.ZL4KB1aPUpC-5pTgI0ZPywAAAA?rs=1&pid=ImgDetMain',
    animals: ['Lions', 'Hippos', 'Elephants', 'Crocodiles'],
    bestTimeToVisit: 'January to February and June to July',
    activities: ['Game drives', 'Boat cruises', 'Bird watching'],
  },
  {
    name: 'Kruger National Park',
    location: 'South Africa',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661899198211-2ae89411f5a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S3J1Z2VyJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww',
    animals: ['Lions', 'Elephants', 'Leopards', 'Buffalo'],
    bestTimeToVisit: 'May to September',
    activities: ['Game drives', 'Guided walks', 'Bird watching'],
  },
  {
    name: 'Etosha National Park',
    location: 'Namibia',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1669749086758-6c11dab7947e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXRvc2hhJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww', 
    altImageUrl:
      'https://plus.unsplash.com/premium_photo-1669749086758-6c11dab7947e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    animals: ['Lions', 'Elephants', 'Rhinos', 'Giraffes'],
    bestTimeToVisit: 'May to October',
    activities: ['Game drives', 'Photography', 'Camping'],
  },
  {
    name: 'Chobe National Park',
    location: 'Botswana',
    imageUrl:
      'https://images.unsplash.com/photo-1600186571294-ec3c6f3d29e9?q=80&w=1080&auto=format&fit=crop', 
    altImageUrl: 
      'https://th.bing.com/th/id/R.f98b18324351ac14f0a8cffa72f80d72?rik=gHZY%2f%2biEpLpO8g&pid=ImgRaw&r=0',
    animals: ['Elephants', 'Lions', 'Buffalo', 'Hippos'],
    bestTimeToVisit: 'May to October',
    activities: ['Game drives', 'Boat safaris', 'Bird watching'],
  },
  {
    name: 'Hwange National Park',
    location: 'Zimbabwe',
    imageUrl:
      'https://th.bing.com/th/id/OIP.MUjbUnY5B7XCc92dOdt-ggHaEG?rs=1&pid=ImgDetMain',
    animals: ['Lions', 'Elephants', 'Rhinos', 'Cheetahs'],
    bestTimeToVisit: 'August to October',
    activities: ['Game drives', 'Walking safaris', 'Bird watching'],
  },
  {
    name: 'Kidepo Valley National Park',
    location: 'Uganda',
    imageUrl:
      'https://th.bing.com/th/id/R.e5105e91bf1cb5c5a8d4934d45efdd58?rik=vQbvzJ9w1o65sQ&pid=ImgRaw&r=0',
    animals: ['Lions', 'Elephants', 'Buffalo', 'Giraffes'],
    bestTimeToVisit: 'September to March',
    activities: ['Game drives', 'Hiking', 'Cultural visits'],
  },
  {
    name: 'Akagera National Park',
    location: 'Rwanda',
    imageUrl:
      'https://www.jacadatravel.com/wp-content/uploads/2019/11/iStock-463143917.jpg',
    animals: ['Lions', 'Elephants', 'Giraffes', 'Hippos'],
    bestTimeToVisit: 'June to September',
    activities: ['Game drives', 'Boat safaris', 'Bird watching'],
  },
  {
    name: 'Addo Elephant National Park',
    location: 'South Africa',
    imageUrl:
      'https://th.bing.com/th/id/R.d456493c3ef56a0d0a95a71e8ad8ecb3?rik=1RThk%2fsG8uiyQQ&riu=http%3a%2f%2fimg.ev.mu%2fimages%2fattractions%2f60%2f960x640%2f8269.jpg&ehk=nPRE%2f2q0beSf09NlGveq5OEydSWJkf0MgWlK%2b49FxwE%3d&risl=&pid=ImgRaw&r=0',
    animals: ['Elephants', 'Lions', 'Buffalo', 'Leopards'],
    bestTimeToVisit: 'April to September',
    activities: ['Game drives', 'Hiking', 'Bird watching'],
  },
  {
    name: 'Tarangire National Park',
    location: 'Tanzania',
    imageUrl:
      'https://th.bing.com/th/id/R.7cd61afa966360ac290922e8d848337d?rik=cQe%2fEZcsO%2fDxdg&pid=ImgRaw&r=0',
    animals: ['Elephants', 'Lions', 'Zebras', 'Giraffes'],
    bestTimeToVisit: 'June to October',
    activities: ['Game drives', 'Walking safaris', 'Bird watching'],
  },
  {
    name: 'South Luangwa National Park',
    location: 'Zambia',
    imageUrl:
      'https://th.bing.com/th/id/OIP.B4KpSUMKACBb9jB05GGDxgHaE8?rs=1&pid=ImgDetMain',
    animals: ['Lions', 'Leopards', 'Elephants', 'Hippos'],
    bestTimeToVisit: 'May to October',
    activities: ['Game drives', 'Walking safaris', 'Bird watching'],
  },
  {
    name: 'Selous Game Reserve',
    location: 'Tanzania',
    imageUrl:
      'https://th.bing.com/th/id/R.5c13eadd691cff9f564ecc41e3ef1173?rik=%2fT4Hi1o2ZRnh3A&pid=ImgRaw&r=0',
    animals: ['Lions', 'Elephants', 'Giraffes', 'Hippos'],
    bestTimeToVisit: 'June to October',
    activities: ['Game drives', 'Boat safaris', 'Walking safaris'],
  },
  {
    name: 'Murchison Falls National Park',
    location: 'Uganda',
    imageUrl:
      'https://th.bing.com/th/id/OIP.Sn180w1DdjlkGhJvdujAZQHaFS?pid=ImgDet&w=474&h=338&rs=1',
    animals: ['Lions', 'Elephants', 'Hippos', 'Crocodiles'],
    bestTimeToVisit: 'December to February and June to September',
    activities: ['Game drives', 'Boat cruises', 'Hiking'],
  },
  {
    name: 'Tsavo National Park',
    location: 'Kenya',
    imageUrl:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1080&auto=format&fit=crop',
    animals: ['Elephants', 'Lions', 'Giraffes', 'Hippos'],
    bestTimeToVisit: 'June to October',
    activities: ['Game drives', 'Bird watching', 'Hiking'],
  },
  {
    name: 'Ranthambore National Park',
    location: 'India',
    imageUrl:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1080&auto=format&fit=crop',
    animals: ['Tigers', 'Leopards', 'Sloth Bears', 'Deer'],
    bestTimeToVisit: 'October to June',
    activities: ['Game drives', 'Bird watching', 'Photography'],
  },
  {
    name: 'Bandhavgarh National Park',
    location: 'India',
    imageUrl:
      'https://images.unsplash.com/photo-1582719478146-5c2b47645b99?q=80&w=1080&auto=format&fit=crop',
    animals: ['Tigers', 'Leopards', 'Deer', 'Birds'],
    bestTimeToVisit: 'October to June',
    activities: ['Game drives', 'Bird watching', 'Photography'],
  },
  {
    name: 'Yala National Park',
    location: 'Sri Lanka',
    imageUrl:
      'https://images.unsplash.com/photo-1576581179075-1e99c88d09c5?q=80&w=1080&auto=format&fit=crop',
    animals: ['Leopards', 'Elephants', 'Crocodiles', 'Birds'],
    bestTimeToVisit: 'February to June',
    activities: ['Game drives', 'Bird watching', 'Photography'],
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
