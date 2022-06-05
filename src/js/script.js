class Item {
    constructor(img, name, price, oldPrice, stock, width, height, mt) { 
        this.img = img; 
        this.name = name;
        this.price = price;
        this.oldPrice = oldPrice;
        this.stock = stock;
        this.width = width;
        this.height = height;
        this.mt = mt;
    }
    bildItem() {
        let div = document.createElement('div');
        div.className = "item";

        if (!this.stock) {
            div.innerHTML = 
            `
            <img src="./img/icons/mobile/${this.img}.png" alt="${this.img}" width = "${this.width}px" height = "${this.height}px">
            <p>${this.name}</p>
            <div class="item-price" style = "margin-top:${this.mt}px;">${this.price}</div>
            <div class="item-to-cart"></div>
            `
        } else {
            div.innerHTML = 
            `
            <div class="sale">% Акция</div>
            <img src="./img/icons/mobile/${this.img}.png" alt="${this.img}" width = "${this.width}px" height = "${this.height}px">
            <p>${this.name}</p>
            <div class="item-price" style = "margin-top:${this.mt}px;">${this.price}</div>
            <div class="old-price">${this.oldPrice}</div>
            <div class="item-to-cart"></div>
            `
        }
        
        document.querySelector(".items").append(div);
    }
}

if (window.screen.width <= 415) {
    document.querySelector(".group-icon").innerHTML = 
    `
    <span><img src="./img/icons/mobile/deliver.png" alt="delM" id="delM"></span>
    <span><img src="./img/icons/mobile/lk.png" alt="lkM" id="lkM"></span>
    <span><img src="./img/icons/mobile/cart.png" alt="cartM" id="cartM"></span>
    `;

    let elem = document.createElement(`div`);
    elem.classList.add('filter-and-sort')
    elem.innerHTML = 
    `
    <div class="filter-text-mobile"><p>Фильтры</p></div>
    <div class="sort-text-mobile"><p>Сортировка</p></div>
    `;
    document.querySelector(".sort-and-count").append(elem);

    let item1 = new Item('radiator1', 'Биметаллический радиатор Royal Thermo Indigo Super ', "13 890", false, false, '121', '147', '92');
    let item2 = new Item('radiator1', 'Биметаллический радиатор Royal Thermo Indigo Super ', "13 890", '5 890', true, '152', '143', '87');
    item1.bildItem();
    item2.bildItem();
    item1.bildItem();
    item1.bildItem();
    item1.bildItem();
    item1.bildItem();
    item1.bildItem();
    item1.bildItem();

    document.querySelector(".burger-menu").addEventListener('click', () => {
        document.querySelector(".menu").style.display = 'block';
        document.querySelector(".menu").style.overflow = 'scroll';
        document.querySelector("body").style.overflow = 'hidden';
        document.querySelector("body").style.position = 'fixed';
    });

    document.querySelector(".menu-close").addEventListener('click', () => {
        document.querySelector(".menu").style.display = 'none';
        document.querySelector(".menu").style.overflow = '';
        document.querySelector("body").style.overflow = '';
        document.querySelector("body").style.position = '';
    });

    document.querySelector(".filter-text-mobile").addEventListener('click', () => {
        document.querySelector(".filter").style.display = 'block';
        document.querySelector(".filter").style.overflow = 'scroll';
        document.querySelector("body").style.overflow = 'hidden';
        document.querySelector("body").style.position = 'fixed';
        console.log(document.querySelector("body").style.position = 'fixed');
        console.log(document.querySelector("body").style.overflow = 'hidden');
    });

} else {
    
    let item1 = new Item('radiator1', 'Биметаллический радиатор Royal Thermo Indigo Super', "4 250", false, false, '241', '293', '132');
    let item2 = new Item('radiator2', 'Биметаллический радиатор Royal Thermo Indigo Super', "4 250", "5 890", true , '288', '270', '144');
    let item3 = new Item('radiator3', 'Радиатор биметаллический Royal Thermo PianoForte Bianco Traffico', "4250", false, false, '246', '246', '148');
    let item24 = new Item('radiator2', 'Биметаллический радиатор Royal Thermo Indigo Super', "4 250", false, false, '288', '270', '144');
    let item34 = new Item('radiator3', 'Радиатор биметаллический Royal Thermo PianoForte Bianco Traffico', "4250", '10000', true, '246', '246', '148');
    
    
    
    item1.bildItem();
    item2.bildItem();
    item3.bildItem();
    item1.bildItem();
    item24.bildItem();
    item3.bildItem();
    item1.bildItem();
    item2.bildItem();
    item3.bildItem();
    item1.bildItem();
    item24.bildItem();
    item3.bildItem();
    item1.bildItem();
    item24.bildItem();
    item3.bildItem();
}


window.onload = function(){
    slideOne();
    slideTwo();
    
    displayValOne.style.position = "absolute";
    displayValTwo.style.position = "absolute";
    displayValOne.style.left = `${-10}px`;
}

var startPosOne = 0;

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.innerHTML = `${sliderOne.value}₽`;
    fillColor();
    displayValOne.style.left = `${sliderOne.value/1000 * 2}px`
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.innerHTML = `23 000₽`;
    fillColor();
    displayValTwo.style.left= `${sliderTwo.value/1000 * 4.9}px`
}
function fillColor(){
    percent1 = ((sliderOne.value - 3000) / sliderMaxValue) * 100;
    percent2 = ((sliderTwo.value - 1500) / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #38D3E8 ${percent1}% , #38D3E8 ${percent2}%, #dadae5 ${percent2}%)`;
}