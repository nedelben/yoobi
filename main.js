document.getElementById('btn').addEventListener('click',
    function(){
        document.body.classList.toggle('dark');
       
    }
)
<input type="text" id="searchInput" placeholder="اكتب هنا...">
<button id="searchBtn">🔍</button>

<script>
    let searchInput = document.getElementById("searchInput");
    let searchBtn = document.getElementById("searchBtn");

    function storeSearchValue() {
        let searchValue = searchInput.value.trim();
        if (searchValue !== "") {
            console.log("القيمة المدخلة:", searchValue);
        }
    }

    let searchInput = document.getElementById("i");
    let searchBtn = document.getElementById("b");

    function storeSearchValue() {
        let searchValue = searchInput.value.trim();
        if (searchValue !== "") {
            console.log("القيمة المدخلة:", searchValue);
        }
    }

    searchBtn.addEventListener("click", storeSearchValue);

    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            storeSearchValue();
        }
    });
