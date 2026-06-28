let currentUser = null;
let layoutBuilt = false;

const WAITING = 'รอผล...';
const initialMatches = {
    left: [
        { key:'m-1', id:1, stage:'R32', t1:'บราซิล', t2:'อังกฤษ' },
        { key:'m-2', id:2, stage:'R32', t1:'ฝรั่งเศส', t2:'อาร์เจนตินา' },
        { key:'m-3', id:3, stage:'R32', t1:'สเปน', t2:'เยอรมนี' },
        { key:'m-4', id:4, stage:'R32', t1:'โปรตุเกส', t2:'อิตาลี' },
        { key:'m-5', id:5, stage:'R32', t1:'เนเธอร์แลนด์', t2:'โครเอเชีย' },
        { key:'m-6', id:6, stage:'R32', t1:'เบลเยียม', t2:'โมร็อกโก' },
        { key:'m-7', id:7, stage:'R32', t1:'ญี่ปุ่น', t2:'เกาหลีใต้' },
        { key:'m-8', id:8, stage:'R32', t1:'อุรุกวัย', t2:'เซเนกัล' }
    ],
    right: [
        { key:'m-9', id:9, stage:'R32', t1:'สหรัฐอเมริกา', t2:'เม็กซิโก' },
        { key:'m-10', id:10, stage:'R32', t1:'สวิตเซอร์แลนด์', t2:'เดนมาร์ก' },
        { key:'m-11', id:11, stage:'R32', t1:'ออสเตรเลีย', t2:'ซาอุดีอาระเบีย' },
        { key:'m-12', id:12, stage:'R32', t1:'แคนาดา', t2:'เอกวาดอร์' },
        { key:'m-13', id:13, stage:'R32', t1:'ตูนิเซีย', t2:'โปแลนด์' },
        { key:'m-14', id:14, stage:'R32', t1:'ยูเครน', t2:'เวลส์' },
        { key:'m-15', id:15, stage:'R32', t1:'สวีเดน', t2:'ออสเตรีย' },
        { key:'m-16', id:16, stage:'R32', t1:'กานา', t2:'แคเมอรูน' }
    ]
};

const dynamicMatches = [
    ...Array.from({length:4}, (_,i)=>({ key:`left-r16-${i+1}`, stage:'R16', label:'รอบ 16 ทีมสุดท้าย', side:'left' })),
    ...Array.from({length:2}, (_,i)=>({ key:`left-r8-${i+1}`, stage:'R8', label:'รอบ 8 ทีมสุดท้าย', side:'left' })),
    { key:'left-r4-1', stage:'R4', label:'รอบ 4 ทีมสุดท้าย', side:'left' },
    { key:'final', stage:'FINAL', label:'🏆 นัดชิงชนะเลิศ', side:'center' },
    { key:'third', stage:'THIRD', label:'🥉 นัดชิงอันดับที่ 3', side:'center' },
    { key:'right-r4-1', stage:'R4', label:'รอบ 4 ทีมสุดท้าย', side:'right' },
    ...Array.from({length:2}, (_,i)=>({ key:`right-r8-${i+1}`, stage:'R8', label:'รอบ 8 ทีมสุดท้าย', side:'right' })),
    ...Array.from({length:4}, (_,i)=>({ key:`right-r16-${i+1}`, stage:'R16', label:'รอบ 16 ทีมสุดท้าย', side:'right' }))
];

function $(id){ return document.getElementById(id); }
function val(id){ return $(id)?.value ?? ''; }
function txt(id){ return $(id)?.innerText ?? WAITING; }
function setTxt(id,value){ if($(id)) $(id).innerText = value || WAITING; }
function checkDeadline(){ return new Date() <= new Date(PREDICTION_DEADLINE); }


function maskName(name){
    if (!name) return '';
    const firstName = String(name).trim().split(/\s+/)[0];
    if (!firstName) return '';
    if (firstName.length <= 4) return firstName + '**';
    return firstName.substring(0, 4) + '****';
}


function startCountdown(){
    if(!$('cd-days')) return;
    const deadline = new Date(PREDICTION_DEADLINE).getTime();
    function tick(){
        let diff = Math.max(0, deadline - Date.now());
        const days = Math.floor(diff / 86400000); diff -= days * 86400000;
        const hours = Math.floor(diff / 3600000); diff -= hours * 3600000;
        const minutes = Math.floor(diff / 60000); diff -= minutes * 60000;
        const seconds = Math.floor(diff / 1000);
        $('cd-days').innerText = String(days).padStart(2,'0');
        $('cd-hours').innerText = String(hours).padStart(2,'0');
        $('cd-minutes').innerText = String(minutes).padStart(2,'0');
        $('cd-seconds').innerText = String(seconds).padStart(2,'0');
    }
    tick();
    setInterval(tick, 1000);
}

function applyBranding(){
    if($('siteNameText')) $('siteNameText').innerText = typeof SITE_NAME !== 'undefined' ? SITE_NAME : 'Miracle55';
    if($('eventNameText')) $('eventNameText').innerText = typeof EVENT_NAME !== 'undefined' ? EVENT_NAME : 'FIFA WORLD CUP 2026';
}

function createMatchBlock(match){
    const isR32 = match.stage === 'R32';
    const title = isR32 ? `คู่ที่ ${match.id}` : match.label;
    const borderColor = match.key === 'final' ? '#f59e0b' : match.key === 'third' ? '#94a3b8' : 'rgba(148,163,184,.18)';
    return `
        <div class="match-block" style="border-color:${borderColor}" data-match-key="${match.key}" data-stage="${match.stage}">
            <div class="stage-label">${title}</div>
            <div class="team-row">
                <span class="team-name" id="${match.key}-t1">${match.t1 || WAITING}</span>
                <input type="number" id="score-${match.key}-a" class="score-input" min="0" oninput="calculateFlow()">
            </div>
            <div class="team-row">
                <span class="team-name" id="${match.key}-t2">${match.t2 || WAITING}</span>
                <input type="number" id="score-${match.key}-b" class="score-input" min="0" oninput="calculateFlow()">
            </div>
            <div class="tie-box" id="tie-${match.key}">
                <label>กรณีเสมอ เลือกทีมเข้ารอบ/ชนะจุดโทษ</label>
                <select id="winner-${match.key}" onchange="calculateFlow()">
                    <option value="">เลือกทีมเข้ารอบ</option>
                </select>
            </div>
            ${match.key === 'final' ? '<div id="champ-display" style="text-align:center;font-size:14px;color:#22c55e;font-weight:bold;margin-top:5px;">แชมป์โลก: ??</div>' : ''}
        </div>`;
}

function initLayout(){
    if(layoutBuilt) return;
    $('col-r32-left').innerHTML = initialMatches.left.map(createMatchBlock).join('');
    $('col-r32-right').innerHTML = initialMatches.right.map(createMatchBlock).join('');
    $('col-r16-left').innerHTML = dynamicMatches.filter(m=>m.key.startsWith('left-r16')).map(createMatchBlock).join('');
    $('col-r8-left').innerHTML = dynamicMatches.filter(m=>m.key.startsWith('left-r8')).map(createMatchBlock).join('');
    $('col-r4-left').innerHTML = createMatchBlock(dynamicMatches.find(m=>m.key==='left-r4-1'));
    $('finalBlock').innerHTML = createMatchBlock(dynamicMatches.find(m=>m.key==='final'));
    $('thirdBlock').innerHTML = createMatchBlock(dynamicMatches.find(m=>m.key==='third'));
    $('col-r4-right').innerHTML = createMatchBlock(dynamicMatches.find(m=>m.key==='right-r4-1'));
    $('col-r8-right').innerHTML = dynamicMatches.filter(m=>m.key.startsWith('right-r8')).map(createMatchBlock).join('');
    $('col-r16-right').innerHTML = dynamicMatches.filter(m=>m.key.startsWith('right-r16')).map(createMatchBlock).join('');
    layoutBuilt = true;
}

function updateTieSelect(matchKey,t1,t2,s1,s2){
    const box = $(`tie-${matchKey}`);
    const select = $(`winner-${matchKey}`);
    if(!box || !select) return;
    const ready = s1 !== '' && s2 !== '' && String(s1) === String(s2) && t1 !== WAITING && t2 !== WAITING;
    box.style.display = ready ? 'block' : 'none';
    if(ready){
        const old = select.value;
        select.innerHTML = `<option value="">เลือกทีมเข้ารอบ</option><option value="${t1}">${t1}</option><option value="${t2}">${t2}</option>`;
        if([t1,t2].includes(old)) select.value = old;
    }else{
        select.value = '';
    }
}

function getWinnerLoser(matchKey){
    const t1 = txt(`${matchKey}-t1`), t2 = txt(`${matchKey}-t2`);
    const s1 = val(`score-${matchKey}-a`), s2 = val(`score-${matchKey}-b`);
    updateTieSelect(matchKey,t1,t2,s1,s2);
    if(s1 === '' || s2 === '' || t1 === WAITING || t2 === WAITING) return {w:WAITING,l:WAITING};
    const n1 = parseInt(s1,10), n2 = parseInt(s2,10);
    if(n1 > n2) return {w:t1,l:t2};
    if(n2 > n1) return {w:t2,l:t1};
    const chosen = val(`winner-${matchKey}`);
    if(!chosen) return {w:WAITING,l:WAITING};
    return {w:chosen,l: chosen === t1 ? t2 : t1};
}

function calculateFlow(){
    for(let i=1;i<=4;i++){
        const a = getWinnerLoser(`m-${(i*2)-1}`);
        const b = getWinnerLoser(`m-${i*2}`);
        setTxt(`left-r16-${i}-t1`,a.w); setTxt(`left-r16-${i}-t2`,b.w);
    }
    for(let i=1;i<=2;i++){
        const a = getWinnerLoser(`left-r16-${(i*2)-1}`);
        const b = getWinnerLoser(`left-r16-${i*2}`);
        setTxt(`left-r8-${i}-t1`,a.w); setTxt(`left-r8-${i}-t2`,b.w);
    }
    const l8a = getWinnerLoser('left-r8-1');
    const l8b = getWinnerLoser('left-r8-2');
    setTxt('left-r4-1-t1',l8a.w); setTxt('left-r4-1-t2',l8b.w);
    const l4 = getWinnerLoser('left-r4-1');
    setTxt('final-t1',l4.w); setTxt('third-t1',l4.l);

    for(let i=1;i<=4;i++){
        const a = getWinnerLoser(`m-${(i*2)+7}`);
        const b = getWinnerLoser(`m-${(i*2)+8}`);
        setTxt(`right-r16-${i}-t1`,a.w); setTxt(`right-r16-${i}-t2`,b.w);
    }
    for(let i=1;i<=2;i++){
        const a = getWinnerLoser(`right-r16-${(i*2)-1}`);
        const b = getWinnerLoser(`right-r16-${i*2}`);
        setTxt(`right-r8-${i}-t1`,a.w); setTxt(`right-r8-${i}-t2`,b.w);
    }
    const r8a = getWinnerLoser('right-r8-1');
    const r8b = getWinnerLoser('right-r8-2');
    setTxt('right-r4-1-t1',r8a.w); setTxt('right-r4-1-t2',r8b.w);
    const r4 = getWinnerLoser('right-r4-1');
    setTxt('final-t2',r4.w); setTxt('third-t2',r4.l);

    const finalMatch = getWinnerLoser('final');
    if($('champ-display')) $('champ-display').innerText = `แชมป์โลก: ${finalMatch.w}`;
    getWinnerLoser('third');
}

async function checkAndLoginUser(){
    const username = $('username').value.trim();
    const fullName = $('fullName').value.trim();
    if(!username) return alert('กรุณากรอก Username ครับ');

    let { data:user, error } = await supabaseClient.from('users').select('*').eq('username',username).maybeSingle();
    if(error) return alert('โหลดข้อมูลผู้เล่นไม่สำเร็จ: ' + error.message);

    if(!user){
        if(!fullName) return alert('กรุณากรอกชื่อ-นามสกุลจริงก่อนสมัครครับ');
        const { data:newUser, error:createError } = await supabaseClient
            .from('users').insert([{ username, full_name: fullName, total_points:0 }]).select().single();
        if(createError) return alert('สมัครผู้เล่นไม่สำเร็จ: ' + createError.message);
        user = newUser;
    }

    currentUser = user;
    initLayout();
    $('loginSection').style.display = 'none';
    $('loginStatus').style.display = 'block';
    $('loginStatus').innerText = `👋 ผู้เล่น: ${user.username} เริ่มทายสกอร์ได้เลย!`;
    $('topScorerCard').style.display = 'block';
    $('bracketSection').style.display = 'flex';
}

function collectPredictionRows(){
    calculateFlow();
    const topScorer = $('top-scorer-guess').value.trim();
    const allKeys = [...initialMatches.left,...initialMatches.right].map(m=>({key:m.key,stage:m.stage,match_id:m.id}))
        .concat(dynamicMatches.map(m=>({key:m.key,stage:m.stage,match_id:null})));

    const rows = [];
    for(const m of allKeys){
        const t1 = txt(`${m.key}-t1`), t2 = txt(`${m.key}-t2`);
        const a = val(`score-${m.key}-a`), b = val(`score-${m.key}-b`);
        if(a === '' || b === '' || t1 === WAITING || t2 === WAITING) continue;
        const result = getWinnerLoser(m.key);
        if(result.w === WAITING) continue;
        rows.push({
            user_id: currentUser.id,
            match_id: m.match_id,
            match_key: m.key,
            stage: m.stage,
            team_a: t1,
            team_b: t2,
            pred_a: parseInt(a,10),
            pred_b: parseInt(b,10),
            predicted_winner: result.w,
            top_scorer_guess: topScorer,
            updated_at: new Date().toISOString()
        });
    }
    return rows;
}

async function savePredictions(){
    if(!checkDeadline()) return alert('ปิดรับทายผลแล้วครับ เดดไลน์คือวันที่ 28 มิ.ย. 2026 เวลา 23:59 น.');
    if(!currentUser) return alert('กรุณาเข้าสู่ระบบก่อนครับ');
    const rows = collectPredictionRows();
    if(rows.length === 0) return alert('กรุณากรอกสกอร์อย่างน้อย 1 คู่ และถ้าเสมอต้องเลือกทีมเข้ารอบด้วยครับ');

    const { error } = await supabaseClient.from('predictions').upsert(rows,{ onConflict:'user_id,match_key' });
    if(error) return alert('บันทึกข้อมูลไม่สำเร็จ: ' + error.message);
    alert(`🎉 บันทึกผลทายเรียบร้อยแล้วทั้งหมด ${rows.length} รายการ`);
}

function medalForRank(rank){
    if(rank === 1) return '🥇';
    if(rank === 2) return '🥈';
    if(rank === 3) return '🥉';
    if(rank <= 10) return '🎁';
    return '';
}


function renderPodium(data){
    const top = (data || []).slice(0, 3);
    if (!top.length) return '';
    const card = (u, rank) => {
        const medal = medalForRank(rank);
        const masked = maskName(u.full_name);
        return `<div class="podium-card podium-${rank}">
            <div class="podium-medal">${medal}</div>
            <div class="podium-rank">อันดับ ${rank}</div>
            <div class="podium-user">${u.username || '-'}</div>
            <div class="podium-name">${masked || 'ไม่แสดงชื่อ'}</div>
            <div class="podium-score">${u.total_points || 0} คะแนน</div>
        </div>`;
    };
    const first = top[0] ? card(top[0], 1) : '';
    const second = top[1] ? card(top[1], 2) : '';
    const third = top[2] ? card(top[2], 3) : '';
    return `<div class="podium-wrap">${second}${first}${third}</div>`;
}

function renderHallOfFame(data){
    const champ = (data || [])[0];
    if (!champ) return '';
    return `<div class="hall-card">
        <div class="hall-title">🏆 Hall of Fame Preview</div>
        <div class="hall-body">ผู้นำปัจจุบัน: <strong>${champ.username || '-'}</strong> <span>(${maskName(champ.full_name) || 'ไม่แสดงชื่อ'})</span> — ${champ.total_points || 0} คะแนน</div>
    </div>`;
}

function renderLeaderboard(data,targetId){
    const rows = (data || []).slice(0,20).map((u,i)=>{
        const rank = i + 1;
        const cls = rank <= 10 ? `rank-row rank-${rank}` : '';
        const prize = rank <= 10 ? `<span class="prize-chip">${medalForRank(rank)} Prize Zone</span>` : '';
        const badge = `<span class="rank-badge">${rank}</span>`;
        const username = u.username || '-';
        const masked = maskName(u.full_name);
        return `<tr class="${cls}">
            <td>${badge}</td>
            <td><strong>${username}</strong>${masked ? `<span class="masked-name">(${masked})</span>` : ''} ${prize}</td>
            <td>${u.total_points || 0}</td>
        </tr>`;
    }).join('');
    $(targetId).innerHTML = `
      ${renderPodium(data)}
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>อันดับ</th><th>Username / ชื่อย่อ</th><th>คะแนน</th></tr></thead>
          <tbody>${rows || '<tr><td colspan="3">ยังไม่มีข้อมูลคะแนน</td></tr>'}</tbody>
        </table>
      </div>
      ${renderHallOfFame(data)}`;
}

async function loadLeaderboard(targetId='leaderboardContent', showCard=true){
    const { data,error } = await supabaseClient
        .from('users').select('username, full_name, total_points').order('total_points',{ ascending:false }).limit(20);
    if(error) return alert('โหลดตารางคะแนนไม่สำเร็จ: ' + error.message);
    if(showCard && $('leaderboardCard')) $('leaderboardCard').style.display = 'block';
    renderLeaderboard(data,targetId);
}

async function loadAdminSummary(){
    if(!$('sumPlayers')) return;
    const [{ count:players }, { count:predictions }, { data:matches }] = await Promise.all([
        supabaseClient.from('users').select('*',{ count:'exact', head:true }),
        supabaseClient.from('predictions').select('*',{ count:'exact', head:true }),
        supabaseClient.from('matches').select('is_finished')
    ]);
    const total = (matches || []).length;
    const finished = (matches || []).filter(m=>m.is_finished).length;
    $('sumPlayers').innerText = players ?? 0;
    $('sumPredictions').innerText = predictions ?? 0;
    $('sumFinished').innerText = finished;
    $('sumWaiting').innerText = Math.max(0,total-finished);
}


async function loadPublicStats(){
    if (!$('statPlayers')) return;
    try {
        const [{ count:players }, { count:predictions }, { data:matches }] = await Promise.all([
            supabaseClient.from('users').select('*',{ count:'exact', head:true }),
            supabaseClient.from('predictions').select('*',{ count:'exact', head:true }),
            supabaseClient.from('matches').select('is_finished')
        ]);
        const finished = (matches || []).filter(m=>m.is_finished).length;
        $('statPlayers').innerText = players ?? 0;
        $('statPredictions').innerText = predictions ?? 0;
        $('statFinished').innerText = finished;
        $('statPrize').innerText = '100,000';
    } catch (e) {
        console.warn('loadPublicStats error', e);
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    applyBranding();
    startCountdown();
    loadPublicStats();
});
