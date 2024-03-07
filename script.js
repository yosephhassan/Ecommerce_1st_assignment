const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    navLinks.classList.toggle('active');
  }
});

// Add event listener to window resize event
window.addEventListener('resize', () => {
  // Hide the navigation links if the screen size is increased beyond 768px
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
  }
});

const products = [
  {
    id: 1,
    name: "Yellow Shirt",
    price: 220,
    image: "./imgs/shirt5.png",
  },
  {
    id: 2,
    name: "Green Stripes Shirt",
    price: 170,
    image: "./imgs/shirt2.png",
  },
  {
    id: 3,
    name: "Blue Stripes Shirt",
    price: 100,
    image: "./imgs/shirt3.png",
  },
  {
    id: 4,
    name: "Red Shirt",
    price: 200,
    image: "./imgs/shirt4.png",
  },
  {
    id: 5,
    name: "Green & Orange Shirt",
    price: 70,
    image: "./imgs/shirt6.png",
  },
  {
    id: 6,
    name: "Green & Blue Shirt",
    price: 70,
    image: "./imgs/shirt7.png",
  },
  {
    id: 7,
    name: "Blue and light Blue Shirt",
    price: 70,
    image: "./imgs/shirt8.png",
  },
  {
    id: 8,
    name: "Blue Shirt",
    price: 70,
    image: "./imgs/shirt9.png",
  },
  {
    id: 9,
    name: "Blue & Yellow Shirt",
    price: 70,
    image: "./imgs/shirt10.png",
  },
];

const searchBox = document.querySelector("#search-box");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-icon");

searchProducts = () => {
    searchBox.classList.add("active-search");
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchValue);
    });
    searchInput.value = "";

    const searchResultsDiv = document.createElement("div");
    searchResultsDiv.classList.add("search-results");
    searchBox.appendChild(searchResultsDiv);

    if (filteredProducts.length === 0) {
        searchResultsDiv.innerHTML = "<p>No products found</p>";
        return;
    }

    filteredProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("search-result");
        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        `;
        searchResultsDiv.appendChild(productDiv);
    });
};

clearSearchResults = () => {
    searchBox.classList.remove("active-search");
    const searchResults = document.querySelector(".search-results");
    if (searchResults) {
        searchResults.remove();
    }
};

searchButton.addEventListener("click", () => {
    clearSearchResults();
    if (searchInput.value === "") return;
    searchProducts();
});

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (searchInput.value === "") return;
        searchProducts();
    }
});

document.addEventListener("click", (e) => {
    const inInsideSearchBox = searchBox.contains(e.target);
    if (!inInsideSearchBox) {
        clearSearchResults();
    }
});

const slider = document.querySelector("[data-slider]");

const track = slider.querySelector("[data-slider-track]");
const prev = slider.querySelector("[data-slider-prev]");
const next = slider.querySelector("[data-slider-next]");

if (track) {
  prev.addEventListener("click", () => {
    next.removeAttribute("disabled");

    track.scrollTo({
      left: track.scrollLeft - track.firstElementChild.offsetWidth,
      behavior: "smooth"
    });
  });

  next.addEventListener("click", () => {
    prev.removeAttribute("disabled");

    track.scrollTo({
      left: track.scrollLeft + track.firstElementChild.offsetWidth,
      behavior: "smooth"
    });
  });

  track.addEventListener("scroll", () => {
    const trackScrollWidth = track.scrollWidth;
    const trackOuterWidth = track.clientWidth;

    prev.removeAttribute("disabled");
    next.removeAttribute("disabled");

    if (track.scrollLeft <= 0) {
      prev.setAttribute("disabled", "");
    }

    if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
      next.setAttribute("disabled", "");
    }
  });
}