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
  ['Block 1','8:24','9:31'],
  ['Block 2','9:36','10:43'],
  ['Block 3','10:48','11:55'],
  ['Block 4','12:41','13:48'],
  ['Block 5','13:53','15:00']
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

const transcriptProfile = {
  cumulativeGPA:4.1845,
  creditsEarned:105,
  yearly:[
    {grade:'9',year:'2023–24',gpa:3.9714},
    {grade:'10',year:'2024–25',gpa:4.3036},
    {grade:'11',year:'2025–26',gpa:4.2786}
  ],
  highlights:['Honors English 2 — A-','Honors Algebra 1 — B','Honors Algebra 2 — C-','Lab Chemistry — A-','Lab Environmental Science — A-','Business Law & Ethics — A','Business Management — A+','BCC ENG121 — A']
};

const seededColleges = [
  {name:'University of Delaware',location:'Newark, Delaware',label:'Likely',apps:['Common App','Coalition']},
  {name:'University of Rhode Island',location:'Kingston, Rhode Island',label:'Likely',apps:['Common App']},
  {name:'Syracuse University',location:'Syracuse, New York',label:'Likely',apps:['Common App','Coalition']},
  {name:'University of Connecticut',location:'Storrs, Connecticut',label:'Probable',apps:['Common App','Coalition']},
  {name:'University of Pittsburgh-Pittsburgh Campus',location:'Pittsburgh, Pennsylvania',label:'Probable',apps:['Common App']},
  {name:'Binghamton University',location:'Vestal, New York',label:'Probable',apps:['Common App','Coalition']},
  {name:'Pennsylvania State University - Main Campus',location:'University Park, Pennsylvania',label:'Probable',apps:['Common App']},
  {name:'Tulane University',location:'New Orleans, Louisiana',label:'Probable',apps:['Common App']},
  {name:'Rutgers University-New Brunswick',location:'New Brunswick, New Jersey',label:'Reach',apps:['Common App']},
  {name:'University of Maryland-College Park',location:'College Park, Maryland',label:'Reach',apps:['Common App']},
  {name:'University of Massachusetts-Amherst',location:'Amherst, Massachusetts',label:'Reach',apps:['Common App']},
  {name:'Hofstra University',location:'Hempstead, New York',label:'No probability indicated',apps:['Common App']}
];

const bbyoWeeklyTemplate = [
  {id:'cp-josh',group:'Counterparts',label:'Josh Matthews — East Brunswick AZA'},
  {id:'cp-charlie',group:'Counterparts',label:'Charlie Mason — Marlboro AZA (Home Chapter)'},
  {id:'cp-ryan',group:'Counterparts',label:"Ryan Feldman — T'sahal BBYO"},
  {id:'cp-jordan',group:'Counterparts',label:'Jordan Feldman — Chavi BBYO (Focus Chapter)'},
  {id:'focus-chavi',group:'Focus Chapters',label:'Chavi BBYO',detail:'Point of Contact: Madelyn Paradise · +1 (908) 873-8370'},
  {id:'focus-marlboro',group:'Focus Chapters',label:'Marlboro AZA',detail:'Point of Contact: Seth Borenstein · +1 (908) 670-5051'},
  {id:'yacht',group:'Planning',label:'Check in on Yacht Party planning + sign-ups',until:'2026-10-17'}
];

const bbyoDailyTemplate = [
  {id:'fallcon',label:'Check in on FallCon Steering + signups',until:'2026-11-20'}
];

const seededBbyoMeetings = [
  {id:'bbyo-max-1on1',title:'1:1 w/ Max Nachman',mode:'Online',startDate:'2026-09-28',startTime:'17:00',endTime:'',recurrence:'biweekly',url:'https://bbyo-org.zoom.us/j/81844914425',location:''},
  {id:'bbyo-sganim',title:"S'ganim Call w/ Max Nachman",mode:'Online',startDate:'2026-09-29',startTime:'17:00',endTime:'18:00',recurrence:'weekly',url:'https://bbyo-org.zoom.us/j/81014315071',location:''},
  {id:'bbyo-thursday',title:'Thursday BBYO Meeting',mode:'Online',startDate:'2026-10-01',startTime:'18:30',endTime:'19:30',recurrence:'weekly',url:'https://bbyo-org.zoom.us/j/89346459243',location:''},
  {id:'bbyo-fallcon-1',title:'FallCon Steering Meeting #1',mode:'Online',startDate:'2026-09-28',startTime:'18:00',endTime:'19:30',recurrence:'none',url:'https://bbyo-org.zoom.us/j/88681936317',location:''}
];

const seededCounterparts = [
  {id:'josh',name:'Josh Matthews',chapter:'East Brunswick AZA',lastCheckIn:'',nextFollowUp:'',notes:''},
  {id:'charlie',name:'Charlie Mason',chapter:'Marlboro AZA',lastCheckIn:'',nextFollowUp:'',notes:'Home Chapter'},
  {id:'ryan',name:'Ryan Feldman',chapter:"T'sahal BBYO",lastCheckIn:'',nextFollowUp:'',notes:''},
  {id:'jordan',name:'Jordan Feldman',chapter:'Chavi BBYO',lastCheckIn:'',nextFollowUp:'',notes:'Focus Chapter'}
];

let selectedDate = startOfDay(new Date());
let weekStart = startOfWeek(selectedDate);
let calendarMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
let items = loadItems();
let classNotes = loadClassNotes();
let activeNotesCourse = null;
let editingItemId = null;
let colleges = loadColleges();
let collegeComparisons = loadCollegeComparisons();
let bbyoMeetings = loadBbyoMeetings();
let bbyoChecks = loadBbyoChecks();
let bbyoVisits = loadBbyoVisits();
let bbyoCounterparts = loadBbyoCounterparts();
migrateBbyoSeedData();

const views = {
  today:document.querySelector('#todayView'),
  week:document.querySelector('#weekView'),
  calendar:document.querySelector('#calendarView'),
  schedule:document.querySelector('#scheduleView'),
  college:document.querySelector('#collegeView'),
  bbyo:document.querySelector('#bbyoView')
};
const dialog = document.querySelector('#itemDialog');
const form = document.querySelector('#itemForm');
const classSelect = document.querySelector('#itemClass');
const classNotesDialog = document.querySelector('#classNotesDialog');
const classNotesTitle = document.querySelector('#classNotesTitle');
const classNotesMeta = document.querySelector('#classNotesMeta');
const classNotesText = document.querySelector('#classNotesText');
const itemDialogEyebrow = document.querySelector('#itemDialogEyebrow');
const itemDialogTitle = document.querySelector('#itemDialogTitle');
const saveItemBtn = document.querySelector('#saveItemBtn');

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
document.querySelector('#exportDataBtn')?.addEventListener('click',exportAllData);
document.querySelector('#importDataInput')?.addEventListener('change',importAllData);

function exportAllData(){
  const data={version:3,exportedAt:new Date().toISOString(),items,classNotes,colleges,collegeComparisons,bbyoMeetings,bbyoChecks,bbyoVisits,bbyoCounterparts};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download='school-flow-backup.json';
  a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function importAllData(event){
  const file=event.target.files?.[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const data=JSON.parse(reader.result);
      if(Array.isArray(data.items)) items=data.items;
      if(data.classNotes&&typeof data.classNotes==='object') classNotes=data.classNotes;
      if(Array.isArray(data.colleges)) colleges=data.colleges;
      if(Array.isArray(data.collegeComparisons)) collegeComparisons=data.collegeComparisons;
      if(Array.isArray(data.bbyoMeetings)) bbyoMeetings=data.bbyoMeetings;
      if(data.bbyoChecks&&typeof data.bbyoChecks==='object') bbyoChecks=data.bbyoChecks;
      if(Array.isArray(data.bbyoVisits)) bbyoVisits=data.bbyoVisits;
      if(Array.isArray(data.bbyoCounterparts)) bbyoCounterparts=data.bbyoCounterparts;
      persist(); persistClassNotes(); persistColleges(); persistCollegeComparisons(); persistBbyoMeetings(); persistBbyoChecks(); persistBbyoVisits(); persistBbyoCounterparts();
      renderAll();
      alert('Backup imported successfully.');
    }catch{alert('That backup file could not be read.')}
    event.target.value='';
  };
  reader.readAsText(file);
}
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
function loadItems(){
  try{
    const primary=localStorage.getItem('schoolFlowItems');
    if(primary) return JSON.parse(primary);
    const backup=localStorage.getItem('schoolFlowItemsBackup');
    return backup?JSON.parse(backup):[];
  }catch{
    try{return JSON.parse(localStorage.getItem('schoolFlowItemsBackup')||'[]')}catch{return[]}
  }
}
function persist(){
  const payload=JSON.stringify(items);
  localStorage.setItem('schoolFlowItems',payload);
  localStorage.setItem('schoolFlowItemsBackup',payload);
  localStorage.setItem('schoolFlowLastSaved',new Date().toISOString());
}
function loadColleges(){
  try{
    const saved=JSON.parse(localStorage.getItem('schoolFlowColleges')||'null');
    if(Array.isArray(saved)&&saved.length) return saved;
  }catch{}
  const initial=seededColleges.map((c,i)=>({...c,id:'college-'+i,status:'Not started',deadline:'',notes:''}));
  localStorage.setItem('schoolFlowColleges',JSON.stringify(initial));
  return initial;
}
function persistColleges(){localStorage.setItem('schoolFlowColleges',JSON.stringify(colleges))}
function loadCollegeComparisons(){try{return JSON.parse(localStorage.getItem('schoolFlowCollegeComparisons')||'[]')}catch{return[]}}
function persistCollegeComparisons(){localStorage.setItem('schoolFlowCollegeComparisons',JSON.stringify(collegeComparisons))}
function loadBbyoMeetings(){
  try{
    const saved=JSON.parse(localStorage.getItem('schoolFlowBbyoMeetings')||'null');
    if(Array.isArray(saved)&&saved.length)return saved;
  }catch{}
  localStorage.setItem('schoolFlowBbyoMeetings',JSON.stringify(seededBbyoMeetings));
  return seededBbyoMeetings.map(x=>({...x}));
}
function persistBbyoMeetings(){localStorage.setItem('schoolFlowBbyoMeetings',JSON.stringify(bbyoMeetings))}
function migrateBbyoSeedData(){
  const urls={
    'bbyo-max-1on1':'https://bbyo-org.zoom.us/j/81844914425',
    'bbyo-sganim':'https://bbyo-org.zoom.us/j/81014315071',
    'bbyo-thursday':'https://bbyo-org.zoom.us/j/89346459243',
    'bbyo-fallcon-1':'https://bbyo-org.zoom.us/j/88681936317'
  };
  let changed=false;
  bbyoMeetings.forEach(m=>{if(urls[m.id]&&m.url!==urls[m.id]){m.url=urls[m.id];changed=true}});
  if(changed)persistBbyoMeetings();
}
function loadBbyoChecks(){try{return JSON.parse(localStorage.getItem('schoolFlowBbyoChecks')||'{}')}catch{return{}}}
function persistBbyoChecks(){localStorage.setItem('schoolFlowBbyoChecks',JSON.stringify(bbyoChecks))}
function loadBbyoVisits(){try{return JSON.parse(localStorage.getItem('schoolFlowBbyoVisits')||'[]')}catch{return[]}}
function persistBbyoVisits(){localStorage.setItem('schoolFlowBbyoVisits',JSON.stringify(bbyoVisits))}
function loadBbyoCounterparts(){
  try{
    const saved=JSON.parse(localStorage.getItem('schoolFlowBbyoCounterparts')||'null');
    if(Array.isArray(saved)&&saved.length)return saved;
  }catch{}
  localStorage.setItem('schoolFlowBbyoCounterparts',JSON.stringify(seededCounterparts));
  return seededCounterparts.map(x=>({...x}));
}
function persistBbyoCounterparts(){localStorage.setItem('schoolFlowBbyoCounterparts',JSON.stringify(bbyoCounterparts))}
function meetingsForDate(d){return bbyoMeetings.filter(m=>meetingOccursOn(m,d)).sort((a,b)=>a.startTime.localeCompare(b.startTime))}
function mondayKey(date=new Date()){
  const d=startOfDay(date), offset=(d.getDay()+6)%7;
  return key(addDays(d,-offset));
}
function isCheckDone(id,scope='weekly'){
  const bucket=scope==='daily'?key(new Date()):mondayKey(new Date());
  return !!bbyoChecks[bucket]?.[id];
}
function setCheckDone(id,done,scope='weekly'){
  const bucket=scope==='daily'?key(new Date()):mondayKey(new Date());
  if(!bbyoChecks[bucket])bbyoChecks[bucket]={};
  bbyoChecks[bucket][id]=done;
  persistBbyoChecks();
}
function meetingOccursOn(meeting,date){
  const start=new Date(meeting.startDate+'T12:00:00'), target=startOfDay(date);
  if(target<start)return false;
  const diff=Math.round((target-start)/86400000);
  if(meeting.recurrence==='none')return diff===0;
  if(meeting.recurrence==='weekly')return diff%7===0;
  if(meeting.recurrence==='biweekly')return diff%14===0;
  return false;
}
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
function openDialog(date,itemId=null){
  form.reset();
  editingItemId=itemId;
  const item=itemId?items.find(x=>x.id===itemId):null;
  itemDialogEyebrow.textContent=item?'EDIT EVENT':'NEW PLAN';
  itemDialogTitle.textContent=item?'Edit your event':'Add something to your day';
  saveItemBtn.textContent=item?'Save changes':'Save plan';
  document.querySelector('#itemDate').value=item?.date||key(date);
  document.querySelector('#itemTitle').value=item?.title||'';
  document.querySelector('#itemTime').value=item?.time||'';
  document.querySelector('#itemType').value=item?.type||'Homework';
  document.querySelector('#itemPriority').value=item?.priority||'Normal';
  document.querySelector('#itemClass').value=item?.className||'';
  document.querySelector('#itemNotes').value=item?.notes||'';
  dialog.showModal();
  setTimeout(()=>document.querySelector('#itemTitle').focus(),60);
}
function saveItem(){
  const title=document.querySelector('#itemTitle').value.trim();
  if(!title)return;
  const data={
    title,
    date:document.querySelector('#itemDate').value,
    time:document.querySelector('#itemTime').value,
    type:document.querySelector('#itemType').value,
    priority:document.querySelector('#itemPriority').value,
    className:document.querySelector('#itemClass').value,
    notes:document.querySelector('#itemNotes').value.trim()
  };
  if(editingItemId){
    const existing=items.find(x=>x.id===editingItemId);
    if(existing) Object.assign(existing,data);
  } else {
    items.push({
      id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),
      ...data,
      done:false
    });
  }
  editingItemId=null;
  persist();
  dialog.close();
  renderAll();
}
function editItem(id){
  const item=items.find(x=>x.id===id);
  if(!item)return;
  openDialog(new Date(item.date+'T12:00:00'),id);
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
  meetingsForDate(d).forEach(meeting=>{
    entries.push({kind:'bbyo',sort:minutesFromTime(meeting.startTime),meeting});
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
    if(entry.kind==='bbyo'){
      const m=entry.meeting;
      if(compact) return `<div class="mini-item bbyo-mini"><strong>${esc(m.title)}</strong><div class="tiny">${formatTime(m.startTime)}${m.endTime?'–'+formatTime(m.endTime):''} · BBYO</div></div>`;
      return `<div class="agenda-plan bbyo-agenda">
        <div class="agenda-plan-time">${formatTime(m.startTime)}</div>
        <div><div class="agenda-plan-title">${esc(m.title)}</div><div class="agenda-plan-meta">BBYO · ${esc(m.mode)}${m.endTime?' · ends '+formatTime(m.endTime):''}</div></div>
        <div class="agenda-plan-actions"><div class="agenda-plan-chip">BBYO</div>${m.url?`<a class="edit-event-btn" href="${esc(m.url)}" target="_blank" rel="noopener">Join</a>`:''}</div>
      </div>`;
    }
    const i=entry.item;
    if(compact) return `<div class="mini-item plan-mini ${i.type==='College'?'college-mini':''}"><strong>${esc(i.title)}</strong><div class="tiny">${i.time?formatTime(i.time):'Anytime'} · ${i.type}</div></div>`;
    return `<div class="agenda-plan ${i.priority==='High'?'high':''} ${i.type==='College'?'college':''}" data-id="${i.id}">
      <div class="agenda-plan-time">${i.time?formatTime(i.time):'Anytime'}</div>
      <div><div class="agenda-plan-title">${esc(i.title)}</div><div class="agenda-plan-meta">${[i.type,i.className&&classDisplay(i.className,d),i.notes].filter(Boolean).map(esc).join(' · ')}</div></div>
      <div class="agenda-plan-actions"><div class="agenda-plan-chip">${i.type==='College'?'COLLEGE':'PLAN'}</div><button class="edit-event-btn" data-id="${i.id}">Edit</button></div>
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
  wireClassNotes();
  wireTasks();
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
    <div class="task-actions"><button class="edit-task-btn" aria-label="Edit">✎</button><button class="delete-btn" aria-label="Delete">×</button></div>
  </div>`).join('');
}
function wireTasks(){
  document.querySelectorAll('.task-row').forEach(row=>{
    row.querySelector('.check-btn').onclick=()=>toggleItem(row.dataset.id);
    row.querySelector('.delete-btn').onclick=()=>deleteItem(row.dataset.id);
    const edit=row.querySelector('.edit-task-btn');
    if(edit) edit.onclick=()=>editItem(row.dataset.id);
  });
  document.querySelectorAll('.edit-event-btn').forEach(btn=>{
    btn.onclick=()=>editItem(btn.dataset.id);
  });
}
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
  const letter=getDayLetter(d), list=getItemsFor(d), bbyoList=meetingsForDate(d), special=specialDays[key(d)], closed=closedDates.has(key(d));
  return `<div class="cal-day ${d.getMonth()!==currentMonth?'other':''} ${isSameDay(d,new Date())?'today':''}" data-date="${key(d)}">
    <div class="cal-num">${d.getDate()}</div>
    ${letter?`<div class="cal-letter">${letter}</div>`:''}
    <div class="cal-events">
      ${[...list.map(i=>({time:i.time,title:i.title,type:i.type})),...bbyoList.map(m=>({time:m.startTime,title:m.title,type:'BBYO'}))].sort((a,b)=>(a.time||'99:99').localeCompare(b.time||'99:99')).slice(0,2).map(i=>`<div class="${i.type==='BBYO'?'cal-bbyo-event':''}"><span class="cal-dot"></span>${i.time?formatTime(i.time)+' · ':''}${esc(i.title)}</div>`).join('')}
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
      ${times.map((t,i)=>`<div class="matrix-cell block-label">${t[0]}<br><span class="muted">${formatTime(t[1])}–${formatTime(t[2])}</span></div>${DAY_LETTERS.map(l=>{const c=baseSchedule[l][i];return `<div class="matrix-cell"><div class="matrix-class">${classDisplay(c,ref)}</div><div class="matrix-room">${teachers[c]} · ${roomDisplay(c,ref)}</div></div>`}).join('')}`).join('')}
    </div>
    <div class="schedule-note">Lunch is 12:00–12:35 every school day. AP Economics changes from Microeconomics to Macroeconomics starting Q3. PE changes to Health in Q2 and returns to PE in Q3/Q4.</div>
  </div>`;
}

function gradeFit(low,high){
  const g=transcriptProfile.cumulativeGPA;
  if(!Number.isFinite(low)||!Number.isFinite(high)) return {label:'Add GPA range',cls:'neutral'};
  if(g<low) return {label:'Below range',cls:'below'};
  if(g>high) return {label:'Above range',cls:'above'};
  return {label:'Within range',cls:'within'};
}
function renderCollegeApps(){
  const completed=colleges.filter(c=>c.status==='Submitted').length;
  views.college.innerHTML=`
    <section class="college-hero">
      <div>
        <div class="eyebrow">COLLEGE APPS</div>
        <h1>Application HQ</h1>
        <p>Keep your list, deadlines, status, notes, and grade comparisons in one place.</p>
      </div>
      <div class="college-hero-stat"><strong>${completed}/${colleges.length}</strong><span>submitted</span></div>
    </section>

    <div class="college-summary-grid">
      <section class="card transcript-card">
        <div class="eyebrow">TRANSCRIPT SNAPSHOT</div>
        <div class="gpa-big">${transcriptProfile.cumulativeGPA.toFixed(4)}</div>
        <div class="muted">Weighted cumulative GPA · ${transcriptProfile.creditsEarned} credits earned</div>
        <div class="gpa-years">${transcriptProfile.yearly.map(y=>`<div><span>Grade ${y.grade}</span><strong>${y.gpa.toFixed(4)}</strong><small>${y.year}</small></div>`).join('')}</div>
        <details class="transcript-details"><summary>Academic highlights</summary><div class="highlight-list">${transcriptProfile.highlights.map(x=>`<span>${x}</span>`).join('')}</div></details>
      </section>

      <section class="card fit-card">
        <div class="eyebrow">GRADE FIT EXPLORER</div>
        <h2>Compare your GPA</h2>
        <p class="muted">Add a school's published or reported weighted GPA range. School weighting methods vary, so this is a rough academic comparison, not an admission prediction.</p>
        <form id="fitForm" class="fit-form">
          <input id="fitSchool" placeholder="School name" required>
          <input id="fitLow" type="number" step="0.01" min="0" max="6.5" placeholder="Low GPA" required>
          <input id="fitHigh" type="number" step="0.01" min="0" max="6.5" placeholder="High GPA" required>
          <button class="primary-btn" type="submit">Add comparison</button>
        </form>
        <div class="fit-results">${collegeComparisons.length?collegeComparisons.map(c=>{const f=gradeFit(Number(c.low),Number(c.high));return `<div class="fit-row"><div><strong>${esc(c.name)}</strong><span>${Number(c.low).toFixed(2)}–${Number(c.high).toFixed(2)}</span></div><div class="fit-badge ${f.cls}">${f.label}</div><button class="fit-remove" data-id="${c.id}">×</button></div>`}).join(''):'<div class="empty compact-empty">No GPA comparisons yet.</div>'}</div>
      </section>
    </div>

    <section class="card college-list-card">
      <div class="college-list-head">
        <div><div class="eyebrow">YOUR LIST</div><h2>${colleges.length} colleges</h2></div>
        <div class="college-legend">Your imported labels are shown as-is.</div>
      </div>
      <div class="college-grid">${colleges.map(c=>`
        <article class="college-card">
          <div class="college-card-top">
            <div><h3>${esc(c.name)}</h3><p>${esc(c.location)}</p></div>
            <span class="probability-badge ${String(c.label).toLowerCase().replace(/[^a-z]+/g,'-')}">${esc(c.label)}</span>
          </div>
          <div class="app-tags">${c.apps.map(a=>`<span>${esc(a)}</span>`).join('')}</div>
          <div class="college-fields">
            <label>Status<select class="college-status" data-id="${c.id}"><option ${c.status==='Not started'?'selected':''}>Not started</option><option ${c.status==='In progress'?'selected':''}>In progress</option><option ${c.status==='Ready'?'selected':''}>Ready</option><option ${c.status==='Submitted'?'selected':''}>Submitted</option></select></label>
            <label>Deadline<input class="college-deadline" data-id="${c.id}" type="date" value="${c.deadline||''}"></label>
          </div>
          <label class="college-notes-label">Notes<textarea class="college-notes" data-id="${c.id}" rows="3" placeholder="Essay progress, visit notes, portal info...">${esc(c.notes||'')}</textarea></label>
        </article>
      `).join('')}</div>
    </section>`;

  document.querySelectorAll('.college-status').forEach(el=>el.onchange=()=>updateCollege(el.dataset.id,{status:el.value}));
  document.querySelectorAll('.college-deadline').forEach(el=>el.onchange=()=>updateCollege(el.dataset.id,{deadline:el.value}));
  document.querySelectorAll('.college-notes').forEach(el=>el.onchange=()=>updateCollege(el.dataset.id,{notes:el.value}));
  document.querySelector('#fitForm')?.addEventListener('submit',e=>{
    e.preventDefault();
    const name=document.querySelector('#fitSchool').value.trim();
    const low=Number(document.querySelector('#fitLow').value), high=Number(document.querySelector('#fitHigh').value);
    if(!name||!Number.isFinite(low)||!Number.isFinite(high)||low>high)return;
    collegeComparisons.push({id:'fit-'+Date.now(),name,low,high});
    persistCollegeComparisons();
    renderCollegeApps();
  });
  document.querySelectorAll('.fit-remove').forEach(btn=>btn.onclick=()=>{collegeComparisons=collegeComparisons.filter(x=>x.id!==btn.dataset.id);persistCollegeComparisons();renderCollegeApps()});
}
function updateCollege(id,changes){
  const c=colleges.find(x=>x.id===id);
  if(!c)return;
  Object.assign(c,changes);
  persistColleges();
  if(changes.status) renderCollegeApps();
}
function nextMeetingOccurrences(days=28){
  const out=[], today=startOfDay(new Date());
  for(let i=0;i<days;i++){
    const d=addDays(today,i);
    bbyoMeetings.forEach(m=>{if(meetingOccursOn(m,d))out.push({meeting:m,date:d})});
  }
  return out.sort((a,b)=>key(a.date).localeCompare(key(b.date))||a.meeting.startTime.localeCompare(b.meeting.startTime));
}
function renderBbyo(){
  const today=new Date(), todayKey=key(today);
  const weekly=bbyoWeeklyTemplate.filter(x=>!x.until||todayKey<=x.until);
  const daily=bbyoDailyTemplate.filter(x=>!x.until||todayKey<=x.until);
  const upcoming=nextMeetingOccurrences();
  const weeklyDone=weekly.filter(x=>isCheckDone(x.id,'weekly')).length;
  const dailyDone=daily.filter(x=>isCheckDone(x.id,'daily')).length;
  const totalActive=weekly.length+daily.length;
  const totalDone=weeklyDone+dailyDone;
  const progress=totalActive?Math.round((totalDone/totalActive)*100):100;
  const next=upcoming[0];
  const counterpartDone=weekly.filter(x=>x.group==='Counterparts'&&isCheckDone(x.id,'weekly')).length;
  const counterpartTotal=weekly.filter(x=>x.group==='Counterparts').length;
  const focusDone=weekly.filter(x=>x.group==='Focus Chapters'&&isCheckDone(x.id,'weekly')).length;
  const focusTotal=weekly.filter(x=>x.group==='Focus Chapters').length;

  views.bbyo.innerHTML=`
    <section class="bbyo-command-hero">
      <div class="bbyo-command-copy">
        <div class="bbyo-kicker"><span class="bbyo-live-dot"></span> GREATER JERSEY REGION · S'GAN</div>
        <h1>Lead the week.<br><span>Stay ahead.</span></h1>
        <p>One place for counterparts, focus chapters, steering, calls, and everything you need to keep moving.</p>
        <div class="bbyo-hero-pills">
          <span>Week of ${niceDate(new Date(mondayKey(today)+'T12:00:00'),{month:'short',day:'numeric'})}</span>
          <span>${upcoming.length} upcoming meetings</span>
          <span>${progress}% complete</span>
        </div>
      </div>
      <div class="bbyo-progress-orb" style="--progress:${progress*3.6}deg">
        <div class="bbyo-progress-inner"><strong>${progress}%</strong><span>week locked in</span></div>
      </div>
    </section>

    <section class="bbyo-stats-row">
      <article class="bbyo-stat-card">
        <div class="bbyo-stat-icon">↗</div>
        <div><span>Counterparts</span><strong>${counterpartDone}/${counterpartTotal}</strong><small>checked in</small></div>
      </article>
      <article class="bbyo-stat-card">
        <div class="bbyo-stat-icon">◎</div>
        <div><span>Focus Chapters</span><strong>${focusDone}/${focusTotal}</strong><small>touched base</small></div>
      </article>
      <article class="bbyo-stat-card accent-card">
        <div class="bbyo-stat-icon">⚡</div>
        <div><span>Daily Priority</span><strong>${dailyDone}/${daily.length}</strong><small>FallCon steering</small></div>
      </article>
      <article class="bbyo-stat-card">
        <div class="bbyo-stat-icon">◷</div>
        <div><span>Next Meeting</span><strong>${next?formatTime(next.meeting.startTime):'—'}</strong><small>${next?esc(next.meeting.title):'Nothing upcoming'}</small></div>
      </article>
    </section>

    ${next?`<section class="bbyo-next-meeting">
      <div class="next-meeting-date">
        <span>${niceDate(next.date,{weekday:'short'}).toUpperCase()}</span>
        <strong>${next.date.getDate()}</strong>
        <small>${niceDate(next.date,{month:'short'}).toUpperCase()}</small>
      </div>
      <div class="next-meeting-main">
        <div class="bbyo-kicker">UP NEXT</div>
        <h2>${esc(next.meeting.title)}</h2>
        <p>${formatTime(next.meeting.startTime)}${next.meeting.endTime?' – '+formatTime(next.meeting.endTime):''} · ${esc(next.meeting.mode)}${next.meeting.location?' · '+esc(next.meeting.location):''}</p>
      </div>
      <div class="next-meeting-actions">
        ${next.meeting.url?`<a class="bbyo-join-main" href="${esc(next.meeting.url)}" target="_blank" rel="noopener">Join Meeting <span>↗</span></a>`:''}
      </div>
    </section>`:''}

    <div class="bbyo-main-grid">
      <section class="bbyo-panel bbyo-checklist-panel">
        <div class="bbyo-panel-head">
          <div>
            <div class="bbyo-kicker">MISSION CONTROL</div>
            <h2>This Week</h2>
          </div>
          <div class="bbyo-mini-progress"><span style="width:${progress}%"></span></div>
        </div>

        <div class="bbyo-check-groups">
          ${['Counterparts','Focus Chapters','Planning'].map(group=>{
            const rows=weekly.filter(x=>x.group===group);
            if(!rows.length)return '';
            const done=rows.filter(x=>isCheckDone(x.id,'weekly')).length;
            return `<div class="bbyo-check-group premium-group">
              <div class="bbyo-group-head"><div><span class="bbyo-group-dot"></span>${group}</div><span>${done}/${rows.length}</span></div>
              ${rows.map(x=>`<label class="bbyo-check-row premium-check ${isCheckDone(x.id,'weekly')?'done':''}">
                <input type="checkbox" class="bbyo-check" data-id="${x.id}" data-scope="weekly" ${isCheckDone(x.id,'weekly')?'checked':''}>
                <span class="custom-check"></span>
                <span class="check-copy"><strong>${esc(x.label)}</strong>${x.detail?`<small>${esc(x.detail)}</small>`:''}${x.until?`<small class="deadline-small">Through ${niceDate(new Date(x.until+'T12:00:00'),{month:'short',day:'numeric'})}</small>`:''}</span>
              </label>`).join('')}
            </div>`;
          }).join('')}
          ${daily.length?`<div class="bbyo-check-group premium-group priority-group">
            <div class="bbyo-group-head"><div><span class="bbyo-group-dot priority-dot"></span>Daily Priority</div><span>${dailyDone}/${daily.length}</span></div>
            ${daily.map(x=>`<label class="bbyo-check-row premium-check ${isCheckDone(x.id,'daily')?'done':''}">
              <input type="checkbox" class="bbyo-check" data-id="${x.id}" data-scope="daily" ${isCheckDone(x.id,'daily')?'checked':''}>
              <span class="custom-check"></span>
              <span class="check-copy"><strong>${esc(x.label)}</strong><small>Do this every day · through ${niceDate(new Date(x.until+'T12:00:00'),{month:'short',day:'numeric'})}</small></span>
            </label>`).join('')}
          </div>`:''}
        </div>
      </section>

      <section class="bbyo-panel bbyo-contact-panel">
        <div class="bbyo-panel-head">
          <div><div class="bbyo-kicker">FOCUS CHAPTERS</div><h2>Quick Contacts</h2></div>
        </div>
        <div class="bbyo-contact-grid">
          <article class="bbyo-contact-card">
            <div class="contact-avatar">C</div>
            <div class="contact-info"><span>Chavi BBYO</span><strong>Madelyn Paradise</strong><a href="tel:+19088738370">+1 (908) 873-8370</a></div>
            <a class="contact-action" href="tel:+19088738370">Call</a>
          </article>
          <article class="bbyo-contact-card">
            <div class="contact-avatar">M</div>
            <div class="contact-info"><span>Marlboro AZA</span><strong>Seth Borenstein</strong><a href="tel:+19086705051">+1 (908) 670-5051</a></div>
            <a class="contact-action" href="tel:+19086705051">Call</a>
          </article>
        </div>

        <div class="bbyo-counterpart-strip">
          <div class="bbyo-kicker">COUNTERPARTS</div>
          <div class="counterpart-chips">
            <span>JM <b>Josh</b></span>
            <span>CM <b>Charlie</b></span>
            <span>RF <b>Ryan</b></span>
            <span>JF <b>Jordan</b></span>
          </div>
        </div>
      </section>
    </div>

    <section class="bbyo-panel bbyo-crm-panel">
      <div class="bbyo-panel-head"><div><div class="bbyo-kicker">COUNTERPART CRM</div><h2>People to Reach Out To</h2><p>Track check-ins, notes, and who needs a follow-up.</p></div></div>
      <div class="crm-grid">
        ${bbyoCounterparts.map(c=>{
          const overdue=c.nextFollowUp && c.nextFollowUp<=todayKey;
          return `<article class="crm-card ${overdue?'needs-followup':''}">
            <div class="crm-card-head"><div class="crm-avatar">${c.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div><div><strong>${esc(c.name)}</strong><span>${esc(c.chapter)}</span></div>${overdue?'<b>Follow up</b>':''}</div>
            <div class="crm-fields">
              <label>Last check-in<input class="crm-last" data-id="${c.id}" type="date" value="${c.lastCheckIn||''}"></label>
              <label>Next follow-up<input class="crm-next" data-id="${c.id}" type="date" value="${c.nextFollowUp||''}"></label>
            </div>
            <label class="crm-notes-label">Notes<textarea class="crm-notes" data-id="${c.id}" rows="2" placeholder="What did you talk about?">${esc(c.notes||'')}</textarea></label>
          </article>`;
        }).join('')}
      </div>
    </section>

    <section class="bbyo-panel bbyo-visits-panel">
      <div class="bbyo-panel-head"><div><div class="bbyo-kicker">CHAPTER VISITS</div><h2>Visit Tracker</h2><p>Save what happened, what they need, and what you should do next.</p></div><span class="visit-count">${bbyoVisits.length} visits</span></div>
      <form id="chapterVisitForm" class="visit-form">
        <input id="visitChapter" placeholder="Chapter" required>
        <input id="visitDate" type="date" required>
        <input id="visitWentWell" placeholder="What went well?">
        <input id="visitNeedsHelp" placeholder="What do they need help with?">
        <input id="visitFollowUp" placeholder="Follow-up / next step">
        <button type="submit" class="bbyo-add-visit-btn">Log Visit ＋</button>
      </form>
      <div class="visit-history">
        ${bbyoVisits.length?bbyoVisits.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(v=>`<article class="visit-card">
          <div class="visit-date-block"><strong>${new Date(v.date+'T12:00:00').getDate()}</strong><span>${niceDate(new Date(v.date+'T12:00:00'),{month:'short'})}</span></div>
          <div class="visit-copy"><h3>${esc(v.chapter)}</h3>${v.wentWell?`<p><b>Went well:</b> ${esc(v.wentWell)}</p>`:''}${v.needsHelp?`<p><b>Needs help:</b> ${esc(v.needsHelp)}</p>`:''}${v.followUp?`<p><b>Next:</b> ${esc(v.followUp)}</p>`:''}</div>
          <button class="visit-delete" data-id="${v.id}">×</button>
        </article>`).join(''):'<div class="empty compact-empty">No chapter visits logged yet.</div>'}
      </div>
    </section>

    <section class="bbyo-panel bbyo-meeting-panel">
      <div class="bbyo-panel-head meeting-panel-head">
        <div><div class="bbyo-kicker">CALENDAR</div><h2>Upcoming Meetings</h2></div>
        <span class="muted">Next 4 weeks</span>
      </div>
      <div class="meeting-timeline">
        ${upcoming.length?upcoming.slice(0,12).map(({meeting:m,date:d},idx)=>`
          <div class="meeting-timeline-row ${idx===0?'next':''}">
            <div class="timeline-line"><span></span></div>
            <div class="meeting-date premium-date"><strong>${niceDate(d,{weekday:'short'})}</strong><span>${niceDate(d,{month:'short',day:'numeric'})}</span></div>
            <div class="meeting-main premium-meeting-main">
              <strong>${esc(m.title)}</strong>
              <span>${formatTime(m.startTime)}${m.endTime?' – '+formatTime(m.endTime):''}</span>
              <small>${esc(m.mode)}${m.location?' · '+esc(m.location):''}${m.recurrence!=='none'?' · '+(m.recurrence==='weekly'?'Weekly':'Every other week'):''}</small>
            </div>
            <div class="meeting-actions premium-actions">
              ${m.url?`<a class="join-btn premium-join" href="${esc(m.url)}" target="_blank" rel="noopener">Join ↗</a>`:''}
              <button class="meeting-delete" data-id="${m.id}" title="Delete meeting">×</button>
            </div>
          </div>`).join(''):'<div class="empty compact-empty">No upcoming meetings.</div>'}
      </div>
    </section>

    <section class="bbyo-panel add-meeting-card premium-add-card">
      <div class="bbyo-panel-head">
        <div><div class="bbyo-kicker">NEW EVENT</div><h2>Add a Meeting</h2><p>Online, in-person, one-time, or recurring.</p></div>
      </div>
      <form id="bbyoMeetingForm" class="meeting-form premium-form">
        <label><span>Meeting name</span><input id="bbyoMeetingTitle" placeholder="e.g. Chapter visit" required></label>
        <label><span>Type</span><select id="bbyoMeetingMode"><option>Online</option><option>In-Person</option></select></label>
        <label><span>Date</span><input id="bbyoMeetingDate" type="date" required></label>
        <label><span>Starts</span><input id="bbyoMeetingStart" type="time" required></label>
        <label><span>Ends</span><input id="bbyoMeetingEnd" type="time"></label>
        <label><span>Repeats</span><select id="bbyoMeetingRecurrence"><option value="none">Does not repeat</option><option value="weekly">Weekly</option><option value="biweekly">Every other week</option></select></label>
        <label class="wide-field"><span>Meeting link</span><input id="bbyoMeetingUrl" type="url" placeholder="https://..."></label>
        <label class="wide-field"><span>Location</span><input id="bbyoMeetingLocation" placeholder="For in-person meetings"></label>
        <button class="bbyo-add-meeting-btn" type="submit">Add to BBYO Calendar <span>＋</span></button>
      </form>
    </section>`;

  document.querySelectorAll('.bbyo-check').forEach(cb=>cb.onchange=()=>{setCheckDone(cb.dataset.id,cb.checked,cb.dataset.scope);renderBbyo()});
  document.querySelectorAll('.meeting-delete').forEach(btn=>btn.onclick=()=>{bbyoMeetings=bbyoMeetings.filter(x=>x.id!==btn.dataset.id);persistBbyoMeetings();renderBbyo()});
  document.querySelectorAll('.crm-last').forEach(el=>el.onchange=()=>{const c=bbyoCounterparts.find(x=>x.id===el.dataset.id);if(c){c.lastCheckIn=el.value;persistBbyoCounterparts();renderBbyo()}});
  document.querySelectorAll('.crm-next').forEach(el=>el.onchange=()=>{const c=bbyoCounterparts.find(x=>x.id===el.dataset.id);if(c){c.nextFollowUp=el.value;persistBbyoCounterparts();renderBbyo()}});
  document.querySelectorAll('.crm-notes').forEach(el=>el.onchange=()=>{const c=bbyoCounterparts.find(x=>x.id===el.dataset.id);if(c){c.notes=el.value;persistBbyoCounterparts()}});
  document.querySelectorAll('.visit-delete').forEach(btn=>btn.onclick=()=>{bbyoVisits=bbyoVisits.filter(x=>x.id!==btn.dataset.id);persistBbyoVisits();renderBbyo()});
  document.querySelector('#chapterVisitForm')?.addEventListener('submit',e=>{
    e.preventDefault();
    const chapter=document.querySelector('#visitChapter').value.trim(), date=document.querySelector('#visitDate').value;
    if(!chapter||!date)return;
    bbyoVisits.push({id:'visit-'+Date.now(),chapter,date,wentWell:document.querySelector('#visitWentWell').value.trim(),needsHelp:document.querySelector('#visitNeedsHelp').value.trim(),followUp:document.querySelector('#visitFollowUp').value.trim()});
    persistBbyoVisits();renderBbyo();
  });
  document.querySelector('#bbyoMeetingForm')?.addEventListener('submit',e=>{
    e.preventDefault();
    const title=document.querySelector('#bbyoMeetingTitle').value.trim(), startDate=document.querySelector('#bbyoMeetingDate').value, startTime=document.querySelector('#bbyoMeetingStart').value;
    if(!title||!startDate||!startTime)return;
    bbyoMeetings.push({id:'bbyo-'+Date.now(),title,mode:document.querySelector('#bbyoMeetingMode').value,startDate,startTime,endTime:document.querySelector('#bbyoMeetingEnd').value,recurrence:document.querySelector('#bbyoMeetingRecurrence').value,url:document.querySelector('#bbyoMeetingUrl').value.trim(),location:document.querySelector('#bbyoMeetingLocation').value.trim()});
    persistBbyoMeetings(); renderBbyo();
  });
}
function renderAll(){renderToday();renderWeek();renderCalendar();renderSchedule();renderCollegeApps();renderBbyo()}
renderAll();
setInterval(()=>renderLiveStatus(),1000);
if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});