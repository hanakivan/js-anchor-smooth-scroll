Array.from(document.querySelectorAll(".site-nav-list a")).forEach(function (element) {
    element.addEventListener("click", function (e) {
        const href = e.target.href;
        const hash = href.substr(href.indexOf("#")+1);

        try {
            const $element = document.querySelector(`#${hash}`);

            if($element) {
                e.preventDefault();
                $element.scrollIntoView({behavior: "smooth"});
            }
        } catch {}
    });
});