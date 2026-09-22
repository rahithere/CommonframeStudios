const projectsGrid = document.querySelector("#projects-grid");

if (projectsGrid) {
    projectsGrid.innerHTML = projects.map(project => `
        <a
            href="${project.url}"
            class="project-card group relative block aspect-[4/3] overflow-hidden rounded-[28px] bg-[#111]"
        >
            <img
                src="${project.image}"
                alt="${project.title}"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style="object-position: ${project.imagePosition};"
            >

            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

            <div class="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(tag => `
                        <span class="rounded-full border border-white/30 bg-black/10 px-4 py-2 font-['Inter'] text-xs text-white backdrop-blur-md">
                            ${tag}
                        </span>
                    `).join("")}
                </div>

                <div class="mt-5 flex items-end justify-between gap-6">
                    <div>
                        <p class="mb-2 font-['Inter'] text-xs font-medium uppercase tracking-[0.14em] text-white/60">
                            ${project.category}
                        </p>

                        <h3 class="font-['Space_Grotesk'] text-3xl font-medium leading-none tracking-[-0.04em] text-white sm:text-4xl">
                            ${project.title}
                        </h3>
                    </div>

                    <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                        ↗
                    </span>
                </div>
            </div>
        </a>
    `).join("");
}