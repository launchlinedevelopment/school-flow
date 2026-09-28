const DAY_LETTERS = ['A','B','C','D','E','F','G'];
const ANCHOR = new Date('2026-09-28T12:00:00');
const SCHOOL_START = new Date('2026-09-08T12:00:00');
const SCHOOL_END = new Date('2027-06-23T12:00:00');

const markingPeriods = [
  {name:'Q1',start:'2026-09-08',end:'2026-11-13'},
  {name:'Q2',start:'2026-11-16',end:'2027-01-29'},
  {name:'Q3',start:'2027-02-01',end:'2027-04-14'},
  {name:'Q4',start:'2027-04-15',end:'2027-06-23'}
];

const closedDates = new Set([
  '2026-09-21','2026-11-05','2026-11-06','2026-11-11','2026-11-26','2026-11-27',
  '2027-01-18','2027-02-15','2027-04-22','2027-04-23','2027-05-31'
]);
addRange('2026-12-24','2027-01-03');
addRange('2027-03-26','2027-04-04');

const specialDays = {
  '2026-09-17':'Back to School Night — Early dismissal',
  '2026-10-12':'Early dismissal / Professional Development',
  '2026-10-22':'PSAT — Early dismissal',
  '2026-11-19':'Parent/Teacher Conference Night',
  '2026-11-20':'Early dismissal',
  '2026-11-25':'Thanksgiving recess — Early dismissal',
  '2026-12-03':'Early dismissal / Professional Development',
  '2026-12-23':'Winter recess — Early dismissal',
  '2027-02-12':'Early dismissal / Professional Development',
  '2027-03-10':'NJGPA — Early dismissal',
  '2027-03-11':'NJGPA — Early dismissal',
  '2027-03-12':'NJGPA — Early dismissal',
  '2027-03-25':'Spring recess — Early dismissal',
  '2027-04-09':'CNHS — Early dismissal',
  '2027-05-28':'Memorial Day recess — Early dismissal',
  '2027-06-21':'Finals — Early dismissal',
  '2027-06-22':'Finals — Early dismissal',
  '2027-06-23':'Finals — Last day'
};

const times = [
  ['Block 1','8:24','9:31'],['Block 2','9:36','10:43'],['Block 3','10:48','11:55'],['Block 4','12:41','1:48'],['Block 5','1:53','3:00']
];

const baseSchedule = {
  A:['AP Economics','Precalculus','AP English Language & Comp','Video Editing & Media Prod 2','PE / Health 12'],
  B:['Honors Anatomy & Physiology','AP Economics','Precalculus','Leadership in Action','Video Editing & Media Prod 2'],
  C:['AP English Language & Comp','Honors Anatomy & Physiology','AP Economics','PE / Health 12','Leadership in Action'],
  D:['Precalculus','AP English Language & Comp','Honors Anatomy & Physiology','Video Editing & Media Prod 2','PE / Health 12'],
  E:['AP Economics','Precalculus','AP English Language & Comp','Leadership in Action','Video Editing & Media Prod 2'],
  F:['Honors Anatomy & Physiology','AP Economics','Precalculus','PE / Health 12','Leadership in Action'],
  G:['AP English Language & Comp','Honors Anatomy & Physiology','Leadership in Action','Video Editing & Media Prod 2','PE / Health 12']
};

const rooms = {
  'AP Economics':'A128',
  'Precalculus':'A225',
  'AP English Language & Comp':'A131',
  'Honors Anatomy & Physiology':'A229',
  'Leadership in Action':'A133',
  'Video Editing & Media Prod 2':'A109',
  'PE / Health 12':'GYM / C101'
};

const teachers = {
  'AP Economics':'Jobson',
  'Precalculus':'Eklof',
  'AP English Language & Comp':'Merry',
  'Honors Anatomy & Physiology':'Santonacita',
  'Leadership in Action':'Krieger-Lundquist',
  'Video Editing & Media Prod 2':'Gadaleta',
  'PE / Health 12':'Broder'
};

let selectedDate = startOfDay(new Date());
let weekStart = startOfWeek(selectedDate);
let calendarMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
let items = loadItems();
let classNotes = loadClassNotes();
let activeNotesCourse = null;

const views = {
  today:document.querySelector('#todayView'),
  week:document.querySelector('#weekView'),
  calendar:document.querySelector('#calendarView'),
  schedule:document.querySelector('#scheduleView')
};
const dialog = document.querySelector('#itemDialog');
const form = document.querySelector('#itemForm');
const classSelect = document.querySelector('#itemClass');
const classNotesDialog = document.querySelector('#classNotesDialog');
const classNotesTitle = document.querySelector('#classNotesTitle');
const classNotesMeta = document.querySelector('#classNotesMeta');
const classNotesText = document.querySelector('#classNotesText');

[...new Set(Object.values(baseSchedule).flat())].sort().forEach(c=>{
  classSelect.insertAdjacentHTML('beforeend', `<option>${c}</option>`);
});

document.querySelectorAll('.nav-item').forEach(btn=>btn.addEventListener('click',()=>switchView(btn.dataset.view,btn)));
document.querySelector('#todayBtn').addEventListener('click',()=>{
  selectedDate=startOfDay(new Date());
  weekStart=startOfWeek(selectedDate);
  calendarMonth=new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1);
  renderAll();
  switchView('today');
});
document.querySelector('#newItemBtn').addEventListener('click',()=>openDialog(selectedDate));
document.querySelector('#saveItemBtn').addEventListener('click',(e)=>{e.preventDefault();saveItem();});
document.querySelector('#saveClassNotesBtn').addEventListener('click',(e)=>{e.preventDefault();saveClassNotes();});

function switchView(name,btn){
  Object.values(views).forEach(v=>v.classList.remove('active'));
  views[name].classList.add('active');
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));
  (btn||document.querySelector(`[data-view="${name}"]`)).classList.add('active');
}
function addRange(start,end){
  let d=new Date(start+'T12:00:00'), last=new Date(end+'T12:00:00');
  while(d<=last){closedDates.add(key(d));d=addDays(d,1)}
}
function key(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function startOfDay(d){return new Date(d.getFullYear(),d.getMonth(),d.getDate(),12)}
function addDays(d,n){const x=new Date(d);x.setDate(x.getDate()+n);return x}
function startOfWeek(d){const x=startOfDay(d);x.setDate(x.getDate()-x.getDay());return x}
function isWeekend(d){return d.getDay()===0||d.getDay()===6}
function isSchoolDate(d){return d>=SCHOOL_START&&d<=SCHOOL_END&&!isWeekend(d)&&!closedDates.has(key(d))}
function periodFor(d){const k=key(d);return markingPeriods.find(q=>k>=q.start&&k<=q.end)?.name||''}
function getDayLetter(date){
  if(!isSchoolDate(date)) return null;
  let delta=0;
  if(date>=ANCHOR){
    for(let d=new Date(ANCHOR); d<date; d=addDays(d,1)) if(isSchoolDate(addDays(d,1))) delta++;
  } else {
    for(let d=addDays(ANCHOR,-1); d>=date; d=addDays(d,-1)) if(isSchoolDate(d)) delta--;
  }
  return DAY_LETTERS[(6+delta%7+7)%7];
}
function classDisplay(name,date){
  if(name==='AP Economics') return date>=new Date('2027-02-01T12:00:00')?'AP Macroeconomics':'AP Microeconomics';
  if(name==='PE / Health 12') return periodFor(date)==='Q2'?'Health 12':'Physical Ed 12';
  return name;
}
function roomDisplay(name,date){
  if(name==='PE / Health 12') return periodFor(date)==='Q2'?'C101':'GYM';
  return rooms[name];
}
function niceDate(d,opts={weekday:'long',month:'long',day:'numeric'}){return new Intl.DateTimeFormat('en-US',opts).format(d)}
function isSameDay(a,b){return key(a)===key(b)}
function getItemsFor(d){return items.filter(i=>i.date===key(d)).sort((a,b)=>(a.time||'99:99').localeCompare(b.time||'99:99'))}
function loadItems(){try{return JSON.parse(localStorage.getItem('schoolFlowItems')||'[]')}catch{return[]}}
function persist(){localStorage.setItem('schoolFlowItems',JSON.stringify(items))}
function loadClassNotes(){try{return JSON.parse(localStorage.getItem('schoolFlowClassNotes')||'{}')}catch{return{}}}
function persistClassNotes(){localStorage.setItem('schoolFlowClassNotes',JSON.stringify(classNotes))}
function openClassNotes(course,date=selectedDate){
  activeNotesCourse=course;
  classNotesTitle.textContent=classDisplay(course,date);
  classNotesMeta.textContent=`${teachers[course]||''}${roomDisplay(course,date)?` · Room ${roomDisplay(course,date)}`:''}`;
  classNotesText.value=classNotes[course]||'';
  classNotesDialog.showModal();
  setTimeout(()=>classNotesText.focus(),60);
}
function saveClassNotes(){
  if(!activeNotesCourse)return;
  const text=classNotesText.value.trim();
  if(text) classNotes[activeNotesCourse]=text;
  else delete classNotes[activeNotesCourse];
  persistClassNotes();
  classNotesDialog.close();
  renderAll();
}
function notePreview(course){
  const note=(classNotes[course]||'').trim();
  if(!note)return '';
  const clean=esc(note.replace(/\s+/g,' '));
  return `<div class="class-note-preview">📝 ${clean.length>90?clean.slice(0,90)+'…':clean}</div>`;
}
function openDialog(date){
  form.reset();
  document.querySelector('#itemDate').value=key(date);
  dialog.showModal();
  setTimeout(()=>document.querySelector('#itemTitle').focus(),60);
}
function saveItem(){
  const title=document.querySelector('#itemTitle').value.trim();
  if(!title)return;
  items.push({
    id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),
    title,
    date:document.querySelector('#itemDate').value,
    time:document.querySelector('#itemTime').value,
    type:document.querySelector('#itemType').value,
    priority:document.querySelector('#itemPriority').value,
    className:document.querySelector('#itemClass').value,
    notes:document.querySelector('#itemNotes').value.trim(),
    done:false
  });
  persist();
  dialog.close();
  renderAll();
}
function toggleItem(id){const i=items.find(x=>x.id===id);if(i)i.done=!i.done;persist();renderAll()}
function deleteItem(id){items=items.filter(x=>x.id!==id);persist();renderAll()}

function minutesFromTime(t){
  const [h,m]=t.split(':').map(Number);
  return h*60+m;
}
function currentSchoolStatus(now=new Date()){
  const d=startOfDay(now), letter=getDayLetter(d);
  if(!letter) return {kind:isWeekend(d)?'weekend':'closed',title:isWeekend(d)?'Weekend':'No school today',detail:isWeekend(d)?'No classes — use the planner for your weekend schedule.':'The A–G rotation does not advance today.'};

  const mins=now.getHours()*60+now.getMinutes()+now.getSeconds()/60;
  const blocks=times.map((t,i)=>({
    i,
    start:minutesFromTime(t[1]),
    end:minutesFromTime(t[2]),
    course:baseSchedule[letter][i]
  }));

  for(const b of blocks){
    if(mins>=b.start && mins<b.end){
      const secondsLeft=Math.max(0,Math.ceil((b.end-mins)*60));
      return {
        kind:'class',
        title:classDisplay(b.course,d),
        detail:`${times[b.i][0]} · Room ${roomDisplay(b.course,d)} · ${teachers[b.course]}`,
        secondsLeft,
        end:times[b.i][2]
      };
    }
  }

  const lunchStart=12*60, lunchEnd=12*60+35;
  if(mins>=lunchStart && mins<lunchEnd){
    return {kind:'lunch',title:'Lunch',detail:'12:00–12:35',secondsLeft:Math.ceil((lunchEnd-mins)*60)};
  }

  if(mins<blocks[0].start){
    return {kind:'before',title:'Before school',detail:`First class: ${classDisplay(blocks[0].course,d)} at ${formatTime(times[0][1])}`,secondsLeft:Math.ceil((blocks[0].start-mins)*60)};
  }

  for(let i=0;i<blocks.length-1;i++){
    const currentEnd=blocks[i].end;
    const nextStart=(i===2)?lunchStart:blocks[i+1].start;
    if(mins>=currentEnd && mins<nextStart){
      const nextCourse=(i===2)?null:blocks[i+1].course;
      return i===2
        ? {kind:'passing',title:'Heading to lunch',detail:'Lunch starts at 12:00',secondsLeft:Math.ceil((lunchStart-mins)*60)}
        : {kind:'passing',title:'Passing period',detail:`Next: ${classDisplay(nextCourse,d)} · Room ${roomDisplay(nextCourse,d)}`,secondsLeft:Math.ceil((blocks[i+1].start-mins)*60)};
    }
  }

  if(mins>=lunchEnd && mins<blocks[3].start){
    return {kind:'passing',title:'Lunch is over',detail:`Next: ${classDisplay(blocks[3].course,d)} · Room ${roomDisplay(blocks[3].course,d)}`,secondsLeft:Math.ceil((blocks[3].start-mins)*60)};
  }

  if(mins>=blocks[4].end){
    return {kind:'after',title:'School is done',detail:'You made it. Add anything after school to your planner.'};
  }

  return {kind:'passing',title:'Between classes',detail:'Check your schedule for what is next.'};
}
function formatCountdown(totalSeconds){
  if(totalSeconds==null) return '';
  const s=Math.max(0,totalSeconds);
  const h=Math.floor(s/3600), m=Math.floor((s%3600)/60), sec=s%60;
  if(h) return `${h}h ${m}m`;
  return `${m}m ${String(sec).padStart(2,'0')}s`;
}
function renderLiveStatus(){
  const host=document.querySelector('#liveStatus');
  if(!host) return;
  const status=currentSchoolStatus(new Date());
  host.className=`live-status ${status.kind}`;
  host.innerHTML=`
    <div class="live-pulse"></div>
    <div class="live-copy">
      <div class="eyebrow">RIGHT NOW</div>
      <div class="live-title">${status.title}</div>
      <div class="live-detail">${status.detail||''}</div>
    </div>
    ${status.secondsLeft!=null?`<div class="live-countdown"><strong>${formatCountdown(status.secondsLeft)}</strong><span>${status.kind==='class'?'left in class':'until next'}</span></div>`:''}
  `;
}

function buildAgendaEntries(d,letter){
  const entries=[];
  if(letter){
    baseSchedule[letter].forEach((course,i)=>{
      entries.push({kind:'class',sort:minutesFromTime(times[i][1]),course,i});
    });
    entries.push({kind:'lunch',sort:12*60,title:'Lunch'});
  }
  getItemsFor(d).forEach(item=>{
    entries.push({kind:'plan',sort:item.time?minutesFromTime(item.time):24*60+1,item});
  });
  return entries.sort((a,b)=>a.sort-b.sort || (a.kind==='class'?-1:1));
}
function renderAgenda(d,letter,compact=false){
  const entries=buildAgendaEntries(d,letter);
  if(!entries.length)return `<div class="empty">${isWeekend(d)?'No classes today. Add plans to build your day.':'School is closed. Add plans for the day if you have anything going on.'}</div>`;
  return `<div class="${compact?'mini-agenda':'schedule-list'}">${entries.map(entry=>{
    if(entry.kind==='class'){
      const c=entry.course,i=entry.i;
      if(compact) return `<div class="mini-item class-mini"><strong>${classDisplay(c,d)}</strong><div class="tiny">${formatTime(times[i][1])}–${formatTime(times[i][2])} · ${roomDisplay(c,d)}</div></div>`;
      return `<div class="class-row agenda-row">
        <div class="time">${formatTime(times[i][1])}<br>${formatTime(times[i][2])}</div>
        <div class="class-content"><div class="class-name">${classDisplay(c,d)}</div><div class="class-room">${teachers[c]} · Room ${roomDisplay(c,d)}</div>${notePreview(c)}</div>
        <div class="class-actions"><div class="class-badge">${times[i][0]}</div><button class="notes-btn" data-course="${esc(c)}">Notes</button></div>
      </div>`;
    }
    if(entry.kind==='lunch'){
      if(compact) return '<div class="mini-item lunch-mini"><strong>Lunch</strong><div class="tiny">12:00 PM–12:35 PM</div></div>';
      return '<div class="lunch-row agenda-lunch"><span><strong>Lunch</strong></span><strong>12:00–12:35</strong></div>';
    }
    const i=entry.item;
    if(compact) return `<div class="mini-item plan-mini"><strong>${esc(i.title)}</strong><div class="tiny">${i.time?formatTime(i.time):'Anytime'} · ${i.type}</div></div>`;
    return `<div class="agenda-plan ${i.priority==='High'?'high':''}">
      <div class="agenda-plan-time">${i.time?formatTime(i.time):'Anytime'}</div>
      <div><div class="agenda-plan-title">${esc(i.title)}</div><div class="agenda-plan-meta">${[i.type,i.className&&classDisplay(i.className,d),i.notes].filter(Boolean).map(esc).join(' · ')}</div></div>
      <div class="agenda-plan-chip">PLAN</div>
    </div>`;
  }).join('')}</div>`;
}
function wireClassNotes(){
  document.querySelectorAll('.notes-btn').forEach(btn=>{
    btn.addEventListener('click',()=>openClassNotes(btn.dataset.course,selectedDate));
  });
}

function renderToday(){
  const d=selectedDate, letter=getDayLetter(d), dayItems=getItemsFor(d), done=dayItems.filter(i=>i.done).length;
  const chip=letter?letter:(isWeekend(d)?'Weekend':'No School');
  const chipClass=letter?'':(isWeekend(d)?'weekend':'closed');
  const special=specialDays[key(d)];
  const schedule=renderAgenda(d,letter);
  views.today.innerHTML=`
    <section class="hero">
      <div class="hero-row">
        <div>
          <div class="eyebrow">${letter?`${letter} DAY · ${periodFor(d)}`:(isWeekend(d)?'WEEKEND':'SCHOOL CLOSED')}</div>
          <h1>${isSameDay(d,new Date())?'Today':niceDate(d,{weekday:'long'})}</h1>
          <div class="hero-date">${niceDate(d)}${special?` · ${special}`:''}</div>
        </div>
        <div class="day-chip ${chipClass}">${chip}</div>
      </div>
    </section>
    ${isSameDay(d,new Date())?'<section id="liveStatus" class="live-status"></section>':''}
    <div class="grid-2">
      <section class="card">
        <div class="card-head">
          <div><div class="eyebrow">YOUR DAY</div><h2>${letter?`${letter} Day Schedule`:'Schedule'}</h2></div>
          <button class="ghost-btn" id="scheduleOpen">Full schedule</button>
        </div>
        ${schedule}
      </section>
      <section class="card">
        <div class="card-head">
          <div><div class="eyebrow">PLANNER</div><h2>Plans & assignments</h2></div>
          <button class="primary-btn" id="addToday">+ Add</button>
        </div>
        <div class="task-list">${renderTasks(dayItems)}</div>
        <div class="stat-strip">
          <div class="stat"><strong>${dayItems.length}</strong><span>Total items</span></div>
          <div class="stat"><strong>${done}</strong><span>Finished</span></div>
          <div class="stat"><strong>${dayItems.length-done}</strong><span>Left</span></div>
        </div>
      </section>
    </div>`;
  document.querySelector('#addToday').onclick=()=>openDialog(d);
  document.querySelector('#scheduleOpen').onclick=()=>switchView('schedule');
  wireTasks();
  wireClassNotes();
  if(isSameDay(d,new Date())) renderLiveStatus();
}

function renderScheduleList(d,letter){return renderAgenda(d,letter)}


function renderTasks(list){
  if(!list.length)return '<div class="empty">Nothing planned yet. Add homework, practices, meetings, tests, or anything else.</div>';
  return list.map(i=>`<div class="task-row ${i.done?'done':''}" data-id="${i.id}">
    <button class="check-btn" aria-label="Complete"></button>
    <div class="task-main">
      <div class="task-title">${esc(i.title)}</div>
      <div class="task-meta">${[i.time&&formatTime(i.time),i.type,i.className&&classDisplay(i.className,new Date(i.date+'T12:00:00')),i.priority==='High'?'High priority':''].filter(Boolean).join(' · ')}</div>
    </div>
    <button class="delete-btn" aria-label="Delete">×</button>
  </div>`).join('');
}
function wireTasks(){document.querySelectorAll('.task-row').forEach(row=>{row.querySelector('.check-btn').onclick=()=>toggleItem(row.dataset.id);row.querySelector('.delete-btn').onclick=()=>deleteItem(row.dataset.id)})}
function formatTime(t){const [h,m]=t.split(':').map(Number);return `${((h+11)%12)+1}:${String(m).padStart(2,'0')} ${h>=12?'PM':'AM'}`}
function esc(s){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}

function renderWeek(){
  const days=[0,1,2,3,4,5,6].map(n=>addDays(weekStart,n));
  views.week.innerHTML=`<div class="week-toolbar">
    <div><div class="eyebrow">WEEK VIEW</div><h2>${niceDate(days[0],{month:'short',day:'numeric'})} – ${niceDate(days[6],{month:'short',day:'numeric',year:'numeric'})}</h2></div>
    <div class="toolbar-group"><button class="ghost-btn" id="prevWeek">←</button><button class="ghost-btn" id="nextWeek">→</button></div>
  </div><div class="week-grid">${days.map(renderDayColumn).join('')}</div>`;
  document.querySelector('#prevWeek').onclick=()=>{weekStart=addDays(weekStart,-7);renderWeek()};
  document.querySelector('#nextWeek').onclick=()=>{weekStart=addDays(weekStart,7);renderWeek()};
  document.querySelectorAll('.day-column').forEach(c=>c.ondblclick=()=>openDialog(new Date(c.dataset.date+'T12:00:00')));
}
function renderDayColumn(d){
  const letter=getDayLetter(d);
  return `<div class="day-column ${isSameDay(d,new Date())?'today':''}" data-date="${key(d)}">
    <div class="day-top">
      <div><strong>${niceDate(d,{weekday:'short'})}</strong><br><span>${niceDate(d,{month:'short',day:'numeric'})}</span></div>
      <div class="mini-letter">${letter||'—'}</div>
    </div>
    ${renderAgenda(d,letter,true)}
  </div>`;
}


function renderCalendar(){
  const y=calendarMonth.getFullYear(),m=calendarMonth.getMonth(),first=new Date(y,m,1,12),gridStart=addDays(first,-first.getDay());
  const cells=[...Array(42)].map((_,i)=>addDays(gridStart,i));
  views.calendar.innerHTML=`<div class="cal-toolbar">
    <div><div class="eyebrow">CALENDAR</div><h2>${niceDate(first,{month:'long',year:'numeric'})}</h2></div>
    <div class="toolbar-group"><button class="ghost-btn" id="prevMonth">←</button><button class="ghost-btn" id="nextMonth">→</button></div>
  </div>
  <div class="calendar-grid">
    ${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(x=>`<div class="dow">${x}</div>`).join('')}
    ${cells.map(d=>renderCalDay(d,m)).join('')}
  </div>`;
  document.querySelector('#prevMonth').onclick=()=>{calendarMonth=new Date(y,m-1,1);renderCalendar()};
  document.querySelector('#nextMonth').onclick=()=>{calendarMonth=new Date(y,m+1,1);renderCalendar()};
  document.querySelectorAll('.cal-day').forEach(c=>c.onclick=()=>{selectedDate=new Date(c.dataset.date+'T12:00:00');renderToday();switchView('today')});
}
function renderCalDay(d,currentMonth){
  const letter=getDayLetter(d), list=getItemsFor(d), special=specialDays[key(d)], closed=closedDates.has(key(d));
  return `<div class="cal-day ${d.getMonth()!==currentMonth?'other':''} ${isSameDay(d,new Date())?'today':''}" data-date="${key(d)}">
    <div class="cal-num">${d.getDate()}</div>
    ${letter?`<div class="cal-letter">${letter}</div>`:''}
    <div class="cal-events">
      ${list.slice(0,2).map(i=>`<div><span class="cal-dot"></span>${i.time?formatTime(i.time)+' · ':''}${esc(i.title)}</div>`).join('')}
      ${list.length>2?`<div>+${list.length-2} more</div>`:''}
    </div>
    ${closed?'<div class="closed-note">No school</div>':special?`<div class="closed-note">${special}</div>`:''}
  </div>`;
}

function renderSchedule(){
  const ref=selectedDate, q=periodFor(ref)||'Q1';
  views.schedule.innerHTML=`<div class="card">
    <div class="card-head">
      <div><div class="eyebrow">BLOCK SCHEDULE</div><h2>A–G rotation</h2></div>
      <div class="muted">${q} view</div>
    </div>
    <div class="schedule-matrix">
      <div class="matrix-cell matrix-head">Block</div>
      ${DAY_LETTERS.map(l=>`<div class="matrix-cell matrix-head">${l}</div>`).join('')}
      ${times.map((t,i)=>`<div class="matrix-cell block-label">${t[0]}<br><span class="muted">${t[1]}–${t[2]}</span></div>${DAY_LETTERS.map(l=>{const c=baseSchedule[l][i];return `<div class="matrix-cell"><div class="matrix-class">${classDisplay(c,ref)}</div><div class="matrix-room">${teachers[c]} · ${roomDisplay(c,ref)}</div></div>`}).join('')}`).join('')}
    </div>
    <div class="schedule-note">Lunch is 12:00–12:35 every school day. AP Economics changes from Microeconomics to Macroeconomics starting Q3. PE changes to Health in Q2 and returns to PE in Q3/Q4.</div>
  </div>`;
}

function renderAll(){renderToday();renderWeek();renderCalendar();renderSchedule()}
renderAll();
setInterval(()=>renderLiveStatus(),1000);
if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});