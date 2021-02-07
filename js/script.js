// find food item by 1st letter 
document.getElementById('search-item').addEventListener('click', () => {
    const foodName = document.getElementById('food').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodName}`)
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
        <img src="${item.strMealThumb}"><br><br>
        <h4>${item.strMeal}</h4><br>
        <button onclick="displayFoodDetail('${item.idMeal}')">Details</button>`;
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
const foodDetailInfo = foods=>{
    document.getElementById('items').style.display = "none";
    document.getElementById('itemsDetails').style.display = "block";
    const foodItem=document.getElementById('itemsDetails');
    foodItem.innerHTML=`
    <img src="${foods.strMealThumb}">
    <h4>${foods.strMeal}</h4>`;
}