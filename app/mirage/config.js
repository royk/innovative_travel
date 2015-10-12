export default function() {
  this.get('/api/hotels', ()=> {
    return {
      hotels: [
        {
          "name": "Hotel Espresso Amsterdam",
          "id": "hotel:Hotel_Espresso_Ams",
          "hotelCount": "1",
          "type": "hotel",
          "subtype": "hotel"
        },
        {
          "name": "Hotel Buena Vista",
          "id": "hotel:Hotel_Buena_Vista",
          "hotelCount": "1",
          "type": "hotel",
          "subtype": "hotel"
        },
        {
          "name": "Amsterdam",
          "id": "place:Amsterdam",
          "hotelCount": "329",
          "type": "place",
          "subtype": "city"
        },
        {
          "name": "Amsterdam Schiphol Airport (AMS)",
          "id": "place:Amsterdam_Schiphol",
          "hotelCount": "15",
          "type": "place",
          "subtype": "airport"
        }
      ]
    };
  });
}
