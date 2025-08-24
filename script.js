// Nội dung giới thiệu băng đảng
const aboutText = `Los Santos Rebel Boys (LSRB) là một băng đảng nổi tiếng tại thành phố Los Santos trong thế giới GTA V. Chúng tôi đại diện cho sự nổi loạn, tự do và tình anh em. LSRB luôn sẵn sàng đối mặt với mọi thử thách để bảo vệ danh dự và lãnh thổ của mình.`;
document.getElementById('about-text').textContent = aboutText;

// Lịch sử băng đảng cho popup
const aboutHistory = `
<p>Sự thành lập của Los Santos Rebel Boys gắn liền với 1 nhóm bạn 5 người sinh ra và lớn lên tại chính mảnh đất này: Slim, Thanh, Thuan, Jerry và Paul. Khởi đầu của cả nhóm rất đơn giản khi cả bọn chỉ là những chàng trai nổi khổ cùng nhau lớn lên ở con đường biển Melanoma với cùng chung niềm đam mê về xe motor hai bánh và một khát vọng về sự tự do.</p>
<p>Mọi chuyện sẽ vẫn cứ êm đềm như thế nếu như trong 1 ngày định mệnh khi cả bọn đang rong ruổi trên trên phố biển Los Santos họ không chạm trán một thế lực máu mặt ở Los Santos là Black Hand Triad. Ngày hôm đó chỉ vì một xích mích nhỏ của Paul với một tên ShanChu trong hội tam hoàng mà dẫn đến một cuộc ẩu đả giữa hai bên.</p>
<p>Dù vẫn chỉ là những đứa trẻ chỉ vừa 18 tuổi nhưng đây là những đứa trẻ có khả năng đấm nhau rất cừ, bọn họ đã chống trả quyết liệt dù đối phương đủ lớn và đã quen với mùi máu trên lưỡi dao. Nhưng “ĐOẢNG“, một tiếng súng đã nổ và cả khu vực nhìn về phía Paul, người mà bây giờ đã có một vết đạn trước ngực, Paul ra đi và người nổ súng chính là cái đầu rồng của Triad và có vẻ hắn không định dừng con số nạn nhân ở một người, hắn quay sang nhìn và chĩa súng về phía Slim, người giờ đây đã suy sụp sau khi chứng kiến sự ra đi của một người bạn, hắn trên sàn và không còn ý chí chiến đấu.</p>
<p>Nhưng hắn đã không bóp cò, có thể hắn thấy việc si nhục bọn nhóc này khi chúng phải tự tay chọn người bạn của mình vui hơn là giết hết bọn nó hoặc chỉ đơn giản là hắn nghĩ bọn nhóc này không đáng để hắn tốn thêm một viên đạn. Nhưng hắn đã sai, sau khi cả bọn chôn cất Paul, những đứa trẻ này đã quyết định sẽ đòi món nợ của ngày hôm đó, cả gốc lẫn lãi. Họ bắt đầu với các vụ phức kích những chuyến hàng của Triad, và nhanh chóng cắt lãnh đạo cấp cao của tổ chức này.</p>
<p>Trong 1 lần phục kích một cuộc giao dịch giữa Triad và Florencia 13, Jerry đã thành công làm gián đoạn cuộc giao dịch và khiến bọn chúng nghi ngờ lẫn nhau, Slim và Thanh thì truy sát những kẻ còn lại, nhóm Rebel đã thành công thiết lập cái bẫy đang chờ sẵn cho ShanChu và Paul cũng được Slim lẻn bắn đúng 1 viên vào đầu y. Cả nhóm đã trả được thù, nhưng cũng từ đó, LSRB chính thức bước chân vào thế giới ngầm Los Santos.</p>
`;
document.getElementById('about-history-text').innerHTML = aboutHistory;

function showAboutPopup() {
    document.getElementById('about-popup').style.display = 'flex';
}
function closeAboutPopup() {
    document.getElementById('about-popup').style.display = 'none';
}
// Đóng popup khi click ra ngoài
const aboutPopup = document.getElementById('about-popup');
if (aboutPopup) {
    aboutPopup.addEventListener('click', function(e) {
        if (e.target === aboutPopup) closeAboutPopup();
    });
}

// Danh sách thành viên mới
const members = [
    {
        name: 'Thuan Scu',
        role: 'Thành viên',
        img: 'image/Niko Bellic.jfif',
        desc: 'Thuan Scu là một cựu binh đến từ Đông Âu, nổi tiếng với sự lạnh lùng và quyết đoán trong thế giới ngầm Liberty City.',
        color: '#2ecc40' // xanh lá
    },
    {
        name: 'Thai Thanh',
        role: 'Thủ lĩnh',
        img: 'image/Michael.jfif',
        desc: 'Thai Thanh là một cựu tội phạm chuyên nghiệp, sống cuộc đời giàu sang nhưng đầy mâu thuẫn nội tâm. Anh là người lên kế hoạch cho các phi vụ lớn.',
        color: '#0099ff' // xanh dương
    },
    {
        name: 'Slim Grimes',
        role: 'Thành viên',
        img: 'image/Tommy Vercetti.jfif',
        desc: 'Slim Grimes là ông trùm khét tiếng của Vice City, thông minh, tàn nhẫn và đầy tham vọng.',
        color: '#ffe033' // vàng
    },
    {
        name: 'Jerry Nguyen',
        role: 'Thành viên',
        img: 'image/Digital.jfif',
        desc: 'Jerry Nguyen là chuyên gia công nghệ, hacker tài ba, luôn hỗ trợ nhóm trong các phi vụ hiện đại.',
        color: '#a259f7' // tím
    }
];

const memberList = document.getElementById('member-list');
memberList.innerHTML = '';
members.forEach((member, idx) => {
    const card = document.createElement('div');
    card.className = 'member-card gta3';
    //card.style.background = member.color;
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

// Media mẫu (ảnh và video, có brief)
const images = [
    {
        src: '/image/team.png',
        alt: 'LSRB hoạt động đêm',
        brief: 'Đêm Los Santos - nơi mọi phi vụ bắt đầu.'
    },
    {
        src: '/image/team2.png',
        alt: 'LSRB tụ họp',
        brief: 'Thành công đưa 2 chiếc xe Burrito về điểm an toàn.'
    }
];
const videos = [
    {
        src: 'https://www.youtube.com/watch?v=pWm84ieQfSg',
        alt: 'Video hoạt động LSRB',
        brief: 'Armed Robbery.'
    },
    {
        src: 'https://www.youtube.com/watch?v=8nkvOuIOKbo',
        alt: 'Video hoạt động LSRB',
        brief: 'An easy way to make money.'
    },
    {
        src: 'https://www.youtube.com/watch?v=fm6PRUOrNZ0',
        alt: 'Video hoạt động LSRB',
        brief: 'Hộ tống xe vũ khí.'
    }
];

function isYouTubeUrl(url) {
    return /(?:youtube\.com|youtu\.be)/.test(url);
}
function getYouTubeId(url) {
    try {
        const ytShort = url.match(/youtu\.be\/([\w-]{6,})/);
        if (ytShort) return ytShort[1];
        const ytEmbed = url.match(/youtube\.com\/embed\/([\w-]{6,})/);
        if (ytEmbed) return ytEmbed[1];
        const u = new URL(url);
        return u.searchParams.get('v');
    } catch (e) {
        return '';
    }
}

function renderMediaGallery() {
    const imgGallery = document.getElementById('media-image-gallery');
    const vidGallery = document.getElementById('media-video-gallery');
    imgGallery.innerHTML = '';
    vidGallery.innerHTML = '';
    images.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'media-item';
        div.innerHTML = `<img src="${item.src}" alt="${item.alt}"><div class="media-brief">${item.brief}</div>`;
        div.addEventListener('click', () => showMediaPopup('img', item));
        imgGallery.appendChild(div);
    });
    videos.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'media-item';
        if (isYouTubeUrl(item.src)) {
            const id = getYouTubeId(item.src);
            const thumb = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
            div.innerHTML = `<img src="${thumb}" alt="${item.alt}"><div class="media-brief">${item.brief}</div><div class="play-badge">▶</div>`;
            div.addEventListener('click', () => showMediaPopup('youtube', item));
        } else {
            div.innerHTML = `<video src="${item.src}" alt="${item.alt}" muted></video><div class="media-brief">${item.brief}</div>`;
            div.addEventListener('click', () => showMediaPopup('video', item));
        }
        vidGallery.appendChild(div);
    });
}
renderMediaGallery();

function showMediaPopup(type, item) {
    const popup = document.getElementById('media-popup');
    const body = document.getElementById('media-popup-body');
    const brief = document.getElementById('media-popup-brief');
    if (type === 'img') {
        body.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
    } else if (type === 'youtube') {
        const id = getYouTubeId(item.src);
        const src = id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : '';
        body.innerHTML = `<iframe src="${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (type === 'video') {
        body.innerHTML = `<video src="${item.src}" alt="${item.alt}" controls autoplay></video>`;
    }
    brief.textContent = item.brief;
    popup.style.display = 'flex';
}
function closeMediaPopup() {
    document.getElementById('media-popup').style.display = 'none';
    document.getElementById('media-popup-body').innerHTML = '';
}
// Đóng popup media khi click ra ngoài
const mediaPopup = document.getElementById('media-popup');
if (mediaPopup) {
    mediaPopup.addEventListener('click', function(e) {
        if (e.target === mediaPopup) closeMediaPopup();
    });
}

// Đặc điểm nhận dạng băng đảng (identity section)
const identityText = `Làm thế nào để nhận biết đó là một người tới LS-RB? Hình xăm sau lưng bọn họ chính là chìa khoá.`;
document.querySelector('.identity-text p').textContent = identityText;

// Kiểm tra mật mã Black Market
function checkPassword() {
    const password = document.getElementById('password-input').value;
    const blackMarketSection = document.getElementById('black-market');
    
    if (password === 'lsrb-blackmarket') {
        blackMarketSection.style.display = 'block';
        blackMarketSection.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('password-input').value = '';
        
        // Hiện popup ma quái thay vì alert
        const popup = document.getElementById('black-market-popup');
        popup.style.display = 'flex';
        
    } else {
        document.getElementById('password-input').value = '';
    }
}

function closeBlackMarketPopup() {
    document.getElementById('black-market-popup').style.display = 'none';
}

// Enter key để submit
document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Xử lý chuyển đổi tab trong Black Market
document.addEventListener('DOMContentLoaded', function() {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Xóa active class từ tất cả tabs và contents
            tabItems.forEach(item => item.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Thêm active class cho tab được click và content tương ứng
            this.classList.add('active');
            document.getElementById(targetTab + '-content').classList.add('active');
        });
    });
});

// Hàm mua item - mở Discord với text có sẵn
function buyItem() {
    // Thay đổi USER_ID thành ID Discord user thực tế
    const discordUserId = '357516312089722882';
    
    const discordLink = `https://discord.com/users/${discordUserId}`;
    
    window.open(discordLink, '_blank');
}
