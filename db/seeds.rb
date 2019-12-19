100.times do
    Product = Product.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price.to_f,

    )
    5.times do
    Product.review.create(
        title: Faker::TvShows::Seinfeld.character,
        body: Faker::TvShows::Seinfeld.quote
        )
  end
end
  
  puts "100 Products Seeded"
  