// const cardsProduct = [
//     {
//         id: 1,
//         imgUrl: "./images/card-img1.webp",
//         name: "Планшеты",
//         information: 'Планшет Samsung Galaxy Tab A9+ 5G 11" 8/128GB Graphite',
//         price: "159 860 ₸"
//     },
//     {
//         id: 2,
//         imgUrl: "./images/card-img2.png",
//         name: "Встраиваемые духовые шкафы",
//         information: 'Встраиваемые духовой шкаф Haier HOQ-FAAGB',
//         price: "226 300 ₸"
//     },
//     {
//         id: 3,
//         imgUrl: "./images/card-img3.png",
//         name: "Мониторы",
//         information: 'Монитор LG 24" 24MP400 144гц игровой',
//         price: "52 990 ₸"
//     },
//     {
//         id: 4,
//         imgUrl: "./images/card-img5.webp",
//         name: "Портативные колонки",
//         information: 'Портативная колонка Sven PS-48 Black',
//         price: "3 690 ₸"
//     },
//     {
//         id: 5,
//         imgUrl: "./images/card-img4.webp",
//         name: "Зажимные инструменты",
//         information: 'Плоскогубцы Fixtec FHLNP2006 для постройки',
//         price: "2 990 ₸"
//     }
// ]
// console.log(JSON.stringify(cardsProduct))

function createCards(cardObj){
    const div = document.createElement("div")
    div.classList.add("card")

    const image = document.createElement("img")
    image.src = cardObj.imgUrl
    div.appendChild(image)

    const infoDiv = document.createElement("div")
    infoDiv.classList.add("information")
    div.appendChild(infoDiv)

    const nameProduct = document.createElement("p")
    nameProduct.textContent = cardObj.name
    infoDiv.appendChild(nameProduct)

    const aboutProduct = document.createElement("a")
    aboutProduct.textContent = cardObj.information
    infoDiv.appendChild(aboutProduct)

    const priceDiv = document.createElement("div")
    priceDiv.classList.add("price")
    div.appendChild(priceDiv)

    const priceProduct = document.createElement("h1")
    priceProduct.textContent = cardObj.price
    priceDiv.appendChild(priceProduct)

    const cash = document.createElement("p")
    cash.textContent = "Есть в наличии"
    priceDiv.appendChild(cash)

    const buttonDiv = document.createElement("div")
    buttonDiv.classList.add("buttons")
    div.appendChild(buttonDiv)

    const buttonCart = document.createElement("a")
    buttonCart.href = ""
    buttonDiv.appendChild(buttonCart)

    const cartProduct = document.createElement("button")
    cartProduct.id = "cart"
    cartProduct.textContent = "В корзину"
    buttonCart.appendChild(cartProduct)

    const buttonBuy = document.createElement("a")
    buttonBuy.href = ""
    buttonDiv.appendChild(buttonBuy)

    const buyProduct = document.createElement("button")
    buyProduct.id = "buy"
    buyProduct.textContent = "Купить"
    buttonBuy.appendChild(buyProduct)

    return div
}
const mainDiv = document.querySelector(".cards")
const url = "https://65d7137a27d9a3bc1d7a173c.mockapi.io/sulpak"
fetch(url)
  .then(response => response.json()) // json ды js тын массивына айналдырады
  .then(data => {
    data.forEach((product) => {
      mainDiv.appendChild(createCards(product))
    })
  })
  .catch(error => console.error(error))

// for(let i = 0; i < cardsProduct.length; i++){
//     const card = createCards(cardsProduct[i])
//     mainDiv.appendChild(card)
// }

// section hei cards
// const hitCards = [
//     {
//         id: 1,
//         imgUrl: "./images/hit-card-img-1.png",
//         name: "Ноутбуки",
//         information: 'Ноутбук Acer Nitro 5 AN515-44(NH.Q9HER.007)',
//         price: "от 300 993 ₸"
//     },
//     {
//         id: 2,
//         imgUrl: "./images/hit-card-img-2.jpg",
//         name: "Персональные компьютеры",
//         information: 'Компьютер Acer Aspire TC-895(DG.BEZMS.00E)',
//         price: "от 200 193 ₸"
//     },
//     {
//         id: 3,
//         imgUrl: "./images/hit-card-img-3.jpg",
//         name: "Электрические поверхности",
//         information: 'Электрическая варочная поверхность Gorenje ECT641BSC',
//         price: "128 900 ₸"
//     },
//     {
//         id: 4,
//         imgUrl: "./images/hit-card-img-4.jpg",
//         name: "Аксессуары для кухонной техники",
//         information: 'Насадка для спагетти Kenwood AWAT974A01 Chef',
//         price: "от 22 744 ₸"
//     },
//     {
//         id: 5,
//         imgUrl: "./images/hit-card-img-5.jpg",
//         name: "Сетевые фильтры",
//         information: 'Сетевой фильтр АРС PM6-RS (PSE-051)',
//         price: "15 990 ₸"
//     }
// ]
function createHitCards(hitObj){
  const div = document.createElement("div")
  div.classList.add("hit-card")

  const nav = document.createElement("a")
  nav.href = ""
  div.appendChild(nav)

  const image = document.createElement("img")
  image.src = hitObj.imgUrl
  nav.appendChild(image)

  const infoDiv = document.createElement("div")
  infoDiv.classList.add("hit-information")
  div.appendChild(infoDiv)

  const nameProduct = document.createElement("p")
  nameProduct.textContent = hitObj.name
  infoDiv.appendChild(nameProduct)

  const aboutProduct = document.createElement("a")
  aboutProduct.textContent = hitObj.information
  infoDiv.appendChild(aboutProduct)

  const priceDiv = document.createElement("div")
  priceDiv.classList.add("hit-price")
  div.appendChild(priceDiv)

  const priceProduct = document.createElement("h1")
  priceProduct.textContent = hitObj.price
  priceDiv.appendChild(priceProduct)

  const cash = document.createElement("p")
  cash.textContent = "Есть в наличии"
  priceDiv.appendChild(cash)

  const buttonDiv = document.createElement("div")
  buttonDiv.classList.add("hit-buttons")
  div.appendChild(buttonDiv)
  
  const buttonCart = document.createElement("a")
  buttonCart.href = ""
  buttonDiv.appendChild(buttonCart)

  const cartProduct = document.createElement("button")
  cartProduct.id = "hit-cart"
  cartProduct.textContent = "В корзину"
  buttonCart.appendChild(cartProduct)

  const buttonBuy = document.createElement("a")
  buttonBuy.href = ""
  buttonDiv.appendChild(buttonBuy)

  const buyProduct = document.createElement("button")
  buyProduct.id = "hit-buy"
  buyProduct.textContent = "Купить"
  buttonBuy.appendChild(buyProduct) 
  
  return div
}
const hitCardsDiv = document.querySelector(".hit-cards-on-sale")
const hit = "https://65d7137a27d9a3bc1d7a173c.mockapi.io/card"
fetch(hit)
  .then(response => response.json()) // json ды js тын массивына айналдырады
  .then(data => {
    data.forEach((product) => {
      hitCardsDiv.appendChild(createHitCards(product))
    })
  })
  .catch(error => console.error(error))

const newCards = [
  {
    id: 1,
    image: "./images/new-product-1.webp",
    text: "Как выбрать умные комплекты видеонаблюдение",
    data: "05.02.24"
  },
  {
    id: 2,
    image: "./images/new-product-2.webp",
    text: "Рецепт мисо-рамена",
    data: "07.02.24"
  },
  {
    id: 2,
    image: "./images/new-product-3.webp",
    text: "Рецепт драников из батата",
    data: "09.02.24"
  }
]
function newProduct(objProducts){
  const div = document.createElement("div")
  div.classList.add("new-card")

  const nav = document.createElement("a")
  div.appendChild(nav)

  const image = document.createElement("img")
  image.src = objProducts.image
  nav.appendChild(image)

  const data = document.createElement("p")
  data.textContent = objProducts.data
  nav.appendChild(data)

  const divText = document.createElement("div")
  nav.appendChild(divText)

  const text = document.createElement("h1")
  text.textContent = objProducts.text
  divText.appendChild(text)

  return div
}
const newMainDiv = document.querySelector(".new-product-cards")
for(let i = 0; i < newCards.length; i++){
  newMainDiv.appendChild(newProduct(newCards[i]))
}