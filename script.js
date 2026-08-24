/* =========================================================
   TAWJIH — SCRIPT V6
   University + Opportunity Finder
   ========================================================= */


/* =========================================================
   1. UNIVERSITY DATABASE
========================================================= */

const universities = [

    /* =====================================================
       MOROCCO
    ===================================================== */

    {
        name: "Mohammed VI Polytechnic University (UM6P)",
        country: "Morocco",
        type: "University",
        level: "Bachelor",
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Business", "Engineering", "Computer Science", "Economics", "Science"],
        language: "English / French",
        location: "Benguerir / Rabat",
        description: "Research-oriented Moroccan university focused on innovation, science, technology, business and entrepreneurship.",
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
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Business", "Computer Science", "Engineering", "Economics", "Political Science"],
        language: "English",
        location: "Ifrane",
        description: "English-language liberal arts university with an international academic environment.",
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
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Engineering", "Business", "Computer Science", "Political Science", "Economics"],
        language: "French / English",
        location: "Rabat",
        description: "Multidisciplinary university offering engineering, business, political science and technology programs.",
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
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Science", "Economics", "Political Science", "Law", "Computer Science"],
        language: "French / Arabic",
        location: "Rabat",
        description: "Major Moroccan public university with a wide range of academic disciplines.",
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
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Science", "Engineering", "Economics", "Business", "Medicine", "Computer Science"],
        language: "French / Arabic",
        location: "Casablanca",
        description: "Large Moroccan public university offering programs across science, engineering, economics, medicine and other disciplines.",
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
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Science", "Engineering", "Computer Science", "Economics", "Law"],
        language: "French / Arabic",
        location: "Marrakech",
        description: "Major Moroccan public university known for science, technology and research.",
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
        selectivity: "Accessible",
        acceptanceRate: null,
        fields: ["Science", "Economics", "Business", "Computer Science", "Law"],
        language: "French / Arabic",
        location: "Agadir",
        description: "Major public university serving the Souss-Massa region.",
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
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Business", "Management", "Finance", "Marketing", "Economics"],
        language: "French",
        location: "Several Moroccan cities",
        description: "Network of public Moroccan business schools specializing in management, finance, marketing and economics.",
        scholarship: "Public institution and student support",
        goals: ["career", "top", "scholarship", "leadership"],
        tags: ["Business", "Management", "Finance"],
        official: "https://www.encg.umi.ac.ma/"
    },


    /* =====================================================
       UNITED STATES — REACH
    ===================================================== */

    {
        name: "Harvard University",
        country: "United States",
        type: "Ivy League",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Business", "Economics", "Computer Science", "Engineering", "Political Science", "Science"],
        language: "English",
        location: "Cambridge, Massachusetts",
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
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Economics", "Computer Science", "Engineering", "Political Science", "Science"],
        language: "English",
        location: "New Haven, Connecticut",
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
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Engineering", "Economics", "Computer Science", "Political Science", "Science"],
        language: "English",
        location: "Princeton, New Jersey",
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
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Business", "Finance", "Economics", "Engineering", "Computer Science"],
        language: "English",
        location: "Philadelphia, Pennsylvania",
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
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Engineering", "Computer Science", "Business", "Architecture", "Science"],
        language: "English",
        location: "Ithaca, New York",
        description: "Broad Ivy League university with strong STEM, business and research programs.",
        scholarship: "Need-based financial aid",
        goals: ["scholarship", "top", "research", "career"],
        tags: ["Ivy League", "Engineering", "Business"],
        official: "https://admissions.cornell.edu/"
    },

    {
        name: "Massachusetts Institute of Technology (MIT)",
        country: "United States",
        type: "Research University",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Computer Science", "Engineering", "AI", "Mathematics", "Physics", "Science"],
        language: "English",
        location: "Cambridge, Massachusetts",
        description: "World-leading research institution focused on science, engineering and technology.",
        scholarship: "Need-based financial aid",
        goals: ["top", "research", "career", "international"],
        tags: ["STEM", "AI", "Technology", "Research"],
        official: "https://www.mit.edu/"
    },

    {
        name: "Stanford University",
        country: "United States",
        type: "Research University",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Computer Science", "Engineering", "Business", "Economics", "Science"],
        language: "English",
        location: "Stanford, California",
        description: "Highly selective research university with strong technology, entrepreneurship and science programs.",
        scholarship: "Need-based financial aid",
        goals: ["top", "research", "career", "leadership"],
        tags: ["Technology", "Entrepreneurship", "Research"],
        official: "https://admission.stanford.edu/"
    },

    {
        name: "California Institute of Technology (Caltech)",
        country: "United States",
        type: "Research University",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Engineering", "Computer Science", "Physics", "Mathematics", "Science"],
        language: "English",
        location: "Pasadena, California",
        description: "Research-focused institution specializing in science and engineering.",
        scholarship: "Need-based financial aid",
        goals: ["top", "research"],
        tags: ["STEM", "Physics", "Engineering", "Research"],
        official: "https://www.caltech.edu/"
    },

    {
        name: "University of Chicago",
        country: "United States",
        type: "Research University",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Economics", "Computer Science", "Political Science", "Business", "Science"],
        language: "English",
        location: "Chicago, Illinois",
        description: "Research university known for economics, social sciences and rigorous academic programs.",
        scholarship: "Need-based financial aid",
        goals: ["top", "research", "leadership"],
        tags: ["Economics", "Research", "Social Sciences"],
        official: "https://college.uchicago.edu/"
    },

    {
        name: "Duke University",
        country: "United States",
        type: "Research University",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Engineering", "Computer Science", "Economics", "Business", "Political Science"],
        language: "English",
        location: "Durham, North Carolina",
        description: "Research university with strong programs in engineering, economics, business and social sciences.",
        scholarship: "Need-based financial aid",
        goals: ["top", "research", "career"],
        tags: ["Research", "Engineering", "Business"],
        official: "https://admissions.duke.edu/"
    },

    {
        name: "Johns Hopkins University",
        country: "United States",
        type: "Research University",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Science", "Engineering", "Computer Science", "Economics", "Political Science"],
        language: "English",
        location: "Baltimore, Maryland",
        description: "Research university known for science, medicine, engineering and international studies.",
        scholarship: "Need-based financial aid",
        goals: ["top", "research", "international"],
        tags: ["Research", "Science", "Engineering"],
        official: "https://apply.jhu.edu/"
    },

    {
        name: "University of California, Berkeley",
        country: "United States",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Computer Science", "Engineering", "Business", "Economics", "Science"],
        language: "English",
        location: "Berkeley, California",
        description: "Leading public research university with major programs in technology, engineering, business and science.",
        scholarship: "Financial aid available; eligibility varies",
        goals: ["top", "research", "career"],
        tags: ["Public", "STEM", "Technology", "Research"],
        official: "https://admissions.berkeley.edu/"
    },

    {
        name: "University of California, Los Angeles (UCLA)",
        country: "United States",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Business", "Computer Science", "Engineering", "Economics", "Political Science"],
        language: "English",
        location: "Los Angeles, California",
        description: "Major public research university with broad academic offerings.",
        scholarship: "Financial aid available; eligibility varies",
        goals: ["top", "career", "research", "international"],
        tags: ["Public", "Research", "Los Angeles"],
        official: "https://admission.ucla.edu/"
    },


    /* =====================================================
       UNITED STATES — MATCH
    ===================================================== */

    {
        name: "University of Illinois Urbana-Champaign",
        country: "United States",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Match",
        acceptanceRate: "42.37%",
        acceptanceRateSource: "College Board BigFuture",
        fields: ["Computer Science", "Engineering", "Business", "Economics", "Science"],
        language: "English",
        location: "Urbana-Champaign, Illinois",
        description: "Public research university particularly strong in engineering, computing, business and science.",
        scholarship: "Financial aid and scholarships vary",
        goals: ["top", "research", "career"],
        tags: ["Public", "STEM", "Computer Science"],
        official: "https://www.admissions.illinois.edu/"
    },

    {
        name: "New York University (NYU)",
        country: "United States",
        type: "Private University",
        level: "Bachelor",
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Business", "Economics", "Computer Science", "Arts", "Political Science"],
        language: "English",
        location: "New York, New York",
        description: "Large private university with strong programs in business, arts, social sciences and technology.",
        scholarship: "Financial aid available",
        goals: ["career", "international", "top", "leadership"],
        tags: ["Business", "Arts", "International", "New York"],
        official: "https://www.nyu.edu/admissions/"
    },

    {
        name: "Boston University",
        country: "United States",
        type: "Private University",
        level: "Bachelor",
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Business", "Computer Science", "Engineering", "Economics", "Political Science"],
        language: "English",
        location: "Boston, Massachusetts",
        description: "Large research university offering broad undergraduate programs.",
        scholarship: "Merit scholarships and financial aid available",
        goals: ["career", "international", "research"],
        tags: ["Business", "Research", "International"],
        official: "https://www.bu.edu/admissions/"
    },

    {
        name: "Northeastern University",
        country: "United States",
        type: "Private Research University",
        level: "Bachelor",
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Computer Science", "Engineering", "Business", "Economics", "Science"],
        language: "English",
        location: "Boston, Massachusetts",
        description: "Research university known for experiential learning and co-op opportunities.",
        scholarship: "Merit scholarships available",
        goals: ["career", "international", "research"],
        tags: ["Co-op", "Technology", "Business"],
        official: "https://admissions.northeastern.edu/"
    },

    {
        name: "University of Southern California (USC)",
        country: "United States",
        type: "Private Research University",
        level: "Bachelor",
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Business", "Computer Science", "Engineering", "Film", "Economics"],
        language: "English",
        location: "Los Angeles, California",
        description: "Private research university with strong programs in business, technology, media and engineering.",
        scholarship: "Merit scholarships and financial aid available",
        goals: ["career", "international", "leadership"],
        tags: ["Business", "Technology", "Film"],
        official: "https://admission.usc.edu/"
    },

    {
        name: "Georgetown University",
        country: "United States",
        type: "Private University",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Political Science", "International Relations", "Economics", "Business", "Law"],
        language: "English",
        location: "Washington, D.C.",
        description: "University particularly strong in international affairs, politics, economics and leadership.",
        scholarship: "Financial aid available",
        goals: ["leadership", "international", "career"],
        tags: ["Politics", "International Relations", "Leadership"],
        official: "https://uadmissions.georgetown.edu/"
    },


    /* =====================================================
       UNITED STATES — ACCESSIBLE
    ===================================================== */

    {
        name: "Arizona State University",
        country: "United States",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Accessible",
        acceptanceRate: "89.88%",
        acceptanceRateSource: "College Board BigFuture",
        fields: ["Business", "Engineering", "Computer Science", "Economics", "Science", "Arts"],
        language: "English",
        location: "Tempe, Arizona",
        description: "Large public research university with extensive programs and an access-oriented admissions philosophy.",
        scholarship: "Merit scholarships and financial aid options available",
        goals: ["career", "international", "research", "scholarship"],
        tags: ["Public", "STEM", "Business", "International"],
        official: "https://admission.asu.edu/"
    },

    {
        name: "University of Arizona",
        country: "United States",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Accessible",
        acceptanceRate: "86.13%",
        acceptanceRateSource: "College Board BigFuture",
        fields: ["Business", "Computer Science", "Engineering", "Science", "Economics", "Arts"],
        language: "English",
        location: "Tucson, Arizona",
        description: "Large public research university with broad undergraduate offerings.",
        scholarship: "Scholarships and financial aid available",
        goals: ["career", "research", "international", "scholarship"],
        tags: ["Public", "Research", "STEM"],
        official: "https://www.arizona.edu/admissions"
    },

    {
        name: "University of Iowa",
        country: "United States",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Accessible",
        acceptanceRate: "81.5%",
        acceptanceRateSource: "College Board BigFuture",
        fields: ["Business", "Engineering", "Computer Science", "Science", "Arts", "Economics"],
        language: "English",
        location: "Iowa City, Iowa",
        description: "Public research university offering more than 200 majors, minors and certificates.",
        scholarship: "Scholarships and financial aid available",
        goals: ["career", "research", "international"],
        tags: ["Public", "Research", "Study Abroad"],
        official: "https://admissions.uiowa.edu/"
    },

    {
        name: "Iowa State University",
        country: "United States",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Accessible",
        acceptanceRate: "88.65%",
        acceptanceRateSource: "College Board BigFuture",
        fields: ["Engineering", "Computer Science", "Business", "Agriculture", "Science", "Architecture"],
        language: "English",
        location: "Ames, Iowa",
        description: "Public research university with strong engineering, science, business and agriculture programs.",
        scholarship: "Merit scholarships and financial aid available",
        goals: ["career", "research", "scholarship"],
        tags: ["Public", "Engineering", "STEM"],
        official: "https://www.iastate.edu/"
    },

    {
        name: "University of Arkansas",
        country: "United States",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Accessible",
        acceptanceRate: "77.99%",
        acceptanceRateSource: "College Board BigFuture",
        fields: ["Business", "Engineering", "Computer Science", "Architecture", "Science", "Economics"],
        language: "English",
        location: "Fayetteville, Arkansas",
        description: "Public research university with broad academic programs.",
        scholarship: "Scholarships available",
        goals: ["career", "scholarship", "research"],
        tags: ["Public", "Business", "Engineering"],
        official: "https://admissions.uark.edu/"
    },

    {
        name: "University of Illinois Chicago",
        country: "United States",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Accessible",
        acceptanceRate: "77.35%",
        acceptanceRateSource: "College Board BigFuture",
        fields: ["Computer Science", "Engineering", "Business", "Economics", "Science", "Medicine"],
        language: "English",
        location: "Chicago, Illinois",
        description: "Urban public research university with broad academic and professional programs.",
        scholarship: "Financial aid and scholarships available",
        goals: ["career", "research", "international"],
        tags: ["Public", "Chicago", "Research"],
        official: "https://admissions.uic.edu/"
    },

    {
        name: "Northern Arizona University",
        country: "United States",
        type: "Public University",
        level: "Bachelor",
        selectivity: "Accessible",
        acceptanceRate: "89.6%",
        acceptanceRateSource: "College Board BigFuture",
        fields: ["Business", "Computer Science", "Engineering", "Science", "Education", "Arts"],
        language: "English",
        location: "Flagstaff, Arizona",
        description: "Public university offering a wide range of undergraduate programs.",
        scholarship: "Scholarships and financial aid available",
        goals: ["career", "scholarship", "international"],
        tags: ["Public", "STEM", "Education"],
        official: "https://nau.edu/admissions/"
    },


    /* =====================================================
       UNITED KINGDOM
    ===================================================== */

    {
        name: "University of Oxford",
        country: "United Kingdom",
        type: "University",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Economics", "Engineering", "Computer Science", "Political Science", "Science"],
        language: "English",
        location: "Oxford",
        description: "Highly selective historic university with broad undergraduate offerings.",
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
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Engineering", "Computer Science", "Economics", "Mathematics", "Science"],
        language: "English",
        location: "Cambridge",
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
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Engineering", "Computer Science", "Science", "Business"],
        language: "English",
        location: "London",
        description: "Leading UK institution focused on science, engineering, medicine and technology.",
        scholarship: "Scholarships available",
        goals: ["top", "research", "career"],
        tags: ["STEM", "Engineering", "Technology"],
        official: "https://www.imperial.ac.uk/study/apply/undergraduate/"
    },

    {
        name: "University of Manchester",
        country: "United Kingdom",
        type: "University",
        level: "Bachelor",
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Engineering", "Computer Science", "Business", "Economics", "Science"],
        language: "English",
        location: "Manchester",
        description: "Large research university offering broad undergraduate programs.",
        scholarship: "Scholarships vary by program and nationality",
        goals: ["research", "career", "international"],
        tags: ["UK", "Research", "Engineering"],
        official: "https://www.manchester.ac.uk/study/undergraduate/"
    },


    /* =====================================================
       FRANCE
    ===================================================== */

    {
        name: "Sciences Po",
        country: "France",
        type: "University",
        level: "Bachelor",
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Political Science", "Economics", "Business", "Law", "International Relations"],
        language: "French / English",
        location: "Paris",
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
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Science", "Engineering", "Mathematics", "Computer Science", "Economics"],
        language: "French / English",
        location: "Paris-Saclay",
        description: "Major French research university with strong science and engineering programs.",
        scholarship: "Funding opportunities",
        goals: ["research", "top", "career"],
        tags: ["Science", "Engineering", "Research"],
        official: "https://www.universite-paris-saclay.fr/"
    },


    /* =====================================================
       GERMANY
    ===================================================== */

    {
        name: "Technical University of Munich (TUM)",
        country: "Germany",
        type: "University",
        level: "Bachelor",
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Engineering", "Computer Science", "Technology", "Business", "Science"],
        language: "German / English depending on program",
        location: "Munich",
        description: "Leading German university for technology, science and business.",
        scholarship: "Funding opportunities",
        goals: ["top", "research", "career"],
        tags: ["Germany", "STEM", "Technology"],
        official: "https://www.tum.de/en/studies/application"
    },

    {
        name: "Freie Universität Berlin",
        country: "Germany",
        type: "Public University",
        level: "Bachelor",
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Political Science", "Economics", "Computer Science", "Science", "International Relations"],
        language: "German / English depending on program",
        location: "Berlin",
        description: "Major public research university with strengths in social sciences, international studies and science.",
        scholarship: "Funding opportunities vary",
        goals: ["research", "international", "career"],
        tags: ["Germany", "Berlin", "Research"],
        official: "https://www.fu-berlin.de/en/studium/index.html"
    },


    /* =====================================================
       NETHERLANDS
    ===================================================== */

    {
        name: "Erasmus University Rotterdam",
        country: "Netherlands",
        type: "University",
        level: "Bachelor",
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Business", "Economics", "Econometrics", "Social Sciences"],
        language: "English / Dutch",
        location: "Rotterdam",
        description: "European university particularly strong in economics, business and social sciences.",
        scholarship: "Scholarships available for some students",
        goals: ["career", "international", "top"],
        tags: ["Business", "Economics"],
        official: "https://www.eur.nl/en/education"
    },

    {
        name: "University of Amsterdam",
        country: "Netherlands",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Match",
        acceptanceRate: null,
        fields: ["Business", "Economics", "Computer Science", "Political Science", "Arts"],
        language: "English / Dutch depending on program",
        location: "Amsterdam",
        description: "Large international research university with a wide range of bachelor's programs.",
        scholarship: "Scholarships vary by program and nationality",
        goals: ["international", "research", "career"],
        tags: ["Netherlands", "Amsterdam", "Research"],
        official: "https://www.uva.nl/en"
    },


    /* =====================================================
       SWITZERLAND
    ===================================================== */

    {
        name: "ETH Zurich",
        country: "Switzerland",
        type: "University",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Engineering", "Computer Science", "Physics", "Mathematics", "Science"],
        language: "German / English depending on program",
        location: "Zurich",
        description: "Leading European university for science, engineering and technology.",
        scholarship: "Funding opportunities",
        goals: ["top", "research", "career"],
        tags: ["STEM", "Engineering", "Research"],
        official: "https://ethz.ch/en/studies/bachelor.html"
    },


    /* =====================================================
       SINGAPORE
    ===================================================== */

    {
        name: "National University of Singapore (NUS)",
        country: "Singapore",
        type: "University",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Computer Science", "Engineering", "Business", "Economics", "Science"],
        language: "English",
        location: "Singapore",
        description: "Leading Asian university with strong technology, business and science programs.",
        scholarship: "Scholarships available",
        goals: ["top", "international", "career", "research"],
        tags: ["Asia", "Technology", "Business"],
        official: "https://www.nus.edu.sg/"
    },


    /* =====================================================
       SOUTH KOREA
    ===================================================== */

    {
        name: "KAIST",
        country: "South Korea",
        type: "University",
        level: "Bachelor",
        selectivity: "Reach",
        acceptanceRate: null,
        fields: ["Engineering", "Computer Science", "AI", "Physics", "Science"],
        language: "English / Korean",
        location: "Daejeon",
        description: "Leading South Korean science and technology university.",
        scholarship: "Scholarships available",
        goals: ["scholarship", "top", "research", "career"],
        tags: ["AI", "Technology", "Engineering"],
        official: "https://www.kaist.ac.kr/en/"
    }

];


/* =========================================================
   2. OPPORTUNITIES DATABASE
========================================================= */

const opportunities = [

    {
        name: "YES — Kennedy-Lugar Youth Exchange and Study",
        type: "Exchange",
        field: "International",
        fields: ["International", "Leadership", "Languages", "Culture"],
        country: "United States",
        eligibility: "Eligible high-school students from participating countries; country-specific rules apply",
        ageMin: 15,
        ageMax: 17,
        level: "High School",
        funding: "Scholarship / funded exchange",
        description: "Academic-year exchange opportunity connecting students with American communities and schools.",
        deadline: "Annual cycle — check the official program for your country",
        cost: "Funding depends on the program",
        official: "https://exchanges.state.gov/non-us/program/kennedy-lugar-youth-exchange-and-study-yes"
    },

    {
        name: "Erasmus+ Youth Exchanges",
        type: "Exchange",
        field: "Leadership",
        fields: ["Leadership", "International", "Culture", "Languages", "Social Sciences"],
        country: "Europe",
        eligibility: "Young people generally aged 13–30; project-specific rules apply",
        ageMin: 13,
        ageMax: 30,
        level: "Youth",
        funding: "Travel and activity support may be available",
        description: "Short international youth exchanges where young people from different countries learn and work together.",
        deadline: "Depends on the participating organisation and project",
        cost: "Often supported by Erasmus+ funding",
        official: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/youth-exchanges-and-activities"
    },

    {
        name: "Erasmus+ Pupil Mobility",
        type: "Exchange",
        field: "International",
        fields: ["International", "Languages", "Culture", "Science", "Business"],
        country: "Europe",
        eligibility: "School pupils through participating schools and organisations",
        ageMin: 13,
        ageMax: 30,
        level: "High School",
        funding: "Erasmus+ support",
        description: "School mobility opportunities that can include group or individual learning periods abroad.",
        deadline: "Depends on the school's Erasmus+ project",
        cost: "Funding handled through participating organisations",
        official: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/pupils"
    },

    {
        name: "DiscoverEU",
        type: "Travel / Exchange",
        field: "International",
        fields: ["International", "Culture", "Languages"],
        country: "Europe",
        eligibility: "Standard DiscoverEU action is for young people turning 18; inclusion action has additional age eligibility",
        ageMin: 18,
        ageMax: 21,
        level: "Youth",
        funding: "Travel pass",
        description: "European travel opportunity helping young people explore Europe and discover different cultures.",
        deadline: "Application rounds are announced by the European Commission",
        cost: "Application is free; selected participants receive travel support",
        official: "https://youth.europa.eu/discovereu_en"
    },

    {
        name: "Reach Oxford Scholarship",
        type: "Scholarship",
        field: "Education",
        fields: ["Business", "Economics", "Engineering", "Computer Science", "Political Science", "Science", "Arts"],
        country: "United Kingdom",
        eligibility: "Eligible international undergraduate applicants; Oxford admission is required",
        level: "Bachelor",
        funding: "Full scholarship support for selected scholars",
        description: "Undergraduate scholarship opportunity at the University of Oxford for eligible students from low-income countries.",
        deadline: "Annual cycle; check Oxford for current dates",
        cost: "No scholarship application fee",
        official: "https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding/oxford-support/reach-oxford-scholarship"
    },

    {
        name: "Cambridge Trust Scholarships",
        type: "Scholarship",
        field: "Education",
        fields: ["Science", "Engineering", "Computer Science", "Economics", "Arts", "Political Science"],
        country: "United Kingdom",
        eligibility: "International applicants; eligibility depends on the scholarship and level",
        level: "Bachelor / Graduate",
        funding: "Scholarship support varies",
        description: "Funding opportunities administered through the Cambridge Trust and participating colleges.",
        deadline: "Varies by scholarship and college",
        cost: "Usually no separate general application fee",
        official: "https://www.cambridgetrust.org/"
    },

    {
        name: "Erasmus Mundus Joint Masters",
        type: "Scholarship",
        field: "Education",
        fields: ["Science", "Engineering", "Computer Science", "Business", "Economics", "Social Sciences"],
        country: "Europe",
        eligibility: "Primarily master's-level applicants; programme-specific rules apply",
        level: "Master",
        funding: "Scholarships may cover participation and living/travel costs",
        description: "European joint master's programmes delivered by international university consortia.",
        deadline: "Usually programme-specific and often in autumn or winter",
        cost: "Varies by programme",
        official: "https://erasmus-plus.ec.europa.eu/erasmus-mundus"
    },

    {
        name: "Blue Ocean Student Competition",
        type: "Competition",
        field: "Business",
        fields: ["Business", "Entrepreneurship", "Economics"],
        country: "International",
        eligibility: "High school students",
        level: "High School",
        funding: "Competition-based",
        description: "Entrepreneurship competition focused on developing innovative business ideas.",
        deadline: "Check current official cycle",
        cost: "Check official website",
        official: "https://blueoceancompetition.org/"
    },

    {
        name: "Model United Nations",
        type: "MUN",
        field: "Political Science",
        fields: ["Political Science", "International Relations", "Leadership", "Law"],
        country: "International",
        eligibility: "High school students; conference rules vary",
        level: "High School",
        funding: "Varies by conference",
        description: "Develop diplomacy, public speaking, research and negotiation skills through UN simulations.",
        deadline: "Depends on conference",
        cost: "Depends on conference",
        official: "https://www.un.org/en/mun"
    },

    {
        name: "Technovation Girls",
        type: "STEM",
        field: "Computer Science",
        fields: ["Computer Science", "AI", "Business", "Engineering", "Entrepreneurship"],
        country: "International",
        eligibility: "Girls and young students; current programme rules apply",
        level: "High School",
        funding: "Programme-based",
        description: "Technology and entrepreneurship programme encouraging young people to build solutions to real-world problems.",
        deadline: "Depends on annual cycle",
        cost: "Check current programme",
        official: "https://technovation.org/"
    },

    {
        name: "FIRST Robotics Competition",
        type: "STEM",
        field: "Engineering",
        fields: ["Engineering", "Computer Science", "Robotics", "AI"],
        country: "International",
        eligibility: "High school students through participating teams",
        level: "High School",
        funding: "Team-dependent",
        description: "Engineering and robotics experience combining technology, teamwork and innovation.",
        deadline: "Depends on season",
        cost: "Depends on team",
        official: "https://www.firstinspires.org/"
    },

    {
        name: "International Mathematical Olympiad",
        type: "STEM",
        field: "Mathematics",
        fields: ["Mathematics", "Science", "Computer Science"],
        country: "International",
        eligibility: "Selected secondary-school students through national teams",
        level: "High School",
        funding: "National process dependent",
        description: "International mathematics competition for talented secondary-school students.",
        deadline: "National selection varies",
        cost: "Depends on national process",
        official: "https://www.imo-official.org/"
    },

    {
        name: "Rise",
        type: "Leadership",
        field: "Leadership",
        fields: ["Leadership", "Social Sciences", "Entrepreneurship", "International"],
        country: "International",
        eligibility: "Young people; programme rules apply",
        level: "High School",
        funding: "Programme support varies",
        description: "Global programme supporting young people with leadership potential and community impact.",
        deadline: "Annual cycle",
        cost: "Check official programme",
        official: "https://www.risefortheworld.org/"
    },

    {
        name: "UNICEF Youth Opportunities",
        type: "Leadership",
        field: "Leadership",
        fields: ["Leadership", "Social Sciences", "International", "Culture"],
        country: "International",
        eligibility: "Varies by opportunity",
        level: "Youth",
        funding: "Varies",
        description: "Youth engagement opportunities connected to global issues and community impact.",
        deadline: "Depends on opportunity",
        cost: "Varies",
        official: "https://www.unicef.org/"
    },

    {
        name: "Global Youth Mobilization",
        type: "Leadership",
        field: "Leadership",
        fields: ["Leadership", "Entrepreneurship", "Social Sciences", "International"],
        country: "International",
        eligibility: "Young people; programme-specific eligibility applies",
        level: "Youth",
        funding: "Varies",
        description: "Youth-focused opportunities supporting projects and community initiatives.",
        deadline: "Depends on current programmes",
        cost: "Varies",
        official: "https://globalyouthmobilization.org/"
    }

];


/* =========================================================
   3. FINDER STATE
========================================================= */

let selectedInterests = [];
let selectedCountries = [];
let selectedGoals = [];


/* =========================================================
   4. HELPERS
========================================================= */

function normalize(value) {
    return String(value || "")
        .toLowerCase()
        .trim();
}


function escapeHTML(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function scrollToSection(id) {

    const section = document.getElementById(id);

    if (!section) {
        return;
    }

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   5. UNIVERSITY MATCH ENGINE
========================================================= */

function calculateMatch(university) {

    let score = 0;
    const reasons = [];

    /* Interests */

    selectedInterests.forEach(function(interest) {

        const exact =
            university.fields.some(function(field) {
                return normalize(field) === normalize(interest);
            });

        const related =
            university.fields.some(function(field) {

                const a = normalize(interest);
                const b = normalize(field);

                return a.includes(b) || b.includes(a);
            });


        if (exact) {

            score += 15;

            reasons.push(
                "Strong academic match for " + interest
            );

        } else if (related) {

            score += 8;

            reasons.push(
                "Related study options for " + interest
            );

        }


        if (
            interest === "Computer Science" &&
            university.fields.some(function(field) {
                return ["AI", "Engineering", "Technology"].includes(field);
            })
        ) {
            score += 3;
        }


        if (
            interest === "Business" &&
            university.fields.some(function(field) {
                return ["Management", "Finance", "Marketing", "Economics"].includes(field);
            })
        ) {
            score += 3;
        }


        if (
            interest === "Economics" &&
            university.fields.some(function(field) {
                return ["Business", "Finance", "Management"].includes(field);
            })
        ) {
            score += 3;
        }


        if (
            interest === "Political Science" &&
            university.fields.some(function(field) {
                return ["Law", "International Relations", "Economics"].includes(field);
            })
        ) {
            score += 3;
        }


        if (
            interest === "Science" &&
            university.fields.some(function(field) {
                return ["Physics", "Mathematics", "Engineering"].includes(field);
            })
        ) {
            score += 3;
        }

    });


    /* Country */

    if (
        selectedCountries.length > 0 &&
        !selectedCountries.includes("All") &&
        selectedCountries.includes(university.country)
    ) {

        score += 20;

        reasons.push(
            "Matches one of your preferred destinations"
        );
    }


    /* Goals */

    selectedGoals.forEach(function(goal) {

        if (
            university.goals &&
            university.goals.includes(goal)
        ) {

            score += 8;

            reasons.push(
                "Matches your goal: " +
                goal.charAt(0).toUpperCase() +
                goal.slice(1)
            );
        }

    });


    /* Selectivity bonus for balanced recommendations */

    if (selectedGoals.includes("career")) {

        if (university.selectivity === "Accessible") {
            score += 4;

            reasons.push(
                "Provides a more accessible admission option"
            );
        }

    }


    /* Scholarship */

    if (
        selectedGoals.includes("scholarship") &&
        normalize(university.scholarship).includes("scholar")
    ) {

        score += 4;

        reasons.push(
            "Scholarship or financial-support options are listed"
        );
    }


    score = Math.min(
        100,
        Math.round(score)
    );


    let level = "Possible match";

    if (score >= 85) {
        level = "Excellent match";
    } else if (score >= 70) {
        level = "Strong match";
    } else if (score >= 50) {
        level = "Good match";
    }


    return {
        score,
        level,
        reasons: [...new Set(reasons)].slice(0, 3)
    };
}


/* =========================================================
   6. UNIVERSITY CARD
========================================================= */

function createUniversityCard(university, showMatch = false) {

    const matchData =
        calculateMatch(university);


    const rateHTML =
        university.acceptanceRate
            ? `
                <div>
                    <span>Acceptance rate</span>
                    <strong>${escapeHTML(university.acceptanceRate)}</strong>
                </div>
            `
            : "";


    const selectivityHTML = `
        <div class="selectivity-box ${normalize(university.selectivity).replace(/\s+/g, "-")}">
            <span>Selectivity</span>
            <strong>${escapeHTML(university.selectivity)}</strong>
        </div>
    `;


    const matchHTML =
        showMatch
            ? `
                <div class="match-score">
                    <span>✦</span>
                    <strong>${matchData.score}%</strong>
                    <span>${escapeHTML(matchData.level)}</span>
                </div>

                <div class="match-reasons">
                    ${matchData.reasons.map(function(reason) {
                        return `
                            <div class="match-reason">
                                ✓ ${escapeHTML(reason)}
                            </div>
                        `;
                    }).join("")}
                </div>
            `
            : "";


    return `
        <article class="university-card card">

            <div class="card-top">

                <span class="country-badge">
                    ${escapeHTML(university.country)}
                </span>

                ${matchHTML}

            </div>


            <h3>
                ${escapeHTML(university.name)}
            </h3>


            <div class="university-location">
                📍 ${escapeHTML(university.location || "International")}
            </div>


            <p class="card-description">
                ${escapeHTML(university.description)}
            </p>


            <div class="university-details">

                <div>
                    <span>Type</span>
                    <strong>${escapeHTML(university.type)}</strong>
                </div>

                <div>
                    <span>Level</span>
                    <strong>${escapeHTML(university.level)}</strong>
                </div>

                <div>
                    <span>Language</span>
                    <strong>${escapeHTML(university.language)}</strong>
                </div>

                ${selectivityHTML}

                ${rateHTML}

                <div>
                    <span>Financial aid</span>
                    <strong>${escapeHTML(university.scholarship)}</strong>
                </div>

            </div>


            <div class="card-fields">

                ${university.fields.map(function(field) {

                    return `
                        <span class="field-tag">
                            ${escapeHTML(field)}
                        </span>
                    `;

                }).join("")}

            </div>


            <div class="card-actions">

                <button
                    class="details-button"
                    data-university="${escapeHTML(university.name)}"
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
   7. UNIVERSITY DETAILS
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


    const modal =
        document.createElement("div");


    modal.id = "universityModal";
    modal.className = "modal-overlay";


    const rateText =
        university.acceptanceRate
            ? university.acceptanceRate +
              (
                university.acceptanceRateSource
                    ? " — " + university.acceptanceRateSource
                    : ""
              )
            : "Not available";


    modal.innerHTML = `

        <div class="university-modal">

            <button
                class="modal-close"
                aria-label="Close"
            >
                ×
            </button>


            <span class="country-badge">
                ${escapeHTML(university.country)}
            </span>


            <h2>
                ${escapeHTML(university.name)}
            </h2>


            <p class="modal-description">
                ${escapeHTML(university.description)}
            </p>


            <div class="modal-grid">

                <div>
                    <span>Type</span>
                    <strong>${escapeHTML(university.type)}</strong>
                </div>

                <div>
                    <span>Selectivity</span>
                    <strong>${escapeHTML(university.selectivity)}</strong>
                </div>

                <div>
                    <span>Acceptance rate</span>
                    <strong>${escapeHTML(rateText)}</strong>
                </div>

                <div>
                    <span>Level</span>
                    <strong>${escapeHTML(university.level)}</strong>
                </div>

                <div>
                    <span>Location</span>
                    <strong>${escapeHTML(university.location || "International")}</strong>
                </div>

                <div>
                    <span>Language</span>
                    <strong>${escapeHTML(university.language)}</strong>
                </div>

                <div>
                    <span>Financial support</span>
                    <strong>${escapeHTML(university.scholarship)}</strong>
                </div>

            </div>


            <h3>
                Fields of study
            </h3>


            <div class="modal-tags">

                ${university.fields.map(function(field) {

                    return `
                        <span>
                            ${escapeHTML(field)}
                        </span>
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


    modal
        .querySelector(".modal-close")
        .addEventListener("click", closeUniversityModal);


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
   8. RENDER UNIVERSITIES
========================================================= */

function renderUniversities(
    list = universities,
    showMatch = false
) {

    const container =
        document.getElementById("universityCards");


    const empty =
        document.getElementById("noUniversities");


    if (!container) {
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


    container
        .querySelectorAll("[data-university]")
        .forEach(function(button) {

            button.addEventListener("click", function() {

                showUniversityDetails(
                    button.dataset.university
                );

            });

        });
}


/* =========================================================
   9. BALANCED RECOMMENDATIONS
========================================================= */

function findBestUniversities() {

    const message =
        document.getElementById("finderMessage");

    const section =
        document.getElementById("recommendations");

    const container =
        document.getElementById("recommendationCards");


    if (!selectedInterests.length) {

        if (message) {
            message.textContent =
                "Please choose at least one field of interest.";

            message.style.color =
                "#9b4d38";
        }

        return;
    }


    const ranked =
        universities
            .map(function(university) {

                const match =
                    calculateMatch(university);

                return {
                    university,
                    score: match.score,
                    level: match.level
                };

            })
            .sort(function(a, b) {

                return b.score - a.score;

            });


    /*
       Balanced result:
       3 Reach
       3 Match
       3 Accessible
    */

    const reach =
        ranked
            .filter(item =>
                item.university.selectivity === "Reach"
            )
            .slice(0, 3);


    const match =
        ranked
            .filter(item =>
                item.university.selectivity === "Match"
            )
            .slice(0, 3);


    const accessible =
        ranked
            .filter(item =>
                item.university.selectivity === "Accessible"
            )
            .slice(0, 3);


    let finalResults = [
        ...reach,
        ...match,
        ...accessible
    ];


    if (finalResults.length < 6) {

        finalResults =
            ranked.slice(
                0,
                9
            );

    }


    if (container) {

        container.innerHTML =
            finalResults
                .map(function(item) {

                    return createUniversityCard(
                        item.university,
                        true
                    );

                })
                .join("");


        container
            .querySelectorAll("[data-university]")
            .forEach(function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        showUniversityDetails(
                            button.dataset.university
                        );

                    }
                );

            });

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
            "Your results include Reach, Match and Accessible options.";

        message.style.color = "";

    }
}


/* =========================================================
   10. INTEREST BUTTONS
========================================================= */

function setupInterestButtons() {

    document
        .querySelectorAll("[data-interest]")
        .forEach(function(button) {

            button.addEventListener("click", function() {

                const value =
                    button.dataset.interest;


                if (
                    selectedInterests.includes(value)
                ) {

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
   11. COUNTRY BUTTONS
========================================================= */

function setupCountryButtons() {

    document
        .querySelectorAll("[data-country]")
        .forEach(function(button) {

            button.addEventListener("click", function() {

                const value =
                    button.dataset.country;


                if (value === "All") {

                    selectedCountries = ["All"];

                    document
                        .querySelectorAll("[data-country]")
                        .forEach(function(btn) {
                            btn.classList.remove("selected");
                        });

                    button.classList.add("selected");

                    return;
                }


                selectedCountries =
                    selectedCountries.filter(function(item) {
                        return item !== "All";
                    });


                const allButton =
                    document.querySelector(
                        '[data-country="All"]'
                    );


                if (allButton) {
                    allButton.classList.remove("selected");
                }


                if (
                    selectedCountries.includes(value)
                ) {

                    selectedCountries =
                        selectedCountries.filter(function(item) {
                            return item !== value;
                        });

                    button.classList.remove("selected");

                } else {

                    selectedCountries.push(value);

                    button.classList.add("selected");

                }

            });

        });
}


/* =========================================================
   12. GOAL BUTTONS
========================================================= */

function setupGoalButtons() {

    document
        .querySelectorAll("[data-goal]")
        .forEach(function(button) {

            button.addEventListener("click", function() {

                const value =
                    button.dataset.goal;


                if (
                    selectedGoals.includes(value)
                ) {

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
   13. FINDER MESSAGE
========================================================= */

function updateFinderMessage() {

    const message =
        document.getElementById("finderMessage");


    if (!message) {
        return;
    }


    if (!selectedInterests.length) {

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
   14. UNIVERSITY SEARCH
========================================================= */

function searchUniversities() {

    applyFilters();

}


/* =========================================================
   15. UNIVERSITY FILTERS
========================================================= */

function applyFilters() {

    const countrySelect =
        document.getElementById("countryFilter");

    const fieldSelect =
        document.getElementById("fieldFilter");

    const levelSelect =
        document.getElementById("levelFilter");

    const searchInput =
        document.getElementById("universitySearch");


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

    const query =
        normalize(
            searchInput
                ? searchInput.value
                : ""
        );


    const filtered =
        universities.filter(function(university) {

            const searchable = [
                university.name,
                university.country,
                university.type,
                university.level,
                university.selectivity,
                university.location,
                university.language,
                university.description,
                university.scholarship,
                ...university.fields,
                ...university.tags
            ].join(" ");


            const countryMatch =
                country === "All" ||
                university.country === country;


            const fieldMatch =
                field === "All" ||
                university.fields.includes(field);


            const levelMatch =
                level === "All" ||
                university.level === level;


            const searchMatch =
                !query ||
                normalize(searchable).includes(query);


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
   16. COUNTRY FILTER
========================================================= */

function populateCountryFilter() {

    const select =
        document.getElementById("countryFilter");


    if (!select) {
        return;
    }


    const countries =
        [
            ...new Set(
                universities.map(function(university) {
                    return university.country;
                })
            )
        ].sort();


    select.innerHTML = `

        <option value="All">
            All countries
        </option>

        ${countries.map(function(country) {

            return `
                <option value="${escapeHTML(country)}">
                    ${escapeHTML(country)}
                </option>
            `;

        }).join("")}

    `;
}


/* =========================================================
   17. FIELD FILTER
========================================================= */

function populateFieldFilter() {

    const select =
        document.getElementById("fieldFilter");


    if (!select) {
        return;
    }


    const fields =
        [
            ...new Set(
                universities.flatMap(function(university) {
                    return university.fields;
                })
            )
        ].sort();


    select.innerHTML = `

        <option value="All">
            All fields
        </option>

        ${fields.map(function(field) {

            return `
                <option value="${escapeHTML(field)}">
                    ${escapeHTML(field)}
                </option>
            `;

        }).join("")}

    `;
}


/* =========================================================
   18. RESET
========================================================= */

function resetFilters() {

    const country =
        document.getElementById("countryFilter");

    const field =
        document.getElementById("fieldFilter");

    const level =
        document.getElementById("levelFilter");

    const search =
        document.getElementById("universitySearch");


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


    renderUniversities();
}


/* =========================================================
   19. OPPORTUNITY MATCH
========================================================= */

function calculateOpportunityMatch(item) {

    let score = 0;
    const reasons = [];


    selectedInterests.forEach(function(interest) {

        const fields =
            item.fields || [];


        const exact =
            fields.some(function(field) {
                return normalize(field) === normalize(interest);
            });


        const related =
            fields.some(function(field) {
                return (
                    normalize(field).includes(normalize(interest)) ||
                    normalize(interest).includes(normalize(field))
                );
            });


        if (exact) {

            score += 35;

            reasons.push(
                "Matches your field: " + interest
            );

        } else if (related) {

            score += 18;

            reasons.push(
                "Related to your interests"
            );

        }

    });


    selectedGoals.forEach(function(goal) {

        const goalMap = {
            scholarship: ["Scholarship"],
            international: ["Exchange", "Travel / Exchange"],
            leadership: ["Leadership", "Exchange"],
            career: ["Competition", "Scholarship"],
            research: ["STEM"],
            top: ["Scholarship"]
        };


        const types =
            goalMap[goal] || [];


        if (types.includes(item.type)) {

            score += 20;

            reasons.push(
                "Matches one of your goals"
            );

        }

    });


    if (selectedCountries.length) {

        if (
            selectedCountries.includes("All") ||
            selectedCountries.includes(item.country)
        ) {

            score += 15;

        }
    }


    return {
        score: Math.min(100, score),
        reasons: [...new Set(reasons)].slice(0, 2)
    };
}


/* =========================================================
   20. OPPORTUNITY CARD
========================================================= */

function createOpportunityCard(item) {

    const match =
        calculateOpportunityMatch(item);


    return `

        <article class="opportunity-card card">

            <div class="card-top">

                <span class="country-badge">
                    ${escapeHTML(item.country)}
                </span>

                <span class="opportunity-type">
                    ${escapeHTML(item.type)}
                </span>

            </div>


            <h3>
                ${escapeHTML(item.name)}
            </h3>


            <p class="card-description">
                ${escapeHTML(item.description)}
            </p>


            <div class="opportunity-details">

                <p>
                    <strong>Field:</strong>
                    ${escapeHTML(item.field)}
                </p>

                <p>
                    <strong>Eligibility:</strong>
                    ${escapeHTML(item.eligibility)}
                </p>

                <p>
                    <strong>Level:</strong>
                    ${escapeHTML(item.level || "Varies")}
                </p>

                <p>
                    <strong>Funding:</strong>
                    ${escapeHTML(item.funding || item.cost)}
                </p>

                <p>
                    <strong>Deadline:</strong>
                    ${escapeHTML(item.deadline)}
                </p>

            </div>


            ${
                match.score > 0
                    ? `
                        <div class="match-reasons">
                            ${match.reasons.map(function(reason) {
                                return `
                                    <div class="match-reason">
                                        ✓ ${escapeHTML(reason)}
                                    </div>
                                `;
                            }).join("")}
                        </div>
                    `
                    : ""
            }


            <a
                href="${item.official}"
                target="_blank"
                rel="noopener noreferrer"
                class="official-button"
            >
                Official information ↗
            </a>

        </article>
    `;
}


/* =========================================================
   21. RENDER OPPORTUNITIES
========================================================= */

function renderOpportunities(filter = "All") {

    const container =
        document.getElementById("opportunityCards");


    if (!container) {
        return;
    }


    let list =
        opportunities;


    if (filter !== "All") {

        list =
            opportunities.filter(function(item) {

                return (
                    item.type === filter ||
                    item.field === filter
                );

            });

    }


    list =
        [...list].sort(function(a, b) {

            return (
                calculateOpportunityMatch(b).score -
                calculateOpportunityMatch(a).score
            );

        });


    container.innerHTML =
        list.map(function(item) {

            return createOpportunityCard(item);

        }).join("");
}


/* =========================================================
   22. OPPORTUNITY FILTERS
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


            renderOpportunities(
                button.dataset.opportunityFilter
            );

        });

    });
}


/* =========================================================
   23. COUNTERS
========================================================= */

function updateCounters() {

    const universityNumber =
        universities.length;

    const opportunityNumber =
        opportunities.length;


    const elements = {
        universityCount: universityNumber + "+",
        opportunityCount: opportunityNumber + "+",
        heroUniversityCount: universityNumber + "+",
        heroOpportunityCount: opportunityNumber + "+"
    };


    Object.keys(elements).forEach(function(id) {

        const element =
            document.getElementById(id);


        if (element) {
            element.textContent =
                elements[id];
        }

    });
}


/* =========================================================
   24. MODAL CSS
========================================================= */

function addModalStyles() {

    if (
        document.getElementById("tawjihModalStyles")
    ) {
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

            background:
                rgba(30, 40, 30, 0.55);

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 20px;

            z-index: 9999;

            backdrop-filter: blur(5px);
        }


        .university-modal {
            width: min(760px, 95vw);

            max-height: 90vh;

            overflow-y: auto;

            background: #f6f0df;

            border-radius: 24px;

            padding: 35px;

            position: relative;

            box-shadow:
                0 25px 80px rgba(0,0,0,.25);
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
            color: #68756f;
            margin: 12px 0 20px;
        }


        .modal-grid {
            display: grid;

            grid-template-columns:
                repeat(2, minmax(0, 1fr));

            gap: 15px;

            margin: 25px 0;
        }


        .modal-grid div {
            padding: 15px;

            background:
                rgba(255,255,255,.55);

            border-radius: 14px;
        }


        .modal-grid span {
            display: block;

            font-size: 12px;

            opacity: .65;

            margin-bottom: 5px;
        }


        .modal-grid strong {
            display: block;

            color: #173f35;

            font-size: 13px;

            line-height: 1.4;
        }


        .modal-tags {
            display: flex;

            flex-wrap: wrap;

            gap: 8px;

            margin: 15px 0 25px;
        }


        .modal-tags span {
            padding: 8px 12px;

            border-radius: 20px;

            background: #dfe8d5;

            color: #173f35;

            font-size: 11px;

            font-weight: 700;
        }


        .selectivity-box {
            background: #fafcf9;
        }


        .selectivity-box.reach strong {
            color: #9b4d38;
        }


        .selectivity-box.match strong {
            color: #8b662a;
        }


        .selectivity-box.accessible strong {
            color: #286b59;
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

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeUniversityModal();
        }

    }
);


/* =========================================================
   26. INITIALIZATION
========================================================= */

function initializeTawjih() {

    console.log("🌿 Tawjih V6 starting...");


    setupInterestButtons();
    setupCountryButtons();
    setupGoalButtons();


    populateCountryFilter();
    populateFieldFilter();


    renderUniversities();


    renderOpportunities();


    setupOpportunityFilters();


    updateCounters();


    addModalStyles();


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
            applyFilters
        );
    }


    if (field) {
        field.addEventListener(
            "change",
            applyFilters
        );
    }


    if (level) {
        level.addEventListener(
            "change",
            applyFilters
        );
    }


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
        "✅ Tawjih V6 loaded successfully."
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
   END OF TAWJIH V6
========================================================= */
