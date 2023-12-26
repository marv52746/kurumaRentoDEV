const cars = [
    {
      _id : 1,
      name : "Mercedes Benz",
      imageUrl : require('../../assets/images/mercedes.jpg'),
      // imageUrl : require('assets:/mercedes.jpg'),
      imageName : 'mercedes.jpg',
    },
    {
      _id : 2,
      name : "Audi Benz - 2022 CLS Coupe",
      imageUrl : require('../../assets/images/audi-benz.jpg'),
      imageName : 'audi-benz.jpg',
    },
    {
      _id : 3,
      name : "Mercedes Benz",
      imageUrl : require('../../assets/images/mercedes.jpg'),
      imageName : 'mercedes.jpg',
    },
    {
      _id : 4,
      name : "Audi Benz - 2022 CLS Coupe",
      imageUrl : require('../../assets/images/audi-benz.jpg'),
      imageName : 'audi-benz.jpg',
    },
]

const carLogo = [
    {
      _id : 1,
      name : "BMW",
      imageUrl : require('../../assets/images/bmw-logo.png'),
    },
    {
      _id : 2,
      name : "Audi",
      imageUrl : require('../../assets/images/audi-logo.png'),
    },
    {
      _id : 3,
      name : "Mitsubishi",
      imageUrl : require('../../assets/images/mitsubishi-logo.png'),
    },
    {
      _id : 4,
      name : "BMW",
      imageUrl : require('../../assets/images/bmw-logo.png'),
    },
    {
      _id : 5,
      name : "Audi",
      imageUrl : require('../../assets/images/audi-logo.png'),
    },
    {
      _id : 6,
      name : "Mitsubishi",
      imageUrl : require('../../assets/images/mitsubishi-logo.png'),
    },
]
const specifications = [
  {
      key : "Transmission",
      value : "Automatic"
  },
  {
      key : "Seats",
      value : "4 Seats"
  },
  {
      key : "Air Condition",
      value : "Climate Control"
  },
  {
      key : "Fuel Type",
      value : "Petrol"
  },
]

export {cars, carLogo, specifications}