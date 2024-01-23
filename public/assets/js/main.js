// стили
import '../style/style.scss'

// страницы
import.meta.glob('./pages/*.js');

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('body').classList.remove('body-on-load');
    console.log('page load');
});

