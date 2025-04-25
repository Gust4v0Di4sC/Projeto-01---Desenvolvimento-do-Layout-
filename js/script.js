const products = [
    // Slide 1
    [
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 100,00",
        currentPrice: "R$ 79,90",
        installment: "10x de R$ 7,90",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      },
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 90,00",
        currentPrice: "R$ 70,00",
        installment: "10x de R$ 7,00",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      },
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 200,00",
        currentPrice: "R$ 150,00",
        installment: "10x de R$ 15,00",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      },
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 120,00",
        currentPrice: "R$ 95,00",
        installment: "10x de R$ 9,50",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      },
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 120,00",
        currentPrice: "R$ 95,00",
        installment: "10x de R$ 9,50",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      }
    ],
    // Slide 2
    [
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 85,00",
        currentPrice: "R$ 65,00",
        installment: "10x de R$ 6,50",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      },
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 110,00",
        currentPrice: "R$ 99,00",
        installment: "10x de R$ 9,90",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      },
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 150,00",
        currentPrice: "R$ 119,90",
        installment: "10x de R$ 11,99",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      },
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 180,00",
        currentPrice: "R$ 139,90",
        installment: "10x de R$ 13,99",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      },
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 180,00",
        currentPrice: "R$ 139,90",
        installment: "10x de R$ 13,99",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      }
    ],
    [
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 85,00",
        currentPrice: "R$ 65,00",
        installment: "10x de R$ 6,50",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      },
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 110,00",
        currentPrice: "R$ 99,00",
        installment: "10x de R$ 9,90",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      },
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 150,00",
        currentPrice: "R$ 119,90",
        installment: "10x de R$ 11,99",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      },
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 180,00",
        currentPrice: "R$ 139,90",
        installment: "10x de R$ 13,99",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      },
      {
        title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
        oldPrice: "R$ 180,00",
        currentPrice: "R$ 139,90",
        installment: "10x de R$ 13,99",
        image: "/img/slide-img.png",
        isNew: true,
        discount: "10% OFF"
      }
    ]
  ];

  const carouselInner = document.getElementById("carousel-content");
  const carouselInner2 = document.getElementById("carousel-content2");
  const indicators = document.getElementById("carousel-indicators");
  const indicators2 = document.getElementById("carousel-indicators2");

  products.forEach((slideProducts, index) => {
    const slide = document.createElement("div");
    slide.className = "carousel-item" + (index === 0 ? " active" : "");
    const row = document.createElement("div");
    row.className = "row";

    slideProducts.forEach(product => {
      const col = document.createElement("div");
      col.className = "col-6 col-md-4 col-lg-5col";
    

      col.innerHTML = `
      <div class="card shadow-sm product-card flex-wrap" style="width: 100%; border-radius: 1rem;">
      ${product.isNew ? '<span class="position-absolute top-0 start-0 m-2 badge custom-new-badge text-white px-2 py-2 fs-7 fs-md-6 fw-light">NOVO</span>' : ''}
      
      <img src="${product.image}" class="card-img-top img-fluid" alt="${product.title}" style="border-top-left-radius: 1rem; border-top-right-radius: 1rem; object-fit: cover;">
      
      <div class="card-body ">
        <h3 class="card-title fs-6 fs-md-5 fw-normal">${product.title}</h3>
        
        <p class="text-muted mb-1" style="text-decoration: line-through;">${product.oldPrice}</p>
        
        <h4 class="text-dark fw-bold">
          ${product.currentPrice}
          ${product.discount ? `<span class="badge custom-discount-badge text-white text-decoration-underline fw-light px-2 py-1 fs-6">${product.discount}</span>` : ''}

        </h4>
        
        <p class="text-muted small fs-6 mb-3">Ou em até <b>${product.installment}</b></p>
        
        <button class="btn btn-primary w-100 buy-button ">Comprar</button>
      </div>
    </div>
      `;

      row.appendChild(col);
    });

    slide.appendChild(row);
    carouselInner.appendChild(slide);


    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.setAttribute("data-bs-target", "#productCarousel");
    indicator.setAttribute("data-bs-slide-to", index);
    indicator.setAttribute("aria-label", `Slide ${index + 1}`);
    if (index === 0) {
      indicator.className = "active";
      indicator.setAttribute("aria-current", "true");
    }
    indicators.appendChild(indicator);
  });

  products.forEach((slideProducts, index) => {
    const slide = document.createElement("div");
    slide.className = "carousel-item" + (index === 0 ? " active" : "");
    const row = document.createElement("div");
    row.className = "row";

    slideProducts.forEach(product => {
      const col = document.createElement("div");
      col.className = "col-6 col-md-4 col-lg-5col";
    

      col.innerHTML = `
     <div class="card shadow-sm product-card flex-wrap" style="width: 100%; border-radius: 1rem;">
      ${product.isNew ? '<span class="position-absolute top-0 start-0 m-2 badge custom-new-badge text-white px-2 py-2 fs-6 fw-light">NOVO</span>' : ''}
      
      <img src="${product.image}" class="card-img-top img-fluid" alt="${product.title}" style="border-top-left-radius: 1rem; border-top-right-radius: 1rem;">
      
      <div class="card-body ">
        <h3 class="card-title fs-5 fw-normal">${product.title}</h3>
        
        <p class="text-muted mb-1" style="text-decoration: line-through;">${product.oldPrice}</p>
        
        <h4 class="text-dark fw-bold">
          ${product.currentPrice}
          ${product.discount ? `<span class="badge custom-discount-badge text-white text-decoration-underline fw-light px-2 py-1 fs-6">${product.discount}</span>` : ''}

        </h4>
        
        <p class="text-muted small fs-6 mb-3">Ou em até <b>${product.installment}</b></p>
        
        <button class="btn btn-primary w-100 buy-button">Comprar</button>
      </div>
    </div>
      `;

      row.appendChild(col);
    });

    slide.appendChild(row);
    carouselInner2.appendChild(slide);

  
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.setAttribute("data-bs-target", "#productCarousel2");
    indicator.setAttribute("data-bs-slide-to", index);
    indicator.setAttribute("aria-label", `Slide ${index + 1}`);
    if (index === 0) {
      indicator.className = "active";
      indicator.setAttribute("aria-current", "true");
    }
    indicators2.appendChild(indicator);
  });
 
 
 

 function performSearch() {
    
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
    
    
    const searchResultContainer = document.getElementById('searchResultContainer');
    
    
    if (searchTerm !== '') {
        
        searchResultContainer.innerHTML = '';
        
        
        const resultElement = document.createElement('div');
        resultElement.className = 'search-result-container';
        resultElement.innerHTML = `<p>Você buscou por: <strong>'${searchTerm}'</strong></p>`;
        
        
        searchResultContainer.appendChild(resultElement);
        
        
    } else {
        searchResultContainer.innerHTML = '';
    }
}


document.getElementById('searchButton').addEventListener('click', performSearch);


document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});