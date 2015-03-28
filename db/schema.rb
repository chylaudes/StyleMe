# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150328002422) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "env_dates", force: :cascade do |t|
    t.string   "location"
    t.integer  "weather_temp"
    t.string   "weather_state"
    t.date     "date"
    t.string   "occasion"
    t.integer  "user_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "outfits", force: :cascade do |t|
    t.integer  "dress"
    t.string   "dress_url"
    t.integer  "top"
    t.string   "top_url"
    t.integer  "bottom"
    t.string   "bottom_url"
    t.integer  "shoe"
    t.string   "shoe_url"
    t.integer  "access_1"
    t.string   "access_1_url"
    t.integer  "access_2"
    t.string   "access_2_url"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

end
