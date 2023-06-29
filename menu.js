const Hamburger = document.querySelector('.burger-menu svg');
const navmenu = document.querySelector('.burger-dropdown');
let totalCart = 0;



let macaroons = {
  name: 'Macaroons',
  image: "assets/img/menu-items/macaroons.jpg",
  price: 2.75,
  quantity: 0,
};

const guava = {
  name: 'Guava',
  image: "assets/img/menu-items/Guava.jpg",
  price: 3.50,
  quantity: 0,
};

const cinnamon_bun = {
  name: 'Cinnamon Bun',
  image: "assets/img/menu-items/cinnamon-bun.jpg",
  price: 3.50,
  quantity: 0,
};

const churros = {
  name: 'Churros',
  image: "assets/img/menu-items/churros.jpg",
  price: 1.75,
  quantity: 0,
};

const baguette = {
  name: 'Baguette',
  image: "assets/img/menu-items/baguette.jpg",
  price: 8.20,
  quantity: 0,
};

const croissant = {
  name: 'Croissant',
  image: "assets/img/menu-items/croissant.jpg",
  price: 4.35,
  quantity: 0,
};

const sugar_coated_donuts = {
  name: 'Sugar Coated Donuts',
  image: "assets/img/menu-items/sugar-coated-donuts.jpg",
  price: 3.65,
  quantity: 0,
};

const buttons = document.querySelectorAll('.item-btn');
const remove_btns = document.querySelectorAll('.remove-btn');
buttons.forEach((button) => {
    const btnID = button.id;
    button.addEventListener('click', () => {
      const itemID = product_list(btnID);
      addNewItem(itemID);
    });
});
remove_btns.forEach((button) => {
  const btnID = button.id;
  button.addEventListener('click', () => {
    const itemID = product_list(btnID);
    subtractItem(itemID)
  });
});

Hamburger.addEventListener('click', () => {
  navmenu.classList.toggle('active');
});


function product_list(btnID){
  switch(btnID){
    case 'macaroons_btn':
      return macaroons;
    case 'guava_btn':
      return guava;
    case 'cinnamon_bun_btn':
      return cinnamon_bun;
    case 'churros_btn':
      return churros;
    case 'baguette_btn':
      return baguette;
    case 'croissant_btn':
      return croissant;
    case 'sugar_coated_donuts_btn':
      return sugar_coated_donuts;
    default:
      return null;
  }
}


function subtractItem(item) {
  let card = document.getElementById(item.name);
  let quant_text = card.querySelector('h6');
  item.quantity--; 
  quant_text.textContent = `Quantity: ${item.quantity}`;

  let cart_list = document.querySelector('.checkout h1');
  totalCart -= item.price; 
  cart_list.textContent = `Total: $${totalCart.toFixed(2)}`;
}

function addNewItem(item) {
  let card = document.getElementById(item.name);
  let quant_text = card.querySelector('h6');
  item.quantity++; 
  quant_text.textContent = `Quantity: ${item.quantity}`;

  let cart_list = document.querySelector('.checkout h1');
  totalCart += item.price; 
  cart_list.textContent = `Total: $${totalCart.toFixed(2)}`;
}