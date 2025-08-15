// ===== Video hover preview =====
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const videoList = [video1, video2, video3];

const hoverSign = document.querySelector('.hover-sign');

videoList.forEach(video => {
    video.addEventListener("mouseover", () => {
        video.play();
        if (hoverSign) hoverSign.classList.add("active");
    });
    video.addEventListener("mouseout", () => {
        video.pause();
        if (hoverSign) hoverSign.classList.remove("active");
    });
});

// ===== Sidebar toggle =====
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

menu.addEventListener("click", () => {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", () => {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});

// ===== Video Modal Functionality =====
const videoModal = document.createElement("div");
videoModal.classList.add("video-modal");
videoModal.innerHTML = `
    <span class="video-close">&times;</span>
    <div class="video-modal-content">
        <video controls autoplay></video>
    </div>
`;
document.body.appendChild(videoModal);

const modalVideo = videoModal.querySelector("video");
const closeModal = videoModal.querySelector(".video-close");

// Function to open modal with a video source
function openVideoModal(src) {
    modalVideo.src = src;
    videoModal.classList.add("show");
    modalVideo.play();
}

// Close modal on click of close button
closeModal.addEventListener("click", () => {
    modalVideo.pause();
    videoModal.classList.remove("show");
    modalVideo.src = "";
});

// Close modal when clicking outside the video
videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
        modalVideo.pause();
        videoModal.classList.remove("show");
        modalVideo.src = "";
    }
});

// Attach button click listeners
document.querySelectorAll(".project-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const videoElement = videoList[index];
        if (videoElement) {
            openVideoModal(videoElement.src);
        }
    });
});
