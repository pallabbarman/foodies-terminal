// find food item 
document.getElementById('search-item').addEventListener('click', () => {
    const foodName = document.getElementById('food').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
        .catch(error => alert("Please search foods by their first letter!"));
    document.getElementById('food').value = "";
})

// display food picture and name 
const displayFood = items => {
    const showFood = document.getElementById('items');
    items.forEach(item => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        const foodInfo = `
        <img onclick="displayFoodDetail('${item.idMeal}')" src="${item.strMealThumb}"><br><br>
        <h4 onclick="displayFoodDetail('${item.idMeal}')">${item.strMeal}</h4><br>`;
        foodItem.innerHTML = foodInfo;
        showFood.appendChild(foodItem);
    });
}

// food items details call by another api 
const displayFoodDetail = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => foodDetailInfo(data.meals[0]))
        .catch(error => alert("Please search foods by their first letter!"));
}

// details foodItem info 
const foodDetailInfo = foods => {
    document.getElementById('items').style.display = "none";
    document.getElementById('search-item').style.display = "none";
    document.getElementById('food').style.display = "none";
    document.getElementById('itemsDetails').style.display = "block";
    const foodItem = document.getElementById('itemsDetails');
    foodItem.innerHTML = `
    <img src="${foods.strMealThumb}"><br><br>
    <h3>${foods.strMeal}</h3><br>
    <h5>Ingredients</h5><br>
    <li>${foods.strIngredient1}</li>
    <li>${foods.strIngredient2}</li>
    <li>${foods.strIngredient3}</li>
    <li>${foods.strIngredient4}</li>
    <li>${foods.strIngredient5}</li>
    <li>${foods.strIngredient6}</li>
    <li>${foods.strIngredient7}</li>
    <li>${foods.strIngredient8}</li>
    <li>${foods.strIngredient9}</li>
    <li>${foods.strIngredient10}</li><br>
    <button class="btn btn-primary" id="back">Back</button>`;
    document.getElementById("back").addEventListener("click", () => {
        document.getElementById('itemsDetails').style.display = "none";
        document.getElementById('items').style.display = "flex";
        document.getElementById('search-item').style.display = "block";
        document.getElementById('food').style.display = "block";
    });
}