// find food item by 1st letter 
document.getElementById('search-item').addEventListener('click', () => {
    const foodInput = document.getElementById('food').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodInput}`)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
})

// display food picture and name 
const displayFood = items => {
    const showFood = document.getElementById('items');
    items.forEach(item => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        const foodInfo = `
        <img src="${item.strMealThumb}"><br><br>
        <h4 class="foodItems">${item.strMeal}</h4><br>`;
        foodItem.innerHTML = foodInfo;
        showFood.appendChild(foodItem);
    });
}