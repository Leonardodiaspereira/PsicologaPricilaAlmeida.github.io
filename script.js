document.addEventListener("DOMContentLoaded", function() {
    var faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function(item) {
        item.querySelector(".faq-question").addEventListener("click", function() {
            item.classList.toggle("active");
            var arrow = this.querySelector(".faq-arrow i");
            if (item.classList.contains("active")) {
                arrow.classList.remove("fa-chevron-down");
                arrow.classList.add("fa-chevron-up");
            } else {
                arrow.classList.remove("fa-chevron-up");
                arrow.classList.add("fa-chevron-down");
            }
        });
    });
});
