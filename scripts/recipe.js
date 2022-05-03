const recipeData = [
  {
  name: 'Blueberry Strawberry Smoothie',
  dairy: 'true',
  flavor: 'fruity',
  calorieValue: 'high',
  calories: 211,
  image: 'images/Strawberry-Blueberry-Smoothie.png',
  summary: "This strawberry blueberry smoothie recipe is the perfect creamy blend of fruity flavors! It's a healthy snack or breakfast made in minutes",
  preptime: "5 minutes",
  ingredients: ['1/2 cup skim milk', '1/2 cup of blueberries fresh or frozen', '1 cup of strawberries fresh or frozen', '6 ounces of non-fat vanilla yogurt'],
  direction: ['Add milk, blueberries, strawberries and yogurt to a blender', 'Mix until smooth! If you are using fresh fruit, you may need to add ice to thicken it. Enjoy cold.'],
  nutrition: "Strawberries provide fiber, potassium, folate and antioxidants, but they also ccontain several bioactive compounds (called flavonoids) that are known to help protect against chronic diseases." 
  },
  { name: 'Banana Smoothie',
  dairy: 'true',
  flavor: 'fruity',
  calorieValue: 'low',
  calories: 171,
  image: 'images/Banana-Smoothie.png',
  summary: "Smoothies are best eaten immediately. But this banana smoothie actually lasts 1 to 2 days refrigerated, stored in a sealed container or a mason jar with the lid on. It may separate, which is perfectly natural. Just shake it up and you are good to go!",
  preptime: "5 minutes",
  ingredients: ['2 medium ripe bananas', '1 ½ cups ice', '¼ cup Greek yogurt', '1/2 to 3/4 cup milk'],
  direction: ['Place all ingredients in a blender, breaking the banana into pieces (start with ½ cup milk, then increase as necessary)', 'Blend until creamy and frothy, stopping and scraping down the sides as necessary.', "If desired, garnish with banana slice and toasted coconut. Serve immediately or store in a covered jar in the refrigerator for 2 days."],
  nutrition: "One serving, or one medium ripe banana, provides about 110 calories, 0 gram fat, 1 gram protein, 28 grams carbohydrate, 15 grams sugar (naturally occurring), 3 grams fiber, and 450 mg potassium." 
  },
  {
  name: 'Spinach Smoothie',
  dairy: 'true',
  flavor: 'veggie',
  calorieValue: 'low',
  calories: 171,
  image: 'images/Spinach-Smoothie.png',
  summary: "Smoothies are best eaten immediately. But this spinach smoothie actually lasts 1 to 2 days refrigerated, stored in a sealed container or a mason jar with the lid on. It may separate, which is perfectly natural. Just shake it up and you are good to go!",
  preptime: "5 minutes",
  ingredients: ['1 large green apple', '½ cup water', '¼ cup raw cashews (or 1 banana and 1 ½ cups frozen mango or pineapple, skip the maple)', '14 cups baby spinach leaves or chopped spinach, loosely packed', '10 ice cubes', '1 tablespoon pure maple syrup', '1 ½ tablespoons fresh squeezed lemon juice (1/2 lemon)'],
  direction: ['Chop the apple into chunks, leaving the peel on.', 'Place everything in a blender and blend until smooth, stopping and scrapping as necessary.'],
  nutrition: "High in calcium, more than other vegetables; Very high in Vitamin K and Vitamin A; Low in calories (1 cup of raw spinach has 45 calories)" 
  },
  {
  name: 'Peanut Butter Smoothie',
  dairy: 'true',
  flavor: 'fruity',
  calorieValue: 'high',
  calories: 280,
  image: 'images/Peanut-Butter-Smoothie.png',
  summary: "The flavor is best when it is freshly made, but it stores well too. Store it in a sealed container or a mason jar with the lid on. It may separate, which is perfectly natural. Just shake it up and you are good to go! It is nice to make this smoothie in advance so you can have breakfast or a snack on demand.",
  preptime: "5 minutes",
  ingredients: ['3 tablespoons peanut butter', '2 medium ripe bananas', '1 ½ cups ice', '¾ cup milk'],
  direction: ['Place all ingredients in a blender, breaking the banana into pieces.', 'Blend until smooth.'],
  nutrition: "Nutritional benefits of peanut butter. Share on Pinterest Peanut butter is a good source of protein and vitamin B-6. Peanut butter provides a good amount of protein, along with essential vitamins and minerals, such as magnesium, potassium, and zinc." 
  },
  {
  name: 'Mango Smoothie',
  dairy: 'true',
  flavor: 'fruity',
  calorieValue: 'low',
  calories: 197,
  image: 'images/Mango-Smoothie.png',
  summary: "This really is the perfect mango smoothie. In fact, it tastes more like mango ice cream than a healthy drink! This bright yellow puree has the best sweet flavor and the creamiest icy texture.",
  preptime: "5 minutes",
  ingredients: ['3 cups frozen mango (or fresh)', '1/2 banana', '½ cup water', '½ cup milk', '5 ice cubes', '1 tablespoon fresh squeezed lemon juice'],
  direction: ['Add all ingredients to a blender except for 1 cup frozen mango.', 'Blend until smooth.', "Add the final 1 cup frozen mango and blend again until smooth."],
  nutrition: "Mangoes are a nutritious tropical fruit that are low in calories, a good source of vitamin A and fiber, and an excellent source of vitamin C." 
  },
  {
  name: 'Watermelon Smoothie',
  dairy: 'false',
  flavor: 'fruity',
  calorieValue: 'low',
  calories: 166,
  image: 'images/Watermelon-Smoothie.png',
  summary: "This watermelon drink has no refined sugar and is a totally naturally sweet treat! Alex and I served it to our son Larson as a “treat” at the end of a meal: it is a great healthy dessert for kids — and adults, really! If you’d like to make it taste more decadent, you could add a little more sweetener: like a drizzle of maple syrup or honey.",
  preptime: "5 minutes",
  ingredients: ['3 cups cubed watermelon', '10 ounces (2 heaping cups) frozen strawberries', '1 banana, either frozen in slices or at room temperature'],
  direction: ['Chop the watermelon.', 'Place all ingredients in a blender, and blend until smooth and creamy.', "Serve immediately."],
  nutrition: "Watermelon is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit worldwide, with more than 1,000 varieties." 
  },
  {
  name: 'Matcha Smoothie',
  dairy: 'true',
  flavor: 'fruity',
  calorieValue: 'high',
  calories: 224,
  image: 'images/Matcha-Smoothie.png',
  summary: "Matcha is a fine powder made of ground green tea leaves that originated in East Asia. It is consumed as part of traditional Japanese tea ceremonies, and plays an integral part in Japanese culture. Matcha tastes grassy and earthy. This matcha smoothie pairs sweet fruity flavors with the bitter, grassy flavor of green tea.",
  preptime: "5 minutes",
  ingredients: ['1 ½ cups frozen pineapple', '1 ripe banana', '1 tablespoon matcha green tea powder', '1 teaspoon vanilla extract', '¼ cup Greek yogurt', '½ cup milk', '½ cup ice', '1 tablespoon maple syrup or honey'],
  direction: ['Place all ingredients in a blender, breaking the banana into pieces.', 'If desired you can blend without sweetener first and taste before adding.', 'Blend until creamy and frothy, stopping and scraping down the sides as necessary and adding a splash more milk if necessary.', 'Serve immediately, or store up to 1 day refrigerated (the bitter flavor comes out more as it sits, so you may need to adjust with sweetener after storing).'],
  nutrition: "Watermelon is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit worldwide, with more than 1,000 varieties." 
  },
  {
  name: 'Peach Mango Smoothie',
  dairy: 'true',
  flavor: 'fruity',
  calorieValue: 'high',
  calories: 292,
  image: 'images/Peach-Mango-Smoothie.png',
  summary: "Peaches and mangos are two of our favorite fruits to use in smoothie recipes: their sweet tart flavor is ideal for sipping. So put them together, and it is fireworks. Try this Peach Mango Smoothie! It tastes like sunshine, with a beautifully bright flavor and creamy, thick texture.",
  preptime: "5 minutes",
  ingredients: ['1 cup frozen peach slices', '1 cup frozen mango chunks', '1 banana', '¼ cup Greek yogurt', '½ cup 100% orange juice (unsweetened)', '¼ cup milk', '6 ice cubes', '½ teaspoon vanilla extract'],
  direction: ['Place all ingredients in a blender, breaking the banana into pieces.', 'Blend until creamy and frothy, stopping and scraping down the sides as necessary.', 'If desired, garnish with a frozen peach.', 'Serve immediately or store in a covered jar in the refrigerator for 2 days.'],
  nutrition: "It provides 6% of your daily vitamin A needs and 15% of daily vitamin C needs. One medium peach also contains 2% or more daily value of vitamins E and K, niacin, folate, iron, choline, potassium, magnesium, phosphorus, manganese, zinc and copper." 
  },
  {
  name: 'Pomegranate Smoothie',
  dairy: 'true',
  flavor: 'fruity',
  calorieValue: 'high',
  calories: 225,
  image: 'images/Pomegranate-Smoothie.png',
  summary: "Try this perfect Pomegranate Smoothie! This delicious pink drink is bursting with fruity flavor and one of our favorite ways to use pomegranate seeds (except eating them by the handful, of course!). It pairs the jewel-toned seeds with frozen pineapple and banana to make a creamy puree that is full of nutrients and vitamins. Throw in a little Greek yogurt for protein and you have got a smoothie that is filling and irresistibly good.",
  preptime: "5 minutes",
  ingredients: ['1 cup pomegranate seeds (cut and seed 1 pomegranate or buy 5 ounces seeds)', '1 cup frozen pineapple', '1 banana', '1 cup ice', '⅓ cup Greek yogurt', '½ tablespoon maple syrup'],
  direction: ['Place the pomegranate seeds in the blender and blend for a few seconds until mostly liquified.', 'Add the remaining ingredients in a blender, breaking the banana into pieces.', 'Blend until creamy and frothy, stopping and scraping down the sides as necessary.', 'Eat immediately or store 1 day in a sealed jar; if it separates, shake to re-integrate it.'],
  nutrition: "There are lots of inflated claims around pomegranate nutrition. In fact, a popular pomegranate products company was hit with an FTC complaint around false advertising about reducing the risk of cancer and heart disease. That said, pomegranates are a very healthy fruit that is part of a healthy diet!" 
  },
  {
  name: 'Dragon Fruit Smoothie',
  dairy: 'true',
  flavor: 'fruity',
  calorieValue: 'high',
  calories: 215,
  image: 'images/Dragon-Fruit-Smoothie.png',
  summary: "You have heard, eat the rainbow: here is a recipe that delivers the best pink puree around. Try this Dragon Fruit Smoothie! Dragon fruit is a delicious tropical fruit that is become extremely popular for smoothies and smoothie bowls. Because who could resist that lovely shade of fuchsia! Pair this tropical fruit is with banana, mango and pineapple for a vibrant puree that is sweet tart and pure delicious.",
  preptime: "5 minutes",
  ingredients: ['1 cup pomegranate seeds (cut and seed 1 pomegranate or buy 5 ounces seeds)', '1 cup frozen pineapple', '1 banana', '1 cup ice', '⅓ cup Greek yogurt', '½ tablespoon maple syrup'],
  direction: ['Place the pomegranate seeds in the blender and blend for a few seconds until mostly liquified.', 'Add the remaining ingredients in a blender, breaking the banana into pieces.', 'Blend until creamy and frothy, stopping and scraping down the sides as necessary.', 'Eat immediately or store 1 day in a sealed jar; if it separates, shake to re-integrate it.'],
  nutrition: "Dragon fruit is high in vitamin C and other antioxidants, which are good for your immune system. It can boost your iron levels. Iron is important for moving oxygen through your body and giving you energy, and dragon fruit has iron. And the vitamin C in dragon fruit helps your body take in and use the iron" 
  },
  {
  name: 'Orange Smoothie',
  dairy: 'true',
  flavor: 'fruity',
  calorieValue: 'high',
  calories: 388,
  image: 'images/Orange-Smoothie.png',
  summary: "Love the citrusy flavor of oranges? Let’s make an orange smoothie! Oranges are often overlooked when it comes to smoothie recipes. But they have got a beautifully citrusy flavor and loads of Vitamin C. This orange smoothie is creamy and tangy, with just the right amount of sweetness.",
  preptime: "5 minutes",
  ingredients: ['2 large peeled oranges (or 3 medium)', '½ tablespoon orange zest', '1 banana', '¼ cup Greek yogurt', '½ teaspoon vanilla extract', '1 tablespoon maple syrup or honey (optional)', '2 to 2 1/2 cups ice'],
  direction: ['Zest about ½ orange.', ' Add the peeled oranges, orange zest, banana, Greek yogurt, vanilla, maple syrup or honey, and ice to a blender.', 'Blend until smooth.' , 'Enjoy immediately or store up to 1 day refrigerated.'],
  nutrition: "An orange is a fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus x sinensis, which is also called sweet orange, to distinguish it from the related Citrus x aurantium, referred to as bitter orange." 
  },
  {
  name: 'Cinnamon Apple Smoothie',
  dairy: 'true',
  flavor: 'fruity',
  calorieValue: 'high',
  calories: 210,
  image: 'images/Cinnamon-Apple-Smoothie.png',
  summary: "Here is a smoothie that is full of cozy spiced, naturally sweet flavor: the perfect Apple Smoothie! This one works anytime and in any season. But of course it is perfect for fall when you have got mounds of apples to use up. In fact, it is a healthy way to enjoy the flavors of apple pie or apple crumble! Cinnamon and vanilla are just the right compliment to the sweet tart fruit. It is also loaded with protein from Greek yogurt, which gives it just the right creamy texture. You will almost feel like you are drinking an apple pie milkshake…but a wholesome version!",
  preptime: "5 minutes",
  ingredients: ['2 cups fresh apple chunks (skin on, about 1 large or 2 small apples)', '1 ripe banana', '½ cup Greek yogurt', '¼ cup milk', '8 ice cubes', '½ teaspoon vanilla extract', '¼ teaspoon cinnamon'],
  direction: ['Chop the apple.', ' Place all ingredients in a blender, breaking the banana into pieces.', 'Blend until creamy and frothy, stopping and scraping down the sides as necessary.', 'If desired, garnish with an apple slice.', 'Serve immediately or store in a covered jar in the refrigerator for 1 day.'],
  nutrition: "Apples are a good source of vitamin C: 1 apple contains 14% of your daily needs; They are full of fiber and water: 1 apple has 4 grams fiber or about 15% of your daily needs; Apples contain pectin, a type of fiber that acts as a prebiotic and helps with gut health; Most of the nutrients in apples are in the skin, so you should eat the skin as much as possible. That is why we included the skin in this apple smoothie." 
  },
  {
  name: 'Grape Smoothie',
  dairy: 'true',
  flavor: 'fruity',
  calories: 247,
  image:'images/Grape-Smoothie.png',
  summary: "This weirdly delicious Grape Smoothie! The flavor is such a pop of sweet tart and delicious, you might not believe it on first sip. Who knew frozen grapes were the key to the tastiest of all smoothies? Consider us impressed. This one stood out to us in our list of 30+ smoothies as a simple, easy and healthy way to feel like you are eating a treat.",
  preptime: "5 minutes",
  ingredients: ['2 cups seedless red grapes, frozen at least 2 hours or overnight', '1 banana', '½ cup milk', '½ cup Greek yogurt'],
  direction: ['Before starting the recipe, remember to freeze the grapes!', ' Place all ingredients in the blender starting with the milk and yogurt, breaking the banana into pieces.', 'Blend until smooth, adding a splash more liquid as necessary to come to the desired consistency.'],
  nutrition: "Grapes are a good source of potassium, a mineral that helps balance fluids in your body. Potassium can help bring down high blood pressure and lower your risk of heart disease and stroke. " 
  },
  {
  name: 'Pineapple Smoothie',
  dairy: 'true',
  flavor: 'fruity',
  calorieValue: 'low',
  calories: 171,
  image:'images/Pineapple-Smoothie.png',
  summary: "This weirdly delicious Grape Smoothie! The flavor is such a pop of sweet tart and delicious, you might not believe it on first sip. Who knew frozen grapes were the key to the tastiest of all smoothies? Consider us impressed. This one stood out to us in our list of 30+ smoothies as a simple, easy and healthy way to feel like you are eating a treat.",
  preptime: "5 minutes",
  ingredients: ['3 cups frozen pineapple (or fresh, peeled and cubed)', '1/2 banana', '¾ cup water', '½ cup milk', '5 ice cubes', '1 ½ tablespoons fresh squeezed lime juice (or lemon juice)'],
  direction: ['Place all ingredients except 1 cup frozen pineapple in a blender.', ' Blend until smooth, stopping and stirring as necessary.', 'Add the final cup of frozen pineapple and blend again.', 'Eat immediately or store in a sealed jar for 1 day.'],
  nutrition: "Pineapple is low in calories. 1 cup pineapple chunks has 80 calories. Pineapple is especially rich in Vitamin C: 1 cup provides 131% of your daily value. Pineapple contains disease-fighting antiox." 
  },
  {
  name: 'Carrot Smoothie',
  dairy: 'false',
  flavor: 'veggie',
  calorieValue: 'low',
  calories: 171,
  image:'images/Carrot-Smoothie.png',
  summary: "Want to eat more carrots? Here is a tasty way to get a healthy dose of them: this Perfect Carrot Smoothie! This vibrant puree is full of irresistible fruity flavor: it pairs this orange veggie with orange, apple, and mango. Make your daily dose of fruits and veggies sippable!",
  preptime: "5 minutes",
  ingredients: ['1 cup thinly sliced carrot rounds', '1 large apple, chopped into cubes', '1 banana', '½ cup orange juice', '½ cup frozen pineapple or mango', '10 ice cubes'],
  direction: ['Peel the carrots and slice them into rounds.', ' Chop the apple, keeping the peel on.', 'Break the banana into pieces.', 'Add all ingredients to the blender, adding the liquids first. Blend until smooth.' , 'Eat immediately or store up to 1 day refrigerated in a covered jar.'],
  nutrition: "Low in calories, high in fiber: One cup of chopped carrots has only 52 calories and 3.6 grams of fiber. Packed with Vitamin A (beta carotene): This veggie has 428% of your daily vitamin A in 1 cup! It is present as beta-carotene, an antioxidant that could help in cancer prevention. Your body converts beta carotene into Vitamin A. High in Vitamins C, K and potassium: They are also are high in these vitamins. Potential benefits include lower blood cholesterol, weight loss, and eye health." 
  },
  {
  name: 'Easy Cucumber Smoothie',
  dairy: 'true',
  flavor: 'veggie',
  calorieValue: 'low',
  calories: 174,
  image: 'images/Easy-Cucumber-Smoothie.png',
  summary: "Here is a deliciously refreshing veggie smoothie for you, with an unexpected ingredient. This easy Cucumber Smoothie! Cucumber is not the most likely ingredient in a smoothie. But it adds an intriguing, spa-like flavor to the puree! This tasty ingredient is full of nutrients and water to make your smoothie taste even better. It is perfectly creamy and a great way to load up on nutrients as a healthy snack or breakfast.",
  preptime: "5 minutes",
  ingredients: ['½ cup Greek yogurt', '1 cup peeled* and chopped cucumber (standard or English cucumber)', '1 ripe banana, broken into pieces', '1 cup frozen pineapple', '1 handful spinach leaves', '10 ice cubes', '1 tablespoon lime juice or lemon juice (optional)'],
  direction: ['Peel and chop the cucumber.', ' Add all ingredients to the blender in the order listed.', 'Blend until smooth.', 'Add all ingredients to the blender, adding the liquids first. Blend until smooth.', 'Eat immediately or store 1 day in a sealed jar; if it separates, shake to re-integrate it.'],
  nutrition: "Low in calories. 1 cup has only 16 calories. High in Vitamin K and more. You will get 62% of your daily need, 14% of your daily Vitamin C, and 13% of your daily potassium. Contains antioxidants and micronutrients." 
  },
  {
  name: 'Perfect Avocado Smoothie',
  dairy: 'false',
  flavor: 'veggie',
  calorieValue: 'high',
  calories: 305,
  image: 'images/Perfect-Avocado-Smoothie.png',
  summary: "Try this avocado smoothie! The words “avocado smoothie” might make you think of a rich, savory puree. (Ew.) But the flavor here is sweet and tropical! Banana and pineapple bring sweet, nuanced flavor to compliment the avocado perfectly. And the texture is so light and creamy from the avocado.",
  preptime: "5 minutes",
  ingredients: ['1/2 ripe avocado', '1 large green apple', '1 banana', '1 cup baby spinach or kale, loosely packed (or other chopped greens)', '½ cup wate', '10 ice cubes', '1 cup frozen pineapple chunks', '1 tablespoon lemon juice'],
  direction: ['Chop the apple, leaving the skin on.', ' Break the banana into pieces and place them both in the blender.', 'Add the water and baby kale leaves.', 'Blend until smooth.', 'Add the ice, frozen pineapple or mango, and lemon juice.', 'Blend again until smooth.', 'Eat immediately or store 1 to 2 days in a sealed jar; if it separates, shake to re-integrate it.'],
  nutrition: "Avocados are a source of vitamins C, E, K, and B6, as well as riboflavin, niacin, folate, pantothenic acid, magnesium, and potassium. They also provide lutein, beta carotene, and omega-3 fatty acids. Avocados contain high levels of healthy, beneficial fats, which can help a person feel fuller between meals." 
  },
  {
  name: 'Broccoli Smoothie',
  dairy: 'true',
  flavor: 'veggie',
  calorieValue: 'high',
  calories: 302,
  image: 'images/Broccoli-Smoothie.png',
  summary: "Here is an interesting way to use it: throw it into a smoothie! This Magic Broccoli Smoothie makes nutritious vegetable taste sweet and creamy. You can barely even taste that it is there!",
  preptime: "5 minutes",
  ingredients: ['½ cup Greek yogurt', '½ cup water', '1 cup chopped small broccoli florets', '1 large green apple chopped' , '1 banana' , '1 cup frozen pineapple chunks'],
  direction: ['Add all ingredients to the blender, adding the liquids first and breaking the banana into pieces.', 'Blend until smooth.', 'Eat immediately or store up to 1 day refrigerated in a covered jar.'],
  nutrition: "It is a great source of fiber. 1 cup of raw broccoli has 2.3 grams of fiber, or about 5 to 10% of your daily need. It is very high in Vitamin C. ½ cup has 70% your daily value of Vitamin C! It is relatively high in protein for a green vegetable. 1 cup has 3 grams protein. That is a similar level to asparagus and potatoes." 
  },
  {
  name: 'Kale Smoothie',
  dairy: 'false',
  flavor: 'veggie',
  calorieValue: 'high',
  calories: 302,
  image: 'images/Kale-Smoothie.png',
  summary: "Here is a smoothie so good, you will want to make it every day. Meet the very best kale smoothie! Yes, we know. “Kale smoothie” sounds like it would be intensely bitter. This one is anything but! It is full of fruity flavors from green apple, pineapple and banana. It tastes heavenly, yet at the same time you’re getting a big dose of nutrients from leafy greens.",
  preptime: "5 minutes",
  ingredients: ['1 large green apple', '1 banana', '2 cups baby kale leaves, loosely packed (or Tuscan or curly kale, roughly chopped)', '½ cup water', '10 ice cubes', '2 cups frozen pineapple or mango', '2 cups frozen pineapple or mango'],
  direction: ['Chop the apple, leaving the skin on.', 'Break the banana into pieces and place them both in the blender.', 'Add the water and baby kale leaves.', 'Blend until smooth.', 'Add the ice, frozen pineapple or mango, and lemon juice. Blend again until smooth.'],
  nutrition: "Kale is a nutrition superstar due to the amounts of vitamins A, K, B6 and C, calcium, potassium, copper and manganese it contains." 
  },
  {
  name: 'Vanilla Protein Smoothie',
  dairy: 'true',
  flavor: 'veggie',
  calorieValue: 'high',
  calories: 279,
  image: 'images/Vanilla-Protein-Smoothie.png',
  summary: "Looking for a protein-packed snack to sip? Look no further than this Vanilla Protein Smoothie! It is full of creamy, lightly fruity flavor and 25% of your daily protein! Even better: there is no protein powder: just all natural, delicious ingredients!",
  preptime: "5 minutes",
  ingredients: ['1 cup frozen pineapple', '1 banana', '2 tablespoons peanut butter', '½ cup Greek yogurt', '½ cup milk (or almond milk or oat milk)', '½ teaspoon vanilla extract', '8 ice cubes'],
  direction: ['Place all ingredients in a blender, breaking the bananas into pieces. ', 'Blend until smooth.', 'Serve immediately or store in a covered jar in the refrigerator for 2 days.'],
  nutrition: "Many health promoting elements such as vitamins, minerals, essential oils and complex sugars are present in vanilla. It contains traces of niacin, thiamine and other B complex vitamins." 
  },
  {
  name: 'Dairy-free Acai Smoothie',
  dairy: 'false',
  flavor: 'fruity',
  calorieValue: 'high',
  calories: 249,
  image: 'images/Dairy-free-Acai-Smoothie.png',
  summary: "This acai smoothie has all the fun of an acai bowl, in portable form! It is got the best tropical flavor and a rainbow of healthy toppings",
  preptime: "5 minutes",
  ingredients: ['7 ounces frozen unsweetened acai pulp (such as Sambazon)*' , '1 tablespoon lime juice' , '¼ cup cold water, plus more as needed' , '1 cup frozen pineapple chunks' , '½ cup frozen diced or fresh mango' , '1 large banana (room temperature)' , 'For the garnish: almond butter, sliced strawberries, diced mango, blueberries, large coconut flakes, fresh mint'],
  direction: ['Thaw the acai pulp under warm water until it can be broken into smaller chunks, then remove the packaging and add the chunks to the blender. Add the lime juice and water, then pineapple, mango, and banana broken into chunks. Blend until smooth, stopping and scraping when needed, adding a bit more cold water if necessary to blend into a puree (you will need more water with frozen mango vs. fresh).' , 'Top with desired toppings: make sure to add 1 dollop of almond butter to add protein and keep it filling. Stores up to 1 day refrigerated'],
  nutrition: 'Acai berries are a Brazilian “superfruit.” Acai berries contain healthy fats and low amounts of sugar, as well as many trace minerals and plant compounds, including anthocyanins.' 
  },
  {
  name: 'Glowing Green Smoothie',
  dairy: 'false',
  flavor: 'veggie',
  calorieValue: 'low',
  calories: 159,
  image: 'images/Glowing-Green-Smoothie.png',
  summary: "This glowing green smoothie is the perfect immunity-boosting drink with a sweet tart flavor starring green apple, loads of spinach, and protein-packed nuts.",
  preptime: "5 minutes",
  ingredients: ['1 large green apple' , '1 tablespoon maple syrup' , '½ cup water' , '¼ cup raw cashews' , '3 cups spinach' , '10 ice cubes' , '1 tablespoon fresh squeezed lemon juice'],
  direction: ['Core the apple and cut it into chunks, leaving the skin on.' , 'Place all ingredients a blender and blend. Add the lemon juice and blend for a few seconds again. Taste, and add a touch more maple syrup and/or lemon juice as desired. Serve immediately, or refrigerate for up to 1 day.'],
  nutrition: 'Three cups of fresh spinach provide more than three times your daily vitamin K needs (340%). You also get roughly 25% of your recommended vitamin C intake and 10% of your suggested potassium intake from a three-cup serving of spinach.' 
  },
  {
  name: 'Beet Smoothie',
  dairy: 'false',
  flavor: 'veggie',
  calorieValue: 'low',
  calories: 143,
  image: 'images/Beet-Smoothie.png',
  summary: "Here's how to make a beet smoothie, full of sweet flavor and vivid color! This healthy puree is loaded with nutrients and fruit.",
  preptime: "5 minutes",
  ingredients: ['1 small raw beet (about 2/3 cup peeled and diced)' , '1 large green apple' , '1 banana' , '1 cup frozen pineapple chunks or mango' , '½ cup water' , '10 ice cubes'],
  direction: ['Peel the raw beet, then dice it (be careful of the beet juice, as it stains!).' , 'Chop the apple, leaving the skin on. Break the banana into pieces.' , 'Add the beet, apple, banana, frozen pineapple, water, and ice cubes. Blend until smooth. Eat immediately or store 1 day in a sealed jar; if it separates, shake to re-integrate it.'],
  nutrition: 'Beets are highly nutritious and “cardiovascular health” friendly root vegetables. Certain unique pigment antioxidants in this root and its top greens have been found to offer protection against coronary artery disease and stroke, lower cholesterol levels within the body, and have anti-aging effects.' 
  },
  {
  name: 'Dairy-free Kale Smoothie',
  dairy: 'false',
  flavor: 'veggie',
  calorieValue: 'high',
  calories: 318,
  image: 'images/Dairy-free-Kale-Smoothie.png',
  summary: "Here is how to make the very best kale smoothie, bright green with the most irresistible fruity flavor! It is the tastiest way to eat your greens.",
  preptime: "5 minutes",
  ingredients: ['1 large green apple' , '1 banana' , '2 cups baby kale leaves, loosely packed (or Tuscan or curly kale, roughly chopped)' , '½ cup water' , '10 ice cubes' , '2 cups frozen pineapple or mango' , '1 tablespoon fresh squeezed lemon juice'],
  direction: ['Chop the apple, leaving the skin on. Break the banana into pieces and place them both in the blender. Add the water and baby kale leaves. Blend until smooth.' , 'Add the ice, frozen pineapple or mango, and lemon juice. Blend again until smooth.'],
  nutrition: 'Kale is a nutrition superstar due to the amounts of vitamins A, K, B6 and C, calcium, potassium, copper and manganese it contains. One cup of raw kale has just 33 calories and only 7 grams of carbohydrate.' 
  },
  {
  name: 'Celery Smoothie',
  dairy: false,
  flavor: 'veggie',
  calorieValue: 'low',
  calories: 130,
  image: 'images/Celery-Smoothie.png',
  summary: "Here is how to make the best celery smoothie! It is full of irresistible flavor and healthy ingredients like apple, banana and fresh ginger.",
  preptime: "5 minutes",
  ingredients: ['4 medium ribs celery (¾ cup chopped)' , '1 large green apple' , '1 banana' , '½ teaspoon peeled and grated ginger (from fresh ginger root)' , '2 cups baby spinach leaves' , '½ cup water' , '10 ice cubes' , '1 ½ tablespoons fresh squeezed lemon juice (1/2 lemon)'],
  direction: ['Roughly chop the celery. Chop the apple into chunks, leaving the peel on. Break the banana into pieces. Peel and grate or mince the ginger.' , 'Place everything in a blender and blend until smooth, stopping and scrapping as necessary and adding a splash more water if it is too thick. Drink immediately or store for up to 1 day.'],
  nutrition: 'You will enjoy vitamins A, K, and C, plus minerals like potassium and folate when you eat celery. It is also low in sodium. Plus, it is low on the glycemic index, meaning it has a slow, steady effect on your blood sugar.' 
  },
  {
  name: 'Watermelon Smoothie',
  dairy: false,
  flavor: 'fruity',
  calorieValue: 'low',
  calories: 166,
  image: 'images/Dairy-free-Watermelon-Smoothie.png',
  summary: "This 3-ingredient watermelon smoothie is juicy and lightly sweet, with frozen strawberries and banana. It is a unique smoothie idea that is ultra refreshing!",
  preptime: "5 minutes",
  ingredients: ['3 cups cubed watermelon' , '10 ounces (2 heaping cups) frozen strawberries' , '1 banana, either frozen in slices or at room temperature'],
  direction: ['Chop the watermelon. Place all ingredients in a blender, and blend until smooth and creamy. Serve immediately.'],
  nutrition: 'A fully ripe red watermelon contains higher levels of nutrients than less ripe watermelon. A single serving of watermelon is a good source of vitamin C and vitamin A, providing a significant percentage of your daily requirement for each.' 
  },
  {
  name: 'Coconut Milk Strawberry Smoothie',
  dairy: false,
  flavor: 'fruity',
  calorieValue: 'high',
  calories: 265,
  image: 'images/Coconut-Milk-Strawberry-Smoothie.png',
  summary: "This coconut milk smoothie is creamy and delicious! This plant based milk is the best way to make a dairy free smoothie.",
  preptime: "5 minutes",
  ingredients: ['2 cups frozen strawberries (or other frozen fruit: blueberries, mixed berries, pineapple, mango, etc)' , '2 bananas (room temperature)' , '½ cup full fat coconut milk' , '¾ cup water' , '½ cup ice'],
  direction: ['Place all ingredients in a blender, breaking the banana into pieces. Blend until creamy and frothy, stopping and scraping down the sides as necessary.' , 'Eat immediately or store 1 day in a sealed jar; if it separates, shake to re-integrate it.'],
  nutrition: 'Strawberries provide fiber, potassium, folate and antioxidants, but they also ccontain several bioactive compounds (called flavonoids) that are known to help protect against chronic diseases.' 
  },
  {
  name: 'Oat Milk Smoothie',
  dairy: false,
  flavor: 'fruity',
  calorieValue: 'high',
  calories: 225,
  image: 'images/Oat-Milk-Smoothie.png',
  summary: "Try this tasty oat milk smoothie recipe, customizable for any fruit! It is one of the best plant based milks for blending into smoothies.",
  preptime: "5 minutes",
  ingredients: ['2 cups frozen strawberries (or other frozen fruit like blueberries, raspberries, mixed berries, mango, peaches, or pineapple)' , '2 bananas (room temperature)' , '3/4 to 1 cup oat milk' , '8 ice cubes' , '1 tablespoon maple syrup or honey (optional depending on ripeness of fruit)' , 'Optional protein adders: 1 tablespoon almond butter, 2 tablespoons chia seeds, 1 scoop protein powder'],
  direction: ['Place the strawberries, bananas, oat milk, and ice in a blender, breaking the banana into pieces. Blend until creamy and frothy, stopping and scraping down the sides and adding a bit more oat milk if necessary. Taste and add maple syrup if desired. Serve immediately or store in a covered jar in the refrigerator for 1 day.'],
  nutrition: 'A one cup serving of oat milk provides 130 calories, 15 grams of carbohydrates, 2.5 grams of fat, 0 grams of saturated fats, 2 grams of fiber, 4 grams of protein, 35 percent of your daily recommended allowance for calcium and 25 percent of your recommended daily allowance for vitamin D.' 
  },
  {
  name: 'Dairy-free Mango Smoothie',
  dairy: false,
  flavor: 'fruity',
  calorieValue: 'low',
  calories: 197,
  image: 'images/Dairy-free-Mango-Smoothie.png',
  summary: "Here is how to make the best mango smoothie: it is got the perfect sweet flavor and creamy texture! We dare you not to take another sip.",
  preptime: "5 minutes",
  ingredients: ['3 cups frozen mango (or fresh)' , '1/2 banana (room temperature, broken into chunks)' , '½ cup water' , '½ cup non-dairy milk like oat milk or almond milk)*' , '5 ice cubes' , '1 tablespoon fresh squeezed lemon juice'],
  direction: ['Add all ingredients to a blender except for 1 cup frozen mango. Blend until smooth.' , 'Add the final 1 cup frozen mango and blend again until smooth.'],
  nutrition: 'The vitamins, minerals, and antioxidants in mangos can provide important health benefits. For example, vitamin K helps your blood clot effectively and helps prevent anemia. It also plays an important role in helping strengthen your bones.' 
  },
  {
  name: 'Avocado Banana Smoothie',
  dairy: false,
  flavor: 'veggie',
  calorieValue: 'high',
  calories: 310,
  image: 'images/Avocado-Banana-Smoothie.png',
  summary: "This avocado banana smoothie is the best way to eat your fruits and veggies! It is full of fruity flavor and the best creamy texture.",
  preptime: "5 minutes",
  ingredients: ['1/2 ripe avocado' , '2 bananas' , '1 cup baby spinach or kale, loosely packed (or other chopped greens)' , '½ cup water' , '1 cup frozen pineapple chunks' , '10 ice cubes' , '1 tablespoon lemon juice (optional)' , 'Protein adders: ½ cup Greek yogurt, 2 tablespoons chia seeds, 1 tablespoon nut butter, etc (see above).'],
  direction: ['Pit the avocado and scoop out one half of the flesh into the blender. Break the bananas into pieces and place them both in the blender. Add the baby greens and water. Blend until smooth.' , 'Add the ice, frozen pineapple, and lemon juice. Blend again until smooth. Eat immediately or store 1 to 2 days in a sealed jar; if it separates, shake to re-integrate it.'],
  nutrition: 'Avocados are a source of vitamins C, E, K, and B6, as well as riboflavin, niacin, folate, pantothenic acid, magnesium, and potassium. They also provide lutein, beta carotene, and omega-3 fatty acids. Avocados contain high levels of healthy, beneficial fats, which can help a person feel fuller between meals.' 
  },
  {
  name: 'Dairy-free Blueberry Banana Smoothie',
  dairy: false,
  flavor: 'fruity',
  calorieValue: 'low',
  calories: 191,
  image: 'images/Dairy-free-Blueberry-Banana-Smoothie.png',
  summary: "Here is how to make the best blueberry banana smoothie! This purple puree has sweet berry flavor and the perfect luscious texture.",
  preptime: "5 minutes",
  ingredients: ['2 cups frozen blueberries' , '2 bananas (room temperature)' , '½ cup water*' , '8 ice cubes' , '1 tablespoon fresh lemon juice'],
  direction: ['Place all ingredients in a blender and blend until smooth, stopping and scraping when necessary. If needed, add a splash more water to get it to blend. Store up to 1 day in a sealed jar.'],
  nutrition: 'Blueberries are a healthy, stress-free food. You get fiber, vitamin C, vitamin K, manganese and potassium in every handful of blueberries at just 80 calories per cup. They are also low in sodium and have virtually no fat. It just feels good to feel good about what you eat.' 
  },
  {
  name: 'Dairy-free Chocolate Smoothie',
  dairy: false,
  flavor: 'fruity',
  calorieValue: 'high',
  calories: 399,
  image: 'images/Dairy-free-Chocolate-Smoothie.png',
  summary: "Blend up a creamy, cold chocolate protein shake smoothie made with plant-based superfood protein powder for a delicious meal or snack, or before/after a workout.",
  preptime: "5 minutes",
  ingredients: ['1.5 cups almond milk (chilled)' , '1 serving Protein Smoothie Boost' , '2 tablespoon cacao powder (unsweetened)' , '1 medjool date (pitted)' , '1.5 bananas (sliced or halved, frozen if desired)' , 'Ice (optional)'],
  direction: ['Blend all ingredients, except for toppings, until smooth. Add ice to make smoothie colder, if desired.' , 'Divide between two glasses or jars. Top each with a drizzle of almond butter and sprinkle with hemp hearts and cacao nibs. Drink immediately.'],
  nutrition: 'Bananas are a good source of several vitamins and minerals, especially potassium, vitamin B6, and vitamin C. One serving, or one medium ripe banana, provides about 28 grams carbohydrate, 15 grams sugar (naturally occurring), 3 grams fiber, and 450 mg potassium' 
  },
  {
  name: 'Cherry Acai Smoothie',
  dairy: false,
  flavor: 'fruity',
  calorieValue: 'low',
  calories: 181,
  image: 'images/Cherry-Acai-Smoothie.png',
  summary: "This cherry acai smoothie screams summer and makes a great breakfast meal replacement.",
  preptime: "5 minutes",
  ingredients: ['1 cup cashew milk (unsweetened)', '1 tablespoon cashews' , '½ banana' , '½ cup cherries (frozen)' , '1 packet açaí puree (frozen)' , '1 serving Protein Smoothie Boost (optional)'],
  direction: ['Blend cashews and cashew milk with banana and cherries. Blend until smooth.' , 'Add açaí packet. Blend until creamy.'],
  nutrition: 'Cherries are low in calories and chock full of fiber, vitamins, minerals, nutrients, and other good-for-you ingredients. You will get vitamins C, A, and K. Each long-stemmed fruit delivers potassium, magnesium, and calcium too.' 
  },
  {
  name: 'Dairy-free Spinach Smoothie',
  dairy: false,
  flavor: 'veggie',
  calorieValue: 'high',
  calories: 231,
  image: 'images/Dairy-free-Spinach-Smoothie.png',
  summary: "This Spinach Smoothie is great if you're looking for a lower glycemic option, this smoothie is low in sugar and high in fiber.",
  preptime: "5 minutes",
  ingredients: ['1 cup spinach' , '1 cup coconut water (unsweetened)', '½ banana' , '½ cup pineapple (frozen)' , '½ cup carrot (uncooked)' , '1 tablespoon chia seeds'],
  direction: ['Blend spinach and coconut water' , 'Add remaining ingredients and blend until smooth'],
  nutrition: 'Spinach is rich in many nutrients, including Vitamin A, Vitamin C, Vitamin K, iron, folate, and potassium. Spinach is chock full of fiber.' 
  },
  {
  name: 'Kale Banana Smoothie',
  dairy: false,
  flavor: 'veggie',
  calorieValue: 'high',
  calories: 214,
  image: 'images/Kale-Banana-Smoothie.png',
  summary: "Kale is protein and fiber-rich, and a leafy green superstar. We also call this kale banana smoothie 'Oh Kale Yeah!'",
  preptime: "5 minutes",
  ingredients: ['1 cup kale', '1 cup water' , '½ banana' , '1 cup pineapple (frozen)' , '1 cup strawberries (frozen)' , '1 serving Protein Smoothie Boost (optional)'],
  direction: ['Place kale and water in blender. Puree until smooth.' , 'Add remaining fruit and blend again.'],
  nutrition: 'Bananas are a good source of several vitamins and minerals, especially potassium, vitamin B6, and vitamin C. One serving, or one medium ripe banana, provides about 28 grams carbohydrate, 15 grams sugar (naturally occurring), 3 grams fiber, and 450 mg potassium' 
  },
  {
  name: 'Kiwi Smoothie',
  dairy: true,
  flavor: 'fruity',
  calorieValue: 'high',
  calories: 226,
  image: 'images/Kiwi-Smoothie.png',
  summary: "This easy kiwi smoothie recipe make a green puree with this delicious tropical fruit! A great way to blend it into a snack or breakfast.",
  preptime: "5 minutes",
  ingredients: ['½ cup Greek yogurt' , '¼ cup water, plus more as needed' , '2 kiwi' , '2 handfuls baby spinach or kale' , '1 banana (room temperature)' , '1 ½ cups frozen pineapple chunks'],
  direction: ['Peel and chop the kiwi. Add all ingredients to the blender, adding the liquids first and breaking the banana into pieces. Blend until smooth, adding a splash more water if necessary. Eat immediately or store up to 1 day refrigerated in a covered jar.'],
  nutrition: 'Kiwis are high in Vitamin C and dietary fiber and provide a variety of health benefits. This tart fruit can support heart health, digestive health, and immunity. The kiwi is a healthy choice of fruit and is rich with vitamins and antioxidants.' 
  },
  {
  name: 'Pumpkin Smoothie',
  dairy: true,
  flavor: 'veggie',
  calorieValue: 'high',
  calories: 236,
  image: 'images/Pumpkin-Smoothie.png',
  summary: "This creamy pumpkin smoothie tastes like pie…but it is loads healthier! This tasty drink features yogurt, fruit and pumpkin pie spices.",
  preptime: "5 minutes",
  ingredients: ['½ cup Greek yogurt or plain yogurt (or oat milk for vegan)' , '½ cup pumpkin puree' , '1 medium ripe banana' , '1 ½ cups fresh apple chunks (skin on, about 1 medium apple)' , '1 teaspoon Pumpkin Pie Spice' , '1 teaspoon vanilla extract' , '1 ½ tablespoons maple syrup' , '1 cup ice cubes' , 'For the topping: pumpkin pie spice, maple pecan granola, etc.'],
  direction: ['Place the ingredients in the blender in the order indicated, breaking the banana into pieces as you add it.' , 'Blend on high until fully pureed and smooth, stopping and scraping as necessary. Depending on your blender and the consistency of your yogurt, you may need to add a splash of milk or water to get it to start. Eat immediately or refrigerate up to 1 day.'],
  nutrition: 'Pumpkin is high in vitamin C and beta carotene. It is also high in lutein and zeaxanthin, substances that may help prevent the formation of cataracts and reduce the risk of macular degeneration.' 
  },
      
 ];

  



const dairy = localStorage.getItem('dairy');
const calorieValue = localStorage.getItem('calorieValue');
const flavor = localStorage.getItem('flavor');

let currentChoices = {
  dairy: localStorage.getItem('dairy'),
  calorieValue: localStorage.getItem('calorieValue'),
  flavor:  localStorage.getItem('flavor')
}

//console.log(dairy, calories, flavor);

//console.log(recipeData);
/*
const recipeName = recipeData[0].name;
const recipeSummary = recipeData[0].summary;
const recipePrep = recipeData[0].preptime;
const recipeDirection = recipeData[0].direction;
const recipeCalories = recipeData[0].calories;
const recipeIngre = recipeData[0].ingredients;
*/

const root = document.getElementById("main");
const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

const CAL_THRESHOLD = 200;

findRecipes(recipeData, currentChoices);
console.log(currentChoices);
function findRecipes(data, choices){
  let matchedRecipes = [];
  data.forEach((recipe) => {
    //console.log(recipe);
   // console.log(recipe.flavor);
    if (recipe.dairy == choices.dairy && recipe.flavor == choices.flavor && recipe.calorieValue == choices.calorieValue)  {
      matchedRecipes.push(recipe);
    } 

    });
    console.log(matchedRecipes);

    matchedRecipes.forEach( item => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    const h2 = document.createElement("h2")
    h2.textContent = item.name;
    const h3 = document.createElement("h3")
    h3.textContent = item.summary;
    const image = document.createElement("img");
    image.src = item.image;
    const link = document.createElement("a");
    link.href = "recipe.html";
    link.textContent = 'link';
    container.appendChild(card);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(link);
  });

}
