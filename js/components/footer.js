const footerNavigation = document.querySelector("#footer-navigation");
const footerContact = document.querySelector("#footer-contact");

if (footerNavigation) {
    footerNavigation.innerHTML = siteData.navigation.map(item => `
        <a
            href="${item.href}"
            class="w-fit font-['Inter'] text-sm text-neutral-300 transition-colors duration-300 hover:text-white"
        >
            ${item.label}
        </a>
    `).join("");
}

if (footerContact) {
    footerContact.innerHTML = `
        <a href="https://wa.me/919163999798" class="font-['Inter'] text-sm text-neutral-300 transition-colors duration-300 hover:text-white">
            ${siteData.contact.phone}
        </a>

        <a href="mailto:${siteData.contact.email}" class="font-['Inter'] text-sm text-neutral-300 transition-colors duration-300 hover:text-white">
            ${siteData.contact.email}
        </a>
    `;
}
