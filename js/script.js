// find food item by 1st letter 
document.getElementById('search-item').addEventListener('click', () => {
    const foodInput = document.getElementById('food').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodInput}`)
        .then(res => res.json())
        .then(data => console.log(data))
})