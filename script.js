/* =========================================================
   TAWJIH — SCRIPT V4
   Compatible avec le HTML fourni
   ========================================================= */


/* =========================================================
   1. DATABASE — UNIVERSITIES
   ========================================================= */

const universities = [

    /* =====================================================
       🇲🇦 MOROCCO
       ===================================================== */

    {
        name: "Mohammed VI Polytechnic University (UM6P)",
        country: "Morocco",
        type: "University",
        level: "Bachelor",
        fields: ["Business", "Engineering", "Computer Science", "Economics", "Science"],
        language: "English / French",
        location: "Benguerir / Rabat",
        description: "A research-oriented Moroccan university focused on innovation, science, technology, business and entrepreneurship.",
        scholarship: "Scholarships and financial support available",
        goals: ["scholarship", "top", "research", "career", "international"],
        tags: ["Innovation", "Research", "STEM", "Business"],
        official: "https://www.um6p.ma/"
    },

    {
        name: "Al Akhawayn University in Ifrane (AUI)",
        country: "Morocco",
        type: "University",
        level: "Bachelor",
        fields: ["Business", "Computer Science", "Engineering", "Economics", "Political Science"],
        language: "English",
        location: "Ifrane",
        description: "An English-language liberal arts university offering an international academic environment in Morocco.",
        scholarship: "Financial aid and scholarships available",
        goals: ["scholarship", "international", "career", "leadership"],
        tags: ["English", "International", "Business"],
        official: "https://aui.ma/"
    },

    {
        name: "International University of Rabat (UIR)",
        country: "Morocco",
        type: "Private University",
        level: "Bachelor",
        fields: ["Engineering", "Business", "Computer Science", "Political Science", "Economics"],
        language: "French / English",
        location: "Rabat",
        description: "A multidisciplinary university offering programs in engineering, business, political science and technology.",
        scholarship: "Scholarships may be available",
        goals: ["scholarship", "career", "international", "research"],
        tags: ["Engineering", "Business", "International"],
        official: "https://www.uir.ac.ma/"
    },

    {
        name: "Université Mohammed V de Rabat",
        country: "Morocco",
        type: "Public University",
        level: "Bachelor",
        fields: ["Science", "Economics", "Political Science", "Law", "Computer Science"],
        language: "French / Arabic",
        location: "Rabat",
        description: "One of Morocco's major public universities with a wide range of academic disciplines.",
        scholarship: "Student support available",
        goals: ["career", "research", "top"],
        tags: ["Public", "Science", "Law"],
        official: "https://www.um5.ac.ma/"
    },

    {
        name: "Université Hassan II de Casablanca",
        country: "Morocco",
        type: "Public University",
        level: "Bachelor",
        fields: ["Science", "Engineering", "Economics", "Business", "Medicine", "Computer Science"],
        language: "French / Arabic",
        location: "Casablanca",
        description: "A large public university offering programs across science, engineering, economics, medicine and other disciplines.",
        scholarship: "Student support available",
        goals: ["career", "research", "top"],
        tags: ["Public", "Engineering", "Science"],
        official: "https://www.univh2c.ma/"
    },

    {
        name: "Université Cadi Ayyad",
        country: "Morocco",
        type: "Public University",
        level: "Bachelor",
        fields: ["Science", "Engineering", "Computer Science", "Economics", "Law"],
        language: "French / Arabic",
        location: "Marrakech",
        description: "A major Moroccan public university known for science, technology and research.",
        scholarship: "Student support available",
        goals: ["career", "research", "top"],
        tags: ["Public", "Science", "Technology"],
        official: "https://www.uca.ma/"
    },

    {
        name: "Université Ibn Zohr",
        country: "Morocco",
        type: "Public University",
        level: "Bachelor",
        fields: ["Science", "Economics", "Business", "Computer Science", "Law"],
        language: "French / Arabic",
        location: "Agadir",
        description: "Major public university serving the Souss-Massa region and surrounding areas.",
        scholarship: "Student support available",
        goals: ["career", "research"],
        tags: ["Agadir", "Public", "Science", "Business"],
        official: "https://www.uiz.ac.ma/"
    },

    {
        name: "ENCG — École Nationale de Commerce et de Gestion",
        country: "Morocco",
        type: "Business School",
        level: "Bachelor",
        fields: ["Business", "Management", "Finance", "Marketing", "Economics"],
        language: "French",
        location: "Several Moroccan cities",
        description: "A network of public business schools specializing in management, finance, marketing and economics.",
        scholarship: "Public institution and student support",
        goals: ["career", "top", "scholarship", "leadership"],
        tags: ["Business", "Management", "Finance"],
        official: "https://www.encg.umi.ac.ma/"
    },

    {
        name: "ENSA — Écoles Nationales des Sciences Appliquées",
        country: "Morocco",
        type: "Engineering School",
        level: "Engineering",
        fields: ["Engineering", "Computer Science", "Technology", "Electronics"],
        language: "French",
        location: "Several Moroccan cities",
        description: "A network of Moroccan public engineering schools focused on applied sciences and technology.",
        scholarship: "Student support available",
        goals: ["career", "research", "top", "scholarship"],
        tags: ["Engineering", "STEM", "Technology"],
        official: "https://www.ensa.ac.ma/"
    },

    {
        name: "ENAM — École Nationale d'Agriculture de Meknès",
        country: "Morocco",
        type: "Engineering School",
        level: "Engineering",
        fields: ["Science", "Engineering", "Agriculture", "Environment"],
        language: "French",
        location: "Meknès",
        description: "A Moroccan higher education institution specializing in agricultural sciences, engineering and sustainable development.",
        scholarship: "Student support may be available",
        goals: ["research", "career", "scholarship"],
        tags: ["Agriculture", "Environment", "Science"],
        official: "https://www.enameknes.ma/"
    },

    {
        name: "ISCAE — Institut Supérieur de Commerce et d'Administration des Entreprises",
        country: "Morocco",
        type: "Business School",
        level: "Bachelor",
        fields: ["Business", "Management", "Finance", "Marketing", "Economics"],
        language: "French",
        location: "Casablanca / Rabat",
        description: "A leading Moroccan business and management institution.",
        scholarship: "Financial support may be available",
        goals: ["career", "top", "leadership"],
        tags: ["Business", "Management", "Finance"],
        official: "https://www.groupeiscae.ma/"
    },

    {
        name: "École Mohammadia d'Ingénieurs (EMI)",
        country: "Morocco",
        type: "Engineering School",
        level: "Engineering",
        fields: ["Engineering", "Computer Science", "Technology", "Mathematics"],
        language: "French",
        location: "Rabat",
        description: "One of Morocco's well-known engineering schools, offering advanced scientific and engineering education.",
        scholarship: "Student support available",
        goals: ["top", "career", "research"],
        tags: ["Engineering", "STEM", "Technology"],
        official: "https://www.emi.ac.ma/"
    },

    {
        name: "EHTP — École Hassania des Travaux Publics",
        country: "Morocco",
        type: "Engineering School",
        level: "Engineering",
        fields: ["Engineering", "Mathematics", "Computer Science", "Technology"],
        language: "French",
        location: "Casablanca",
        description: "Engineering school known for civil engineering, infrastructure, telecommunications and related fields.",
        scholarship: "Student support available",
        goals: ["top", "career", "research"],
        tags: ["Engineering", "Infrastructure", "STEM"],
        official: "https://www.ehtp.ac.ma/"
    },

    {
        name: "INPT — Institut National des Postes et Télécommunications",
        country: "Morocco",
        type: "Engineering School",
        level: "Engineering",
        fields: ["Computer Science", "Engineering", "Technology", "AI"],
        language: "French",
        location: "Rabat",
        description: "Moroccan engineering institution specializing in telecommunications, digital technologies and information systems.",
        scholarship: "Student support available",
        goals: ["career", "research", "top"],
        tags: ["AI", "Technology", "Computer Science"],
        official: "https://www.inpt.ac.ma/"
    },

    {
        name: "ESCA École de Management",
        country: "Morocco",
        type: "Business School",
        level: "Bachelor",
        fields: ["Business", "Management", "Marketing", "Finance", "Economics"],
        language: "French / English",
        location: "Casablanca",
        description: "Business school offering management and business education with an international orientation.",
        scholarship: "Scholarships may be available",
        goals: ["career", "international", "leadership"],
        tags: ["Business", "Management", "International"],
        official: "https://www.esca.ma/"
    },

    {
        name: "Université Euromed de Fès",
        country: "Morocco",
        type: "Private University",
        level: "Bachelor",
        fields: ["Engineering", "Business", "Political Science", "Architecture", "Technology"],
        language: "French / English",
        location: "Fès",
        description: "International university offering multidisciplinary programs in engineering, business and social sciences.",
        scholarship: "Scholarships may be available",
        goals: ["international", "career", "research"],
        tags: ["International", "Engineering", "Business"],
        official: "https://www.ueuromed.org/"
    },

    {
        name: "Université Internationale de Casablanca",
        country: "Morocco",
        type: "Private University",
        level: "Bachelor",
        fields: ["Business", "Engineering", "Computer Science", "Management"],
        language: "French / English",
        location: "Casablanca",
        description: "Private university offering programs in business, engineering and technology.",
        scholarship: "Scholarships and financial support may be available",
        goals: ["career", "international"],
        tags: ["Business", "Engineering", "Technology"],
        official: "https://www.uic.ac.ma/"
    },


    /* =====================================================
       🇺🇸 UNITED STATES
       ===================================================== */

    {
        name: "Harvard University",
        country: "United States",
        type: "Ivy League",
        level: "Bachelor",
        fields: ["Business", "Economics", "Computer Science", "Engineering", "Political Science", "Science"],
        language: "English",
        description: "Highly selective Ivy League university with strong programs across many disciplines.",
        scholarship: "Need-based financial aid",
        goals: ["scholarship", "top", "international", "leadership", "research"],
        tags: ["Ivy League", "Leadership", "Research"],
        official: "https://college.harvard.edu/"
    },

    {
        name: "Yale University",
        country: "United States",
        type: "Ivy League",
        level: "Bachelor",
        fields: ["Economics", "Computer Science", "Engineering", "Political Science", "Science"],
        language: "English",
        description: "Ivy League university known for liberal arts, research and leadership.",
        scholarship: "Need-based financial aid",
        goals: ["scholarship", "top", "leadership", "research"],
        tags: ["Ivy League", "Leadership"],
        official: "https://admissions.yale.edu/"
    },

    {
        name: "Princeton University",
        country: "United States",
        type: "Ivy League",
        level: "Bachelor",
        fields: ["Engineering", "Economics", "Computer Science", "Political Science", "Science"],
        language: "English",
        description: "Highly selective research university with strong undergraduate programs.",
        scholarship: "Need-based financial aid",
        goals: ["scholarship", "top", "research"],
        tags: ["Ivy League", "Engineering", "Research"],
        official: "https://admission.princeton.edu/"
    },

    {
        name: "University of Pennsylvania",
        country: "United States",
        type: "Ivy League",
        level: "Bachelor",
        fields: ["Business", "Finance", "Economics", "Engineering", "Computer Science"],
        language: "English",
        description: "Ivy League university particularly known for business and entrepreneurship.",
        scholarship: "Need-based financial aid",
        goals: ["scholarship", "top", "career", "leadership"],
        tags: ["Ivy League", "Business", "Finance"],
        official: "https://admissions.upenn.edu/"
    },

    {
        name: "Cornell University",
        country: "United States",
        type: "Ivy League",
        level: "Bachelor",
        fields: ["Engineering", "Computer Science", "Business", "Architecture", "Science"],
        language: "English",
        description: "Broad Ivy League university with strong STEM, business and research programs.",
        scholarship: "Need-based financial aid",
        goals: ["scholarship", "top", "research", "career"],
        tags: ["Ivy League", "Engineering", "Business"],
        official: "https://admissions.cornell.edu/"
    },


    /* =====================================================
       🇬🇧 UNITED KINGDOM
       ===================================================== */

    {
        name: "University of Oxford",
        country: "United Kingdom",
        type: "University",
        level: "Bachelor",
        fields: ["Economics", "Engineering", "Computer Science", "Political Science", "Science"],
        language: "English",
        description: "One of the world's oldest and most selective universities.",
        scholarship: "Scholarships and funding opportunities",
        goals: ["top", "research", "leadership", "international"],
        tags: ["UK", "Research", "Leadership"],
        official: "https://www.ox.ac.uk/admissions/undergraduate"
    },

    {
        name: "University of Cambridge",
        country: "United Kingdom",
        type: "University",
        level: "Bachelor",
        fields: ["Engineering", "Computer Science", "Economics", "Mathematics", "Science"],
        language: "English",
        description: "World-leading UK research university with strong STEM and economics programs.",
        scholarship: "Funding opportunities",
        goals: ["top", "research", "international"],
        tags: ["UK", "STEM", "Research"],
        official: "https://www.undergraduate.study.cam.ac.uk/"
    },

    {
        name: "Imperial College London",
        country: "United Kingdom",
        type: "University",
        level: "Bachelor",
        fields: ["Engineering", "Computer Science", "Science", "Business"],
        language: "English",
        description: "Leading UK institution focused on science, engineering, medicine and technology.",
        scholarship: "Scholarships available",
        goals: ["top", "research", "career"],
        tags: ["STEM", "Engineering", "Technology"],
        official: "https://www.imperial.ac.uk/study/apply/undergraduate/"
    },


    /* =====================================================
       🇫🇷 FRANCE
       ===================================================== */

    {
        name: "Sciences Po",
        country: "France",
        type: "University",
        level: "Bachelor",
        fields: ["Political Science", "Economics", "Business", "Law"],
        language: "French / English",
        description: "Leading French institution for politics, international relations, economics and social sciences.",
        scholarship: "Financial aid available",
        goals: ["scholarship", "international", "leadership", "career"],
        tags: ["Politics", "Diplomacy", "Economics"],
        official: "https://www.sciencespo.fr/"
    },

    {
        name: "Université Paris-Saclay",
        country: "France",
        type: "Public University",
        level: "Bachelor",
        fields: ["Science", "Engineering", "Mathematics", "Computer Science", "Economics"],
        language: "French / English",
        description: "Major French research university with strong science and engineering programs.",
        scholarship: "Funding opportunities",
        goals: ["research", "top", "career"],
        tags: ["Science", "Engineering", "Research"],
        official: "https://www.universite-paris-saclay.fr/"
    },


    /* =====================================================
       🇩🇪 GERMANY
       ===================================================== */

    {
        name: "Technical University of Munich (TUM)",
        country: "Germany",
        type: "University",
        level: "Bachelor",
        fields: ["Engineering", "Computer Science", "Technology", "Business", "Science"],
        language: "German / English depending on program",
        description: "Leading German university for technology, science and business.",
        scholarship: "Funding opportunities",
        goals: ["top", "research", "career"],
        tags: ["Germany", "STEM", "Technology"],
        official: "https://www.tum.de/en/studies/application"
    },


    /* =====================================================
       🇨🇭 SWITZERLAND
       ===================================================== */

    {
        name: "ETH Zurich",
        country: "Switzerland",
        type: "University",
        level: "Bachelor",
        fields: ["Engineering", "Computer Science", "Physics", "Mathematics", "Science"],
        language: "German / English depending on program",
        description: "One of Europe's leading universities for science, engineering and technology.",
        scholarship: "Funding opportunities",
        goals: ["top", "research", "career"],
        tags: ["STEM", "Engineering", "Research"],
        official: "https://ethz.ch/en/studies/bachelor.html"
    },


    /* =====================================================
       🇳🇱 NETHERLANDS
       ===================================================== */

    {
        name: "Erasmus University Rotterdam",
        country: "Netherlands",
        type: "University",
        level: "Bachelor",
        fields: ["Business", "Economics", "Econometrics", "Social Sciences"],
        language: "English / Dutch",
        description: "European university particularly strong in economics, business and social sciences.",
        scholarship: "Scholarships available for some students",
        goals: ["career", "international", "top"],
        tags: ["Business", "Economics"],
        official: "https://www.eur.nl/en/education"
    },


    /* =====================================================
       🇸🇬 SINGAPORE
       ===================================================== */

    {
        name: "National University of Singapore (NUS)",
        country: "Singapore",
        type: "University",
        level: "Bachelor",
        fields: ["Computer Science", "Engineering", "Business", "Economics", "Science"],
        language: "English",
        description: "Leading Asian university with strong technology, business and science programs.",
        scholarship: "Scholarships available",
        goals: ["top", "international", "career", "research"],
        tags: ["Asia", "Technology", "Business"],
        official: "https://www.nus.edu.sg/"
    },


    /* =====================================================
       🇰🇷 SOUTH KOREA
       ===================================================== */

    {
        name: "KAIST",
        country: "South Korea",
        type: "University",
        level: "Bachelor",
        fields: ["Engineering", "Computer Science", "AI", "Physics", "Science"],
        language: "English / Korean",
        description: "Leading South Korean science and technology university.",
        scholarship: "Scholarships available",
        goals: ["scholarship", "top", "research", "career"],
        tags: ["AI", "Technology", "Engineering"],
        official: "https://www.kaist.ac.kr/en/"
    }

];


/* =========================================================
   2. OPPORTUNITIES
   ========================================================= */

const opportunities = [

    {
        name: "Blue Ocean Student Competition",
        type: "Competition",
        field: "Business",
        country: "International",
        eligibility: "High school students",
        description: "Entrepreneurship competition where students develop innovative business ideas.",
        deadline: "Check current official cycle",
        cost: "Check official website",
        official: "https://blueoceancompetition.org/"
    },

    {
        name: "Model United Nations",
        type: "MUN",
        field: "Political Science",
        country: "International",
        eligibility: "High school students; varies by conference",
        description: "Develop diplomacy, public speaking, research and negotiation skills through UN simulations.",
        deadline: "Depends on conference",
        cost: "Depends on conference",
        official: "https://www.un.org/en/mun"
    },

    {
        name: "Technovation Girls",
        type: "STEM",
        field: "Computer Science",
        country: "International",
        eligibility: "Girls and young students; program rules apply",
        description: "Technology and entrepreneurship program encouraging young people to build solutions to real-world problems.",
        deadline: "Depends on annual cycle",
        cost: "Usually program-based",
        official: "https://technovation.org/"
    },

    {
        name: "FIRST Robotics Competition",
        type: "STEM",
        field: "Engineering",
        country: "International",
        eligibility: "High school students through participating teams",
        description: "Engineering and robotics experience combining technology, teamwork and innovation.",
        deadline: "Depends on season",
        cost: "Depends on team",
        official: "https://www.firstinspires.org/"
    },

    {
        name: "Rise",
        type: "Leadership",
        field: "Leadership",
        country: "International",
        eligibility: "Young people; eligibility rules apply",
        description: "Global program supporting young people with leadership potential and community impact.",
        deadline: "Annual cycle",
        cost: "Check official program",
        official: "https://www.risefortheworld.org/"
    },

    {
        name: "UNICEF Youth Opportunities",
        type: "Leadership",
        field: "Leadership",
        country: "International",
        eligibility: "Varies by opportunity",
        description: "Youth engagement opportunities connected to global issues and community impact.",
        deadline: "Depends on opportunity",
        cost: "Usually varies",
        official: "https://www.unicef.org/"
    },

    {
        name: "Global Youth Mobilization",
        type: "Leadership",
        field: "Leadership",
        country: "International",
        eligibility: "Young people; program-specific",
        description: "Youth-focused opportunities supporting projects and community initiatives.",
        deadline: "Depends on current programs",
        cost: "Varies",
        official: "https://globalyouthmobilization.org/"
    },

    {
        name: "International Mathematical Olympiad",
        type: "STEM",
        field: "Mathematics",
        country: "International",
        eligibility: "Selected secondary-school students through national teams",
        description: "International mathematics competition for talented secondary-school students.",
        deadline: "National selection varies",
        cost: "Depends on national process",
        official: "https://www.imo-official.org/"
    },

    {
        name: "Google Science Fair Resources",
        type: "STEM",
        field: "Science",
        country: "International",
        eligibility: "Check current availability",
        description: "Science and innovation resources for students interested in solving real-world problems.",
        deadline: "Depends on current program",
        cost: "Varies",
        official: "https://sciencefair.google.com/"
    },

    {
        name: "Scholarship Opportunities",
        type: "Scholarship",
        field: "Education",
        country: "International",
        eligibility: "Depends on scholarship",
        description: "Explore scholarships and financial-support opportunities for students.",
        deadline: "Varies",
        cost: "Usually free to research",
        official: "https://www.scholarshipportal.com/"
    }

];


/* =========================================================
   3. FINDER STATE
   ========================================================= */

let selectedInterests = [];
let selectedCountries = [];
let selectedGoals = [];


/* =========================================================
   4. HELPER
   ========================================================= */

function normalize(value) {
    return String(value || "").toLowerCase().trim();
}


/* =========================================================
   5. SCROLL FUNCTION
   ========================================================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (!section) {
        console.warn("Section not found:", id);
        return;
    }

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   6. UNIVERSITY MATCH SCORE
   ========================================================= */

function calculateMatch(university) {

    let score = 0;

    /* INTERESTS */

    selectedInterests.forEach(function(interest) {

        university.fields.forEach(function(field) {

            const a = normalize(interest);
            const b = normalize(field);

            if (
                a === b ||
                a.includes(b) ||
                b.includes(a)
            ) {
                score += 25;
            }

            /* Special connections */

            if (
                interest === "Business" &&
                ["Management", "Finance", "Marketing"].includes(field)
            ) {
                score += 15;
            }

            if (
                interest === "Economics" &&
                ["Business", "Finance", "Management"].includes(field)
            ) {
                score += 12;
            }

            if (
                interest === "Political Science" &&
                ["Law", "Economics"].includes(field)
            ) {
                score += 10;
            }

            if (
                interest === "Computer Science" &&
                ["AI", "Technology", "Engineering"].includes(field)
            ) {
                score += 12;
            }

            if (
                interest === "Science" &&
                ["Physics", "Mathematics", "Engineering"].includes(field)
            ) {
                score += 10;
            }

        });

    });


    /* COUNTRY */

    if (
        selectedCountries.length > 0 &&
        !selectedCountries.includes("All") &&
        selectedCountries.includes(university.country)
    ) {
        score += 20;
    }


    /* GOALS */

    selectedGoals.forEach(function(goal) {

        if (
            university.goals &&
            university.goals.includes(goal)
        ) {
            score += 10;
        }

    });


    return Math.min(100, score);

}


/* =========================================================
   7. UNIVERSITY CARD
   ========================================================= */

function createUniversityCard(university, showMatch = false) {

    const match = calculateMatch(university);

    const matchHTML = showMatch
        ? `
            <div class="match-score">
                <span>✦</span>
                ${match}% match
            </div>
        `
        : "";


    return `
        <article class="university-card card">

            <div class="card-top">

                <span class="country-badge">
                    ${university.country}
                </span>

                ${matchHTML}

            </div>


            <h3>
                ${university.name}
            </h3>


            <div class="university-location">
                📍 ${university.location || "International"}
            </div>


            <p class="card-description">
                ${university.description}
            </p>


            <div class="university-details">

                <div>
                    <span>Type</span>
                    <strong>${university.type}</strong>
                </div>

                <div>
                    <span>Level</span>
                    <strong>${university.level}</strong>
                </div>

                <div>
                    <span>Language</span>
                    <strong>${university.language}</strong>
                </div>

                <div>
                    <span>Financial aid</span>
                    <strong>${university.scholarship}</strong>
                </div>

            </div>


            <div class="card-fields">

                ${university.fields.map(function(field) {

                    return `
                        <span class="field-tag">
                            ${field}
                        </span>
                    `;

                }).join("")}

            </div>


            <div class="card-actions">

                <button
                    class="details-button"
                    onclick="showUniversityDetails(${JSON.stringify(university.name).replace(/"/g, '&quot;')})"
                >
                    View details
                </button>


                <a
                    href="${university.official}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="official-button"
                >
                    Official website ↗
                </a>

            </div>

        </article>
    `;
}


/* =========================================================
   8. RENDER UNIVERSITIES
   ========================================================= */

function renderUniversities(list = universities, showMatch = false) {

    const container =
        document.getElementById("universityCards");

    const empty =
        document.getElementById("noUniversities");


    if (!container) {
        console.error("universityCards not found.");
        return;
    }


    if (!list.length) {

        container.innerHTML = "";

        if (empty) {
            empty.classList.remove("hidden");
        }

        return;
    }


    if (empty) {
        empty.classList.add("hidden");
    }


    container.innerHTML =
        list.map(function(university) {

            return createUniversityCard(
                university,
                showMatch
            );

        }).join("");

}


/* =========================================================
   9. UNIVERSITY DETAILS
   ========================================================= */

function showUniversityDetails(name) {

    const university =
        universities.find(function(item) {

            return item.name === name;

        });


    if (!university) {
        return;
    }


    const existing =
        document.getElementById("universityModal");


    if (existing) {
        existing.remove();
    }


    const modal = document.createElement("div");

    modal.id = "universityModal";

    modal.className = "modal-overlay";


    modal.innerHTML = `

        <div class="university-modal">

            <button
                class="modal-close"
                onclick="closeUniversityModal()"
            >
                ×
            </button>


            <span class="country-badge">
                ${university.country}
            </span>


            <h2>
                ${university.name}
            </h2>


            <p class="modal-description">
                ${university.description}
            </p>


            <div class="modal-grid">

                <div>
                    <span>Type</span>
                    <strong>${university.type}</strong>
                </div>

                <div>
                    <span>Level</span>
                    <strong>${university.level}</strong>
                </div>

                <div>
                    <span>Location</span>
                    <strong>${university.location || "International"}</strong>
                </div>

                <div>
                    <span>Language</span>
                    <strong>${university.language}</strong>
                </div>

                <div>
                    <span>Financial support</span>
                    <strong>${university.scholarship}</strong>
                </div>

            </div>


            <h3>
                Fields of study
            </h3>


            <div class="modal-tags">

                ${university.fields.map(function(field) {

                    return `
                        <span>${field}</span>
                    `;

                }).join("")}

            </div>


            <div class="modal-actions">

                <a
                    href="${university.official}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="primary-button"
                >
                    Visit official website ↗
                </a>

            </div>

        </div>

    `;


    document.body.appendChild(modal);


    modal.addEventListener("click", function(event) {

        if (event.target === modal) {
            closeUniversityModal();
        }

    });

}


function closeUniversityModal() {

    const modal =
        document.getElementById("universityModal");

    if (modal) {
        modal.remove();
    }

}


/* =========================================================
   10. RECOMMENDATIONS
   ========================================================= */

function findBestUniversities() {

    const message =
        document.getElementById("finderMessage");

    const section =
        document.getElementById("recommendations");

    const container =
        document.getElementById("recommendationCards");


    if (selectedInterests.length === 0) {

        if (message) {

            message.textContent =
                "Please choose at least one field of interest.";

            message.style.color = "#9b4d38";

        }

        return;
    }


    const ranked =
        universities
            .map(function(university) {

                return {
                    university: university,
                    score: calculateMatch(university)
                };

            })
            .sort(function(a, b) {

                return b.score - a.score;

            })
            .slice(0, 6);


    if (container) {

        container.innerHTML =
            ranked.map(function(item) {

                return createUniversityCard(
                    item.university,
                    true
                );

            }).join("");

    }


    if (section) {

        section.classList.remove("hidden");

        setTimeout(function() {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }


    if (message) {

        message.textContent =
            "We found " +
            ranked.length +
            " universities that may fit your path.";

        message.style.color = "";

    }

}


/* =========================================================
   11. INTEREST BUTTONS
   ========================================================= */

function setupInterestButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-interest]"
        );


    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            const value =
                button.dataset.interest;


            if (selectedInterests.includes(value)) {

                selectedInterests =
                    selectedInterests.filter(function(item) {

                        return item !== value;

                    });

                button.classList.remove("selected");

            } else {

                selectedInterests.push(value);

                button.classList.add("selected");

            }


            updateFinderMessage();

        });

    });

}


/* =========================================================
   12. COUNTRY BUTTONS
   ========================================================= */

function setupCountryButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-country]"
        );


    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            const value =
                button.dataset.country;


            if (value === "All") {

                selectedCountries = ["All"];

                buttons.forEach(function(btn) {
                    btn.classList.remove("selected");
                });

                button.classList.add("selected");

            } else {

                selectedCountries =
                    selectedCountries.filter(function(item) {

                        return item !== "All";

                    });


                const index =
                    selectedCountries.indexOf(value);


                if (index >= 0) {

                    selectedCountries.splice(index, 1);

                    button.classList.remove("selected");

                } else {

                    selectedCountries.push(value);

                    button.classList.add("selected");

                }

            }

        });

    });

}


/* =========================================================
   13. GOAL BUTTONS
   ========================================================= */

function setupGoalButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-goal]"
        );


    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            const value =
                button.dataset.goal;


            if (selectedGoals.includes(value)) {

                selectedGoals =
                    selectedGoals.filter(function(item) {

                        return item !== value;

                    });

                button.classList.remove("selected");

            } else {

                selectedGoals.push(value);

                button.classList.add("selected");

            }

        });

    });

}


/* =========================================================
   14. FINDER MESSAGE
   ========================================================= */

function updateFinderMessage() {

    const message =
        document.getElementById(
            "finderMessage"
        );


    if (!message) {
        return;
    }


    if (selectedInterests.length === 0) {

        message.textContent =
            "Choose at least one interest to continue.";

        return;

    }


    message.textContent =
        selectedInterests.length +
        " interest" +
        (
            selectedInterests.length > 1
                ? "s"
                : ""
        ) +
        " selected.";

}


/* =========================================================
   15. SEARCH
   ========================================================= */

function searchUniversities() {

    const input =
        document.getElementById(
            "universitySearch"
        );


    const query =
        normalize(
            input ? input.value : ""
        );


    const filtered =
        universities.filter(function(university) {

            const searchable = [

                university.name,
                university.country,
                university.type,
                university.level,
                university.location,
                university.language,
                university.description,
                university.scholarship,

                ...university.fields,
                ...university.tags

            ].join(" ");


            return normalize(searchable)
                .includes(query);

        });


    applyFilters(filtered);

}


/* =========================================================
   16. FILTER UNIVERSITIES
   ========================================================= */

function applyFilters(baseList = universities) {

    const countrySelect =
        document.getElementById(
            "countryFilter"
        );

    const fieldSelect =
        document.getElementById(
            "fieldFilter"
        );

    const levelSelect =
        document.getElementById(
            "levelFilter"
        );


    const country =
        countrySelect
            ? countrySelect.value
            : "All";


    const field =
        fieldSelect
            ? fieldSelect.value
            : "All";


    const level =
        levelSelect
            ? levelSelect.value
            : "All";


    const searchInput =
        document.getElementById(
            "universitySearch"
        );


    const query =
        normalize(
            searchInput
                ? searchInput.value
                : ""
        );


    const filtered =
        baseList.filter(function(university) {

            const countryMatch =
                country === "All" ||
                university.country === country;


            const fieldMatch =
                field === "All" ||
                university.fields.includes(field);


            const levelMatch =
                level === "All" ||
                university.level === level;


            const searchText = [

                university.name,
                university.country,
                university.type,
                university.location,
                university.description,
                ...university.fields,
                ...university.tags

            ].join(" ");


            const searchMatch =
                !query ||
                normalize(searchText).includes(query);


            return (
                countryMatch &&
                fieldMatch &&
                levelMatch &&
                searchMatch
            );

        });


    renderUniversities(filtered);

}


/* =========================================================
   17. POPULATE COUNTRY FILTER
   ========================================================= */

function populateCountryFilter() {

    const select =
        document.getElementById(
            "countryFilter"
        );


    if (!select) {
        return;
    }


    const countries =
        [...new Set(

            universities.map(function(university) {

                return university.country;

            })

        )].sort();


    select.innerHTML = `

        <option value="All">
            All countries
        </option>

        ${
            countries.map(function(country) {

                return `
                    <option value="${country}">
                        ${country}
                    </option>
                `;

            }).join("")
        }

    `;

}


/* =========================================================
   18. POPULATE FIELD FILTER
   ========================================================= */

function populateFieldFilter() {

    const select =
        document.getElementById(
            "fieldFilter"
        );


    if (!select) {
        return;
    }


    const fields =
        [...new Set(

            universities.flatMap(function(university) {

                return university.fields;

            })

        )].sort();


    select.innerHTML = `

        <option value="All">
            All fields
        </option>

        ${
            fields.map(function(field) {

                return `
                    <option value="${field}">
                        ${field}
                    </option>
                `;

            }).join("")
        }

    `;

}


/* =========================================================
   19. RESET FILTERS
   ========================================================= */

function resetFilters() {

    const country =
        document.getElementById(
            "countryFilter"
        );

    const field =
        document.getElementById(
            "fieldFilter"
        );

    const level =
        document.getElementById(
            "levelFilter"
        );

    const search =
        document.getElementById(
            "universitySearch"
        );


    if (country) {
        country.value = "All";
    }

    if (field) {
        field.value = "All";
    }

    if (level) {
        level.value = "All";
    }

    if (search) {
        search.value = "";
    }


    renderUniversities(universities);

}


/* =========================================================
   20. OPPORTUNITY CARD
   ========================================================= */

function createOpportunityCard(item) {

    return `

        <article class="opportunity-card card">

            <div class="card-top">

                <span class="country-badge">
                    ${item.country}
                </span>

                <span class="opportunity-type">
                    ${item.type}
                </span>

            </div>


            <h3>
                ${item.name}
            </h3>


            <p class="card-description">
                ${item.description}
            </p>


            <div class="opportunity-details">

                <p>
                    <strong>Field:</strong>
                    ${item.field}
                </p>

                <p>
                    <strong>Eligibility:</strong>
                    ${item.eligibility}
                </p>

                <p>
                    <strong>Deadline:</strong>
                    ${item.deadline}
                </p>

                <p>
                    <strong>Cost:</strong>
                    ${item.cost}
                </p>

            </div>


            <a
                href="${item.official}"
                target="_blank"
                rel="noopener noreferrer"
                class="official-button"
            >
                Learn more ↗
            </a>

        </article>

    `;

}


/* =========================================================
   21. RENDER OPPORTUNITIES
   ========================================================= */

function renderOpportunities(filter = "All") {

    const container =
        document.getElementById(
            "opportunityCards"
        );


    if (!container) {
        return;
    }


    let list = opportunities;


    if (filter !== "All") {

        list =
            opportunities.filter(function(item) {

                return (
                    item.type === filter ||
                    item.field === filter
                );

            });

    }


    container.innerHTML =
        list.map(function(item) {

            return createOpportunityCard(item);

        }).join("");

}


/* =========================================================
   22. OPPORTUNITY FILTER BUTTONS
   ========================================================= */

function setupOpportunityFilters() {

    const buttons =
        document.querySelectorAll(
            "[data-opportunity-filter]"
        );


    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            buttons.forEach(function(btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            const filter =
                button.dataset.opportunityFilter;


            renderOpportunities(filter);

        });

    });

}


/* =========================================================
   23. COUNTERS
   ========================================================= */

function updateCounters() {

    const universityCount =
        document.getElementById(
            "universityCount"
        );

    const opportunityCount =
        document.getElementById(
            "opportunityCount"
        );

    const heroUniversityCount =
        document.getElementById(
            "heroUniversityCount"
        );

    const heroOpportunityCount =
        document.getElementById(
            "heroOpportunityCount"
        );


    const universityNumber =
        universities.length;


    const opportunityNumber =
        opportunities.length;


    if (universityCount) {
        universityCount.textContent =
            universityNumber + "+";
    }


    if (opportunityCount) {
        opportunityCount.textContent =
            opportunityNumber + "+";
    }


    if (heroUniversityCount) {
        heroUniversityCount.textContent =
            universityNumber + "+";
    }


    if (heroOpportunityCount) {
        heroOpportunityCount.textContent =
            opportunityNumber + "+";
    }

}


/* =========================================================
   24. ADDITIONAL CSS FOR MODAL
   ========================================================= */

function addModalStyles() {

    if (document.getElementById("tawjihModalStyles")) {
        return;
    }


    const style =
        document.createElement("style");


    style.id =
        "tawjihModalStyles";


    style.textContent = `

        .modal-overlay {

            position: fixed;
            inset: 0;
            background: rgba(30, 40, 30, 0.55);

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 20px;

            z-index: 9999;

            backdrop-filter: blur(5px);

        }


        .university-modal {

            width: min(700px, 95vw);

            max-height: 90vh;

            overflow-y: auto;

            background: #f6f0df;

            border-radius: 24px;

            padding: 35px;

            position: relative;

            box-shadow:
                0 25px 80px
                rgba(0,0,0,.25);

        }


        .modal-close {

            position: absolute;

            right: 18px;
            top: 15px;

            width: 40px;
            height: 40px;

            border: none;

            border-radius: 50%;

            background: #e7dfc8;

            font-size: 25px;

            cursor: pointer;

        }


        .modal-description {

            line-height: 1.7;

        }


        .modal-grid {

            display: grid;

            grid-template-columns:
                repeat(2, 1fr);

            gap: 15px;

            margin: 25px 0;

        }


        .modal-grid div {

            padding: 15px;

            background: rgba(255,255,255,.55);

            border-radius: 14px;

        }


        .modal-grid span {

            display: block;

            font-size: 12px;

            opacity: .65;

            margin-bottom: 5px;

        }


        .modal-tags {

            display: flex;

            flex-wrap: wrap;

            gap: 8px;

            margin-bottom: 25px;

        }


        .modal-tags span {

            padding: 8px 12px;

            border-radius: 20px;

            background: #dfe8d5;

        }


        .card-actions {

            display: flex;

            gap: 10px;

            margin-top: 20px;

            flex-wrap: wrap;

        }


        .details-button,
        .official-button {

            cursor: pointer;

            text-decoration: none;

        }


        .match-score {

            font-weight: 700;

        }


        .choice.selected {

            transform: translateY(-2px);

        }


        @media (max-width: 600px) {

            .modal-grid {

                grid-template-columns: 1fr;

            }

            .university-modal {

                padding: 25px;

            }

        }

    `;


    document.head.appendChild(style);

}


/* =========================================================
   25. KEYBOARD SUPPORT
   ========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeUniversityModal();

    }

});


/* =========================================================
   26. INITIALIZATION
   ========================================================= */

function initializeTawjih() {

    console.log(
        "🌿 Tawjih V4 starting..."
    );


    /* Finder */

    setupInterestButtons();

    setupCountryButtons();

    setupGoalButtons();


    /* Universities */

    populateCountryFilter();

    populateFieldFilter();

    renderUniversities();


    /* Opportunities */

    renderOpportunities();

    setupOpportunityFilters();


    /* Counters */

    updateCounters();


    /* Modal */

    addModalStyles();


    /* Find button */

    const findButton =
        document.getElementById(
            "findUniversitiesButton"
        );


    if (findButton) {

        findButton.addEventListener(
            "click",
            findBestUniversities
        );

    }


    /* Search */

    const search =
        document.getElementById(
            "universitySearch"
        );


    if (search) {

        search.addEventListener(
            "input",
            searchUniversities
        );

    }


    /* University filters */

    const country =
        document.getElementById(
            "countryFilter"
        );


    const field =
        document.getElementById(
            "fieldFilter"
        );


    const level =
        document.getElementById(
            "levelFilter"
        );


    if (country) {

        country.addEventListener(
            "change",
            function() {
                applyFilters();
            }
        );

    }


    if (field) {

        field.addEventListener(
            "change",
            function() {
                applyFilters();
            }
        );

    }


    if (level) {

        level.addEventListener(
            "change",
            function() {
                applyFilters();
            }
        );

    }


    /* Reset */

    const reset =
        document.getElementById(
            "resetFilters"
        );


    if (reset) {

        reset.addEventListener(
            "click",
            resetFilters
        );

    }


    console.log(
        "✅ Tawjih V4 loaded successfully."
    );

    console.log(
        "🎓 Universities:",
        universities.length
    );

    console.log(
        "🚀 Opportunities:",
        opportunities.length
    );

}


/* =========================================================
   27. START
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeTawjih
    );

} else {

    initializeTawjih();

}


/* =========================================================
   END
   ========================================================= */
