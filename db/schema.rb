# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170725050142) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string "name", null: false
    t.string "image", null: false
    t.integer "city_id", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "restaurant_id", null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "restaurant_id", null: false
    t.integer "seats", null: false
    t.string "date", null: false
    t.string "time", null: false
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "city_name", null: false
    t.string "state", null: false
    t.integer "zip", null: false
    t.string "about", null: false
    t.string "image1", null: false
    t.string "image2"
    t.string "image3"
    t.integer "city_id", null: false
    t.integer "cuisine", null: false
    t.integer "price", null: false
    t.integer "hours", null: false
    t.integer "rate", null: false
    t.integer "owner_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "restaurant_id", null: false
    t.integer "reservation_id", null: false
    t.integer "rate", null: false
    t.text "comment", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
