function pasteUserInput() {
    const recipe = localStorage.getItem('result');
    
    console.log(recipe);
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
        }    