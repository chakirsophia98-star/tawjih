/* =========================================================
   TAWJIH — SCRIPT V8
   Complete working JavaScript
   ========================================================= */


/* =========================================================
   1. UNIVERSITY DATABASE
========================================================= */

const universities = [

    /* =========================
       MOROCCO
    ========================= */

    {
        name: "Mohammed VI Polytechnic University (UM6P)",
        country: "Morocco",
        type: "University",
        level: "Bachelor",
        selectivity: "Match",
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Sciences and Technology"],
        fields: ["Business", "Engineering", "Computer Science", "Economics", "Science"],
        language: "English / French",
        location: "Benguerir / Rabat",
        description: "Research-oriented Moroccan university focused on science, technology, innovation, business and entrepreneurship.",
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
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters"],
        fields: ["Business", "Computer Science", "Engineering", "Economics", "Political Science", "Arts"],
        language: "English",
        location: "Ifrane",
        description: "English-language university with a strong international and liberal-arts environment.",
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
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Sciences and Technology"],
        fields: ["Engineering", "Business", "Computer Science", "Political Science", "Economics"],
        language: "French / English",
        location: "Rabat",
        description: "Multidisciplinary university with programs in engineering, business, technology and political science.",
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
        selectivity: "Accessible",
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters"],
        fields: ["Science", "Economics", "Political Science", "Law", "Computer Science"],
        language: "French / Arabic",
        location: "Rabat",
        description: "Major Moroccan public university offering a broad range of academic disciplines.",
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
        selectivity: "Accessible",
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Sciences and Technology"],
        fields: ["Science", "Engineering", "Economics", "Business", "Medicine", "Computer Science"],
        language: "French / Arabic",
        location: "Casablanca",
        description: "Large public university with programs across science, engineering, business, medicine and computing.",
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
        selectivity: "Accessible",
        streams: ["SM", "PC", "SVT", "Economics"],
        fields: ["Science", "Engineering", "Computer Science", "Economics", "Law"],
        language: "French / Arabic",
        location: "Marrakech",
        description: "Major Moroccan public university known for science, engineering, technology and research.",
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
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters"],
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
        selectivity: "Match",
        streams: ["Economics", "Management", "SM", "PC"],
        fields: ["Business", "Management", "Finance", "Marketing", "Economics"],
        language: "French",
        location: "Several Moroccan cities",
        description: "Public Moroccan business schools specializing in management, finance, marketing and economics.",
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
        selectivity: "Match",
        streams: ["SM", "PC", "Sciences and Technology"],
        fields: ["Engineering", "Computer Science", "Technology", "Electronics"],
        language: "French",
        location: "Several Moroccan cities",
        description: "Network of public Moroccan engineering schools focused on applied sciences and technology.",
        scholarship: "Student support available",
        goals: ["career", "research", "top", "scholarship"],
        tags: ["Engineering", "STEM", "Technology"],
        official: "https://www.ensa.ac.ma/"
    },

    {
        name: "École Mohammadia d'Ingénieurs (EMI)",
        country: "Morocco",
        type: "Engineering School",
        level: "Engineering",
        selectivity: "Reach",
        streams: ["SM", "PC", "Sciences and Technology"],
        fields: ["Engineering", "Computer Science", "Technology", "Mathematics"],
        language: "French",
        location: "Rabat",
        description: "Well-known Moroccan engineering school with strong scientific and technical programs.",
        scholarship: "Student support available",
        goals: ["top", "career", "research"],
        tags: ["Engineering", "STEM", "Technology"],
        official: "https://www.emi.ac.ma/"
    },


    /* =========================
       UNITED STATES
    ========================= */

    {
        name: "Harvard University",
        country: "United States",
        type: "Ivy League",
        level: "Bachelor",
        selectivity: "Reach",
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters"],
        fields: ["Business", "Economics", "Computer Science", "Engineering", "Political Science", "Science"],
        language: "English",
        location: "Cambridge, Massachusetts",
        description: "Highly selective Ivy League university with broad academic options.",
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
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters"],
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
        streams: ["SM", "PC", "SVT", "Economics"],
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
        streams: ["SM", "PC", "Economics", "Management"],
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
        streams: ["SM", "PC", "SVT", "Economics", "Management"],
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
        streams: ["SM", "PC", "SVT", "Sciences and Technology"],
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
        streams: ["SM", "PC", "SVT", "Economics", "Management"],
        fields: ["Computer Science", "Engineering", "Business", "Economics", "Science"],
        language: "English",
        location: "Stanford, California",
        description: "Highly selective research university with strong technology and entrepreneurship programs.",
        scholarship: "Need-based financial aid",
        goals: ["top", "research", "career", "leadership"],
        tags: ["Technology", "Entrepreneurship", "Research"],
        official: "https://admission.stanford.edu/"
    },

    {
        name: "University of California, Berkeley",
        country: "United States",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Reach",
        streams: ["SM", "PC", "SVT", "Economics", "Management"],
        fields: ["Computer Science", "Engineering", "Business", "Economics", "Science"],
        language: "English",
        location: "Berkeley, California",
        description: "Leading public research university with strong technology, engineering and science programs.",
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
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters"],
        fields: ["Business", "Computer Science", "Engineering", "Economics", "Political Science"],
        language: "English",
        location: "Los Angeles, California",
        description: "Major public research university with broad academic offerings.",
        scholarship: "Financial aid available; eligibility varies",
        goals: ["top", "career", "research", "international"],
        tags: ["Public", "Research", "Los Angeles"],
        official: "https://admission.ucla.edu/"
    },

    {
        name: "University of Illinois Urbana-Champaign",
        country: "United States",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Match",
        streams: ["SM", "PC", "SVT", "Economics", "Management"],
        fields: ["Computer Science", "Engineering", "Business", "Economics", "Science"],
        language: "English",
        location: "Urbana-Champaign, Illinois",
        description: "Public research university particularly strong in computing, engineering, business and science.",
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
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters"],
        fields: ["Business", "Economics", "Computer Science", "Arts", "Political Science"],
        language: "English",
        location: "New York, New York",
        description: "Large private university with strong business, arts, social sciences and technology programs.",
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
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters"],
        fields: ["Business", "Computer Science", "Engineering", "Economics", "Political Science"],
        language: "English",
        location: "Boston, Massachusetts",
        description: "Large research university offering a broad range of undergraduate programs.",
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
        streams: ["SM", "PC", "Economics", "Management", "Sciences and Technology"],
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
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters"],
        fields: ["Business", "Computer Science", "Engineering", "Film", "Economics"],
        language: "English",
        location: "Los Angeles, California",
        description: "Private research university with strong business, technology, media and engineering programs.",
        scholarship: "Merit scholarships and financial aid available",
        goals: ["career", "international", "leadership"],
        tags: ["Business", "Technology", "Film"],
        official: "https://admission.usc.edu/"
    },

    {
        name: "Arizona State University",
        country: "United States",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Accessible",
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters", "Sciences and Technology"],
        fields: ["Business", "Engineering", "Computer Science", "Economics", "Science", "Arts"],
        language: "English",
        location: "Tempe, Arizona",
        description: "Large public research university with extensive academic offerings.",
        scholarship: "Merit scholarships and financial aid options available",
        goals: ["career", "international", "research", "scholarship"],
        tags: ["Public", "STEM", "Business", "International"],
        acceptanceRate: "Reported rate varies by year and source",
        official: "https://admission.asu.edu/"
    },

    {
        name: "University of Arizona",
        country: "United States",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Accessible",
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters"],
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
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters"],
        fields: ["Business", "Engineering", "Computer Science", "Science", "Arts", "Economics"],
        language: "English",
        location: "Iowa City, Iowa",
        description: "Public research university offering a broad range of undergraduate programs.",
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
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Sciences and Technology"],
        fields: ["Engineering", "Computer Science", "Business", "Agriculture", "Science", "Architecture"],
        language: "English",
        location: "Ames, Iowa",
        description: "Public research university with strong engineering, science and business programs.",
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
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters"],
        fields: ["Business", "Engineering", "Computer Science", "Architecture", "Science", "Economics"],
        language: "English",
        location: "Fayetteville, Arkansas",
        description: "Public research university with broad academic programs.",
        scholarship: "Scholarships available",
        goals: ["career", "scholarship", "research"],
        tags: ["Public", "Business", "Engineering"],
        official: "https://admissions.uark.edu/"
    },


    /* =========================
       EUROPE
    ========================= */

    {
        name: "University of Oxford",
        country: "United Kingdom",
        type: "University",
        level: "Bachelor",
        selectivity: "Reach",
        streams: ["SM", "PC", "SVT", "Economics", "Management", "Letters"],
        fields: ["Economics", "Engineering", "Computer Science", "Political Science", "Science"],
        language: "English",
        location: "Oxford",
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
        selectivity: "Reach",
        streams: ["SM", "PC", "SVT", "Economics", "Management"],
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
        streams: ["SM", "PC", "SVT", "Sciences and Technology"],
        fields: ["Engineering", "Computer Science", "Science", "Business"],
        language: "English",
        location: "London",
        description: "Leading UK institution focused on science, engineering and technology.",
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
        streams: ["SM", "PC", "SVT", "Economics", "Management"],
        fields: ["Engineering", "Computer Science", "Business", "Economics", "Science"],
        language: "English",
        location: "Manchester",
        description: "Large research university with a broad range of undergraduate programs.",
        scholarship: "Scholarships vary by program and nationality",
        goals: ["research", "career", "international"],
        tags: ["UK", "Research", "Engineering"],
        official: "https://www.manchester.ac.uk/study/undergraduate/"
    },

    {
        name: "Sciences Po",
        country: "France",
        type: "University",
        level: "Bachelor",
        selectivity: "Match",
        streams: ["Economics", "Management", "Letters", "SM"],
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
        streams: ["SM", "PC", "SVT", "Economics"],
        fields: ["Science", "Engineering", "Mathematics", "Computer Science", "Economics"],
        language: "French / English",
        location: "Paris-Saclay",
        description: "Major French research university with strong science and engineering programs.",
        scholarship: "Funding opportunities",
        goals: ["research", "top", "career"],
        tags: ["Science", "Engineering", "Research"],
        official: "https://www.universite-paris-saclay.fr/"
    },

    {
        name: "Technical University of Munich (TUM)",
        country: "Germany",
        type: "University",
        level: "Bachelor",
        selectivity: "Match",
        streams: ["SM", "PC", "SVT", "Economics", "Sciences and Technology"],
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
        name: "University of Amsterdam",
        country: "Netherlands",
        type: "Public Research University",
        level: "Bachelor",
        selectivity: "Match",
        streams: ["SM", "PC", "Economics", "Management", "Letters"],
        fields: ["Business", "Economics", "Computer Science", "Political Science", "Arts"],
        language: "English / Dutch depending on program",
        location: "Amsterdam",
        description: "International research university with a wide range of bachelor's programs.",
        scholarship: "Scholarships vary by program and nationality",
        goals: ["international", "research", "career"],
        tags: ["Netherlands", "Amsterdam", "Research"],
        official: "https://www.uva.nl/en"
    },

    {
        name: "Erasmus University Rotterdam",
        country: "Netherlands",
        type: "University",
        level: "Bachelor",
        selectivity: "Match",
        streams: ["Economics", "Management", "SM"],
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
        name: "ETH Zurich",
        country: "Switzerland",
        type: "University",
        level: "Bachelor",
        selectivity: "Reach",
        streams: ["SM", "PC", "SVT", "Sciences and Technology"],
        fields: ["Engineering", "Computer Science", "Physics", "Mathematics", "Science"],
        language: "German / English depending on program",
        location: "Zurich",
        description: "Leading European university for science, engineering and technology.",
        scholarship: "Funding opportunities",
        goals: ["top", "research", "career"],
        tags: ["STEM", "Engineering", "Research"],
        official: "https://ethz.ch/en/studies/bachelor.html"
    },

    {
        name: "National University of Singapore (NUS)",
        country: "Singapore",
        type: "University",
        level: "Bachelor",
        selectivity: "Reach",
        streams: ["SM", "PC", "SVT", "Economics", "Management"],
        fields: ["Computer Science", "Engineering", "Business", "Economics", "Science"],
        language: "English",
        location: "Singapore",
        description: "Leading Asian university with strong technology, business and science programs.",
        scholarship: "Scholarships available",
        goals: ["top", "international", "career", "research"],
        tags: ["Asia", "Technology", "Business"],
        official: "https://www.nus.edu.sg/"
    },

    {
        name: "KAIST",
        country: "South Korea",
        type: "University",
        level: "Bachelor",
        selectivity: "Reach",
        streams: ["SM", "PC", "SVT", "Sciences and Technology"],
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
   2. OPPORTUNITIES
========================================================= */

const opportunities = [

    {
        name: "YES — Kennedy-Lugar Youth Exchange and Study",
        type: "Exchange",
        field: "International",
        fields: ["International", "Leadership", "Languages", "Culture"],
        country: "United States",
        eligibility: "Eligibility and participating countries vary by cycle.",
        level: "High School",
        funding: "Scholarship / funded exchange",
        description: "Academic-year exchange opportunity connecting students with American schools and communities.",
        deadline: "Check the official program and local application cycle.",
        cost: "Funding depends on the program.",
        official: "https://exchanges.state.gov/"
    },

    {
        name: "Erasmus+ Youth Exchanges",
        type: "Exchange",
        field: "Leadership",
        fields: ["Leadership", "International", "Culture", "Languages"],
        country: "Europe",
        eligibility: "Young people generally aged 13–30; project-specific rules apply.",
        level: "Youth",
        funding: "Travel and activity support may be available",
        description: "Short international youth exchanges where young people from different countries learn and work together.",
        deadline: "Depends on the participating organisation and project.",
        cost: "Often supported by Erasmus+ funding.",
        official: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/youth-exchanges-and-activities"
    },

    {
        name: "Erasmus+ Pupil Mobility",
        type: "Exchange",
        field: "International",
        fields: ["International", "Languages", "Culture", "Science", "Business"],
        country: "Europe",
        eligibility: "School pupils through participating schools and organisations.",
        level: "High School",
        funding: "Erasmus+ support",
        description: "School mobility opportunities that can include learning periods abroad.",
        deadline: "Depends on the school's project.",
        cost: "Funding is handled through participating organisations.",
        official: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/pupils"
    },

    {
        name: "DiscoverEU",
        type: "Exchange",
        field: "International",
        fields: ["International", "Culture", "Languages"],
        country: "Europe",
        eligibility: "Eligibility depends on the current European Commission call.",
        level: "Youth",
        funding: "Travel pass",
        description: "Travel opportunity helping young people explore Europe and discover different cultures.",
        deadline: "Application rounds are announced by the European Commission.",
        cost: "Selected participants receive travel support.",
        official: "https://youth.europa.eu/discovereu_en"
    },

    {
        name: "Reach Oxford Scholarship",
        type: "Scholarship",
        field: "Education",
        fields: ["Business", "Economics", "Engineering", "Computer Science", "Political Science", "Science", "Arts"],
        country: "United Kingdom",
        eligibility: "Eligible international undergraduate applicants; Oxford admission is required.",
        level: "Bachelor",
        funding: "Scholarship support",
        description: "Undergraduate scholarship opportunity at the University of Oxford.",
        deadline: "Annual cycle; check Oxford for current dates.",
        cost: "Check official requirements.",
        official: "https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding/oxford-support/reach-oxford-scholarship"
    },

    {
        name: "Cambridge Trust Scholarships",
        type: "Scholarship",
        field: "Education",
        fields: ["Science", "Engineering", "Computer Science", "Economics", "Arts", "Political Science"],
        country: "United Kingdom",
        eligibility: "International applicants; eligibility varies by scholarship and level.",
        level: "Bachelor / Graduate",
        funding: "Varies",
        description: "Funding opportunities administered through Cambridge Trust and participating colleges.",
        deadline: "Varies.",
        cost: "Varies.",
        official: "https://www.cambridgetrust.org/"
    },

    {
        name: "Blue Ocean Student Competition",
        type: "Competition",
        field: "Business",
        fields: ["Business", "Entrepreneurship", "Economics"],
        country: "International",
        eligibility: "High school students.",
        level: "High School",
        funding: "Competition-based",
        description: "Entrepreneurship competition focused on innovative business ideas.",
        deadline: "Check current official cycle.",
        cost: "Check official website.",
        official: "https://blueoceancompetition.org/"
    },

    {
        name: "Model United Nations",
        type: "MUN",
        field: "Political Science",
        fields: ["Political Science", "International Relations", "Leadership", "Law"],
        country: "International",
        eligibility: "High school students; conference rules vary.",
        level: "High School",
        funding: "Varies",
        description: "Develop diplomacy, public speaking, research and negotiation skills through UN simulations.",
        deadline: "Depends on the conference.",
        cost: "Depends on the conference.",
        official: "https://www.un.org/en/mun"
    },

    {
        name: "Technovation Girls",
        type: "STEM",
        field: "Computer Science",
        fields: ["Computer Science", "AI", "Business", "Engineering", "Entrepreneurship"],
        country: "International",
        eligibility: "Current program eligibility rules apply.",
        level: "High School",
        funding: "Program-based",
        description: "Technology and entrepreneurship program encouraging young people to build solutions to real-world problems.",
        deadline: "Depends on annual cycle.",
        cost: "Check current program.",
        official: "https://technovation.org/"
    },

    {
        name: "FIRST Robotics Competition",
        type: "STEM",
        field: "Engineering",
        fields: ["Engineering", "Computer Science", "Robotics", "AI"],
        country: "International",
        eligibility: "High school students through participating teams.",
        level: "High School",
        funding: "Team-dependent",
        description: "Engineering and robotics experience combining technology, teamwork and innovation.",
        deadline: "Depends on season.",
        cost: "Depends on team.",
        official: "https://www.firstinspires.org/"
    },

    {
        name: "International Mathematical Olympiad",
        type: "STEM",
        field: "Mathematics",
        fields: ["Mathematics", "Science", "Computer Science"],
        country: "International",
        eligibility: "Selected secondary-school students through national teams.",
        level: "High School",
        funding: "National process dependent",
        description: "International mathematics competition for talented secondary-school students.",
        deadline: "National selection varies.",
        cost: "Depends on national process.",
        official: "https://www.imo-official.org/"
    },

    {
        name: "Rise",
        type: "Leadership",
        field: "Leadership",
        fields: ["Leadership", "Social Sciences", "Entrepreneurship", "International"],
        country: "International",
        eligibility: "Young people; program rules apply.",
        level: "High School",
        funding: "Program support varies",
        description: "Global program supporting young people with leadership potential and community impact.",
        deadline: "Annual cycle.",
        cost: "Check official program.",
        official: "https://www.risefortheworld.org/"
    }

];


/* =========================================================
   3. STATE
========================================================= */

let selectedInterests = [];
let selectedCountries = [];
let selectedGoals = [];
let selectedStream = "";


/* =========================================================
   4. HELPERS
========================================================= */

function normalize(value) {
    return String(value || "").toLowerCase().trim();
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

    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   5. STREAM / FILIERE
========================================================= */

const streamCompatibility = {

    SM: [
        "Computer Science",
        "Engineering",
        "Science",
        "Mathematics",
        "AI",
        "Technology",
        "Economics"
    ],

    PC: [
        "Engineering",
        "Science",
        "Computer Science",
        "Physics",
        "Chemistry",
        "Technology"
    ],

    SVT: [
        "Science",
        "Medicine",
        "Biology",
        "Environment",
        "Engineering"
    ],

    Economics: [
        "Economics",
        "Business",
        "Finance",
        "Management",
        "Marketing",
        "Political Science"
    ],

    Management: [
        "Business",
        "Management",
        "Finance",
        "Marketing",
        "Economics"
    ],

    Letters: [
        "Arts",
        "Political Science",
        "Law",
        "Economics",
        "International Relations"
    ],

    "Sciences and Technology": [
        "Engineering",
        "Computer Science",
        "Technology",
        "AI",
        "Science"
    ]
};


function setupStreamSelector() {

    const finderCard =
        document.querySelector(".finder-card");

    if (!finderCard) {
        return;
    }

    if (document.getElementById("tawjihStreamStep")) {
        return;
    }

    const step = document.createElement("div");

    step.id = "tawjihStreamStep";
    step.className = "finder-step";

    step.innerHTML = `
        <div class="step-number">01</div>

        <div class="step-content">

            <h3>What is your academic stream?</h3>

            <p>
                Select your current school stream to improve your recommendations.
            </p>

            <div class="choice-grid">

                <button class="choice stream-choice" data-stream="SM">
                    📐 Sciences Mathématiques (SM)
                </button>

                <button class="choice stream-choice" data-stream="PC">
                    ⚛️ Sciences Physiques (PC)
                </button>

                <button class="choice stream-choice" data-stream="SVT">
                    🧬 Sciences de la Vie et de la Terre (SVT)
                </button>

                <button class="choice stream-choice" data-stream="Economics">
                    📊 Sciences Économiques
                </button>

                <button class="choice stream-choice" data-stream="Management">
                    💼 Gestion / Management
                </button>

                <button class="choice stream-choice" data-stream="Letters">
                    📚 Lettres / Humanités
                </button>

                <button class="choice stream-choice" data-stream="Sciences and Technology">
                    ⚙️ Sciences et Technologies
                </button>

            </div>

        </div>
    `;

    finderCard.insertBefore(
        step,
        finderCard.firstElementChild
    );

    step.querySelectorAll("[data-stream]").forEach(function(button) {

        button.addEventListener("click", function() {

            selectedStream =
                button.dataset.stream;

            step.querySelectorAll("[data-stream]").forEach(function(btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

            updateFinderMessage();
        });
    });
}


/* =========================================================
   6. UNIVERSITY MATCHING
========================================================= */

function calculateMatch(university) {

    let score = 0;
    const reasons = [];

    /* STREAM */

    if (selectedStream) {

        if (
            university.streams &&
            university.streams.includes(selectedStream)
        ) {

            score += 25;

            reasons.push(
                "Compatible with your " + selectedStream + " stream"
            );

        } else {

            const compatibleFields =
                streamCompatibility[selectedStream] || [];

            const related =
                university.fields.some(function(field) {
                    return compatibleFields.includes(field);
                });

            if (related) {
                score += 10;

                reasons.push(
                    "Your stream gives you relevant preparation"
                );
            }
        }
    }


    /* INTERESTS */

    selectedInterests.forEach(function(interest) {

        const exact =
            university.fields.some(function(field) {
                return normalize(field) === normalize(interest);
            });

        const related =
            university.fields.some(function(field) {
                const a = normalize(field);
                const b = normalize(interest);

                return a.includes(b) || b.includes(a);
            });

        if (exact) {

            score += 20;

            reasons.push(
                "Strong match for " + interest
            );

        } else if (related) {

            score += 10;

            reasons.push(
                "Related programs for " + interest
            );
        }
    });


    /* COUNTRY */

    if (
        selectedCountries.length > 0 &&
        !selectedCountries.includes("All") &&
        selectedCountries.includes(university.country)
    ) {

        score += 25;

        reasons.push(
            "Matches your preferred country"
        );
    }


    /* GOALS */

    selectedGoals.forEach(function(goal) {

        if (
            university.goals &&
            university.goals.includes(goal)
        ) {

            score += 5;

            reasons.push(
                "Matches your " + goal + " goal"
            );
        }
    });


    score = Math.min(100, Math.round(score));


    let level = "Possible match";

    if (score >= 80) {
        level = "Excellent match";
    } else if (score >= 65) {
        level = "Strong match";
    } else if (score >= 50) {
        level = "Good match";
    }


    return {
        score: score,
        level: level,
        reasons: [...new Set(reasons)].slice(0, 3)
    };
}


/* =========================================================
   7. STRICT FILTER
========================================================= */

function universityFitsProfile(university) {

    /* STREAM */

    if (selectedStream) {

        const direct =
            university.streams &&
            university.streams.includes(selectedStream);

        const compatibleFields =
            streamCompatibility[selectedStream] || [];

        const related =
            university.fields.some(function(field) {
                return compatibleFields.includes(field);
            });

        if (!direct && !related) {
            return false;
        }
    }


    /* INTERESTS */

    if (selectedInterests.length > 0) {

        const hasInterest =
            selectedInterests.some(function(interest) {

                return university.fields.some(function(field) {

                    const a = normalize(field);
                    const b = normalize(interest);

                    return (
                        a === b ||
                        a.includes(b) ||
                        b.includes(a)
                    );
                });

            });

        if (!hasInterest) {
            return false;
        }
    }


    /* COUNTRY */

    if (
        selectedCountries.length > 0 &&
        !selectedCountries.includes("All")
    ) {

        if (
            !selectedCountries.includes(
                university.country
            )
        ) {
            return false;
        }
    }


    return true;
}


/* =========================================================
   8. UNIVERSITY CARD
========================================================= */

function createUniversityCard(
    university,
    showMatch = false
) {

    const match =
        calculateMatch(university);

    const selectivity =
        university.selectivity || "Not specified";


    return `
        <article class="university-card card">

            <div class="card-top">

                <span class="country-badge">
                    ${escapeHTML(university.country)}
                </span>

                ${
                    showMatch
                        ? `
                            <div class="match-score">
                                <span>✦</span>
                                <strong>${match.score}%</strong>
                                <span>${escapeHTML(match.level)}</span>
                            </div>
                        `
                        : `
                            <span class="opportunity-type">
                                ${escapeHTML(selectivity)}
                            </span>
                        `
                }

            </div>


            <h3>
                ${escapeHTML(university.name)}
            </h3>


            <div class="university-location">
                📍 ${escapeHTML(university.location)}
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

                <div>
                    <span>Selectivity</span>
                    <strong>${escapeHTML(selectivity)}</strong>
                </div>

                ${
                    university.acceptanceRate
                        ? `
                            <div>
                                <span>Acceptance rate</span>
                                <strong>${escapeHTML(university.acceptanceRate)}</strong>
                            </div>
                        `
                        : ""
                }

                <div>
                    <span>Financial aid</span>
                    <strong>${escapeHTML(university.scholarship)}</strong>
                </div>

            </div>


            ${
                showMatch && match.reasons.length
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
                    data-university-name="${escapeHTML(university.name)}"
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

    const oldModal =
        document.getElementById("universityModal");

    if (oldModal) {
        oldModal.remove();
    }

    const modal =
        document.createElement("div");

    modal.id = "universityModal";
    modal.className = "modal-overlay";

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

                ${
                    university.acceptanceRate
                        ? `
                            <div>
                                <span>Acceptance rate</span>
                                <strong>${escapeHTML(university.acceptanceRate)}</strong>
                            </div>
                        `
                        : ""
                }

                <div>
                    <span>Level</span>
                    <strong>${escapeHTML(university.level)}</strong>
                </div>

                <div>
                    <span>Location</span>
                    <strong>${escapeHTML(university.location)}</strong>
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
                Compatible streams
            </h3>

            <div class="modal-tags">

                ${(university.streams || []).map(function(stream) {
                    return `
                        <span>
                            ${escapeHTML(stream)}
                        </span>
                    `;
                }).join("")}

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
        .addEventListener(
            "click",
            closeUniversityModal
        );


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
   10. RENDER UNIVERSITIES
========================================================= */

function renderUniversities(
    list = universities,
    showMatch = false
) {

    const container =
        document.getElementById(
            "universityCards"
        );

    const empty =
        document.getElementById(
            "noUniversities"
        );

    if (!container) {
        return;
    }


    if (list.length === 0) {

        container.innerHTML = "";

        if (empty) {

            empty.classList.remove(
                "hidden"
            );

            empty.innerHTML = `
                <span>🔎</span>
                <h3>No universities found</h3>
                <p>
                    Try changing your stream, field or country.
                </p>
            `;
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
        .querySelectorAll(
            "[data-university-name]"
        )
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    showUniversityDetails(
                        button.dataset.universityName
                    );

                }
            );
        });
}


/* =========================================================
   11. FIND MY BEST UNIVERSITIES
========================================================= */

function findBestUniversities() {

    const message =
        document.getElementById(
            "finderMessage"
        );

    const section =
        document.getElementById(
            "recommendations"
        );

    const container =
        document.getElementById(
            "recommendationCards"
        );


    if (
        !selectedStream &&
        selectedInterests.length === 0
    ) {

        if (message) {

            message.textContent =
                "Choose your academic stream or at least one field.";

            message.style.color =
                "#9b4d38";
        }

        return;
    }


    const eligible =
        universities.filter(
            universityFitsProfile
        );


    const ranked =
        eligible
            .map(function(university) {

                return {
                    university: university,
                    match: calculateMatch(
                        university
                    )
                };

            })
            .sort(function(a, b) {

                return (
                    b.match.score -
                    a.match.score
                );

            });


    if (ranked.length === 0) {

        if (container) {
            container.innerHTML = "";
        }

        if (section) {
            section.classList.remove("hidden");
        }

        if (message) {

            message.textContent =
                "No universities match this profile. Try a related field or another country.";

            message.style.color =
                "#9b4d38";
        }

        return;
    }


    /*
       Create a balanced list:
       Reach + Match + Accessible
    */

    const reach =
        ranked
            .filter(function(item) {
                return item.university.selectivity === "Reach";
            })
            .slice(0, 3);

    const match =
        ranked
            .filter(function(item) {
                return item.university.selectivity === "Match";
            })
            .slice(0, 3);

    const accessible =
        ranked
            .filter(function(item) {
                return item.university.selectivity === "Accessible";
            })
            .slice(0, 3);


    let results = [
        ...reach,
        ...match,
        ...accessible
    ];


    /*
       Fill remaining places from the
       best eligible universities.
    */

    const alreadyIncluded =
        new Set(
            results.map(function(item) {
                return item.university.name;
            })
        );


    ranked.forEach(function(item) {

        if (
            results.length < 9 &&
            !alreadyIncluded.has(
                item.university.name
            )
        ) {

            results.push(item);

            alreadyIncluded.add(
                item.university.name
            );
        }

    });


    if (container) {

        container.innerHTML =
            results.map(function(item) {

                return createUniversityCard(
                    item.university,
                    true
                );

            }).join("");


        container
            .querySelectorAll(
                "[data-university-name]"
            )
            .forEach(function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        showUniversityDetails(
                            button.dataset.universityName
                        );

                    }
                );

            });
    }


    if (section) {

        section.classList.remove(
            "hidden"
        );

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
            results.length +
            " universities that fit your profile.";

        message.style.color = "";
    }
}


/* =========================================================
   12. INTEREST BUTTONS
========================================================= */

function setupInterestButtons() {

    document
        .querySelectorAll(
            "[data-interest]"
        )
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    const value =
                        button.dataset.interest;


                    if (
                        selectedInterests.includes(
                            value
                        )
                    ) {

                        selectedInterests =
                            selectedInterests.filter(
                                function(item) {
                                    return item !== value;
                                }
                            );

                        button.classList.remove(
                            "selected"
                        );

                    } else {

                        selectedInterests.push(
                            value
                        );

                        button.classList.add(
                            "selected"
                        );
                    }


                    updateFinderMessage();
                }
            );
        });
}


/* =========================================================
   13. COUNTRY BUTTONS
========================================================= */

function setupCountryButtons() {

    document
        .querySelectorAll(
            "[data-country]"
        )
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    const value =
                        button.dataset.country;


                    if (value === "All") {

                        selectedCountries =
                            ["All"];

                        document
                            .querySelectorAll(
                                "[data-country]"
                            )
                            .forEach(function(btn) {

                                btn.classList.remove(
                                    "selected"
                                );

                            });

                        button.classList.add(
                            "selected"
                        );

                        return;
                    }


                    selectedCountries =
                        selectedCountries.filter(
                            function(item) {
                                return item !== "All";
                            }
                        );


                    const allButton =
                        document.querySelector(
                            '[data-country="All"]'
                        );


                    if (allButton) {
                        allButton.classList.remove(
                            "selected"
                        );
                    }


                    if (
                        selectedCountries.includes(
                            value
                        )
                    ) {

                        selectedCountries =
                            selectedCountries.filter(
                                function(item) {
                                    return item !== value;
                                }
                            );

                        button.classList.remove(
                            "selected"
                        );

                    } else {

                        selectedCountries.push(
                            value
                        );

                        button.classList.add(
                            "selected"
                        );
                    }

                }
            );
        });
}


/* =========================================================
   14. GOAL BUTTONS
========================================================= */

function setupGoalButtons() {

    document
        .querySelectorAll(
            "[data-goal]"
        )
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    const value =
                        button.dataset.goal;


                    if (
                        selectedGoals.includes(
                            value
                        )
                    ) {

                        selectedGoals =
                            selectedGoals.filter(
                                function(item) {
                                    return item !== value;
                                }
                            );

                        button.classList.remove(
                            "selected"
                        );

                    } else {

                        selectedGoals.push(
                            value
                        );

                        button.classList.add(
                            "selected"
                        );
                    }
                }
            );
        });
}


/* =========================================================
   15. FINDER MESSAGE
========================================================= */

function updateFinderMessage() {

    const message =
        document.getElementById(
            "finderMessage"
        );

    if (!message) {
        return;
    }


    const parts = [];


    if (selectedStream) {
        parts.push(
            "Stream: " +
            selectedStream
        );
    }


    if (selectedInterests.length) {

        parts.push(
            selectedInterests.length +
            " interest" +
            (
                selectedInterests.length > 1
                    ? "s"
                    : ""
            )
        );
    }


    if (parts.length === 0) {

        message.textContent =
            "Choose your stream or an interest to continue.";

    } else {

        message.textContent =
            parts.join(" • ");

    }
}


/* =========================================================
   16. SEARCH
========================================================= */

function searchUniversities() {

    applyFilters();
}


/* =========================================================
   17. FILTERS
========================================================= */

function applyFilters() {

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

    const searchInput =
        document.getElementById(
            "universitySearch"
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

    const query =
        normalize(
            searchInput
                ? searchInput.value
                : ""
        );


    const filtered =
        universities.filter(
            function(university) {

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
                    ...(university.fields || []),
                    ...(university.tags || []),
                    ...(university.streams || [])
                ].join(" ");


                return (
                    (
                        country === "All" ||
                        university.country === country
                    ) &&
                    (
                        field === "All" ||
                        university.fields.includes(field)
                    ) &&
                    (
                        level === "All" ||
                        university.level === level
                    ) &&
                    (
                        !query ||
                        normalize(searchable)
                            .includes(query)
                    )
                );
            }
        );


    renderUniversities(
        filtered
    );
}


/* =========================================================
   18. COUNTRY FILTER
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


    select.innerHTML =
        `<option value="All">All countries</option>` +
        countries.map(function(country) {

            return `
                <option value="${escapeHTML(country)}">
                    ${escapeHTML(country)}
                </option>
            `;

        }).join("");
}


/* =========================================================
   19. FIELD FILTER
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


    select.innerHTML =
        `<option value="All">All fields</option>` +
        fields.map(function(field) {

            return `
                <option value="${escapeHTML(field)}">
                    ${escapeHTML(field)}
                </option>
            `;

        }).join("");
}


/* =========================================================
   20. RESET
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


    renderUniversities();
}


/* =========================================================
   21. OPPORTUNITY MATCHING
========================================================= */

function calculateOpportunityMatch(
    opportunity
) {

    let score = 0;
    const reasons = [];


    selectedInterests.forEach(function(interest) {

        const exact =
            (opportunity.fields || [])
                .some(function(field) {

                    return (
                        normalize(field) ===
                        normalize(interest)
                    );

                });


        const related =
            (opportunity.fields || [])
                .some(function(field) {

                    return (
                        normalize(field)
                            .includes(
                                normalize(interest)
                            ) ||
                        normalize(interest)
                            .includes(
                                normalize(field)
                            )
                    );

                });


        if (exact) {

            score += 35;

            reasons.push(
                "Matches your field"
            );

        } else if (related) {

            score += 15;
        }
    });


    if (
        selectedGoals.includes(
            "international"
        ) &&
        opportunity.type === "Exchange"
    ) {

        score += 25;

        reasons.push(
            "Matches your international goal"
        );
    }


    if (
        selectedGoals.includes(
            "scholarship"
        ) &&
        opportunity.type === "Scholarship"
    ) {

        score += 25;

        reasons.push(
            "Matches your scholarship goal"
        );
    }


    if (
        selectedGoals.includes(
            "leadership"
        ) &&
        (
            opportunity.type === "Leadership" ||
            opportunity.type === "Exchange"
        )
    ) {

        score += 20;
    }


    return {
        score: Math.min(100, score),
        reasons: [...new Set(reasons)].slice(0, 2)
    };
}


/* =========================================================
   22. OPPORTUNITY CARD
========================================================= */

function createOpportunityCard(item) {

    const match =
        calculateOpportunityMatch(
            item
        );


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
                    ${escapeHTML(item.level)}
                </p>

                <p>
                    <strong>Funding:</strong>
                    ${escapeHTML(item.funding)}
                </p>

                <p>
                    <strong>Deadline:</strong>
                    ${escapeHTML(item.deadline)}
                </p>

            </div>


            ${
                match.reasons.length
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
   23. RENDER OPPORTUNITIES
========================================================= */

function renderOpportunities(
    filter = "All"
) {

    const container =
        document.getElementById(
            "opportunityCards"
        );

    if (!container) {
        return;
    }


    let list =
        opportunities;


    if (filter !== "All") {

        list =
            opportunities.filter(
                function(item) {

                    return (
                        item.type === filter ||
                        item.field === filter
                    );

                }
            );
    }


    list =
        [...list].sort(
            function(a, b) {

                return (
                    calculateOpportunityMatch(b).score -
                    calculateOpportunityMatch(a).score
                );

            }
        );


    container.innerHTML =
        list.map(function(item) {

            return createOpportunityCard(
                item
            );

        }).join("");
}


/* =========================================================
   24. OPPORTUNITY FILTER BUTTONS
========================================================= */

function setupOpportunityFilters() {

    document
        .querySelectorAll(
            "[data-opportunity-filter]"
        )
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    document
                        .querySelectorAll(
                            "[data-opportunity-filter]"
                        )
                        .forEach(function(btn) {

                            btn.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    renderOpportunities(
                        button.dataset.opportunityFilter
                    );
                }
            );
        });
}


/* =========================================================
   25. COUNTERS
========================================================= */

function updateCounters() {

    const values = {

        universityCount:
            universities.length + "+",

        opportunityCount:
            opportunities.length + "+",

        heroUniversityCount:
            universities.length + "+",

        heroOpportunityCount:
            opportunities.length + "+"

    };


    Object.keys(values).forEach(function(id) {

        const element =
            document.getElementById(id);

        if (element) {
            element.textContent =
                values[id];
        }
    });
}


/* =========================================================
   26. DYNAMIC CSS
========================================================= */

function addDynamicStyles() {

    if (
        document.getElementById(
            "tawjihDynamicStyles"
        )
    ) {
        return;
    }


    const style =
        document.createElement("style");


    style.id =
        "tawjihDynamicStyles";


    style.textContent = `
        .match-score {
            display: flex;
            align-items: center;
            gap: 6px;
            flex-wrap: wrap;
            font-size: 11px;
        }

        .match-score strong {
            color: #286b59;
            font-size: 17px;
        }

        .match-score span:last-child {
            background: #f5ead4;
            color: #8b662a;
            padding: 4px 8px;
            border-radius: 10px;
            font-size: 9px;
            font-weight: 800;
        }

        .match-reasons {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-top: 8px;
        }

        .match-reason {
            color: #68756f;
            font-size: 10px;
            line-height: 1.45;
        }

        .modal-overlay {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background: rgba(30,40,30,.55);
            z-index: 9999;
            backdrop-filter: blur(5px);
        }

        .university-modal {
            width: min(760px,95vw);
            max-height: 90vh;
            overflow-y: auto;
            padding: 35px;
            position: relative;
            background: #f6f0df;
            border-radius: 24px;
            box-shadow: 0 25px 80px rgba(0,0,0,.25);
        }

        .modal-close {
            position: absolute;
            top: 15px;
            right: 18px;
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 50%;
            background: #e7dfc8;
            font-size: 25px;
            cursor: pointer;
        }

        .modal-description {
            color: #68756f;
            line-height: 1.7;
            margin: 12px 0 20px;
        }

        .modal-grid {
            display: grid;
            grid-template-columns: repeat(2,minmax(0,1fr));
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
            color: #68756f;
            font-size: 11px;
            margin-bottom: 5px;
        }

        .modal-grid strong {
            color: #173f35;
            font-size: 13px;
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

        #tawjihStreamStep {
            background: #fbf9f4;
        }

        @media (max-width:600px) {
            .modal-grid {
                grid-template-columns: 1fr;
            }

            .university-modal {
                padding: 25px;
            }
        }
    `;


    document.head.appendChild(
        style
    );
}


/* =========================================================
   27. KEYBOARD
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
   28. INITIALIZATION
========================================================= */

function initializeTawjih() {

    console.log(
        "🌿 Tawjih V8 starting..."
    );


    setupStreamSelector();

    setupInterestButtons();

    setupCountryButtons();

    setupGoalButtons();

    populateCountryFilter();

    populateFieldFilter();

    renderUniversities();

    renderOpportunities();

    setupOpportunityFilters();

    updateCounters();

    addDynamicStyles();


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

    if (country) {

        country.addEventListener(
            "change",
            applyFilters
        );
    }


    const field =
        document.getElementById(
            "fieldFilter"
        );

    if (field) {

        field.addEventListener(
            "change",
            applyFilters
        );
    }


    const level =
        document.getElementById(
            "levelFilter"
        );

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
        "✅ Tawjih V8 loaded successfully."
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
   29. START
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


/* END OF TAWJIH */
