// ========================================
// PAGE TRANSITIONS
// ========================================

// Fade in when page loads
window.addEventListener('pageshow', () => {
    document.body.classList.add('fade-in');
});

// Fade out before navigation
document.addEventListener('DOMContentLoaded', () => {

    const internalLinks = document.querySelectorAll(
        'a[href]:not([target="_blank"])'
    );

    internalLinks.forEach(link => {
        link.addEventListener('click', e => {

            const href = link.getAttribute('href');

            // Ignore anchors, external links, mailto, etc.
            if (
                !href ||
                href.startsWith('#') ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:')
            ) {
                return;
            }

            e.preventDefault();

            document.body.classList.remove('fade-in');
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 350);
        });
    });
});


// ========================================
// BACK TO TOP BUTTON
// ========================================

const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

const projects = {
    1: {
        title: "NZTA Crash Analytics",
        description:
            "A project that analyses data from the New Zealand Transport Agency for insights about vehicular crashes. Data was cleaned and modeled into a data warehouse following the constellation schema with fact tables to support efficient querying. Reports have drill down support and can be filtered based on crash severity, vehicles, regions and light levels within desired year ranges. Notable insights were an 18% average decrease in crashes over the last 10 years, State Highway 1 being the deadliest and top crash regions being Auckland, Christchurch and Waikato in that order.",

        tech: "Python, Pandas, PowerBI, DAX",
        year: "2025",

        github: "#",

        images: [
            "images/crash1.png",
            "images/crash2.png",
            "images/crash3.png"
        ]
    },

    2: {
        title: "ECG Arrhythmia Classification Using Graph Neural Networks",
        description:
            "Master's research project where 45,000 noisy ECG signals were used to classify different arrhythmias and compare fixed and adaptive Graph Neural Networks based on robustness and interpretability of inter-channel relationships. Data is modeled into a graph structure and used to train a Mutual Information-based GCN model versus a proposed adaptive AttSAGE model. Results showed that AttSAGE is more robust under random missing lead configurations and more interpretable using network centrality metrics across different arrhythmias. This research has been submitted to Japan's 2026 IEEE International Conference on Future Machine Learning and Data Science (FMLDS) and won the 2025 3-Minute Thesis Competition held by Unitec and Manukau Institute of Technology.",

        tech: "Python,, Tensorflow, Pytorch",
        year: "2026",

        github: "https://github.com/Maria-Gomes/ECG-Arrhythmia-Classification-Using-Graph-Neural-Networks",

        images: [
            "images/accuracy_random.png",
            "images/gcnmi_hm.png",
            "images/attsage_hm.png"
        ]
    },

        3: {
        title: "Earthquake Magnitude Prediction Using Ground Motion Features",
        description:
            "Machine learning regression project where XGBoost and MLP is used to predict earthquake magnitudes using ground motion features such as P and S waves. Data from Geonet- NZ was used with exploratory analysis of feature importances, feature engineering and hyperparameter tuning.",

        tech: "Python,, SciKit Learn, Pandas",
        year: "2025",

        github: "#",

        images: [
            "images/earthquake1.png",
            "images/earthquake2.png",
            "images/earthquake3.png",
            "images/earthquake4.png"
        ]
    },

    4: {
        title: "Customer Churn Prediction Using XGBoost",
        description:
            "Supervised classification project where XGBoost is trained and used to predict whether an E-Commerce customer churns based on spending behaviour. Data was cleaned and exploratory analysis was done using Python and Pandas before training and tuning the model. SHAP was used for interpretation of individual model predictions by measuring the influence of each feature on the result for business insights.",
        tech: "Python,, SciKit Learn, Pandas, SHAP",
        year: "2025",

        github: "#",

        images: [
            "images/churn1.png",
            "images/churn2.png",
            "images/churn3.png",
            "images/churn4.png"
        ]
    }
};

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

if (projectId && projects[projectId]) {

    const project = projects[projectId];

    document.getElementById("project-title").textContent =
        project.title;

    document.getElementById("project-description").textContent =
        project.description;

    document.getElementById("project-tech").innerHTML =
        `<strong>Tech Stack:</strong> ${project.tech}`;

    document.getElementById("project-year").innerHTML =
        `<strong>Year:</strong> ${project.year}`;

    document.getElementById("project-github").href =
        project.github;

    const imageContainer =
        document.getElementById("project-images");

    imageContainer.innerHTML = "";

    project.images.forEach(src => {

        const img = document.createElement("img");

        img.src = src;
        img.alt = project.title;

        imageContainer.appendChild(img);
    });

    document.title =
        `${project.title} | Portfolio`;
}