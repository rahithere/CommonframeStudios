const categoriesContainer = document.querySelector("#service-categories");

if (categoriesContainer) {
    categoriesContainer.innerHTML = serviceCategories.map((category, index) => `
        <div class="service-row group flex w-full items-center justify-between border-t border-white/15 py-6 sm:py-7 lg:py-8 ${index === serviceCategories.length - 1 ? "border-b-0" : ""}">
            <h3 class="font-['Space_Grotesk'] text-4xl font-normal leading-none tracking-[-0.04em] text-white transition-opacity duration-300 group-hover:opacity-60 sm:text-5xl lg:text-6xl">
                ${category}
            </h3>

            <span class="h-6 w-6 shrink-0 rounded-full bg-neutral-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </div>
    `).join("");
}

//cards
const servicesGrid = document.querySelector("#services-grid");

if (servicesGrid) {
    servicesGrid.innerHTML = services.map((service, index) => `
        <article class="service-card group ${index === 0 ? "bg-[#111111] text-white" : "bg-[#f5f5f5] text-black"} min-h-[480px] rounded-[28px] p-7 transition-transform duration-500 ease-out hover:-translate-y-2 sm:p-10 lg:p-12">    
            <div class="flex items-start justify-between">
                <span class="font-['Inter'] text-sm ${index === 0 ? "text-neutral-500" : "text-neutral-400"}">
                    ${service.number}
                </span>

                <span class="flex h-11 w-11 items-center justify-center rounded-full ${index === 0 ? "bg-white text-black" : "bg-black text-white"} transition-transform duration-500 ease-out group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                </span>
            </div>

            <div class="mt-24 max-w-[600px]">
                <h3 class="font-['Space_Grotesk'] text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                    ${service.title}
                </h3>

                <p class="mt-6 max-w-[500px] font-['Inter'] text-base leading-[1.6] ${index === 0 ? "text-neutral-400" : "text-neutral-600"} sm:text-lg">
                    ${service.description}
                </p>
            </div>

            <div class="mt-12 flex flex-wrap gap-2">
                     ${service.tags.map(tag => `
                    <span class="rounded-full border px-4 py-2 font-['Inter'] text-xs transition-transform duration-300                group-hover:-translate-y-1 ${index === 0 ? "border-white/20 text-neutral-300" : "border-black/10 text-neutral-600"}">
                    ${tag}
                    </span>
                `).join("")}
            </div>
        </article>
    `).join("");
}