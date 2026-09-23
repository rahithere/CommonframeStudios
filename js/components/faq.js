const faqList = document.querySelector("#faq-list");

if (faqList) {
    faqList.innerHTML = faqData.map((faq, index) => `
        <div class="faq-item border-t border-white/15">
            <button
                class="faq-question flex w-full items-center justify-between gap-8 py-7 text-left"
                type="button"
            >
                <span class="font-['Space_Grotesk'] text-xl font-medium tracking-[-0.02em] sm:text-2xl">
                    ${faq.question}
                </span>

                <span class="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#181818] text-lg transition-transform duration-300">
                    +
                </span>
            </button>

            <div class="faq-answer grid grid-rows-[0fr] transition-[grid-template-rows] duration-500">
                <div class="overflow-hidden">
                    <p class="max-w-[700px] pb-7 pr-12 font-['Inter'] text-sm leading-[1.7] text-neutral-400 sm:text-base">
                        ${faq.answer}
                    </p>
                </div>
            </div>
        </div>
    `).join("");

    const faqItems = faqList.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const button = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-icon");

        button.addEventListener("click", () => {
            const isOpen = answer.classList.contains("grid-rows-[1fr]");

            faqItems.forEach(otherItem => {
                otherItem.querySelector(".faq-answer").classList.remove("grid-rows-[1fr]");
                otherItem.querySelector(".faq-answer").classList.add("grid-rows-[0fr]");
                otherItem.querySelector(".faq-icon").classList.remove("rotate-45");
            });

            if (!isOpen) {
                answer.classList.remove("grid-rows-[0fr]");
                answer.classList.add("grid-rows-[1fr]");
                icon.classList.add("rotate-45");
            }
        });
    });
}