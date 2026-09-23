const processGrid = document.querySelector("#process-grid");

if (processGrid) {
    processGrid.innerHTML = processSteps.map((step, index) => `
        <div class="process-step flex ${index % 2 === 0 ? "justify-end" : "justify-start"} mb-6 lg:mb-10">
            <article class="process-card group w-full max-w-[560px] rounded-[28px] border border-white/10 bg-[#111111] p-7 transition-transform duration-500 hover:-translate-y-2 sm:p-9 lg:p-10">

                <div class="flex items-start justify-between">
                    <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#181818] font-['Inter'] text-sm text-neutral-500">
                        ${step.number}
                    </span>

                    <span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#181818] text-white transition-transform duration-300 group-hover:rotate-45">
                        ↗
                    </span>
                </div>

                <div class="mt-16">
                    <h3 class="font-['Space_Grotesk'] text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                        ${step.title}
                    </h3>

                    <p class="mt-4 max-w-[480px] font-['Inter'] text-sm leading-[1.6] text-neutral-500 sm:text-base">
                        ${step.description}
                    </p>
                </div>

            </article>
        </div>
    `).join("");
}