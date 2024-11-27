document.addEventListener("DOMContentLoaded", function() {
    if (document.body.classList.contains('front_page')) {
        let images = [
            'Images/IMG_0125-1.jpeg', 'Images/IMG_0125-2.jpeg', 'Images/IMG_0125-3.jpeg', 'Images/IMG_0125-4.jpeg', 'Images/IMG_0125-5.jpeg', 'Images/IMG_0125-6.jpeg', 'Images/IMG_0125-7.jpeg', 'Images/IMG_0125-8.jpeg', 'Images/IMG_0125-9.jpeg', 'Images/IMG_0125-10.jpeg', 'Images/IMG_0125-11.jpeg', 'Images/IMG_0125-12.jpeg', 'Images/IMG_0125-13.jpeg', 'Images/IMG_0125-14.jpeg', 'Images/IMG_0125-15.jpeg', 'Images/IMG_0125-16.jpeg', 'Images/IMG_0125-17.jpeg', 'Images/IMG_0125-18.jpeg', 'Images/IMG_0125-19.jpeg', 'Images/IMG_0125-20.jpeg', 'Images/IMG_0125-21.png', 'Images/IMG_0125-22.png', 'Images/IMG_0125-23.jpeg', 'Images/IMG_0125-24.jpeg', 'Images/IMG_0125-25.jpeg', 'Images/IMG_0125-26.jpeg', 'Images/IMG_0125-27.jpeg', 'Images/IMG_0125-28.jpeg', 'Images/IMG_0125-29.jpeg', 'Images/IMG_0125-30.jpeg', 'Images/IMG_0125-31.jpeg', 'Images/IMG_0125-32.jpeg', 'Images/IMG_0125-33.jpeg', 'Images/IMG_0125-34.jpeg', 'Images/IMG_0125-35.jpeg', 'Images/IMG_0125-36.jpeg', 'Images/IMG_0125-37.jpeg', 'Images/IMG_0125-38.jpeg', 'Images/IMG_0125-39.jpeg', 'Images/IMG_0125-40.jpeg', 'Images/IMG_0125-41.jpeg', 'Images/IMG_0125-42.jpeg', 'Images/IMG_0125-43.jpeg', 'Images/IMG_0125-44.jpeg', 'Images/IMG_0125-45.jpeg', 'Images/IMG_0125-46.jpeg', 'Images/IMG_0125-47.jpeg', 'Images/IMG_0125-48.jpeg', 'Images/IMG_0125-49.jpeg', 'Images/IMG_0125-50.jpeg', 'Images/IMG_0125-51.jpeg', 'Images/IMG_0125-52.jpeg', 'Images/IMG_0125-53.jpeg', 'Images/IMG_0125-54.jpeg', 'Images/IMG_0125-55.jpeg', 
        ];

        let currentImageIndex = 0;
        let direction = 1;
        const slideshowImage = document.getElementById('blinker');

        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        function changeImage() {

            currentImageIndex += direction;

            if (currentImageIndex === images.length - 1 || currentImageIndex === 0) {
                direction *= -1;
            }

            slideshowImage.src = images[currentImageIndex];  
        }

        setInterval(changeImage, 80);
    }
});

function goToShop() {
    window.location.href = "shop.html"
}

function goToContact() {
    window.location.href = "contact.html"
}

function goToAboutUs() {
    window.location.href = "aboutUs.html"
}

function goHome() {
    window.location.href = "index.html";
}

function collectData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('text').value;

    if (name === "" || email === "" || message === "") {
        showModal_invalid();
        return; 
    }

    fetch('saveData.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data.message);
        if (data.message === 'Data saved successfully!') {
            showModal();
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function showModal() {
    const modal = document.getElementById('contactSuccess');
    modal.style.display = "flex";

    const closeButton = document.getElementById('closeSuccessModal');
    closeButton.onclick = () => {
        modal.style.display = "none";
        location.reload();
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            location.reload();
        }
    };
}

function showModal_invalid() {
    const modal = document.getElementById('contactInvalid');
    modal.style.display = "flex";

    const closeButton = document.getElementById('closeInvalidModal');
    closeButton.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

function showModal_sidebar() {
    const modal = document.getElementById('nav_modal');
    modal.style.display = "flex";

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}



