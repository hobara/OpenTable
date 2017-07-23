export const CreateRestaurant = (restaurant) => (
  $.ajax({
    method: 'POST',
    url: '/api/restaurants',
    data: restaurant
  })
);

export const fetchAllRestaurant = (cityId) => (
  $.ajax({
    method: 'GET',
    url: '/api/restaurants',
    data: {cityId}
  })
);

export const fetchSingleRestaurant = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/restaurants/${id}`
  })
);

export const updateRestaurant = (restaurant) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/restaurants/${restaurant.id}`,
    data: restaurant
  });
};

export const deleteRestaurant = (id) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/restaurants/${id}`
  });
};
