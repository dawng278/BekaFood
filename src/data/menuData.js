// src/data/menuData.js

// Import ảnh cho categories
import hotComboIcon from '../assets/images/categories/hot-combo.png';
import friedChickenIcon from '../assets/images/categories/fried-chicken-light.png';
import burgerIcon from '../assets/images/categories/burger-menu.png';
import snacksIcon from '../assets/images/categories/snacks.png';
import dessertsIcon from '../assets/images/categories/desserts.png';
import drinksIcon from '../assets/images/categories/drinks.png';

// Import ảnh cho các sản phẩm/combo
import combo1Img from '../assets/images/menu/hotCombo/combo1.png';
import combo2Img from '../assets/images/menu/hotCombo/combo2.png';
import combo3Img from '../assets/images/menu/hotCombo/combo3.png';
import combo4Img from '../assets/images/menu/hotCombo/combo4.png';
import combo5Img from '../assets/images/menu/hotCombo/combo5.png';

// Import ảnh cho các sản phẩm/burger
import beefBurgerImg from '../assets/images/menu/burger/beef-burger.png';


export const menuCategories = [
    { id: 'hot-combo', name: 'Hot Combo', icon: hotComboIcon },
    { id: 'fried-chicken', name: 'Fried Chicken', icon: friedChickenIcon },
    { id: 'burger', name: 'Burger', icon: burgerIcon },
    { id: 'snacks', name: 'Snacks', icon: snacksIcon },
    { id: 'desserts', name: 'Desserts', icon: dessertsIcon },
    { id: 'drinks', name: 'Drinks', icon: drinksIcon },
];

export const menuItems = [
    {
        id: 'combo1',
        name: 'Combo 1',
        description: 'Delicious burger, crispy fried chicken, and refreshing Pepsi.',
        price: 555000,
        image: combo1Img,
        category: 'hot-combo',
    },
    {
        id: 'combo2',
        name: 'Combo 2',
        description: 'Golden fries, juicy fried chicken, and cool Pepsi.',
        price: 555000,
        image: combo2Img,
        category: 'hot-combo',
    },
    {
        id: 'combo3',
        name: 'Combo 3',
        description: 'Two tasty burgers, golden fries, and two Pepsis.',
        price: 555000,
        image: combo3Img,
        category: 'hot-combo',
    },
    {
        id: 'combo4',
        name: 'Combo 4',
        description: 'Two burgers, crispy fried chicken, and Pepsi.',
        price: 555000,
        image: combo4Img,
        category: 'hot-combo',
    },
    {
        id: 'combo5',
        name: 'Combo 5',
        description: 'Two burgers, golden fries, and two Pepsis.',
        price: 555000,
        image: combo5Img,
        category: 'hot-combo',
    },
    {
        id: 'single-burger',
        name: 'Classic Burger',
        description: 'Our signature beef burger.',
        price: 120000,
        image: beefBurgerImg,
        category: 'burger'
    },
];