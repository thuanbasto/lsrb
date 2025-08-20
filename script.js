// Nội dung giới thiệu băng đảng
const aboutText = `Los Santos Rebel Boys (LSRB) là một băng đảng nổi tiếng tại thành phố Los Santos trong thế giới GTA V. Chúng tôi đại diện cho sự nổi loạn, tự do và tình anh em. LSRB luôn sẵn sàng đối mặt với mọi thử thách để bảo vệ danh dự và lãnh thổ của mình.`;
document.getElementById('about-text').textContent = aboutText;

// Danh sách thành viên mới
const members = [
    {
        name: 'Niko Bellic',
        role: 'Thành viên',
        img: 'image/Niko Bellic.jfif',
        desc: 'Niko Bellic là một cựu binh đến từ Đông Âu, nổi tiếng với sự lạnh lùng và quyết đoán trong thế giới ngầm Liberty City.',
        color: '#2ecc40' // xanh lá
    },
    {
        name: 'Michael De Santa',
        role: 'Thủ lĩnh',
        img: 'image/Michael.jfif',
        desc: 'Michael là một cựu tội phạm chuyên nghiệp, sống cuộc đời giàu sang nhưng đầy mâu thuẫn nội tâm. Anh là người lên kế hoạch cho các phi vụ lớn.',
        color: '#0099ff' // xanh dương
    },
    {
        name: 'Tommy Vercetti',
        role: 'Ông trùm',
        img: 'image/Tommy Vercetti.jfif',
        desc: 'Tommy Vercetti là ông trùm khét tiếng của Vice City, thông minh, tàn nhẫn và đầy tham vọng.',
        color: '#ffe033' // vàng
    },
    {
        name: 'Digital',
        role: 'Hacker',
        img: 'image/Digital.jfif',
        desc: 'Digital là chuyên gia công nghệ, hacker tài ba, luôn hỗ trợ nhóm trong các phi vụ hiện đại.',
        color: '#a259f7' // tím
    }
];

const memberList = document.getElementById('member-list');
memberList.innerHTML = '';
members.forEach((member, idx) => {
    const card = document.createElement('div');
    card.className = 'member-card gta3';
    card.style.background = member.color;
    card.innerHTML = `
        <div class="member-img-wrap">
            <img src="${member.img}" alt="${member.name}">
        </div>
        <h3>${member.name}</h3>
        <p><strong>${member.role}</strong></p>
    `;
    card.addEventListener('click', () => showMemberPopup(idx));
    memberList.appendChild(card);
});

// Popup hiển thị tiểu sử nhân vật (giữ nguyên)
function showMemberPopup(idx) {
    const member = members[idx];
    let popup = document.getElementById('member-popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'member-popup';
        popup.innerHTML = `
            <div class="popup-content">
                <span class="popup-close">&times;</span>
                <div class="popup-img-wrap"><img class="popup-img" src="" alt=""></div>
                <div class="popup-info">
                    <h3 class="popup-name"></h3>
                    <p class="popup-role"></p>
                    <p class="popup-desc"></p>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
        popup.querySelector('.popup-close').onclick = () => popup.style.display = 'none';
        popup.onclick = (e) => { if (e.target === popup) popup.style.display = 'none'; };
    }
    popup.querySelector('.popup-img').src = member.img;
    popup.querySelector('.popup-img').alt = member.name;
    popup.querySelector('.popup-name').textContent = member.name;
    popup.querySelector('.popup-role').textContent = member.role;
    popup.querySelector('.popup-desc').textContent = member.desc;
    popup.style.display = 'flex';
}

// Media mẫu (ảnh và video)
const media = [
    {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        alt: 'LSRB hoạt động đêm'
    },
    {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        alt: 'LSRB tụ họp'
    },
    {
        type: 'video',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        alt: 'Video hoạt động LSRB'
    }
];

const mediaGallery = document.getElementById('media-gallery');
media.forEach(item => {
    const mediaDiv = document.createElement('div');
    mediaDiv.className = 'media-item';
    if (item.type === 'img') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        mediaDiv.appendChild(img);
    } else if (item.type === 'video') {
        const video = document.createElement('video');
        video.src = item.src;
        video.controls = true;
        video.alt = item.alt;
        mediaDiv.appendChild(video);
    }
    mediaGallery.appendChild(mediaDiv);
});
