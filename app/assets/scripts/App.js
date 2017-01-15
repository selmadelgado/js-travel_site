import $ from 'jquery';
import Modal from './modules/Modal';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


var modal = new Modal();
var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();

new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "75%");