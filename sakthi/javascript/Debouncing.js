const search=document.querySelector("#search");
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}
const query=debounce(function(){
    console.log(search.value)
},1000);
search.addEventListener('input',query);