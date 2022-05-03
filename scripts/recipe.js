const dairy = localStorage.getItem('dairy');
const calories = localStorage.getItem('calories');
const flavor = localStorage.getItem('flavor');


console.log(dairy, calories, flavor);

function pasteUserInput() {

const recipeData = [
    {
        name: 'Blueberry Strawberry Smoothie',
        dairy: true,
        flavor: fruit,
        calories: 211,
        summary: "This strawberry blueberry smoothie recipe is the perfect creamy blend of fruity flavors! It's a healthy snack or breakfast made in minutes",
        preptime: "5 minutes",
        ingredients: ['1/2 cup skim milk', '1/2 cup of blueberries fresh or frozen', '1 cup of strawberries fresh or frozen', '6 ounces of non-fat vanilla yogurt'],
        direction: ['Add milk, blueberries, strawberries and yogurt to a blender', 'Mix until smooth! If you are using fresh fruit, you may need to add ice to thicken it. Enjoy cold.'],
        nutrition: "Strawberries provide fiber, potassium, folate and antioxidants, but they also ccontain several bioactive compounds (called flavonoids) that are known to help protect against chronic diseases."   
      },
    {   name: 'Banana Smoothie',
        dairy: true,
        flavor: fruit,
        calories: 171,
        summary: "Smoothies are best eaten immediately. But this banana smoothie actually lasts 1 to 2 days refrigerated, stored in a sealed container or a mason jar with the lid on. It may separate, which is perfectly natural. Just shake it up and you are good to go!",
        preptime: "5 minutes",
        ingredients: ['2 medium ripe bananas', '1 ½ cups ice', '¼ cup Greek yogurt', '1/2 to 3/4 cup milk'],
        direction: ['Place all ingredients in a blender, breaking the banana into pieces (start with ½ cup milk, then increase as necessary)', 'Blend until creamy and frothy, stopping and scraping down the sides as necessary.', "If desired, garnish with banana slice and toasted coconut. Serve immediately or store in a covered jar in the refrigerator for 2 days."],
        nutrition: "One serving, or one medium ripe banana, provides about 110 calories, 0 gram fat, 1 gram protein, 28 grams carbohydrate, 15 grams sugar (naturally occurring), 3 grams fiber, and 450 mg potassium."   
      },