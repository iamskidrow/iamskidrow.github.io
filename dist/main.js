// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Populate all static content sections
    populateBasicInfo();
    populateSocials();
    populateQualifications();
    populateTechStack();
    populateExperience();
    populateProjects();

    // Set up both carousels with the generic setupCarousel function
    setupCarousel({
        name: 'achievements',
        dataSource: websiteData.securityWork,
        trackSelector: '.achievements-track',
        prevBtnSelector: '.achievements-prev-btn',
        nextBtnSelector: '.achievements-next-btn',
        itemContentCreator: createAchievementItemContent
    });

    setupCarousel({
        name: 'certifications',
        dataSource: websiteData.certifications,
        trackSelector: '.certifications-track',
        prevBtnSelector: '.certifications-prev-btn',
        nextBtnSelector: '.certifications-next-btn',
        itemContentCreator: createCertificationItemContent
    });

    // Set copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Populate basic information
function populateBasicInfo() {
    const basics = websiteData.basics;

    // Calculate and display age
    const currentYear = new Date().getFullYear();
    const age = currentYear - basics.birthYear;

    // Set name and age
    document.getElementById('user-name').textContent = `${basics.name}, ${age}`;

    // Set other basic information elements
    document.getElementById('title-text').textContent = basics.title;
    document.getElementById('email').textContent = basics.email;

    // Set profile picture
    const profilePic = document.getElementById('profile-pic');
    profilePic.src = basics.profilePic;
    profilePic.alt = `${basics.name}'s Profile Picture`;

    // Populate objective list
    const objectiveList = document.getElementById('objective-list');
    basics.objective.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        objectiveList.appendChild(li);
    });
}

// Populate social links
function populateSocials() {
    const socialsContainer = document.getElementById('socials--list');

    websiteData.socials.forEach(social => {
        const socialLink = document.createElement('a');
        socialLink.href = social.url;
        socialLink.target = "_blank";
        socialLink.innerHTML = `<i class="${social.icon}"></i> ${social.name}`;
        socialsContainer.appendChild(socialLink);
    });
}

// Populate qualifications
function populateQualifications() {
    const qualificationsContainer = document.getElementById('qualifications--list');

    websiteData.qualifications.forEach(qualification => {
        const li = document.createElement('li');

        if (typeof qualification === 'string') {
            // Simple text qualification
            li.textContent = qualification;
        } else if (qualification.university) {
            // Education qualification with university link
            // Create text node for prefix
            li.appendChild(document.createTextNode(qualification.prefix));

            // Create link for university name
            const link = document.createElement('a');
            link.href = qualification.link;
            link.target = "_blank";
            link.textContent = qualification.university;
            li.appendChild(link);

            // Add suffix text if exists
            if (qualification.suffix) {
                li.appendChild(document.createTextNode(qualification.suffix));
            }
        } else {
            // Backward compatibility for old format
            const link = document.createElement('a');
            link.href = qualification.link;
            link.target = "_blank";
            link.textContent = qualification.text;
            li.appendChild(link);
        }

        qualificationsContainer.appendChild(li);
    });
}


// Populate tech stack
function populateTechStack() {
    const techStackContainer = document.getElementById('tech-stack-container');

    // For each category in tech stack
    Object.entries(websiteData.techStack).forEach(([category, skills]) => {
        // Create category container
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'tech-category';

        // Add category title
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        // Create container for tech cards
        const techCardsDiv = document.createElement('div');
        techCardsDiv.className = 'tech-cards';

        // Add each skill as a card
        skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'card--techstack';
            skillCard.textContent = skill;
            techCardsDiv.appendChild(skillCard);
        });

        // Add tech cards to category and add to main container
        categoryDiv.appendChild(techCardsDiv);
        techStackContainer.appendChild(categoryDiv);
    });
}

// Populate experience
function populateExperience() {
    const experienceContainer = document.getElementById('experience-container');

    websiteData.experience.forEach(job => {
        // Create work history card
        const jobCard = document.createElement('div');
        jobCard.className = 'card--work-history';

        // Add job role/title with company link
        const roleElement = document.createElement('h3');
        roleElement.textContent = `${job.role} at `;

        // Create and append company link separately
        const companyLink = document.createElement('a');
        companyLink.href = job.companyUrl;
        companyLink.target = "_blank";
        companyLink.textContent = job.company;
        roleElement.appendChild(companyLink);
        jobCard.appendChild(roleElement);

        // Add period
        const periodElement = document.createElement('p');
        periodElement.textContent = job.period;
        jobCard.appendChild(periodElement);

        // Add description
        const descElement = document.createElement('p');
        descElement.textContent = job.description;
        jobCard.appendChild(descElement);

        // Add responsibilities if any
        if (job.responsibilities && job.responsibilities.length > 0) {
            const respList = document.createElement('ul');

            job.responsibilities.forEach(resp => {
                const respItem = document.createElement('li');
                respItem.textContent = resp;
                respList.appendChild(respItem);
            });

            jobCard.appendChild(respList);
        }

        experienceContainer.appendChild(jobCard);
    });
}

// Populate projects section
function populateProjects() {
    const container = document.getElementById('projects-container');

    websiteData.projects.forEach(project => {
        // Create project card
        const projectCard = document.createElement('div');
        projectCard.className = 'card--project';

        // Add project title with link
        const projectTitle = document.createElement('a');
        projectTitle.href = project.url;
        projectTitle.target = '_blank';
        projectTitle.textContent = project.title;
        projectCard.appendChild(projectTitle);

        // Add project description
        const projectDesc = document.createElement('p');
        projectDesc.textContent = project.description;
        projectCard.appendChild(projectDesc);

        container.appendChild(projectCard);
    });
}

/**
 * Generic function to set up a carousel
 * @param {Object} config - Configuration object
 */
function setupCarousel(config) {
    const {
        dataSource,
        trackSelector,
        prevBtnSelector,
        nextBtnSelector,
        itemContentCreator
    } = config;

    const carouselTrack = document.querySelector(trackSelector);
    const prevBtn = document.querySelector(prevBtnSelector);
    const nextBtn = document.querySelector(nextBtnSelector);
    const carouselContainer = carouselTrack.closest('.carousel-container');

    let currentIndex = 0;
    let autoSlideInterval;
    const autoSlideDelay = 7000; // 7 seconds

    // Create carousel items
    dataSource.forEach(item => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';

        // Use the provided function to create content
        const itemContent = itemContentCreator(item);
        carouselItem.appendChild(itemContent);
        carouselTrack.appendChild(carouselItem);
    });

    // Navigation functions
    const goToSlide = index => {
        carouselTrack.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    };

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % dataSource.length;
        goToSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = currentIndex === 0 ? dataSource.length - 1 : currentIndex - 1;
        goToSlide(prevIndex);
    };

    // Auto-sliding functions
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    // Pause auto-sliding on hover
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        startAutoSlide();
    });

    // Start auto-sliding
    startAutoSlide();
}

/**
 * Creates content for achievement carousel items
 * @param {Object} item - Achievement data
 * @returns {HTMLElement} - The content element
 */
function createAchievementItemContent(item) {
    // Create content layout
    const itemContent = document.createElement('div');
    itemContent.className = 'carousel-item-content';

    // Left column for image
    const imageColumn = document.createElement('div');
    imageColumn.className = 'carousel-image-column';

    // Add image (certificate)
    const image = document.createElement('img');
    image.src = item.certificateImage;
    image.alt = item.certificateAlt || `${item.company} Certificate`;
    imageColumn.appendChild(image);

    // Right column for text
    const textColumn = document.createElement('div');
    textColumn.className = 'carousel-text-column';

    // Add company name with security icon
    const titleEl = document.createElement('h3');
    titleEl.innerHTML = `🔐 ${item.company}`;
    textColumn.appendChild(titleEl);

    // Add year
    const yearEl = document.createElement('p');
    yearEl.className = 'carousel-year';
    yearEl.textContent = item.year;
    textColumn.appendChild(yearEl);

    // Add description
    const descEl = document.createElement('p');
    descEl.innerHTML = item.description;
    textColumn.appendChild(descEl);

    // Add achievements list if available
    if (item.achievements && item.achievements.length > 0) {
        const achievementsList = document.createElement('ul');
        achievementsList.className = 'carousel-achievements';

        item.achievements.forEach(achievement => {
            const listItem = document.createElement('li');

            // Handle different achievement formats
            if (typeof achievement === 'string') {
                listItem.textContent = achievement;
            } else {
                // Format with icon and optional link
                let content = achievement.icon ? `${achievement.icon} ` : '';

                if (achievement.link) {
                    content += `<a href="${achievement.link}" target="_blank">${achievement.text}</a>`;
                } else {
                    content += achievement.text;
                }

                listItem.innerHTML = content;
            }

            achievementsList.appendChild(listItem);
        });

        textColumn.appendChild(achievementsList);
    }

    // Add columns to item content
    itemContent.appendChild(imageColumn);
    itemContent.appendChild(textColumn);

    return itemContent;
}

/**
 * Creates content for certification carousel items
 * @param {Object} cert - Certification data
 * @returns {HTMLElement} - The content element
 */
function createCertificationItemContent(cert) {
    const itemContent = document.createElement('div');
    itemContent.className = 'carousel-item-content';

    // Image Column
    const imageColumn = document.createElement('div');
    imageColumn.className = 'carousel-image-column';
    const image = document.createElement('img');
    image.src = cert.certificateImage;
    image.alt = `${cert.title} Certificate`;
    imageColumn.appendChild(image);

    // Text Column
    const textColumn = document.createElement('div');
    textColumn.className = 'carousel-text-column';

    // Add certification title
    const titleEl = document.createElement('h3');
    titleEl.innerHTML = `🎓 ${cert.title}`;
    textColumn.appendChild(titleEl);

    // Add issuer and year
    const yearEl = document.createElement('p');
    yearEl.className = 'carousel-year';
    yearEl.textContent = `${cert.issuer} • ${cert.year}`;
    textColumn.appendChild(yearEl);

    // Add description
    const descEl = document.createElement('p');
    descEl.textContent = cert.description;
    textColumn.appendChild(descEl);

    // Add certificate view link if available
    if (cert.certificateUrl && cert.certificateUrl !== '#') {
        const linkEl = document.createElement('a');
        linkEl.href = cert.certificateUrl;
        linkEl.target = "_blank";
        linkEl.className = "btn--view-certificate";
        linkEl.innerHTML = '<i class="fas fa-external-link-alt"></i> View Certificate';
        textColumn.appendChild(linkEl);
    }

    // Add skills list if available
    if (cert.skills && cert.skills.length > 0) {
        const skillsContainer = document.createElement('div');
        skillsContainer.className = 'cert-skills';

        const skillsHeading = document.createElement('p');
        skillsHeading.className = 'skills-heading';
        skillsHeading.innerHTML = '<strong>Skills:</strong>';
        skillsContainer.appendChild(skillsHeading);

        const skillsList = document.createElement('div');
        skillsList.className = 'skills-pills';

        cert.skills.forEach(skill => {
            const skillPill = document.createElement('span');
            skillPill.className = 'skill-pill';
            skillPill.textContent = skill;
            skillsList.appendChild(skillPill);
        });

        skillsContainer.appendChild(skillsList);
        textColumn.appendChild(skillsContainer);
    }

    // Add columns to item content
    itemContent.appendChild(imageColumn);
    itemContent.appendChild(textColumn);

    return itemContent;
}