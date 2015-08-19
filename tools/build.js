// run on terminal $ node r.js -o build.js
({
    baseUrl: "../assets/js/",
    paths: {
        jquery: "lib/jquery-1.11.3.min",
        domReady: "lib/domReady"
    },
    name: "app",
    out: "main-built.js"
})