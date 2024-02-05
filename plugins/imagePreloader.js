export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('img', function (el, url) {
        // console.log(el , url.value);
        // create img with js Image constructor
        const img = new Image();
        img.src = url.value;

        // after load img conver
        img.onload = function () {
            el.src = url.value;
            el.classList.add('fade-in-image')
        }

    })
})