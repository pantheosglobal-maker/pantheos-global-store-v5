const gameSelect = document.getElementById("gameSelect");
const categorySelect = document.getElementById("categorySelect");
const packageSelect = document.getElementById("packageSelect");
const specialCardArea = document.getElementById("specialCardArea");

const data = {

mlbb: {

categories: {

"Diamond Packs": [
"💎 11 - ₹25",
"💎 22 - ₹45",
"💎 56 - ₹90",
"💎 86 - ₹130",
"💎 172 - ₹250",
"💎 257 - ₹370",
"💎 344 - ₹490"
],

"Special Passes": [
"Weekly Pass - ₹149",
"Twilight Pass - ₹829"
]

}

},

bgmi: {

categories: {

"UC Packs": [
"60 UC - ₹75",
"325 UC - ₹399",
"660 UC - ₹799",
"1800 UC - ₹1949",
"3850 UC - ₹3999"
]

}

}

};

function loadCategories() {

const game = gameSelect.value;

categorySelect.innerHTML = "";

Object.keys(data[game].categories).forEach(category => {

const option = document.createElement("option");

option.value = category;
option.textContent = category;

categorySelect.appendChild(option);

});

loadPackages();

}

function loadPackages() {

const game = gameSelect.value;
const category = categorySelect.value;

packageSelect.innerHTML = "";

specialCardArea.innerHTML = "";

data[game].categories[category].forEach(item => {

const option = document.createElement("option");

option.value = item;
option.textContent = item;

packageSelect.appendChild(option);

});

if(category === "Special Passes"){

specialCardArea.innerHTML = `

<div class="special-card">
<img src="assets/weekly-pass.jpg" alt="Weekly Pass">

<div class="special-card-content">
<h3>Weekly Pass</h3>
<p>₹149</p>
</div>

</div>

<div class="special-card">
<img src="assets/twilight-pass.jpg" alt="Twilight Pass">

<div class="special-card-content">
<h3>Twilight Pass</h3>
<p>₹829</p>
</div>

</div>

`;

}

}

gameSelect.addEventListener("change", loadCategories);

categorySelect.addEventListener("change", loadPackages);

loadCategories();
