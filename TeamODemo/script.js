// Gemini API Configuration
const GEMINI_API_KEY = 'AIzaSyCXj9pz8Fp2Kca501Dw-bScd0z8qzmM9PE';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

// Chat functionality
let chatHistory = [];

document.getElementById('chatButton').addEventListener('click', () => {
    document.getElementById('chatModal').classList.add('active');
    document.getElementById('chatInput').focus();
});

document.getElementById('closeChat').addEventListener('click', () => {
    document.getElementById('chatModal').classList.remove('active');
});

document.getElementById('sendChat').addEventListener('click', sendChatMessage);
document.getElementById('chatInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendChatMessage();
});

async function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (!message) return;

    // Add user message to chat
    addMessageToChat(message, 'user');
    input.value = '';

    // Show loading indicator
    showLoadingIndicator();

    try {
        const response = await callGeminiAPI(message);
        removeLoadingIndicator();
        addMessageToChat(response, 'assistant');
    } catch (error) {
        removeLoadingIndicator();
        addMessageToChat('ขออภัย ฉันพบข้อผิดพลาด โปรดลองอีกครั้ง', 'assistant');
        console.error('Chat error:', error);
    }
}

async function callGeminiAPI(userMessage) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Dummy response based on user input
    const dummyResponses = [
        "สำหรับอาชีพของคุณ คุณควรพิจารณาการพัฒนาทักษะด้านเทคนิคที่แข็งแกร่ง และสร้างเครือข่ายกับผู้เชี่ยวชาญในอุตสาหกรรม",
        "สำหรับอาชีพของคุณ คุณควรมุ่งเน้นไปที่การสร้างพอร์ตโฟลิโอที่แข็งแกร่งซึ่งแสดงงานที่ดีที่สุดของคุณ",
        "สำหรับอาชีพของคุณ คุณควรใช้ประโยชน์จากการฝึกงานและตำแหน่งระดับเริ่มต้นเพื่อเก็บประสบการณ์",
        "สำหรับอาชีพของคุณ คุณควรเพิ่มทักษะอย่างต่อเนื่องและติดตามแนวโน้มอุตสาหกรรม",
        "สำหรับอาชีพของคุณ คุณควรขอคำแนะนำจากผู้เชี่ยวชาญในสาขาของคุณ",
        "สำหรับอาชีพของคุณ คุณควรพัฒนาทักษะการสื่อสารและภาวะผู้นำ",
        "สำหรับอาชีพของคุณ คุณควรสำรวจตำแหน่งต่างๆ เพื่อค้นหาว่าอะไรดึงดูดใจคุณจริงๆ",
        "สำหรับอาชีพของคุณ คุณควรพิจารณาการติดตามใบรับรองที่เกี่ยวข้องและปริญญา",
        "สำหรับอาชีพของคุณ คุณควรสร้างการเชื่อมต่อที่มีความหมายผ่านเครือข่ายมืออาชีพ",
        "สำหรับอาชีพของคุณ คุณควรกำหนดเป้าหมายที่ชัดเจนและสร้างแผนกลยุทธ์สำหรับการเลื่อนตำแหน่ง"
    ];

    // Get a random dummy response
    const assistantMessage = dummyResponses[Math.floor(Math.random() * dummyResponses.length)];

    chatHistory.push({
        user: userMessage,
        assistant: assistantMessage
    });

    return assistantMessage;
}

function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = message;

    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showLoadingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message loading';
    messageDiv.id = 'loadingMessage';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = '<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';

    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeLoadingIndicator() {
    const loadingMessage = document.getElementById('loadingMessage');
    if (loadingMessage) {
        loadingMessage.remove();
    }
}

// State management
let dreamJob = null;
let currentPage = 'roadmap';

// Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        switchPage(page);
    });
});

function switchPage(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    // Show selected page
    document.getElementById(page).classList.add('active');

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-page="${page}"]`).classList.add('active');

    currentPage = page;

    // Initialize page content
    if (page === 'roadmap') {
        displayRoadmap();
    } else if (page === 'degrees') {
        displayDegrees(degreesData);
    } else if (page === 'jobopenings') {
        displayJobs(jobOpeningsData);
    }
}

// Roadmap functionality
function updateQualDisplay(index, value) {
    const certSelect = document.getElementById(`cert-select-${index}`);
    const certDisplay = document.getElementById(`cert-display-${index}`);
    
    if (value === 'cert') {
        certSelect.style.display = 'block';
        certDisplay.style.display = 'none';
    } else {
        certSelect.style.display = 'none';
        certDisplay.style.display = 'none';
    }
}

function displayRoadmap() {
    const roadmapDisplay = document.getElementById('roadmapDisplay');

    if (dreamJob && Object.keys(dreamJob).length > 0) {
        // Display dream job data
        const careerInfo = getCareerInfo(dreamJob.title);
        roadmapDisplay.innerHTML = `
            <div class="dream-job-display">
                <h2>${dreamJob.title}</h2>
                <div class="dream-job-info">
                    <div class="dream-job-item">
                        <strong>เงินเดือนที่ต้องการ:</strong>
                        <span>${dreamJob.salary || 'ไม่ได้ระบุ'}</span>
                    </div>
                </div>
                
                <div class="career-intro">
                    <h3>เกี่ยวกับอาชีพนี้</h3>
                    <p>${careerInfo.description}</p>
                </div>

                <div class="qualifications-path">
                    <h3>เส้นทางการศึกษา</h3>
                    <div class="qualifications-list">
                        ${careerInfo.qualifications.map((qual, index) => {
                            // Check if this is the second qualification (index 1) and career has alternatives
                            const hasAlternatives = careerInfo.withAlternative && index === 1;
                            
                            if (hasAlternatives) {
                                const certifications = [
                                    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services' },
                                    { name: 'Google Cloud Professional Cloud Architect', issuer: 'Google Cloud' },
                                    { name: 'Microsoft Azure Solutions Architect Expert', issuer: 'Microsoft' },
                                    { name: 'Oracle Certified Associate Java Programmer', issuer: 'Oracle' },
                                    { name: 'Kubernetes Administrator (CKA)', issuer: 'Cloud Native Computing Foundation' },
                                    { name: 'CompTIA Security+', issuer: 'CompTIA' },
                                    { name: 'Docker Certified Associate', issuer: 'Docker' },
                                    { name: 'HashiCorp Certified: Terraform Associate', issuer: 'HashiCorp' }
                                ];
                                
                                return `
                                    <div class="qualification-item">
                                        <div class="qualification-number">${index + 1}</div>
                                        <div class="qualification-content">
                                            <strong>ตัวเลือก: ปริญญา หรือ ใบรับรองมืออาชีพ</strong>
                                            <div style="margin-top: 0.5rem;">
                                                <label style="display: block; margin-bottom: 0.5rem;">
                                                    <input type="radio" name="qual-${index}" value="degree" checked onchange="updateQualDisplay(${index}, this.value)">
                                                    <strong>${qual.title}</strong>
                                                </label>
                                                <p style="margin: 0 0 1rem 1.5rem; font-size: 0.9rem;">${qual.description}</p>
                                            </div>
                                            <div style="margin-top: 0.5rem;">
                                                <label style="display: block; margin-bottom: 0.5rem;">
                                                    <input type="radio" name="qual-${index}" value="cert" onchange="updateQualDisplay(${index}, this.value)">
                                                    <strong>ใบรับรองมืออาชีพ (ทางเลือก)</strong>
                                                </label>
                                                <div style="margin-left: 1.5rem;">
                                                    <select id="cert-select-${index}" style="width: 100%; padding: 0.5rem; margin-bottom: 0.5rem; display: none;">
                                                        <option value="">เลือกใบรับรอง...</option>
                                                        ${certifications.map(cert => `<option value="${cert.name}">${cert.name} (${cert.issuer})</option>`).join('')}
                                                    </select>
                                                    <div id="cert-display-${index}" style="display: none; padding: 0.5rem; background: #f0f0f0; border-radius: 4px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            } else {
                                return `
                                    <div class="qualification-item">
                                        <div class="qualification-number">${index + 1}</div>
                                        <div class="qualification-content">
                                            <strong>${qual.title}</strong>
                                            <p>${qual.description}</p>
                                        </div>
                                    </div>
                                `;
                            }
                        }).join('')}
                    </div>
                </div>

                <button class="btn" style="margin-top: 1.5rem;" onclick="editDreamJob()">แก้ไขความฝันในการทำงาน</button>
            </div>
        `;
    } else {
        // Display survey
        const jobOptions = [
            "Senior Software Developer",
            "Data Scientist",
            "UX/UI Designer",
            "Marketing Manager",
            "Sales Executive",
            "Junior Developer",
            "Financial Analyst",
            "Machine Learning Engineer",
            "Doctor",
            "Nurse",
            "Lawyer",
            "Attorney",
            "Architect",
            "Engineer",
            "Professor",
            "Psychologist",
            "Psychiatrist",
            "Pharmacist",
            "Veterinarian"
        ];

        roadmapDisplay.innerHTML = `
            <h2 style="color: #667eea; margin-bottom: 1.5rem;">บอกเราเกี่ยวกับความฝันในการทำงานของคุณ!</h2>
            <form class="survey-form" onsubmit="submitDreamJobSurvey(event)">
                <div class="form-group">
                    <label for="currentQualification">คุณมีคุณวุฒิปัจจุบันอะไร?</label>
                    <div class="searchable-dropdown qual-dropdown">
                        <input type="text" id="currentQualificationSearch" class="dropdown-search qual-search" placeholder="ค้นหาหรือเลือกปริญญา..." />
                        <div id="currentQualificationDropdown" class="dropdown-menu qual-menu">
                            ${degreesData.map(degree => `<div class="qual-option" data-value="${degree.name}">${degree.name}</div>`).join('')}
                        </div>
                    </div>
                    <input type="hidden" id="currentQualification" required>
                </div>
                <div class="form-group">
                    <label for="dreamJobTitle">ความฝันในการทำงานของคุณคืออะไร?</label>
                    <div class="searchable-dropdown job-dropdown">
                        <input type="text" id="dreamJobSearch" class="dropdown-search job-search" placeholder="ค้นหาหรือเลือกงาน..." />
                        <div id="dreamJobDropdown" class="dropdown-menu job-menu">
                            ${jobOptions.map(job => `<div class="job-option" data-value="${job}">${job}</div>`).join('')}
                        </div>
                    </div>
                    <input type="hidden" id="dreamJobTitle" required>
                </div>
                <div class="form-group">
                    <label for="dreamJobSalaryMin">ช่วงเงินเดือนที่คุณต้องการคืออะไร?</label>
                    <div class="salary-slider-container">
                        <div class="salary-range-inputs">
                            <div class="salary-input-group">
                                <label>ขั้นต่ำ</label>
                                <input type="number" id="dreamJobSalaryMin" class="salary-input" min="10000" max="300000" value="50000" />
                                <span class="salary-currency">฿</span>
                            </div>
                            <div class="salary-input-group">
                                <label>สูงสุด</label>
                                <input type="number" id="dreamJobSalaryMax" class="salary-input" min="10000" max="300000" value="200000" />
                                <span class="salary-currency">฿</span>
                            </div>
                        </div>
                        <div class="dual-slider-wrapper">
                            <input type="range" id="minSlider" class="dual-slider" min="10000" max="300000" value="50000" />
                            <input type="range" id="maxSlider" class="dual-slider" min="10000" max="300000" value="200000" />
                        </div>
                        <div class="salary-display-range">
                            <span>฿<span id="minSalaryDisplay">50,000</span> - ฿<span id="maxSalaryDisplay">200,000</span></span>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn">ส่ง</button>
            </form>
            
            <div class="ai-recommendation">
                <div class="ai-recommendation-header">หาอาชีพฝันของคุณ</div>
                <div id="roadmapChatMessages" class="roadmap-chat-messages"></div>
                <div class="roadmap-chat-input-section">
                    <input type="text" id="roadmapChatInput" class="roadmap-chat-input" placeholder="ถามเราอะไรก็ได้เกี่ยวกับอาชีพของคุณ..." />
                    <button id="roadmapSendChat" class="send-button">ส่ง</button>
                </div>
            </div>
        `;

        // Initialize roadmap chat
        initializeRoadmapChat();

        // Initialize current qualification dropdown
        const qualSearchInput = document.getElementById('currentQualificationSearch');
        const qualDropdownMenu = document.getElementById('currentQualificationDropdown');
        const qualDropdownOptions = document.querySelectorAll('.qual-option');
        const qualHiddenInput = document.getElementById('currentQualification');

        if (qualSearchInput) {
            qualSearchInput.addEventListener('click', () => {
                qualDropdownMenu.style.display = 'block';
            });

            qualSearchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                qualDropdownOptions.forEach(option => {
                    const text = option.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        option.style.display = 'block';
                    } else {
                        option.style.display = 'none';
                    }
                });
            });

            qualDropdownOptions.forEach(option => {
                option.addEventListener('click', () => {
                    const value = option.getAttribute('data-value');
                    qualSearchInput.value = value;
                    qualHiddenInput.value = value;
                    qualDropdownMenu.style.display = 'none';
                });
            });
        }

        // Initialize dream job dropdown
        const searchInput = document.getElementById('dreamJobSearch');
        const dropdownMenu = document.getElementById('dreamJobDropdown');
        const dropdownOptions = document.querySelectorAll('.job-option');
        const hiddenInput = document.getElementById('dreamJobTitle');

        if (searchInput) {
            searchInput.addEventListener('click', () => {
                dropdownMenu.style.display = 'block';
            });

            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                dropdownOptions.forEach(option => {
                    const text = option.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        option.style.display = 'block';
                    } else {
                        option.style.display = 'none';
                    }
                });
            });

            dropdownOptions.forEach(option => {
                option.addEventListener('click', () => {
                    const value = option.getAttribute('data-value');
                    searchInput.value = value;
                    hiddenInput.value = value;
                    dropdownMenu.style.display = 'none';
                });
            });
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.qual-dropdown')) {
                qualDropdownMenu.style.display = 'none';
            }
            if (!e.target.closest('.job-dropdown')) {
                dropdownMenu.style.display = 'none';
            }
        });

        // Initialize salary sliders
        const minSlider = document.getElementById('minSlider');
        const maxSlider = document.getElementById('maxSlider');
        const minInput = document.getElementById('dreamJobSalaryMin');
        const maxInput = document.getElementById('dreamJobSalaryMax');
        const minDisplay = document.getElementById('minSalaryDisplay');
        const maxDisplay = document.getElementById('maxSalaryDisplay');

        if (minSlider && maxSlider) {
            function roundTo100(value) {
                return Math.round(value / 100) * 100;
            }

            function updateSliders() {
                let minValue = roundTo100(parseInt(minSlider.value));
                let maxValue = roundTo100(parseInt(maxSlider.value));

                if (minValue > maxValue) {
                    minSlider.value = maxValue;
                    minValue = maxValue;
                }

                minDisplay.textContent = minValue.toLocaleString();
                maxDisplay.textContent = maxValue.toLocaleString();
                minInput.value = minValue;
                maxInput.value = maxValue;
                minSlider.value = minValue;
                maxSlider.value = maxValue;
            }

            minSlider.addEventListener('input', updateSliders);
            maxSlider.addEventListener('input', updateSliders);

            minInput.addEventListener('input', (e) => {
                let value = roundTo100(parseInt(e.target.value) || 10000);
                minSlider.value = value;
                updateSliders();
            });

            maxInput.addEventListener('input', (e) => {
                let value = roundTo100(parseInt(e.target.value) || 300000);
                maxSlider.value = value;
                updateSliders();
            });
        }
    }
}

function submitDreamJobSurvey(event) {
    event.preventDefault();

    const minSalary = document.getElementById('dreamJobSalaryMin').value;
    const maxSalary = document.getElementById('dreamJobSalaryMax').value;
    const currentQualification = document.getElementById('currentQualification').value;

    dreamJob = {
        title: document.getElementById('dreamJobTitle').value,
        currentQualification: currentQualification,
        salary: `฿${parseInt(minSalary).toLocaleString()} - ฿${parseInt(maxSalary).toLocaleString()}`
    };

    // Save to localStorage
    localStorage.setItem('dreamJob', JSON.stringify(dreamJob));

    // Refresh roadmap display
    displayRoadmap();
}

function getDummyRecommendation() {
    const recommendations = [
        "คุณควรพิจารณาการพัฒนาทักษะด้านเทคนิคที่แข็งแกร่งผ่านหลักสูตรออนไลน์และใบรับรอง",
        "คุณควรมุ่งเน้นไปที่การสร้างเครือข่ายมืออาชีพและเข้าร่วมกิจกรรมของอุตสาหกรรม",
        "คุณควรใช้ประโยชน์จากการฝึกงานและตำแหน่งระดับเริ่มต้นเพื่อได้รับประสบการณ์",
        "คุณควรติดตามการศึกษาต่อหรือการฝึกอบรมเชิ่วชาญเพื่อเพิ่มศักยภาพในการแข่งขัน",
        "คุณควรพัฒนาทักษะด้านภาวะผู้นำและการจัดการเพื่อเตรียมตัวสำหรับตำแหน่งระดับสูง",
        "คุณควรสำรวจบริษัทและอุตสาหกรรมต่างๆ เพื่อค้นหาสิ่งที่เหมาะสมที่สุด",
        "คุณควรพัฒนาการปรากฏตัวออนไลน์ที่แข็งแกร่งและพอร์ตโฟลิโอ",
        "คุณควรขอคำปรึกษาจากผู้มีประสบการณ์ในสาขาที่คุณเป้าหมาย",
        "คุณควรปรับปรุงทักษะการสื่อสารและการทำงานเป็นทีม",
        "คุณควรอัพเดตตนเองอย่างสม่ำเสมอเกี่ยวกับแนวโน้มของอุตสาหกรรม"
    ];

    return recommendations[Math.floor(Math.random() * recommendations.length)];
}

function getCareerInfo(jobTitle) {
    const careerDatabase = {
        "senior software developer": {
            withAlternative: true,
            description: "โปรแกรมเมอร์ซอฟต์แวร์อาวุโสนำการออกแบบและพัฒนาระบบซอฟต์แวร์ที่ซับซ้อน พวกเขาให้คำแนะนำแก่โปรแกรมเมอร์รุ่นเยาว์ สร้างสถาปัตยกรรมการแก้ปัญหาที่ปรับขนาดได้ และเป็นผู้รับผิดชอบในการตัดสินใจด้านเทคนิคที่สำคัญ บทบาทนี้ต้องการความเชี่ยวชาญเชิงลึกในการเขียนโปรแกรม การออกแบบระบบ และแนวทางปฏิบัติที่ดีที่สุด",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานในคณิตศาสตร์ วิทยาศาสตร์ และพื้นฐานคอมพิวเตอร์"
                },
                {
                    title: "ปริญญาวิทยาศาสตร์คอมพิวเตอร์หรือสาขาที่เกี่ยวข้อง",
                    description: "การศึกษาอย่างเป็นทางการ 4 ปีครอบคลุมอัลกอริทึม โครงสร้างข้อมูล หลักการวิศวกรรมซอฟต์แวร์ และฐานข้อมูล"
                },
                {
                    title: "ประสบการณ์จริง",
                    description: "ประสบการณ์การพัฒนาซอฟต์แวร์ระดับมืออาชีพ 3-5 ปี เริ่มจากตำแหน่งโปรแกรมเมอร์รุ่นเยาว์"
                },
                {
                    title: "ทักษะและใบรับรองขั้นสูง",
                    description: "ใบรับรองคลาวด์ (AWS Azure) สถาปัตยกรรม Microservices การออกแบบระบบ และการฝึกอบรมภาวะผู้นำ"
                }
            ]
        },
        "data scientist": {
            withAlternative: true,
            description: "นักวิทยาศาสตร์ข้อมูลวิเคราะห์ชุดข้อมูลที่ซับซ้อนและสร้างแบบจำลองการเรียนรู้ของเครื่องเพื่อสนับสนุนการตัดสินใจทางธุรกิจ พวกเขารวมสถิติการเขียนโปรแกรม และความรู้เฉพาะด้านเพื่อแก้ปัญหาจริงและสร้างแบบจำลองเชิงทำนาย",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานที่แข็งแกร่งในคณิตศาสตร์ สถิติ และวิทยาศาสตร์คอมพิวเตอร์"
                },
                {
                    title: "ปริญญาวิทยาศาสตร์ข้อมูล สถิติ หรือคณิตศาสตร์",
                    description: "ครอบคลุม 4 ปีสถิติ พีชคณิตเชิงเส้น ความน่าจะเป็น การเขียนโปรแกรม และการวิเคราะห์ข้อมูล"
                },
                {
                    title: "ประสบการณ์จริง",
                    description: "ประสบการณ์ 2-3 ปีกับเครื่องมือวิเคราะห์ข้อมูล Python R และ SQL ในโครงการจริง"
                },
                {
                    title: "การฝึกอบรมขั้นสูง",
                    description: "ปริญญาโทหรือใบรับรองเชิ่วชาญในการเรียนรู้ของเครื่อง การเรียนรู้เชิงลึก หรือวิศวกรรมข้อมูล"
                }
            ]
        },
        "ux/ui designer": {
            withAlternative: true,
            description: "นักออกแบบ UX/UI สร้างอินเทอร์เฟสดิจิทัลที่ใช้งานง่ายและสวยงาม พวกเขาวิจัยความต้องการของผู้ใช้ ออกแบบต้นแบบ และทำการทดสอบการใช้งานเพื่อให้มั่นใจว่าผลิตภัณฑ์จะมีประสบการณ์ผู้ใช้ที่ยอดเยี่ยม",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานในศิลปะสายตา พื้นฐานคอมพิวเตอร์ และหลักการออกแบบพื้นฐาน"
                },
                {
                    title: "การศึกษาด้านการออกแบบ",
                    description: "การศึกษาในการออกแบบกราฟิก การออกแบบ UX/UI หรือสาขาที่เกี่ยวข้อง หรือใบรับรองรั้ง bootcamp ใน UX/UI"
                },
                {
                    title: "พอร์ตโฟลิโอจริง",
                    description: "ประสบการณ์ 2-3 ปีในการสร้างการออกแบบ พร้อมพอร์ตโฟลิโอที่แข็งแกร่งแสดงความคิดในการออกแบบและการแก้ปัญหา"
                },
                {
                    title: "ทักษะขั้นสูง",
                    description: "ความเชี่ยวชาญในเครื่องมือออกแบบ (Figma Adobe XD) การวิจัยผู้ใช้ การสร้างต้นแบบ และการออกแบบการโต้ตอบ"
                }
            ]
        },
        "marketing manager": {
            withAlternative: true,
            description: "ผู้จัดการการตลาดพัฒนาและดำเนินการกลยุทธ์การตลาดเพื่อส่งเสริมผลิตภัณฑ์หรือบริการ พวกเขาควบคุมแคมเปญ วิเคราะห์แนวโน้มตลาด บริหารงบประมาณ และนำทีมการตลาดเพื่อบรรลุวัตถุประสงค์ทางธุรกิจ",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานในการสื่อสาร พื้นฐานธุรกิจ และความรู้ดิจิทัล"
                },
                {
                    title: "การตลาดหรือธุรกิจ",
                    description: "ครอบคลุม 4 ปีพื้นฐานการตลาด พฤติกรรมผู้บริโภค การวิเคราะห์ และกลยุทธ์ธุรกิจ"
                },
                {
                    title: "ประสบการณ์มืออาชีพ",
                    description: "ประสบการณ์การตลาด 3-5 ปี เริ่มจากตำแหน่งประสานงาน หรือผู้เชี่ยวชาญ"
                },
                {
                    title: "ใบรับรองขั้นสูง",
                    description: "ใบรับรองการตลาดดิจิทัล ทักษะการจัดการโครงการ และความชำนาญในการวิเคราะห์ข้อมูล"
                }
            ]
        },
        "sales executive": {
            withAlternative: true,
            description: "ผู้บริหารจำหน่ายขับเคลื่อนรายได้โดยการระบุและปิดโอกาสการขาย พวกเขาสร้างความสัมพันธ์กับไคลเอนต์ เข้าใจความต้องการของลูกค้า พัฒนากลยุทธ์การขาย และสม่ำเสมอบรรลุหรือเกินเป้าหมายการขาย",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานในการสื่อสาร พื้นฐานธุรกิจ และทักษะระหว่างบุคคล"
                },
                {
                    title: "การอบรมการขาย",
                    description: "การศึกษาอย่างเป็นทางการในธุรกิจ การสื่อสาร หรือใบรับรอง bootcamp เฉพาะการขาย"
                },
                {
                    title: "ประสบการณ์มืออาชีพ",
                    description: "ประสบการณ์การขาย 2-4 ปี รวมถึงการจัดการบัญชีและการจัดการความสัมพันธ์กับลูกค้า (CRM)"
                },
                {
                    title: "ทักษะขั้นสูง",
                    description: "ทักษะการเจรจา ความเชี่ยวชาญในระบบ CRM ระดับสูง ความรู้อุตสาหกรรม และเทคนิคการขายบริหารการค้น"
                }
            ]
        },
        "junior developer": {
            withAlternative: true,
            description: "โปรแกรมเมอร์รุ่นเยาว์สร้างและบำรุงรักษาแอปพลิเคชันเว็บและซอฟต์แวร์ภายใต้การแนะนำของนักพัฒนาอาวุโส พวกเขาเน้นการเขียนโค้ดที่สะอาด การเรียนรู้แนวปฏิบัติที่ดีที่สุด และการได้รับประสบการณ์จริงในการพัฒนาซอฟต์แวร์",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานในคณิตศาสตร์และพื้นฐานคอมพิวเตอร์"
                },
                {
                    title: "การฝึกอบรมการเขียนโปรแกรม",
                    description: "การศึกษาวิทยาศาสตร์คอมพิวเตอร์ ใบรับรอง bootcamp หรือหลักสูตรออนไลน์ครอบคลุม HTML CSS JavaScript และการพัฒนา backend พื้นฐาน"
                },
                {
                    title: "โครงการพอร์ตโฟลิโอ",
                    description: "โครงการที่เสร็จสิ้นแสดงความเข้าใจเกี่ยวกับการพัฒนาเว็บ การควบคุมเวอร์ชัน (Git) และแนวคิดการเขียนโปรแกรมพื้นฐาน"
                },
                {
                    title: "ตำแหน่งระดับเริ่มต้น",
                    description: "บทบาทมืออาชีพแรกของพวกเขาเป็นนักพัฒนารุ่นเยาว์เพื่อเพิ่มประสบการณ์จริงและคำแนะนำ"
                }
            ]
        },
        "financial analyst": {
            withAlternative: true,
            description: "นักวิเคราะห์ทางการเงินตรวจสอบข้อมูลทางการเงินและแนวโน้มตลาดเพื่อให้คำแนะนำการลงทุนและข้อมูลเชิงลึกทางการเงิน พวกเขาวิเคราะห์ประสิทธิภาพของ บริษัท สร้างการคาดการณ์ และสนับสนุนการตัดสินใจด้านการเงินอย่างมีกลยุทธ์",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานที่แข็งแกร่งในคณิตศาสตร์และหลักการบัญชี"
                },
                {
                    title: "การเงิน การบัญชี หรือเศรษฐศาสตร์",
                    description: "ครอบคลุม 4 ปีการวิเคราะห์ทางการเงิน การเงินขององค์กร การลงทุน และการบัญชี"
                },
                {
                    title: "ใบรับรอง",
                    description: "CFA (Chartered Financial Analyst) ใบอนุญาต Series 7/63 หรือใบรับรองทางการเงินที่เกี่ยวข้องอื่น ๆ"
                },
                {
                    title: "ประสบการณ์มืออาชีพ",
                    description: "การทำงาน 2-3 ปีในสถาบันการเงิน พร้อมความเชี่ยวชาญในการสร้างแบบจำลอง Excel งบการเงิน และการวิเคราะห์ความเสี่ยง"
                }
            ]
        },
        "machine learning engineer": {
            withAlternative: true,
            description: "วิศวกรแมชชีนเลิร์นนิงออกแบบ สร้าง และปรับใช้ระบบแมชชีนเลิร์นนิงในระดับขยาย พวกเขารวมวิศวกรรมซอฟต์แวร์กับความเชี่ยวชาญด้าน AI/ML เพื่อสร้างวิธีแก้ปัญหาที่พร้อมใช้งานซึ่งแก้ปัญหาทางธุรกิจที่ซับซ้อน",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานที่แข็งแกร่งในคณิตศาสตร์ ฟิสิกส์ และวิทยาศาสตร์คอมพิวเตอร์"
                },
                {
                    title: "วิทยาศาสตร์คอมพิวเตอร์ คณิตศาสตร์ หรือฟิสิกส์",
                    description: "ครอบคลุม 4 ปีอัลกอริทึม พีชคณิตเชิงเส้น สถิติ การเขียนโปรแกรม และแนวคิดแมชชีนเลิร์นนิงพื้นฐาน"
                },
                {
                    title: "การศึกษาและประสบการณ์ขั้นสูง",
                    description: "ปริญญาโทในแมชชีนเลิร์นนิง/AI หรือประสบการณ์ระดับมืออาชีพ 3+ ปีในการสร้างแบบจำลองและระบบแมชชีนเลิร์นนิง"
                },
                {
                    title: "ทักษะผู้เชี่ยวชาญ",
                    description: "ความเชี่ยวชาญเชิงลึกใน Python TensorFlow/PyTorch ระบบกระจาย MLOps และเทคนิคแมชชีนเลิร์นนิงล้ำสมัย"
                }
            ]
        },
        "doctor": {
            withAlternative: false,
            description: "แพทย์วินิจฉัยและรักษาสภาวะทางการแพทย์ ทำการผ่าตัด และสั่งยา พวกเขาทำงานในโรงพยาบาล คลินิก หรือการประกอบวิชาชีพในเอกชนเพื่อปรับปรุงสุขภาพของผู้ป่วยและช่วยชีวิต",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานที่แข็งแกร่งในชีววิทยา เคมี และวิทยาศาสตร์"
                },
                {
                    title: "การเตรียมแพทย์หรือวิทยาศาสตร์",
                    description: "ครอบคลุม 4 ปีชีววิทยา เคมี เคมีอินทรีย์ ฟิสิกส์ และข้อกำหนดเบื้องต้นของแพทย์"
                },
                {
                    title: "วิทยาลัยแพทย์ (MD หรือ MBBS)",
                    description: "ปี 4 ปีของการศึกษาทางการแพทย์ที่เข้มข้นครอบคลุมกายวิภาค สรีรวิทยา พยาธิสภาพ และการแพทย์ทางคลินิก"
                },
                {
                    title: "ฝึกงานและการฝึกสัตวแพทย์แพทย์",
                    description: "ปี 2-3+ ของการฝึกอบรมภาคปฏิบัติ การสอบใบประกาศนียบัตรแพทย์ และการฝึกอบรมด้านความเชี่ยวชาญ"
                }
            ]
        },
        "nurse": {
            withAlternative: false,
            description: "พยาบาลให้การดูแลผู้ป่วยโดยตรง ตรวจสอบสัญญาณชีววิทยา บริหารยา และสนับสนุนแพทย์ในการรักษา พวกเขาเป็นสิ่งสำคัญต่อการส่งมอบสุขภาพในโรงพยาบาลและคลินิก",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานในชีววิทยา เคมี และวิทยาศาสตร์สุขภาพ"
                },
                {
                    title: "ปริญญาพยาบาล (BSN หรือ Diploma)",
                    description: "การศึกษาพยาบาล 2-4 ปีครอบคลุมการดูแลผู้ป่วย สภาวะทางการแพทย์ และทักษะทางคลินิก"
                },
                {
                    title: "การสอบใบประกาศนียบัตรพยาบาล",
                    description: "ผ่านการสอบคณะกรรมการพยาบาลเพื่อได้รับใบประกาศนียบัตรและใบรับรองพยาบาล"
                },
                {
                    title: "ประสบการณ์ทางคลินิก",
                    description: "ประสบการณ์พยาบาลในทางปฏิบัติ 1-2 ปีในโรงพยาบาลหรือสถานพยาบาล"
                }
            ]
        },
        "lawyer": {
            withAlternative: false,
            description: "ทนายความให้คำปรึกษากฎหมาย แทนจำเลยในการดำเนินคดี และจัดเตรียมเอกสารทางกฎหมาย พวกเขาทำงานในสำนักทนายความ บริษัท หรือหน่วยงานของรัฐ",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานในการบริหารราชการ ประวัติศาสตร์ และทักษะการสื่อสาร"
                },
                {
                    title: "การศึกษาการศึกษาระดับปริญญาตรี",
                    description: "ปี 4 ปีของการศึกษาระดับปริญญาตรี วินัยใด ๆ (มักจะเป็นกฎหมายก่อนหรือศาสตร์การเมือง)"
                },
                {
                    title: "วิทยาลัยกฎหมาย (Juris Doctor)",
                    description: "ปี 3 ปีของการศึกษากฎหมายที่เข้มข้นครอบคลุมกฎหมายรัฐธรรมนูญ สัญญา การกระทำผิดทั้งหมด และพื้นที่เฉพาะ"
                },
                {
                    title: "การสอบและใบประกาศนียบัตรทนายความ",
                    description: "ผ่านการสอบทนายความและได้รับใบประกาศนียบัตรทนายความเพื่อประกอบวิชาชีพกฎหมายในเขตอำนาจของคุณ"
                }
            ]
        },
        "attorney": {
            withAlternative: false,
            description: "สารวัญเป็นมืออาชีพกฎหมายที่ได้รับใบประกาศนียบัตรซึ่งจัดการการฟ้องร้อง เรื่องขององค์กร และการแทนความเห็น พวกเขาให้บริการกฎหมายที่มีความเชี่ยวชาญแก่บุคคลและองค์กร",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานในแนวคิดเกี่ยวกับกฎหมายและการสื่อสาร"
                },
                {
                    title: "การศึกษาระดับปริญญาตรี",
                    description: "ปี 4 ปีของการศึกษาระดับปริญญาตรีเน้นไปที่การศึกษาที่เกี่ยวข้องกับกฎหมาย"
                },
                {
                    title: "วิทยาลัยกฎหมาย (JD)",
                    description: "ปี 3 ปีของวิทยาลัยกฎหมายพร้อมความเชี่ยวชาญในการฟ้องร้อง กฎหมายขององค์กร หรือพื้นที่การปฏิบัติอื่น ๆ"
                },
                {
                    title: "ใบรับรองและประสบการณ์ทนายความ",
                    description: "ผ่านการสอบทนายความ ได้รับใบประกาศนียบัตรทนายความ และมีประสบการณ์การประกอบวิชาชีพกฎหมาย 2+ ปี"
                }
            ]
        },
        "architect": {
            withAlternative: false,
            description: "สถาปนิกออกแบบอาคารและโครงสร้าง สร้างแบบพิมพ์ และควบคุมโครงการก่อสร้าง พวกเขารวมความสร้างสรรค์กับความเชี่ยวชาญด้านเทคนิคเพื่อสร้างพื้นที่ที่ปลอดภัยและใช้งานได้จริง",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานที่แข็งแกร่งในคณิตศาสตร์ ฟิสิกส์ และศิลปะ/การออกแบบ"
                },
                {
                    title: "สถาปัตยกรรม",
                    description: "ปี 5 ปีของการศึกษาสถาปัตยกรรมครอบคลุมหลักการออกแบบ ระบบอาคาร และการจัดการโครงการ"
                },
                {
                    title: "การฝึกงานสถาปัตยกรรม",
                    description: "ปี 3+ ของการฝึกงานและการฝึกหัดภายใต้สถาปนิกที่ได้รับใบประกาศนียบัตร"
                },
                {
                    title: "การสอบใบประกาศนียบัตร",
                    description: "ผ่านการสอบคณะกรรมการสถาปัตยกรรมและได้รับใบประกาศนียบัตรสถาปนิกระดับมืออาชีพ"
                }
            ]
        },
        "engineer": {
            withAlternative: false,
            description: "วิศวกรออกแบบ สร้าง และปรับปรุงโครงสร้างพื้นฐานและระบบกลศาสตร์ พวกเขาทำงานในโครงการวิศวกรรมโยธา กลศาสตร์ ไฟฟ้า หรือซอฟต์แวร์เพื่อแก้ปัญหาในทางปฏิบัติ",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานที่แข็งแกร่งในคณิตศาสตร์ ฟิสิกส์ และวิทยาศาสตร์"
                },
                {
                    title: "วิศวกรรม",
                    description: "ครอบคลุม 4 ปีพื้นฐานวิศวกรรม คณิตศาสตร์ การออกแบบ และความเชี่ยวชาญในวิศวกรรมโยธา กลศาสตร์ หรือไฟฟ้า"
                },
                {
                    title: "การฝึกงานวิศวกรรม",
                    description: "ปี 1-2 ของประสบการณ์วิศวกรรมในทางปฏิบัติภายใต้วิศวกรที่มีประสบการณ์"
                },
                {
                    title: "ใบประกาศนียบัตรวิศวกรระดับมืออาชีพ",
                    description: "ผ่านการสอบ PE (วิศวกรระดับมืออาชีพ) และได้รับใบประกาศนียบัตรวิศวกรรม"
                }
            ]
        },
        "professor": {
            withAlternative: false,
            description: "ศาสตราจารย์สอนนักเรียน ทำการวิจัย และมีส่วนร่วมในความรู้วิชาการ พวกเขาทำงานในมหาวิทยาลัยและสถาบันวิจัยเพื่อส่งเสริมการศึกษาและนวัตกรรม",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานในสาขาวิชาของคุณ"
                },
                {
                    title: "การศึกษาระดับปริญญาตรี",
                    description: "ปี 4 ปีของการศึกษาระดับปริญญาตรีในสาขาการศึกษาของคุณ"
                },
                {
                    title: "ปริญญาโท หรือ ดุษฎี",
                    description: "ปี 2-3 (ปริญญาโท) หรือ 5-7 ปี (ดุษฎี) ของการวิจัยและการศึกษาขั้นสูงในความเชี่ยวชาญของคุณ"
                },
                {
                    title: "ประสบการณ์การสอนและการวิจัย",
                    description: "ประสบการณ์การสอน เอกสารวิจัยที่ตีพิมพ์ และการมีส่วนร่วมทางวิชาการ"
                }
            ]
        },
        "psychologist": {
            withAlternative: false,
            description: "นักจิตวิทยาทำการประเมินจิตวิทยา ให้คำปรึกษา และวิจัยพฤติกรรมมนุษย์ พวกเขาช่วยไคลเอนต์แก้ไขปัญหาสุขภาพจิตและปรับปรุงสุขภาพจิต",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานในจิตวิทยา ชีววิทยา และวิทยาศาสตร์สังคม"
                },
                {
                    title: "จิตวิทยา",
                    description: "4 ปีของการศึกษาจิตวิทยาครอบคลุมจิตวิทยาการรู้คิด จิตวิทยาพัฒนาการ และจิตวิทยาทางคลินิก"
                },
                {
                    title: "ปริญญาโท หรือ ดุษฎี ในจิตวิทยาทางคลินิก",
                    description: "ปี 2 (ปริญญาโท) หรือ 5-6 ปี (ดุษฎี) ของการฝึกอบรมขั้นสูงในจิตวิทยาทางคลินิกและการให้คำปรึกษา"
                },
                {
                    title: "การฝึกงานและใบประกาศนียบัตร",
                    description: "ปี 1-2 ของการฝึกงาน ผ่านการสอบใบประกาศนียบัตร และได้รับใบประกาศนียบัตรจิตวิทยา"
                }
            ]
        },
        "psychiatrist": {
            withAlternative: false,
            description: "จิตแพทย์เป็นแพทย์ที่เชี่ยวชาญด้านสุขภาพจิต พวกเขาวินิจฉัยและรักษาโรคจิตใจโดยใช้ยาและการรักษา",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานที่แข็งแกร่งในวิทยาศาสตร์และชีววิทยา"
                },
                {
                    title: "วิทยาลัยแพทย์ (MD/MBBS)",
                    description: "ปี 4 ปีของการศึกษาทางการแพทย์ครอบคลุมสาขาการแพทย์ทั้งหมด"
                },
                {
                    title: "การฝึกสัตวแพทย์จิตแพทย์",
                    description: "ปี 4+ ของการฝึกอบรมด้านจิตแพทย์เฉพาะทางในการวินิจฉัยและการรักษาความผิดปกติด้านจิตใจ"
                },
                {
                    title: "ใบประกาศนียบัตรแพทย์และใบรับรองคณะกรรมการ",
                    description: "ใบประกาศนียบัตรแพทย์ ผ่านการสอบคณะกรรมการจิตแพทย์ และได้รับใบรับรองผู้เชี่ยวชาญ"
                }
            ]
        },
        "pharmacist": {
            withAlternative: false,
            description: "เภสัชกรเตรียมและจ่ายยา ให้คำแนะนำผู้ป่วยเกี่ยวกับการใช้ยา และรับรองการรักษาด้วยยาที่ปลอดภัย พวกเขาทำงานในร้านขายยา โรงพยาบาล หรือบริษัทเภสัชศาสตร์",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานในเคมี ชีววิทยา และคณิตศาสตร์"
                },
                {
                    title: "เภสัชศาสตร์ (PharmD)",
                    description: "ครอบคลุม 4 ปีการศึกษาเภสัชศาสตร์เกี่ยวกับเภสัชวิทยา เคมียา และการให้คำแนะนำผู้ป่วย"
                },
                {
                    title: "การฝึกงานเภสัชศาสตร์",
                    description: "ปี 1-2 ของประสบการณ์การฝึกงานภายใต้เภสัชกรที่ได้รับใบประกาศนียบัตร"
                },
                {
                    title: "การสอบใบประกาศนียบัตรเภสัชศาสตร์",
                    description: "ผ่านการสอบคณะกรรมการเภสัชศาสตร์และได้รับใบประกาศนียบัตรเภสัชกร"
                }
            ]
        },
        "veterinarian": {
            withAlternative: false,
            description: "สัตวแพทย์วินิจฉัยและรักษาโรคสัตว์และการบาดเจ็บ ทำการผ่าตัด และส่งเสริมสุขภาพสัตว์ พวกเขาทำงานในคลินิก โรงพยาบาล หรือสถาบันวิจัย",
            qualifications: [
                {
                    title: "ปริญญามัธยมศึกษา/GED",
                    description: "พื้นฐานที่แข็งแกร่งในชีววิทยา เคมี และวิทยาศาสตร์"
                },
                {
                    title: "สัตวแพทยศาสตร์ (DVM)",
                    description: "ครอบคลุม 4 ปีการศึกษาสัตวแพทยศาสตร์เกี่ยวกับกายวิภาคสัตว์ โรค การผ่าตัด และการรักษา"
                },
                {
                    title: "การฝึกงานสัตวแพทย์",
                    description: "ขั้นต่ำ 1 ปีของประสบการณ์ทางคลินิกภายใต้สัตวแพทย์ที่ได้รับใบประกาศนียบัตร"
                },
                {
                    title: "ใบประกาศนียบัตรสัตวแพทย์",
                    description: "ผ่านการสอบคณะกรรมการสัตวแพทย์และได้รับใบประกาศนียบัตรสัตวแพทย์เพื่อประกอบวิชาชีพ"
                }
            ]
        }
    };

    // Find matching career info (case-insensitive)
    const lowercaseTitle = jobTitle.toLowerCase();
    for (const [key, value] of Object.entries(careerDatabase)) {
        if (lowercaseTitle.includes(key) || key.includes(lowercaseTitle)) {
            return value;
        }
    }

    // Default career info if not found
    return {
        description: "นี่คือเส้นทางอาชีพที่น่าตื่นเต้นซึ่งมีโอกาสมากมายสำหรับการเติบโตและการพัฒนา ทำงานหนักเพื่อพัฒนาทักษะของคุณและได้รับประสบการณ์ในสาขานี้",
        qualifications: [
            {
                title: "ปริญญามัธยมศึกษา/GED",
                description: "จบการศึกษามัธยมศึกษาด้วยการเน้นไปที่วิชาที่เกี่ยวข้อง"
            },
            {
                title: "ปริญญาบัณฑิต",
                description: "เรียนปริญญาบัณฑิตที่เกี่ยวข้องในสาขาที่สนใจของคุณ"
            },
            {
                title: "ประสบการณ์มืออาชีพ",
                description: "ได้รับประสบการณ์จริงผ่านการฝึกงานและตำแหน่งระดับเริ่มต้น"
            },
            {
                title: "การฝึกอบรมขั้นสูง",
                description: "ศึกษาต่อด้วยใบรับรองและหลักสูตรเฉพาะทาง"
            }
        ]
    };
}

function initializeRoadmapChat() {
    const sendBtn = document.getElementById('roadmapSendChat');
    const input = document.getElementById('roadmapChatInput');

    if (sendBtn) {
        sendBtn.addEventListener('click', sendRoadmapChatMessage);
    }

    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendRoadmapChatMessage();
        });

        // Show initial AI greeting
        setTimeout(() => {
            const messagesContainer = document.getElementById('roadmapChatMessages');
            if (messagesContainer) {
                const greeting = "สวัสดี! ฉันที่นี่เพื่อช่วยคุณค้นหาอาชีพของคุณ ถามเราเกี่ยวกับงาน ทักษะ หรือเส้นทางของคุณไปข้างหน้า!";
                addRoadmapMessage(greeting, 'assistant');
            }
        }, 300);
    }
}

function sendRoadmapChatMessage() {
    const input = document.getElementById('roadmapChatInput');
    const message = input.value.trim();

    if (!message) return;

    addRoadmapMessage(message, 'user');
    input.value = '';

    // Simulate AI response delay
    setTimeout(() => {
        const response = getDummyRecommendation();
        addRoadmapMessage(response, 'assistant');
    }, 500);
}

function addRoadmapMessage(message, sender) {
    const messagesContainer = document.getElementById('roadmapChatMessages');
    if (!messagesContainer) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `roadmap-message ${sender}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'roadmap-message-content';
    contentDiv.textContent = message;

    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function editDreamJob() {
    dreamJob = null;
    localStorage.removeItem('dreamJob');
    displayRoadmap();
}

// Degrees functionality
function displayDegrees(degrees) {
    const resultsContainer = document.getElementById('degreesResults');

    if (degrees.length === 0) {
        resultsContainer.innerHTML = '<div class="empty-message">ไม่พบปริญญาที่ตรงกับการค้นหาของคุณ</div>';
        return;
    }

    resultsContainer.innerHTML = degrees.map(degree => `
        <div class="card">
            <span class="card-category">${getCategoryLabel(degree.category)}</span>
            <h3>${degree.name}</h3>
            <div class="card-info">
                <strong>มหาวิทยาลัย:</strong> ${degree.university}
            </div>
            <div class="card-info">
                <strong>ระยะเวลา:</strong> ${degree.duration}
            </div>
            <div class="card-info">
                <strong>ต้นทุนรวม:</strong> ${degree.totalCost}
            </div>
            <div class="card-info" style="margin-top: 1rem;">
                ${degree.description}
            </div>
        </div>
    `).join('');
}

// Jobs functionality
function displayJobs(jobs) {
    const resultsContainer = document.getElementById('jobsResults');

    if (jobs.length === 0) {
        resultsContainer.innerHTML = '<div class="empty-message">ไม่พบตำแหน่งงานที่ตรงกับการค้นหาของคุณ</div>';
        return;
    }

    resultsContainer.innerHTML = jobs.map(job => `
        <div class="card">
            <span class="card-category">${getJobCategoryLabel(job.category)}</span>
            <h3>${job.title}</h3>
            <div class="card-info">
                <strong>บริษัท:</strong> ${job.company}
            </div>
            <div class="card-info">
                <strong>สถานที่ตั้ง:</strong> ${job.location}
            </div>
            <div class="card-info">
                <strong>เงินเดือน:</strong> ${job.salary}
            </div>
            <div class="card-info">
                <strong>ความต้องการ:</strong> ${job.requirements}
            </div>
            <div class="card-info" style="margin-top: 1rem;">
                ${job.description}
            </div>
        </div>
    `).join('');
}

// Search and filter functionality
document.getElementById('degreeSearch').addEventListener('input', filterDegrees);
document.getElementById('degreeFilter').addEventListener('change', filterDegrees);

function filterDegrees() {
    const searchTerm = document.getElementById('degreeSearch').value.toLowerCase();
    const category = document.getElementById('degreeFilter').value;

    let filtered = degreesData.filter(degree => {
        const matchesSearch = degree.name.toLowerCase().includes(searchTerm) ||
                            degree.university.toLowerCase().includes(searchTerm) ||
                            degree.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === '' || degree.category === category;

        return matchesSearch && matchesCategory;
    });

    displayDegrees(filtered);
}

document.getElementById('jobSearch').addEventListener('input', filterJobs);
document.getElementById('jobFilter').addEventListener('change', filterJobs);

function filterJobs() {
    const searchTerm = document.getElementById('jobSearch').value.toLowerCase();
    const category = document.getElementById('jobFilter').value;

    let filtered = jobOpeningsData.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm) ||
                            job.company.toLowerCase().includes(searchTerm) ||
                            job.location.toLowerCase().includes(searchTerm) ||
                            job.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === '' || job.category === category;

        return matchesSearch && matchesCategory;
    });

    displayJobs(filtered);
}

// Helper functions for category labels
function getCategoryLabel(category) {
    const labels = {
        'computer-science': 'วิทยาศาสตร์คอมพิวเตอร์',
        'engineering': 'วิศวกรรม',
        'business': 'ธุรกิจ',
        'healthcare': 'สุขภาพ',
        'arts': 'ศิลปะและมนุษยศาสตร์',
        'sciences': 'วิทยาศาสตร์'
    };
    return labels[category] || category;
}

function getJobCategoryLabel(category) {
    const labels = {
        'software': 'การพัฒนาซอฟต์แวร์',
        'data': 'วิทยาศาสตร์ข้อมูล',
        'design': 'การออกแบบ',
        'marketing': 'การตลาด',
        'sales': 'การขาย',
        'finance': 'การเงิน'
    };
    return labels[category] || category;
}

// Resume Page Functions
function navigateToResume() {
    // Hide profile icon visual and navigate
    switchPage('resume');
    initializeResumePage();
}

function initializeResumePage() {
    // Initialize qualification dropdown
    const qualSearchInput = document.getElementById('resumeQualificationSearch');
    const qualDropdownMenu = document.getElementById('resumeQualificationDropdown');
    const qualHiddenInput = document.getElementById('resumeQualificationSelect');
    
    // Populate qualification dropdown from degreesData
    qualDropdownMenu.innerHTML = '<div class="qual-option" data-value="">-- เลือกวุฒิการศึกษา --</div>';
    degreesData.forEach(degree => {
        const option = document.createElement('div');
        option.className = 'qual-option';
        option.setAttribute('data-value', `${degree.id}|${degree.name}`);
        option.textContent = degree.name;
        qualDropdownMenu.appendChild(option);
    });
    
    const qualDropdownOptions = document.querySelectorAll('.resume-qual-dropdown .qual-option');
    
    if (qualSearchInput) {
        // Show dropdown on focus
        qualSearchInput.addEventListener('focus', () => {
            qualDropdownMenu.classList.add('active');
        });
        
        // Handle search input
        qualSearchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            qualDropdownOptions.forEach(option => {
                const text = option.textContent.toLowerCase();
                const value = option.getAttribute('data-value');
                if (text.includes(searchTerm) || value === '') {
                    option.style.display = 'block';
                } else {
                    option.style.display = 'none';
                }
            });
            
            // Keep dropdown visible while typing
            if (qualSearchInput.value.length > 0 || qualSearchInput === document.activeElement) {
                qualDropdownMenu.classList.add('active');
            }
        });
        
        // Handle option selection
        qualDropdownOptions.forEach(option => {
            option.addEventListener('click', () => {
                const value = option.getAttribute('data-value');
                if (value) {
                    qualSearchInput.value = option.textContent;
                    qualHiddenInput.value = value;
                    
                    // Update visual selection
                    qualDropdownOptions.forEach(opt => opt.classList.remove('selected'));
                    option.classList.add('selected');
                    
                    // Keep dropdown open for easier multi-selection
                }
            });
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.resume-qual-dropdown') && !e.target.closest('.add-qualification-btn')) {
            qualDropdownMenu.classList.remove('active');
        }
    });
    
    // Load saved qualifications from localStorage
    const savedQualifications = localStorage.getItem('resumeQualifications');
    if (savedQualifications) {
        try {
            const qualifications = JSON.parse(savedQualifications);
            displayResumeQualifications(qualifications);
        } catch (e) {
            console.error('Error loading qualifications:', e);
        }
    }
    
    // Load other resume data
    const savedFirstName = localStorage.getItem('resumeFirstName');
    const savedLastName = localStorage.getItem('resumeLastName');
    
    if (savedFirstName) {
        document.getElementById('firstName').value = savedFirstName;
    }
    if (savedLastName) {
        document.getElementById('lastName').value = savedLastName;
    }
    
    // Add event listeners to save data when changed
    document.getElementById('firstName').addEventListener('change', () => {
        localStorage.setItem('resumeFirstName', document.getElementById('firstName').value);
    });
    document.getElementById('lastName').addEventListener('change', () => {
        localStorage.setItem('resumeLastName', document.getElementById('lastName').value);
    });
}

function addResumeQualification() {
    const qualSearchInput = document.getElementById('resumeQualificationSearch');
    const qualHiddenInput = document.getElementById('resumeQualificationSelect');
    
    const selectedValue = qualHiddenInput.value;
    const selectedText = qualSearchInput.value;
    
    if (!selectedValue || selectedValue === '') {
        alert('โปรดเลือกวุฒิการศึกษา');
        return;
    }
    
    // Get existing qualifications from localStorage
    const savedQualifications = localStorage.getItem('resumeQualifications');
    let qualifications = [];
    
    if (savedQualifications) {
        try {
            qualifications = JSON.parse(savedQualifications);
        } catch (e) {
            qualifications = [];
        }
    }
    
    // Check if qualification already exists
    if (qualifications.some(q => q.value === selectedValue)) {
        alert('วุฒิการศึกษานี้มีอยู่แล้ว');
        return;
    }
    
    // Add new qualification
    qualifications.push({
        value: selectedValue,
        text: selectedText
    });
    
    // Save to localStorage
    localStorage.setItem('resumeQualifications', JSON.stringify(qualifications));
    
    // Display qualifications
    displayResumeQualifications(qualifications);
    
    // Clear input
    document.getElementById('resumeQualificationSearch').value = '';
    document.getElementById('resumeQualificationSelect').value = '';
}

function displayResumeQualifications(qualifications) {
    const qualList = document.getElementById('resumeQualificationList');
    
    if (!qualifications || qualifications.length === 0) {
        qualList.innerHTML = '';
        return;
    }
    
    qualList.innerHTML = qualifications.map((qual, index) => `
        <div class="qualification-item">
            <span class="qualification-item-text">${qual.text}</span>
            <button type="button" class="remove-qualification-btn" onclick="removeResumeQualification('${qual.value}')">ลบ</button>
        </div>
    `).join('');
}

function removeResumeQualification(value) {
    const savedQualifications = localStorage.getItem('resumeQualifications');
    if (!savedQualifications) return;
    
    try {
        let qualifications = JSON.parse(savedQualifications);
        qualifications = qualifications.filter(q => q.value !== value);
        
        if (qualifications.length === 0) {
            localStorage.removeItem('resumeQualifications');
        } else {
            localStorage.setItem('resumeQualifications', JSON.stringify(qualifications));
        }
        
        displayResumeQualifications(qualifications);
    } catch (e) {
        console.error('Error removing qualification:', e);
    }
}

function addProfilePhoto() {
    // Fake profile photo upload - just show a message
    alert('คุณลักษณะการอัปโหลดรูปโปรไฟล์กำลังจะมาถึง!');
}

function uploadResume() {
    // Get the resume status element
    const resumeStatus = document.getElementById('resumeStatus');
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const qualification = document.getElementById('qualificationSelect').value;
    
    // Validate form
    if (!firstName || !lastName) {
        resumeStatus.textContent = 'โปรดกรอกชื่อและนามสกุล';
        resumeStatus.classList.add('show');
        resumeStatus.classList.remove('success');
        setTimeout(() => {
            resumeStatus.classList.remove('show');
        }, 3000);
        return;
    }
    
    if (!qualification) {
        resumeStatus.textContent = 'โปรดเลือกวุฒิการศึกษา';
        resumeStatus.classList.add('show');
        resumeStatus.classList.remove('success');
        setTimeout(() => {
            resumeStatus.classList.remove('show');
        }, 3000);
        return;
    }
    
    // Show fake success message
    resumeStatus.textContent = `✓ ประวัติส่วนตัวของ ${firstName} ${lastName} ได้รับการอัปโหลดสำเร็จ!`;
    resumeStatus.classList.add('show', 'success');
    
    // Save to localStorage
    localStorage.setItem('resumeFirstName', firstName);
    localStorage.setItem('resumeLastName', lastName);
    localStorage.setItem('resumeQualification', qualification);
    
    // Clear message after 4 seconds
    setTimeout(() => {
        resumeStatus.classList.remove('show');
    }, 4000);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    // Load dream job from localStorage
    const savedDreamJob = localStorage.getItem('dreamJob');
    if (savedDreamJob) {
        dreamJob = JSON.parse(savedDreamJob);
    }

    // Display initial page
    displayRoadmap();
});
