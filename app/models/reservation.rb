class Reservation < ApplicationRecord
  validates :user_id, :restaurant_id, presence: true

  belongs_to :user,
   primary_key: :id,
   foreign_key: :user_id,
   class_name: :User

  belongs_to :restaurant,
    primary_key: :id,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

  has_one :review,
    primary_key: :id,
    foreign_key: :reservation_id,
    class_name: :Review

end
