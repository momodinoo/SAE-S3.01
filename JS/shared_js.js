window.onload = () => {
    
    window.onscroll = function() {
        scroll()
    };

    function scroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = ~~((winScroll / height) * 100);
    document.getElementById("myBar").style.width = scrolled + "%";
    }
}



window.addEventListener('load', () => {

    const loader = document.querySelector('.loader');
    loader.classList.add('fondu-out');

})