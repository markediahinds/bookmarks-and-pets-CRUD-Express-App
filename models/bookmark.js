module.exports = [
    {
      name: "MDN",
      url: "https://developer.mozilla.org/en-US/",
      isFavorite: true,
      category: "educational",
    },
    {
      name: "Apartment Therapy",
      url: "https://www.apartmenttherapy.com",
      isFavorite: true,
      category: "inspirational",
    },
    {
      name: "DMV",
      url: "https://dmv.ny.gov",
      isFavorite: false,
      category: "adulting",
    },
  ]; 

  // What happens when we forget to export?
  // In our server, app is not definded/not a function; file couldn't recognize it because it wasn't exported from its file