const videos = {
    solar: [
        "https://www.youtube.com/embed/d0JjH1eV9uY",
        "https://www.youtube.com/embed/1kUE0BZtTRc"
    ],
    geo: [
        "https://www.youtube.com/embed/w8Hk6HqZpFQ",
        "https://www.youtube.com/embed/3GkE9hP7s7k"
    ],
    ai: [
        "https://www.youtube.com/embed/2ePf9rue1Ao",
        "https://www.youtube.com/embed/JMUxmLyrhSk"
    ],
    entre: [
        "https://www.youtube.com/embed/fh4zG7lS5D8",
        "https://www.youtube.com/embed/7Ik0h5QK4hI"
    ]
};

function loadSection(section) {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("videoSection").style.display = "block";

    const container = document.getElementById("videoContainer");
    const title = document.getElementById("sectionTitle");

    container.innerHTML = "";

    title.innerText = section.toUpperCase() + " VIDEOS";

    videos[section].forEach(link => {
        const iframe = document.createElement("iframe");
        iframe.src = link;
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
    });
}
