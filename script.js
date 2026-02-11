const data = {
    ccma: {
        title: "Cost Control and Management Accounting",
        units: [
            {
                name: "Unit 1 – Introduction to Management Accounting & Marginal Costing",
                links: [
                    "https://www.youtube.com/embed/6f6FS-SC5Ek",
                    "https://www.youtube.com/embed?list=PLWJDzVuPkXAllmGP19jfhneNUdgOy1g2v",
                    "https://www.youtube.com/embed?list=PLLhSIFfDZcUVaBuGIMvQFx1OVGzfhbPeC"
                ]
            },
            {
                name: "Unit 2 – Budgetary Control and Standard Costing",
                links: [
                    "https://www.youtube.com/embed/g5enuI34K_s"
                ]
            },
            {
                name: "Unit 3 – Techniques of Financial Statement Analysis",
                links: [
                    "https://www.youtube.com/embed/8wLzKQS3XVQ",
                    "https://www.youtube.com/embed?list=PLWJDzVuPkXAlg4vnE3ZhB7UVp9JWl6Mog"
                ]
            },
            {
                name: "Unit 4 – Funds Flow Analysis",
                links: [
                    "https://www.youtube.com/embed/1GOzySCt2gw"
                ]
            },
            {
                name: "Unit 5 – Cash Flow Analysis",
                links: [
                    "https://www.youtube.com/embed/yIlFsnK765M"
                ]
            }
        ]
    },

    gst: {
        title: "Theory and Practice of GST",
        units: [
            {
                name: "Unit 1 – Introduction to GST",
                links: ["https://www.youtube.com/embed/vvHL0U-knkY"]
            },
            {
                name: "Unit 2 – Getting Started with GST",
                links: ["https://www.youtube.com/embed/Ug7xo3D8yxU"]
            },
            {
                name: "Unit 3 – GST Adjustment and Return Filing",
                links: ["https://www.youtube.com/embed/viFso6dbqZw"]
            },
            {
                name: "Unit 4 – GST (Services)",
                links: ["https://www.youtube.com/embed/4F-dc0-gYKM"]
            },
            {
                name: "Unit 5 – Migration to ERP",
                links: ["https://www.youtube.com/embed/VkMjjojRbFo"]
            }
        ]
    },

    research: {
        title: "Research Methodology & Project",
        units: [
            {
                name: "Unit 1 – Measurement and Hypothesis Testing",
                links: ["https://www.youtube.com/embed/KsVM8LO3Jik"]
            },
            {
                name: "Unit 2 – Parametric & Non-Parametric Tests",
                links: ["https://www.youtube.com/embed/rT_vq4W9AXc"]
            },
            {
                name: "Full Subject Explanation",
                links: ["https://www.youtube.com/embed/pKmmBCs4TeY"]
            }
        ]
    },

    english: {
        title: "English",
        units: [
            {
                name: "Complete English Playlist",
                links: [
                    "https://www.youtube.com/embed?list=PLUJXB7al70IBdkE4oiI4d40mycUq4JnQ8",
                    "https://www.youtube.com/embed?list=PLyjVm5GfnmY6rkPqkpH7psUaOBb44ShwS"
                ]
            }
        ]
    },

    telugu: {
        title: "Telugu",
        units: [
            {
                name: "Telugu Complete Units",
                links: [
                    "https://www.youtube.com/embed/aCxwzeLMptk",
                    "https://www.youtube.com/embed/QY_fn2g-Fik",
                    "https://www.youtube.com/embed/D16CfIEEOwA"
                ]
            }
        ]
    }
};

function loadSection(subjectKey) {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("videoSection").style.display = "block";

    const container = document.getElementById("videoContainer");
    const title = document.getElementById("sectionTitle");
    container.innerHTML = "";

    const subject = data[subjectKey];
    title.innerText = subject.title;

    subject.units.forEach(unit => {
        const unitTitle = document.createElement("h3");
        unitTitle.innerText = unit.name;
        container.appendChild(unitTitle);

        unit.links.forEach(link => {
            const iframe = document.createElement("iframe");
            iframe.src = link;
            iframe.allowFullscreen = true;
            container.appendChild(iframe);
        });
    });
}
