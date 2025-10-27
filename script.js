// Danh sách học sinh ban đầu (43 học sinh)
let students = [
    { id: '001', name: 'Quỳnh Anh', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '002', name: 'Đức Anh', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '003', name: 'Hải Anh', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '004', name: 'Quang Anh', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '005', name: 'Hải Băng', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '006', name: 'Thị Bình', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '007', name: 'Mai Chi', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '008', name: 'Quang Dương', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '009', name: 'Hữu Đạt', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '010', name: 'Hải Đăng', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '011', name: 'Thành Đoàn', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '012', name: 'Văn Đồng', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '013', name: 'Nhật Đức', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '014', name: 'Minh Đức', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '015', name: 'Thu Hà', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '016', name: 'Minh Hiếu', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '017', name: 'Văn Huy', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '018', name: 'Ngọc Hữu', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '019', name: 'Nam Khánh', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '020', name: 'Văn Kì', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '021', name: 'Ngọc Linh', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '022', name: 'Thành Long', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '023', name: 'Ánh Ngọc', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '024', name: 'Minh Nguyệt', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '025', name: 'Minh Nhật', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '026', name: 'Đức Phong', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '027', name: 'Việt Quang', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '028', name: 'Ngọc Quý', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '029', name: 'Thanh Sơn', gender: 'Nam', rating: 'D', preferredPair: '' },
    { id: '030', name: 'Thanh Thảo', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '031', name: 'Văn Thuận', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '032', name: 'Diệu Thúy', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '033', name: 'Hương Trà', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '034', name: 'Huyền Trang', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '035', name: 'Mai Trang', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '036', name: 'Minh Trí', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '037', name: 'Phú Triệu', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '038', name: 'Quốc Trưởng', gender: 'Nam', rating: 'A', preferredPair: '' },
    { id: '039', name: 'Yến Vi', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '040', name: 'Khánh Vy', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '041', name: 'Như Ý', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '042', name: 'Minh Anh', gender: 'Nữ', rating: 'A', preferredPair: '' },
    { id: '043', name: 'Thu Hiền', gender: 'Nữ', rating: 'A', preferredPair: '' }
].sort((a, b) => a.name.localeCompare(b.name, 'vi'));

// Gán xếp hạng ngẫu nhiên: 18 học sinh A, 5 học sinh B, C, D, E, F
const ratings = ['B', 'C', 'D', 'E', 'F'];
const numPerRating = 5;
const shuffledStudents = [...students];
for (let i = shuffledStudents.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledStudents[i], shuffledStudents[j]] = [shuffledStudents[j], shuffledStudents[i]];
}
for (const rating of ratings) {
    for (let i = 0; i < numPerRating; i++) {
        const index = ratings.indexOf(rating) * numPerRating + i;
        if (shuffledStudents[index]) {
            shuffledStudents[index].rating = rating;
        }
    }
}
students = shuffledStudents.sort((a, b) => a.name.localeCompare(b.name, 'vi'));

let studentPairs = [];

// Lấy các phần tử HTML
const els = {
    studentList: document.getElementById('studentList'),
    searchInput: document.getElementById('searchInput'),
    fileInput: document.getElementById('fileInput'),
    uploadBtn: document.getElementById('uploadBtn'),
    randomizeBtn: document.getElementById('randomizeBtn'),
    resetBtn: document.getElementById('resetBtn'),
    saveBtn: document.getElementById('saveBtn'),
    exportBtn: document.getElementById('exportBtn'),
    undoBtn: document.getElementById('undoBtn'),
    redoBtn: document.getElementById('redoBtn'),
    toast: document.getElementById('toast'),
    seatingChart: document.getElementById('seatingChart'),
    loadingOverlay: document.getElementById('loadingOverlay'),
    exportModal: document.getElementById('exportModal'),
    exportTitle: document.getElementById('exportTitle'),
    previewContainer: document.getElementById('previewContainer'),
    previewImage: document.getElementById('previewImage'),
    previewBtn: document.getElementById('previewBtn'),
    confirmExportBtn: document.getElementById('confirmExportBtn'),
    cancelExportBtn: document.getElementById('cancelExportBtn')
};

// Quản lý trạng thái lịch sử (undo/redo)
const state = {
    history: [],
    historyIndex: -1,
    maxHistory: 50
};

// Hàm tiện ích
const utils = {
    showToast(message, isError = false) {
        els.toast.innerHTML = `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="${isError ? 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' : 'M5 13l4 4L19 7'}"/>
            </svg>
            ${message}
        `;
        els.toast.classList.toggle('error', isError);
        els.toast.classList.add('show');
        setTimeout(() => els.toast.classList.remove('show'), 4000);
    },
    createElement(tag, className, text, attributes = {}) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (text) el.textContent = text;
        Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
        return el;
    },
    setLoading(button, isLoading) {
        if (isLoading) {
            button.disabled = true;
            button.classList.add('loading');
            if (els.loadingOverlay) els.loadingOverlay.classList.add('show');
        } else {
            button.disabled = false;
            button.classList.remove('loading');
            if (els.loadingOverlay) els.loadingOverlay.classList.remove('show');
        }
    },
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },
    saveState() {
        try {
            const seatingData = {};
            document.querySelectorAll('[data-seat]').forEach(seat => {
                if (seat.textContent) {
                    seatingData[seat.dataset.seat] = seat.textContent;
                }
            });
            state.history = state.history.slice(0, state.historyIndex + 1);
            state.history.push({ seatingData, students: [...students], studentPairs: [...studentPairs] });
            if (state.history.length > state.maxHistory) state.history.shift();
            state.historyIndex = state.history.length - 1;
            localStorage.setItem('seatingChart', JSON.stringify(seatingData));
            els.undoBtn.disabled = state.historyIndex <= 0;
            els.redoBtn.disabled = state.historyIndex >= state.history.length - 1;
        } catch (err) {
            console.error('Lỗi lưu trạng thái:', err);
            utils.showToast('Lỗi lưu trạng thái: ' + err.message, true);
        }
    },
    loadState(index) {
        if (index < 0 || index >= state.history.length) return;
        state.historyIndex = index;
        const { seatingData, students: savedStudents, studentPairs: savedPairs } = state.history[index];
        students = savedStudents;
        studentPairs = savedPairs;
        initStudentList();
        initSeatingChart();
        document.querySelectorAll('[data-seat]').forEach(seat => {
            seat.textContent = seatingData[seat.dataset.seat] || '';
            seat.classList.toggle('seat-filled', !!seat.textContent);
        });
        els.undoBtn.disabled = state.historyIndex <= 0;
        els.redoBtn.disabled = state.historyIndex >= state.history.length - 1;
    }
};

// Xử lý file XLSX
function parseXlsx(file, callback) {
    if (file.size > 5 * 1024 * 1024) {
        utils.showToast('File quá lớn! Vui lòng chọn file dưới 5MB.', true);
        return;
    }
    utils.setLoading(els.uploadBtn, true);
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const workbook = XLSX.read(e.target.result, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: ['id', 'name', 'gender', 'rating', 'preferredPair'], blankrows: false, defval: '' });
            const filteredData = jsonData.filter(row => row.name && row.name.trim() !== '');
            if (filteredData.length === 0) {
                utils.showToast('File rỗng hoặc không hợp lệ!', true);
                return;
            }
            const validRatings = ['A', 'B', 'C', 'D', 'E', 'F'];
            const validGenders = ['Nam', 'Nữ'];
            const data = filteredData.map((row, index) => ({
                id: row.id || `S${(index + 1).toString().padStart(3, '0')}`,
                name: row.name.toString().trim(),
                gender: validGenders.includes(row.gender) ? row.gender : 'Nam',
                rating: validRatings.includes(row.rating?.toUpperCase()) ? row.rating.toUpperCase() : 'A',
                preferredPair: row.preferredPair ? row.preferredPair.toString().trim() : ''
            })).sort((a, b) => a.name.localeCompare(b.name, 'vi')).slice(0, 43);
            callback(data);
            utils.showToast('Đã tải danh sách học sinh từ XLSX!');
            utils.setLoading(els.uploadBtn, false);
        } catch (err) {
            console.error('Lỗi đọc file XLSX:', err);
            utils.showToast('Lỗi khi đọc file XLSX! Vui lòng kiểm tra định dạng file.', true);
            utils.setLoading(els.uploadBtn, false);
        }
    };
    reader.readAsArrayBuffer(file);
}

// Khởi tạo danh sách học sinh
function initStudentList(filteredStudents = students) {
    els.studentList.innerHTML = '';
    filteredStudents.forEach(student => {
        const div = utils.createElement('div', 'student-card', student.name, { draggable: true, 'data-id': student.id });
        div.innerHTML = `
            <span class="font-bold">${student.name}</span>
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        `;
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', student.name);
            e.dataTransfer.setData('source', 'studentList');
            div.classList.add('drag-over');
        });
        div.addEventListener('dragend', () => div.classList.remove('drag-over'));
        els.studentList.appendChild(div);
    });
}

// Khởi tạo sơ đồ chỗ ngồi
function initSeatingChart() {
    const groups = { group1: 6, group2: 5, group3: 5, group4: 6 };
    for (const [groupId, tableCount] of Object.entries(groups)) {
        const groupDiv = document.getElementById(groupId);
        groupDiv.innerHTML = '';
        for (let i = 0; i < tableCount; i++) {
            const tableDiv = utils.createElement('div', 'space-y-2');
            tableDiv.appendChild(utils.createElement('div', 'table-label', `Bàn ${i + 1}`));
            const seatsDiv = utils.createElement('div', 'flex gap-3');
            for (let j = 0; j < 2; j++) {
                const seatDiv = utils.createElement('div', 'desk flex-1 p-3 text-center', '', {
                    'data-seat': `${groupId}-table${i}-seat${j}`,
                    draggable: true
                });
                seatDiv.addEventListener('dragover', (e) => e.preventDefault());
                seatDiv.addEventListener('dragstart', (e) => {
                    if (seatDiv.textContent) {
                        e.dataTransfer.setData('text/plain', seatDiv.textContent);
                        e.dataTransfer.setData('source', 'seat');
                        seatDiv.classList.add('drag-over');
                    }
                });
                seatDiv.addEventListener('dragend', () => seatDiv.classList.remove('drag-over'));
                seatDiv.addEventListener('drop', (e) => {
                    e.preventDefault();
                    const studentName = e.dataTransfer.getData('text/plain');
                    const source = e.dataTransfer.getData('source');
                    if (source === 'seat' && seatDiv.textContent) {
                        const sourceSeat = Array.from(document.querySelectorAll('[data-seat]')).find(
                            seat => seat.textContent === studentName && seat !== seatDiv
                        );
                        if (sourceSeat) {
                            sourceSeat.textContent = seatDiv.textContent;
                            sourceSeat.classList.add('seat-filled');
                        }
                    }
                    if (seatDiv.dataset.seat) {
                        seatDiv.textContent = studentName;
                        seatDiv.classList.add('seat-filled');
                        if (source === 'studentList') {
                            updateStudentList(studentName);
                        }
                        clearOtherSeats(studentName, seatDiv);
                        utils.saveState();
                    }
                });
                seatsDiv.appendChild(seatDiv);
            }
            tableDiv.appendChild(seatsDiv);
            groupDiv.appendChild(tableDiv);
        }
    }
}

// Cập nhật danh sách học sinh sau khi xếp
function updateStudentList(studentName) {
    const studentDiv = Array.from(els.studentList.children).find(div => div.textContent.includes(studentName));
    if (studentDiv) studentDiv.remove();
}

// Xóa ghế khác của học sinh (tránh nhân đôi)
function clearOtherSeats(studentName, currentSeat) {
    document.querySelectorAll('[data-seat]').forEach(seat => {
        if (seat !== currentSeat && seat.textContent === studentName) {
            seat.textContent = '';
            seat.classList.remove('seat-filled');
        }
    });
}

// Lưu cấu hình (JSON)
function saveConfiguration() {
    try {
        const seatingData = {};
        document.querySelectorAll('[data-seat]').forEach(seat => {
            if (seat.textContent) {
                seatingData[seat.dataset.seat] = seat.textContent;
            }
        });
        seatingData.pairs = studentPairs;
        seatingData.students = students;
        const jsonString = JSON.stringify(seatingData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `seating-chart-${new Date().toLocaleString('vi-VN').replace(/[\W]+/g, '-')}.json`;
        link.click();
        URL.revokeObjectURL(link.href);
        utils.showToast('Đã lưu cấu hình sơ đồ!');
    } catch (err) {
        console.error('Lỗi lưu cấu hình:', err);
        utils.showToast('Lỗi lưu cấu hình: ' + err.message, true);
    }
}

// Tạo canvas cho xuất ảnh/PDF
function generateCanvas(title, callback) {
    if (!els.seatingChart || els.seatingChart.offsetWidth === 0 || els.seatingChart.offsetHeight === 0) {
        utils.showToast('Sơ đồ lớp học chưa hiển thị đầy đủ. Vui lòng thử lại sau khi load trang.', true);
        console.error('Seating chart is not visible or does not exist.');
        callback(null);
        return;
    }

    if (typeof html2canvas === 'undefined') {
        utils.showToast('Thư viện html2canvas chưa load. Kiểm tra script tag.', true);
        callback(null);
        return;
    }

    const fontPromise = document.fonts.ready.catch(err => {
        console.warn('Font loading failed, falling back to defaults:', err);
        return Promise.resolve();
    });

    Promise.race([
        fontPromise,
        new Promise(resolve => setTimeout(resolve, 3000))
    ]).then(() => {
        const isMobile = window.innerWidth <= 768;
        const scale = isMobile ? 1.5 : Math.max(1.5, Math.min(window.devicePixelRatio * 2, 3));

        html2canvas(els.seatingChart, {
            scale: scale,
            backgroundColor: '#ffffff',
            useCORS: true,
            allowTaint: true,
            logging: false,
            windowWidth: document.body.scrollWidth,
            windowHeight: document.body.scrollHeight,
            onclone: (document, element) => {
                element.style.visibility = 'visible';
                element.style.position = 'relative';
                element.querySelectorAll('.desk, .seat-filled').forEach(el => {
                    el.style.background = el.classList.contains('seat-filled') ? '#7AAEC6' : '#D4D2E9';
                    el.style.fontFamily = 'Inter, Arial, sans-serif';
                    el.style.fontWeight = '700';
                    el.style.fontSize = '0.8rem';
                    el.style.display = 'flex';
                    el.style.alignItems = 'center';
                    el.style.justifyContent = 'center';
                    el.style.textAlign = 'center';
                    el.style.whiteSpace = 'pre-wrap';
                    el.style.wordBreak = 'normal';
                    el.style.padding = '8px';
                    el.style.boxSizing = 'border-box';
                });
                element.querySelectorAll('.table-label').forEach(el => {
                    el.style.fontFamily = 'Inter, Arial, sans-serif';
                    el.style.fontWeight = '700';
                    el.style.fontSize = '1.1rem';
                });
            }
        }).then(canvas => {
            if (!canvas) {
                throw new Error('Canvas không được tạo');
            }
            const padding = 20;
            const titleHeight = 80;
            const legendHeight = 100;
            const newCanvas = document.createElement('canvas');
            newCanvas.width = canvas.width + padding * 2;
            newCanvas.height = canvas.height + titleHeight + legendHeight + padding * 2;
            const ctx = newCanvas.getContext('2d');

            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);

            ctx.font = 'bold 24px Inter, Arial, sans-serif';
            ctx.fillStyle = '#1A1A1A';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const date = new Date().toLocaleString('vi-VN');
            const titleText = `${title} - ${date}`;
            ctx.fillText(titleText, newCanvas.width / 2, padding + titleHeight / 2);

            ctx.drawImage(canvas, padding, padding + titleHeight);

            const legendY = canvas.height + titleHeight + padding + 30;
            ctx.font = 'bold 14px Inter, Arial, sans-serif';
            ctx.fillStyle = '#1A1A1A';
            ctx.textAlign = 'left';
            ctx.fillText('Xếp hạng:', padding, legendY);
            const ratings = ['A', 'B', 'C', 'D', 'E', 'F'];
            ratings.forEach((rating, index) => {
                ctx.fillStyle = index < 2 ? '#4A90E2' : index < 4 ? '#F5A623' : '#E94E77';
                ctx.fillRect(padding + index * 80, legendY + 5, 20, 20);
                ctx.fillStyle = '#1A1A1A';
                ctx.fillText(rating, padding + index * 80 + 25, legendY + 18);
            });

            callback(newCanvas);
        }).catch(err => {
            console.error('Canvas generation error:', err);
            utils.showToast(`Lỗi tạo canvas: ${err.message}. Kiểm tra console để biết thêm chi tiết.`, true);
            callback(null);
        });
    }).catch(err => {
        console.error('Font loading error:', err);
        utils.showToast('Lỗi tải font, sử dụng font mặc định nhưng vẫn thử xuất.', true);
        callback(null);
    });
}

// Sự kiện tìm kiếm học sinh
els.searchInput.addEventListener('input', () => {
    const searchTerm = els.searchInput.value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm) &&
        !Array.from(document.querySelectorAll('[data-seat]')).some(seat => seat.textContent === student.name)
    );
    initStudentList(filteredStudents);
});

// Sự kiện upload file CSV/XLSX
els.uploadBtn.addEventListener('click', () => els.fileInput.click());
els.fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type === 'text/csv') {
        utils.setLoading(els.uploadBtn, true);
        const reader = new FileReader();
        reader.onload = (event) => {
            const lines = event.target.result.split('\n').map(line => line.trim()).filter(line => line);
            if (lines.length === 0) {
                utils.showToast('File CSV rỗng hoặc không hợp lệ!', true);
                utils.setLoading(els.uploadBtn, false);
                return;
            }
            const validRatings = ['A', 'B', 'C', 'D', 'E', 'F'];
            const validGenders = ['Nam', 'Nữ'];
            students = lines.slice(0, 43).map((line, index) => {
                const [id, name, gender, rating, preferredPair] = line.split(',').map(item => item.trim());
                return {
                    id: id || `S${(index + 1).toString().padStart(3, '0')}`,
                    name: name || `Học sinh ${index + 1}`,
                    gender: validGenders.includes(gender) ? gender : 'Nam',
                    rating: validRatings.includes(rating?.toUpperCase()) ? rating.toUpperCase() : 'A',
                    preferredPair: preferredPair || ''
                };
            }).sort((a, b) => a.name.localeCompare(b.name, 'vi'));
            studentPairs = [];
            initStudentList();
            initSeatingChart();
            utils.saveState();
            utils.showToast('Đã tải danh sách học sinh từ CSV!');
            utils.setLoading(els.uploadBtn, false);
        };
        reader.readAsText(file);
    } else if (file.type.includes('spreadsheetml')) {
        parseXlsx(file, (data) => {
            students = data;
            studentPairs = [];
            initStudentList();
            initSeatingChart();
            utils.saveState();
        });
    } else {
        utils.showToast('Vui lòng chọn file CSV hoặc XLSX!', true);
    }
    els.fileInput.value = '';
});

// Sự kiện xếp chỗ ngẫu nhiên
els.randomizeBtn.addEventListener('click', () => {
    // Xóa tất cả ghế và khôi phục danh sách học sinh
    document.querySelectorAll('[data-seat]').forEach(seat => {
        seat.textContent = '';
        seat.classList.remove('seat-filled');
    });
    initStudentList();

    // Lấy danh sách ghế trống
    let emptySeats = Array.from(document.querySelectorAll('[data-seat]'));

    // Danh sách học sinh chưa được xếp
    let remainingStudents = [...students];
    utils.shuffleArray(remainingStudents);

    // Theo dõi học sinh đã được xếp
    const assignedStudents = new Set();

    // Phân loại học sinh theo giới tính và xếp hạng
    const studentsByGenderAndRating = {
        male: { A: [], B: [], C: [], D: [], E: [], F: [] },
        female: { A: [], B: [], C: [], D: [], E: [], F: [] }
    };
    remainingStudents.forEach(student => {
        const genderKey = student.gender === 'Nữ' ? 'female' : 'male';
        studentsByGenderAndRating[genderKey][student.rating].push(student);
    });

    // Tạo danh sách cặp học sinh
    const studentsByPair = {};
    const unpairedStudents = [];
    remainingStudents.forEach(student => {
        if (student.preferredPair) {
            if (!studentsByPair[student.preferredPair]) {
                studentsByPair[student.preferredPair] = [];
            }
            studentsByPair[student.preferredPair].push(student);
        } else {
            unpairedStudents.push(student);
        }
    });

    // Xác định ghế theo giới tính
    const femaleSeats = emptySeats.filter(seat => {
        const [group, table] = seat.dataset.seat.split('-');
        return ['group1', 'group4'].includes(group) && ['table1', 'table2', 'table3', 'table4', 'table5'].includes(table);
    });
    const maleSeats = emptySeats.filter(seat => {
        const [group, table] = seat.dataset.seat.split('-');
        return (['group1', 'group4'].includes(group) && table === 'table0') || ['group2', 'group3'].includes(group);
    });
    const restrictedSeats = emptySeats.filter(seat => {
        const [group, table] = seat.dataset.seat.split('-');
        return ['group1', 'group4'].includes(group) && ['table2', 'table3', 'table4', 'table5'].includes(table);
    });

    // Khởi tạo cấu trúc dữ liệu cho các nhóm và bàn
    const groups = ['group1', 'group2', 'group3', 'group4'];
    const tablesByGroup = {};
    groups.forEach(group => {
        tablesByGroup[group] = [];
        const tables = document.querySelectorAll(`#${group} .flex.gap-3`);
        tables.forEach(table => {
            const seats = Array.from(table.children).filter(seat => !seat.textContent);
            if (seats.length > 0) {
                tablesByGroup[group].push(seats);
            }
        });
        tablesByGroup[group].sort((a, b) => {
            const tableA = parseInt(a[0].dataset.seat.match(/table(\d+)/)[1]);
            const tableB = parseInt(b[0].dataset.seat.match(/table(\d+)/)[1]);
            return tableA - tableB;
        });
    });

    const assignedSeats = new Map();
    const ratingCountsPerGroup = { group1: {}, group2: {}, group3: {}, group4: {} };
    groups.forEach(group => {
        ['A', 'B', 'C', 'D', 'E', 'F'].forEach(rating => {
            ratingCountsPerGroup[group][rating] = 0;
        });
    });

    // Hàm kiểm tra bàn hợp lệ cho học sinh hoặc cặp học sinh
    const isValidTableForStudents = (table, students, genderCheck = true) => {
        const tableRatings = table.map(seat => {
            const seatStudent = students.find(s => s.name === seat.textContent);
            return seatStudent ? seatStudent.rating : null;
        });
        const tableGenders = table.map(seat => {
            const seatStudent = students.find(s => s.name === seat.textContent);
            return seatStudent ? seatStudent.gender : null;
        });
        return students.every(student => 
            !tableRatings.includes(student.rating) &&
            (!genderCheck || !tableGenders.includes(student.gender === 'Nữ' ? 'Nam' : 'Nữ'))
        );
    };

    // Hàm gán học sinh vào ghế
    const assignStudent = (student, seats, group, gender) => {
        if (assignedStudents.has(student.name)) return false;
        const rating = student.rating;
        const availableTables = seats.reduce((acc, seat) => {
            if (seat.textContent) return acc;
            const [seatGroup, table] = seat.dataset.seat.split('-');
            if (seatGroup !== group) return acc;
            let tableGroup = acc.find(t => t.table === table);
            if (!tableGroup) {
                tableGroup = { table, seats: [] };
                acc.push(tableGroup);
            }
            tableGroup.seats.push(seat);
            return acc;
        }, []).filter(t => t.seats.length > 0 && isValidTableForStudents(t.seats, [student], gender === 'Nữ'));

        if (availableTables.length > 0) {
            const table = availableTables[0];
            const seat = table.seats.shift();
            clearOtherSeats(student.name, seat);
            seat.textContent = student.name;
            seat.classList.add('seat-filled');
            assignedSeats.set(seat, student.name);
            assignedStudents.add(student.name);
            ratingCountsPerGroup[group][rating]++;
            updateStudentList(student.name);
            return true;
        }
        return false;
    };

    // Xếp cặp học sinh có cùng preferredPair
    utils.shuffleArray(Object.keys(studentsByPair));
    for (const pairId of Object.keys(studentsByPair)) {
        const pairStudents = studentsByPair[pairId];
        if (pairStudents.length < 2) {
            pairStudents.forEach(student => {
                if (!assignedStudents.has(student.name)) unpairedStudents.push(student);
            });
            continue;
        }

        const [student1, student2] = pairStudents.slice(0, 2);
        const isFemalePair = student1.gender === 'Nữ' && student2.gender === 'Nữ';
        const isMalePair = student1.gender === 'Nam' && student2.gender === 'Nam';
        const isMixedPair = !isFemalePair && !isMalePair;

        if (isMixedPair || assignedStudents.has(student1.name) || assignedStudents.has(student2.name)) {
            pairStudents.forEach(student => {
                if (!assignedStudents.has(student.name)) unpairedStudents.push(student);
            });
            continue;
        }

        const useRestrictedSeats = pairStudents.every(s => ['C', 'D', 'E', 'F'].includes(s.rating));
        const availableSeats = isFemalePair ? (useRestrictedSeats ? restrictedSeats : femaleSeats) : maleSeats;
        const availableGroups = isFemalePair ? ['group1', 'group4'] : ['group1', 'group2', 'group3', 'group4'];

        let assigned = false;
        utils.shuffleArray(availableGroups);
        for (const group of availableGroups) {
            const validTables = tablesByGroup[group].filter(table => 
                table.length >= 2 && isValidTableForStudents(table, [student1, student2], isFemalePair)
            );
            if (validTables.length > 0 && 
                (!isFemalePair || (group === 'group1' || group === 'group4')) &&
                (isFemalePair || (group !== 'group1' && group !== 'group4') || validTables[0][0].dataset.seat.includes('table0'))) {
                const table = validTables[0];
                const [seat1, seat2] = table.splice(0, 2);
                clearOtherSeats(student1.name, seat1);
                clearOtherSeats(student2.name, seat2);
                seat1.textContent = student1.name;
                seat1.classList.add('seat-filled');
                seat2.textContent = student2.name;
                seat2.classList.add('seat-filled');
                assignedSeats.set(seat1, student1.name);
                assignedSeats.set(seat2, student2.name);
                assignedStudents.add(student1.name);
                assignedStudents.add(student2.name);
                ratingCountsPerGroup[group][student1.rating]++;
                ratingCountsPerGroup[group][student2.rating]++;
                updateStudentList(student1.name);
                updateStudentList(student2.name);
                if (table.length === 0) {
                    tablesByGroup[group] = tablesByGroup[group].filter(t => t !== table);
                }
                assigned = true;
                break;
            }
        }

        if (!assigned) {
            pairStudents.forEach(student => {
                if (!assignedStudents.has(student.name)) unpairedStudents.push(student);
            });
        }
        pairStudents.slice(2).forEach(student => {
            if (!assignedStudents.has(student.name)) unpairedStudents.push(student);
        });
    }

    // Xếp học sinh theo thứ tự ưu tiên: CDEF nữ, AB nữ, AB nam, CDEF nam
    const priorities = [
        { gender: 'female', ratings: ['C', 'D', 'E', 'F'], seats: restrictedSeats, groups: ['group1', 'group4'] },
        { gender: 'female', ratings: ['A', 'B'], seats: femaleSeats, groups: ['group1', 'group4'] },
        { gender: 'male', ratings: ['A', 'B'], seats: maleSeats, groups: ['group1', 'group2', 'group3', 'group4'] },
        { gender: 'male', ratings: ['C', 'D', 'E', 'F'], seats: maleSeats, groups: ['group1', 'group2', 'group3', 'group4'] }
    ];

    for (const priority of priorities) {
        const { gender, ratings, seats, groups: allowedGroups } = priority;
        for (const rating of ratings) {
            const studentsToAssign = studentsByGenderAndRating[gender][rating].filter(
                student => !assignedStudents.has(student.name)
            );
            utils.shuffleArray(studentsToAssign);
            for (const student of studentsToAssign) {
                let assigned = false;
                utils.shuffleArray(allowedGroups);
                for (const group of allowedGroups) {
                    if ((group === 'group1' || group === 'group4') && 
                        gender === 'male' && 
                        rating in { A: 1, B: 1 } && 
                        !seats.some(seat => seat.dataset.seat.startsWith(group) && seat.dataset.seat.includes('table0'))) {
                        continue;
                    }
                    assigned = assignStudent(student, seats, group, gender === 'female' ? 'Nữ' : 'Nam');
                    if (assigned) break;
                }
                if (!assigned) {
                    const targetGroup = allowedGroups.reduce((minGroup, group) => 
                        ratingCountsPerGroup[group][rating] < ratingCountsPerGroup[minGroup][rating] ? group : minGroup,
                        allowedGroups[0]
                    );
                    assigned = assignStudent(student, seats, targetGroup, gender === 'female' ? 'Nữ' : 'Nam');
                    if (!assigned && !assignedStudents.has(student.name)) {
                        unpairedStudents.push(student);
                    }
                }
            }
        }
    }

    // Xếp các học sinh còn lại
    const remainingSeats = emptySeats.filter(seat => !seat.textContent);
    utils.shuffleArray(unpairedStudents);
    let warningMessage = '';
    const remainingFemale = unpairedStudents.filter(s => s.gender === 'Nữ' && !assignedStudents.has(s.name));
    const remainingMale = unpairedStudents.filter(s => s.gender === 'Nam' && !assignedStudents.has(s.name));

    remainingFemale.forEach(student => {
        const seat = remainingSeats.find(s => femaleSeats.includes(s) && !s.textContent);
        if (seat) {
            clearOtherSeats(student.name, seat);
            seat.textContent = student.name;
            seat.classList.add('seat-filled');
            assignedSeats.set(seat, student.name);
            assignedStudents.add(student.name);
            const [group] = seat.dataset.seat.split('-');
            ratingCountsPerGroup[group][student.rating]++;
            updateStudentList(student.name);
        } else {
            warningMessage = 'Không đủ ghế cho một số học sinh nữ!';
        }
    });

    remainingMale.forEach(student => {
        const seat = remainingSeats.find(s => maleSeats.includes(s) && !s.textContent);
        if (seat) {
            clearOtherSeats(student.name, seat);
            seat.textContent = student.name;
            seat.classList.add('seat-filled');
            assignedSeats.set(seat, student.name);
            assignedStudents.add(student.name);
            const [group] = seat.dataset.seat.split('-');
            ratingCountsPerGroup[group][student.rating]++;
            updateStudentList(student.name);
        } else {
            warningMessage = 'Không đủ ghế cho một số học sinh nam!';
        }
    });

    // Kiểm tra kết quả
    const totalAssigned = assignedStudents.size;
    const totalSeats = emptySeats.length;
    const emptySeatCount = emptySeats.filter(seat => !seat.textContent).length;
    if (totalAssigned < students.length) {
        warningMessage = `Chỉ xếp được ${totalAssigned} học sinh, còn ${students.length - totalAssigned} học sinh chưa có chỗ!`;
    } else if (emptySeatCount !== 1) {
        warningMessage = `Đã xếp ${totalAssigned} học sinh, nhưng còn ${emptySeatCount} ghế trống thay vì 1!`;
    }

    utils.saveState();
    utils.showToast(warningMessage || 'Đã xếp ngẫu nhiên chỗ ngồi, đảm bảo cặp preferredPair ngồi cùng bàn!', !!warningMessage);
});

// Sự kiện đặt lại sơ đồ
els.resetBtn.addEventListener('click', () => {
    initStudentList();
    initSeatingChart();
    els.searchInput.value = '';
    state.history = [];
    state.historyIndex = -1;
    localStorage.removeItem('seatingChart');
    els.undoBtn.disabled = true;
    els.redoBtn.disabled = true;
    utils.showToast('Đã đặt lại sơ đồ!');
});

// Sự kiện undo
els.undoBtn.addEventListener('click', () => {
    if (state.historyIndex > 0) {
        utils.loadState(state.historyIndex - 1);
        utils.showToast('Đã hoàn tác!');
    }
});

// Sự kiện redo
els.redoBtn.addEventListener('click', () => {
    if (state.historyIndex < state.history.length - 1) {
        utils.loadState(state.historyIndex + 1);
        utils.showToast('Đã làm lại!');
    }
});

// Sự kiện lưu cấu hình
els.saveBtn.addEventListener('click', saveConfiguration);

// Toggle modal xuất file
function toggleModal(show) {
    els.exportModal.classList.toggle('show', show);
    if (!show) {
        els.previewContainer.style.display = 'none';
        els.previewImage.src = '';
        els.exportTitle.value = 'Sơ đồ lớp học - Lớp 12A1';
        els.previewBtn.disabled = false;
        els.confirmExportBtn.disabled = false;
    }
}

// Sự kiện xuất file
els.exportBtn.addEventListener('click', () => {
    toggleModal(true);
});

// Sự kiện hủy xuất
els.cancelExportBtn.addEventListener('click', () => {
    toggleModal(false);
});

// Sự kiện xem trước
els.previewBtn.addEventListener('click', () => {
    const title = els.exportTitle.value.trim() || 'Sơ đồ lớp học - Lớp 12A1';
    utils.setLoading(els.previewBtn, true);
    generateCanvas(title, (newCanvas) => {
        utils.setLoading(els.previewBtn, false);
        if (newCanvas) {
            els.previewImage.src = newCanvas.toDataURL('image/png');
            els.previewContainer.style.display = 'block';
        } else {
            els.previewContainer.style.display = 'none';
        }
    });
});

// Sự kiện xác nhận xuất PDF/PNG
els.confirmExportBtn.addEventListener('click', () => {
    const title = els.exportTitle.value.trim() || 'Sơ đồ lớp học - Lớp 12A1';
    const format = document.querySelector('input[name="exportFormat"]:checked')?.value || 'png';
    utils.setLoading(els.confirmExportBtn, true);

    generateCanvas(title, (newCanvas) => {
        if (!newCanvas) {
            utils.setLoading(els.confirmExportBtn, false);
            utils.showToast('Không thể tạo sơ đồ. Thử lại hoặc kiểm tra console.', true);
            return;
        }

        const date = new Date().toLocaleString('vi-VN');
        const fileName = `so-do-lop-hoc-${date.replace(/[\W]+/g, '-')}`;

        try {
            if (format === 'pdf') {
                const { jsPDF } = window.jspdf;
                if (!jsPDF) {
                    throw new Error('jsPDF chưa load');
                }
                const pdfWidth = 210; // A4 width in mm
                const pdfHeight = 297; // A4 height in mm
                const imgWidth = pdfWidth - 20;
                const imgHeight = (newCanvas.height / newCanvas.width) * imgWidth;
                let pdf = new jsPDF({
                    orientation: newCanvas.width > newCanvas.height ? 'landscape' : 'portrait',
                    unit: 'mm',
                    format: 'a4'
                });
                const imgData = newCanvas.toDataURL('image/png', 0.95);
                pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
                pdf.save(`${fileName}.pdf`);
                utils.showToast('Đã xuất PDF sơ đồ lớp học!');
            } else {
                const link = document.createElement('a');
                link.download = `${fileName}.png`;
                link.href = newCanvas.toDataURL('image/png', 0.95);
                link.click();
                utils.showToast('Đã xuất ảnh sơ đồ lớp học dưới dạng PNG!');
            }
        } catch (err) {
            console.error('Export error:', err);
            utils.showToast(`Lỗi xuất file: ${err.message}. Kiểm tra thư viện jsPDF/html2canvas.`, true);
        }

        utils.setLoading(els.confirmExportBtn, false);
        toggleModal(false);
    });
});

// Sự kiện kéo thả học sinh từ danh sách
els.studentList.addEventListener('dragover', (e) => e.preventDefault());
els.studentList.addEventListener('drop', (e) => {
    e.preventDefault();
    const studentName = e.dataTransfer.getData('text/plain');
    const source = e.dataTransfer.getData('source');
    if (source === 'seat' && !Array.from(els.studentList.children).some(div => div.textContent === studentName)) {
        const student = students.find(s => s.name === studentName);
        if (student) {
            const studentDiv = utils.createElement('div', 'student-card', student.name, { draggable: true, 'data-id': student.id });
            studentDiv.innerHTML = `
                <span class="font-bold">${student.name}</span>
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            `;
            studentDiv.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', student.name);
                e.dataTransfer.setData('source', 'studentList');
                studentDiv.classList.add('drag-over');
            });
            studentDiv.addEventListener('dragend', () => studentDiv.classList.remove('drag-over'));
            els.studentList.appendChild(studentDiv);
            clearOtherSeats(studentName, null);
            utils.saveState();
        }
    }
});

// Khôi phục cấu hình đã lưu
const savedConfig = localStorage.getItem('seatingChart');
if (savedConfig) {
    try {
        const seatingData = JSON.parse(savedConfig);
        initStudentList();
        initSeatingChart();
        document.querySelectorAll('[data-seat]').forEach(seat => {
            seat.textContent = seatingData[seat.dataset.seat] || '';
            seat.classList.toggle('seat-filled', !!seat.textContent);
            if (seat.textContent) {
                updateStudentList(seat.textContent);
            }
        });
        utils.saveState();
    } catch (err) {
        console.error('Lỗi khôi phục cấu hình:', err);
        utils.showToast('Lỗi khôi phục cấu hình từ localStorage.', true);
        initStudentList();
        initSeatingChart();
    }
} else {
    initStudentList();
    initSeatingChart();
}
