/*

[자바 스크립트 상식 사전]
Audio => s   /   setTimeout => ms

[기타 상식]
유튜브 시작 시간 링크는 정수만 가능, 소수점을 입력하면 처음부터.
*/



/*
로컬 스토리지 변수

연습 페이지의 정답률
correctCount *int
wrongCount *int

오디오 볼륨
currentVolume min=0.05 max=1 step=0.05

자동재생
autoPlay *bool
*/

//선언
let aimyon = new Audio("");
let playTime = 7000;
let randomNumber;
let songNum;
let correctAnswer;
let isAscending = true;
let sortVar;
let langSetting = 0;
let correctCount = 0;
let wrongCount = 0;
let removeTargetArr = [];
let isCorrect;
let randomPart;
let audioLoaded;

const howManySongs = songsArray.length;

const scoreBoard = document.querySelector(".scoreBoard");
const patchNote = document.querySelector("pre");
const albumList = document.querySelector(".albumList");
const albums = document.querySelectorAll(".albumList li")
const songList = document.querySelector(".songList");
const para = document.querySelector(".para");
const para2 = document.querySelector(".para2");

let curLang = "ko"; //ko ja en
let curFolder = "main"; //main all album
let curPage = "mainPage"; //mainPage testPage gamePage playPage

let curStarting; //intro random
let curPlayTime; //500 1000 2000 5000
let curRound; //3 5 10 20

let curAnswer;

let gameStartTime; // 시작 시간 저장용 number


const listHandler = (event) => {
    selectAnswer(findSong(curLang, event.target.textContent)["code"], event.target, true)
}
const albumHandler = (event) => {
    selectAnswer(event.target.attributes[0].value, event.target, true);
}
const afterCorrect = (event) => {
    event.target.setAttribute("style", "outline: 1px solid")
}



// localStorage.clear();
// 로드시
window.onload = ()=>{
    // 정답,오답 불러오기
    correctCount = parseInt(localStorage.getItem("correctCount"));
    wrongCount = parseInt(localStorage.getItem("wrongCount"));
    if(!correctCount){correctCount = 0;}
    if(!wrongCount){wrongCount = 0;}
    // 스코어보드 갱신
    stateView();
    // 버튼 언포커싱 이벤트 추가
    unFocusing(); 
    // 볼륨 조절
    curVolume = Number(localStorage.getItem("currentVolume"));
    ppVolumeBar.value = curVolume * 100;
    // 자동재생
    autoPlay = localStorage.getItem("autoPlay") === "true" ? true : false;
    ppAutoPlayBtn.innerText = autoPlay === true ? "자동재생ON" : "자동재생OFF";
}



// Random버튼 => correctAnswer에 랜덤값 저장
document.querySelector(".randomButton").addEventListener("click", randomSong);
function randomSong(){
    audioLoaded = false;

    randomNumber = getRandom(howManySongs);
    para.textContent = randomNumber;
    para2.textContent = "";
    correctAnswer = "song" + randomNumber;
    aimyon.src = "/songList/song"+randomNumber+".mp3";

    // 비활성화된 버튼 초기화
    if(curPage !== "playPage"){
        addClickEvent();
    }

    // 랜덤 파트 정하기
    aimyon.addEventListener('loadedmetadata', () => {
        randomPart = Math.floor(aimyon.duration - getRandom(aimyon.duration));
        audioLoaded = true;
        if(autoPlay) ppPlaySong();
    });
}

// Play버튼
const playBtn = document.querySelector(".playButton");
playBtn.addEventListener("click", ()=>{
    playBtn.setAttribute("disabled", true);
    aimyon.volume = curVolume;
    aimyon.play();
    aimyon.currentTime = findSong("code", randomNumber)["startTime"];
    // playTime밀리초 후 정지
    setTimeout(()=>{
        aimyon.pause();
        playBtn.removeAttribute("disabled");
    }, playTime);
});

// 랜덤Play 버튼
const randomPlayBtn = document.querySelector(".random_playButton");
randomPlayBtn.addEventListener("click", ()=>{
    randomPlayBtn.setAttribute("disabled", true);
    aimyon.volume = curVolume;
    aimyon.currentTime = getRandomTime();
    aimyon.play();
    // playTime밀리초 후 정지
    setTimeout(()=>{
        aimyon.pause();
        randomPlayBtn.removeAttribute("disabled");
    }, playTime);
});
function getRandomTime(){
    return randomPart;
}


// Pause버튼 ... 이제는 정답 공개 버튼
document.querySelector(".pauseButton").addEventListener("click", ()=>{
    // aimyon.pause();
    // aimyon.currentTime = 0;

    // function findSong(obj){
    //     return obj.code === randomNumber;
    // }
    // para2.textContent = songsArray.find(findSong)[curLang];
    para2.textContent = findSong("code", randomNumber)[curLang];

    console.log(aimyon.duration);

    
})






// 난이도(재생시간) 변경
const levelSelector = document.querySelector(".levelSelector");
const levels = document.querySelectorAll(".levelSelector li");
levelSelector.addEventListener("mouseover", ()=>{
    for(const item of levels){
        item.removeAttribute("hidden");
    }
});
levelSelector.addEventListener("mouseout", ()=>{
    for(const item of levels){
        item.setAttribute("hidden", true);
    }
});
for(const level of levels){
    level.addEventListener("click", ()=>{
        let difficulty = level.textContent;
        document.querySelector(".levelSelector span").textContent = "난이도 : " + difficulty;
        switch(difficulty){
            case "7초":
                playTime = 7000;
                break;
            case "3초":
                playTime = 3000;
                break;
            case "1초":
                playTime = 1000;
                break;
        }});
}



// 언어 클릭 이벤트
const languages = document.querySelectorAll(".languageMenu li")
for(const language of languages){
    language.addEventListener("click", ()=>{
        curLang = language.attributes[0].value; // ko, ja, en
        if(curFolder==="main"){
            
        }
        else if(curFolder==="all"){
            listSorter(curLang);
            indicateOrder(language);
        }
        else if(curFolder==="album"){
            albumLanguage();
        }
        for(const language of languages){
            language.classList.remove("selected");
        }
        language.classList.add("selected");
    })
}


// 전체보기, 정렬, 언어
const listSorter = function(){
    // songList 전체 삭제
    const t = document.querySelector(".removeTarget");
    if(t){t.remove();}
    patchNote.setAttribute("style", "display:none");

    // 현재 상태 체크
    if(isAscending){num = 1;}
    else num = -1;
    isAscending = !isAscending;
    // 언어 변경 시 오름차순으로
    if(sortVar !== curLang){
        num = -1;
        isAscending = true;
    }sortVar = curLang;
    
    // sort
    if(curLang==="ja"){
        songsArray.sort(function(a, b){
            if(a["hiragana"] < b[["hiragana"]]) return num;
            if(a[["hiragana"]] > b[["hiragana"]]) return -num;
            else return 0;})
        }
        else{
            songsArray.sort(function(a, b){
            if(a[curLang].toLowerCase() < b[curLang].toLowerCase()) return num;
            if(a[curLang].toLowerCase() > b[curLang].toLowerCase()) return -num;
            else return 0;});
        }
    
    // 목록 생성
    const d = document.createElement("div");
    d.setAttribute("class", "removeTarget");
    for(const i of songsArray){
        const e = document.createElement("li");
        e.textContent = i[curLang];
        d.appendChild(e);

        // 색칠, 클릭 이벤트 추가
        if(curPage === "testPage"){
            if(removeTargetArr.find((element)=> element==i["code"])){
                selectAnswer(i["code"], e, false);
            }
            else if(isCorrect){
                
            }
            else{
                e.addEventListener("click", listHandler, {once: true});
            }
        }
        else if(curPage === "playPage" && !submitted){
            e.addEventListener("click", ppSubmitHnadler)
        }
    }
    songList.appendChild(d);
    if(isCorrect){removeClickEvent();}
}




// 폴더 클릭 이벤트
const folders = document.querySelectorAll(".folder li");
for(const f of folders){
    f.addEventListener("click", ()=>{
        // 메뉴 비우기
        patchNote.setAttribute("style", "display:none");
        const t = document.querySelector(".removeTarget");
        if(t){t.remove();}

        curFolder = f.attributes[0].value;
        folderEvent(curFolder); // all, album
    })
}
function folderEvent(f){
    if(f==="all"){
        isAscending = false;
        listSorter(curLang);
        indicateOrder(Array.from(languages).find((element)=>element.attributes[0].value===curLang));
    }
    else if(f==="album"){
        albumLanguage();
        albumList.removeAttribute("style");

        for(const e of albums){
            if(removeTargetArr.find((element)=> element==e.attributes[0].value)){
                selectAnswer(e.attributes[0].value, e, false);
                e.removeEventListener("click", albumHandler);
            }
        }
        
    }
    // toggle 뒤로가기or폴더
    for(const f of folders){
    f.setAttribute("style", "display:none");
    }
    mainFolder.removeAttribute("style");
}


// 뒤로가기 클릭
const mainText = patchNote.textContent;
const mainFolder = document.querySelector(".main");
mainFolder.addEventListener("click", ()=>{
    // 앨범 접기
    if(curFolder==="album"){
        for(const e of albumLists){
            e.setAttribute("class", "hidden-children");}}

    curFolder = "main";

    //화살표 제거
    const a = document.querySelector(".arrow");
    if(a){a.remove();}
    // 메뉴 비우기
    albumList.setAttribute("style", "display:none");
    const t = document.querySelector(".removeTarget");
    if(t){t.remove();}
    // 상단 탭 변화
    mainFolder.setAttribute("style", "display:none");
    for(const f of folders){
        f.removeAttribute("style");
    }
    // 메인화면 콘텐츠
    patchNote.removeAttribute("style");
});




// 앨범 목록에 코드 추가, 클릭 이벤트
for(const e of albums){
    const c = findSong("ja", e.textContent)["code"];
    e.setAttribute("name", c);
}


// 앨범 접기/펼치기 클릭 이벤트
const albumLists = document.querySelectorAll(".albumList ul");
for(const e of albumLists){
    e.children[0].addEventListener("click", ()=>{
        if(e.classList.contains("hidden-children")){
            for(const t of albumLists){
                t.classList.add("hidden-children");
            }
            e.classList.remove("hidden-children");
        }
        else{
            for(const t of albumLists){
                t.classList.add("hidden-children");
            }
        }
    })
}

const albumLanguage = function(){
    for(const e of albums){
        e.textContent = findSong("code", e.attributes[0].value)[curLang];
    }
}





// mainPage의 모든 버튼
const pages = document.querySelectorAll(".mainPage button");
for(const e of pages){
    e.addEventListener("click", ()=>{gotoPage(e)})
}
// 돌아가기 버튼
const backBtns = document.querySelectorAll(".goto_mainPage");
for(const t of backBtns){
    t.addEventListener("click", ()=>{
        gotoPage(t)
        aimyon.pause();

        // 페이지별 동작
        if(t.parentElement.classList.contains("testPage")){
            playBtn.removeAttribute("disabled");
            randomPlayBtn.removeAttribute("disabled");
            addClickEvent();
            removeClickEvent();
        }
        else if(t.parentElement.classList.contains("playPage")){
            ppBackBtn();
            ppAnswerArr = [];
        }
    });
    
}
// page 이동 버튼 함수
const gotoPage = function(e){
    if(e.classList.contains("testPlayBtn")){return;}
    const str = e.attributes[0].value.slice(5);
    const newPage = document.querySelector(`.${str}`);
    const oldPage = document.querySelector(`.${curPage}`);
    oldPage.classList.add("hidden-children");
    newPage.classList.remove("hidden-children");
    curPage = str;

    // 연습하기 페이지, 리스트 클릭 이벤트 추가
    if(str === "testPage"){
        if(curFolder === "all"){
            isAscending = !isAscending;
            listSorter();
            addClickEvent();
        }
        randomSong();
    }

    // 실전 시작하자 버튼
    if(str === "playPage"){
        enterPlayPage();
    }
}



    // --gamePage

// selectStarting
const startings = document.querySelectorAll(".selectStarting li")
for(const e of startings){
    e.addEventListener("click", ()=>{
        for(const t of startings){
            t.classList.remove("selected");
        }
        curStarting = e.attributes[0].value;
        e.classList.add("selected");
        
        // if(e.classList.contains("intro")){
        //     curStarting = "intro";
        // }
        // else if(e.classList.contains("random")){
        //     curStarting = "random";
        // }
    })
}

// selectTime
const times = document.querySelectorAll(".selectTime li")
for(const e of times){
    e.addEventListener("click", ()=>{
        for(const t of times){
            t.classList.remove("selected");
        }
        e.classList.add("selected");

        curPlayTime = Number(e.innerText) * 1000;
    })
}

// selectRound
const rounds = document.querySelectorAll(".selectRound li")
for(const e of rounds){
    e.addEventListener("click", ()=>{
        for(const t of rounds){
            t.classList.remove("selected");
        }
        e.classList.add("selected");

        curRound = e.innerText === "1목숨" ? 5140 : Number(e.innerText);
    })
}

// gameStart 시작하자 버튼
const goto_playPage = document.querySelector(".goto_playPage");
goto_playPage.addEventListener("click", (event)=>{
    if(!curStarting || !curPlayTime || !curRound){
        popAlertWindow("옵션을 선택해 주세요");
    }
    else{
        gotoPage(event.target);
        gameStartTime = Date.now();
    }
})

    // gamePage--




    // --playPage 실전 플레이 페이지
const ppPlayBtn = document.querySelector(".playPage .playBtn");
const ppAnswerBtn = document.querySelector(".playPage .answerBtn");
const ppNextBtn = document.querySelector(".playPage .nextBtn");
const ppShareBtn = document.querySelector(".playPage .shareBtn");
const ppAnswerPara = document.querySelector(".playPage .answerPara");
const ppProgressPara = document.querySelector(".playPage .progressPara");
const ppResultPara = document.querySelector(".playPage .resultPara");
const ppYtLink = document.querySelector(".playPage .ytLink");
const ppAutoPlayBtn = document.querySelector(".autoPlayBtn");

let ppAnswerArr = []; // 문제의 정답, 겸 중복 방지
let ppSubmitArr = []; // 유저의 답
let curProgress = 1; // 몇 번째 문제인가
let submitted; // 리스트 컨트롤
let ppAnswerO = 0; // 정답 수 
let ppAnswerX = 0; // 오답 수
let ppResult = ``; // 결과 텍스트
let seikaiLink; // 유튜브 링크
let curVolume = 0.4; // 0 ~ 1
let elapsedTime;
let timeoutId; // 듣기 재생 컨트롤
let gameOver; // 1목숨 종료
let autoPlay // 자동재생

// 입장 시
const enterPlayPage = function(){
    randomSong();
    // 컨트롤
    ppAnswerO = 0;
    ppAnswerX = 0;
    curProgress = 1;
    ppResult = ``;
    ppAnswerArr = [];
    ppSubmitArr = [];
    ppYtLink.innerText = " ";
    ppNextBtn.innerText = "다음";
    ppShareBtn.classList.add("hidden");
    gameOver = false;
    // 진행도 표시
    ppProgressPara.innerText = `${curProgress}/${getCurRound()}`
    // 리스트 컨트롤
    if(curFolder === "all"){
        isAscending = !isAscending;
        listSorter();
    }
    for(const e of albums){
        e.addEventListener("click", ppSubmitHnadler);
    }
}

//듣기 버튼
let isPlaying = false;

const ppPlaySong = function(){
    if (!isPlaying && audioLoaded) {
        isPlaying = true;
        if(curStarting === "intro"){
            aimyon.currentTime = findSong("code", randomNumber)["startTime"];
        }
        else if(curStarting === "random"){
            aimyon.currentTime = randomPart;
        }
        aimyon.volume = curVolume
        aimyon.play();

        timeoutId = setTimeout(() => {
            aimyon.pause();
            isPlaying = false;
        }, curPlayTime);
    }
    // Audio 로드 후 재생되도록
    else if(!isPlaying && !audioLoaded){
        isPlaying = true;
        aimyon.addEventListener('loadedmetadata', ()=>{
            aimyon.play();
            setTimeout(() => {
                aimyon.pause();
                isPlaying = false;
            }, curPlayTime);
        }, { once : true })}
    }
ppPlayBtn.addEventListener("click", ppPlaySong)

// 제출 버튼
ppAnswerBtn.addEventListener("click", (evnet)=>{
    if(!curAnswer){
        popAlertWindow("노래를 선택해 주세요");
    }
    else{
        let curAnswerCode = findSong(curLang, curAnswer.textContent)["code"];

        //마지막 문제일 경우 시간 측정
        if(curProgress >= curRound){
            elapsedTime = Date.now() - gameStartTime;
        }
        // 정답 비교
        if(findSong(curLang, curAnswer.textContent)["code"] == randomNumber){
            popOX("o");
            ppAnswerO++;
        }
        else{
            popOX("x");
            ppAnswerX++;
            if(curRound === 5140){
                elapsedTime = Date.now() - gameStartTime;
                gameOver = true;
                ppNextBtn.innerText = "결과 보기";
            }
        }
        // 리스트 클릭 이벤트 제거
        ppRemoveSubmitEvent();
        // 정답 기록
        ppAnswerArr.push(randomNumber); // +중복 방지 배열
        ppSubmitArr.push(curAnswerCode);
        ppResult +=
`${curProgress}번 답 : ${findSong("code", randomNumber)[curLang]}
나의 답 : ${findSong("code", curAnswerCode)[curLang]}

`;
        // 텍스트 변화, 정답 공개
        ppAnswerPara.innerText = `정답은 ~~~ `;
        ppYtLink.innerText = findSong("code", randomNumber)[curLang];
        seikaiLink = findSong("code", randomNumber)["link"];
        curStarting === "intro" ? seikaiLink += `&t=${Math.floor(findSong("code", randomNumber)["startTime"])}` : seikaiLink += `&t=${randomPart}`;
        ppYtLink.setAttribute("href", seikaiLink);
        // 컨트롤
        evnet.target.setAttribute("disabled", " ");
        ppNextBtn.removeAttribute("disabled");
        submitted = true;
        curAnswer = undefined;
    }
})


// 다음 버튼
ppNextBtn.addEventListener("click", (evnet)=>{
    
    // 컨트롤
    aimyon.pause();
    isPlaying = false;
    clearTimeout(timeoutId);
    evnet.target.setAttribute("disabled", " ");
    submitted = false;
    curProgress++;
    ppAnswerPara.innerText = '';
    ppYtLink.innerText = " ";
    popOX("next");
    // 리스트 컨트롤
    if(curProgress <= curRound){
        if(curFolder === "all"){
            isAscending = !isAscending;
            listSorter();
        }
        for(const e of albums){
            e.addEventListener("click", ppSubmitHnadler);
        }
    }
    
    // 1목숨 종료
    if(gameOver){
        curProgress--;
        ppAnswerArr = [];
        ppShareBtn.classList.remove("hidden");
        ppNextBtn.setAttribute("disabled", " ");
        ppResultPara.innerText = 
`결과는 ~~~ 연속 ${ppAnswerO}문제 정답!
걸린 시간 : ${elapsedTime/1000}초

${ppResult}`;}

        
        else{// 진행도에 따른 컨트롤
            if(curProgress === curRound){// 마지막에 버튼 변화
                evnet.target.innerText = "결과 보기";
            }
            if(curProgress > curRound){// 종료
                ppAnswerArr = [];
                ppShareBtn.classList.remove("hidden");
                ppResultPara.innerText = 
`결과는 ~~~ ${curRound}문제 중 ${ppAnswerO}문제 정답!
걸린 시간 : ${elapsedTime/1000}초

${ppResult}`;}

            else{// 진행
                randomSong();
                ppAnswerBtn.removeAttribute("disabled");
                ppProgressPara.innerText = `${curProgress}/${getCurRound()}`
            }
}})

// 뒤로가기 버튼
const ppBackBtn = function(){
    // 컨트롤
    submitted = false;
    ppAnswerO = 0;
    ppAnswerX = 0;
    curProgress = 1;
    ppAnswerPara.innerText = '';
    ppResultPara.innerText = '';
    ppNextBtn.innerText = "다음";
    ppNextBtn.setAttribute("disabled", "");
    ppAnswerBtn.removeAttribute("disabled");
    ppShareBtn.classList.add("hidden");
    ppRemoveSubmitEvent();
}

// 공유 버튼 클릭 이벤트
ppShareBtn.addEventListener("click", ()=>{
    let copyText;
    let starting = curStarting === "intro" ? "인트로부터" : "무작위 부분을";
    let ment = curRound === 5140 ? `연속으로` : `${curRound}문제 중`
    
    copyText =
`[아이묭 노래 듣고 맞추기]
${starting} ${curPlayTime/1000}초 듣고
${ment} ${ppAnswerO}문제를 맞혔어요!
기록 : ${elapsedTime/1000}초
https://chocogold.netlify.app/`;

    copyToClipboard(copyText);
})

// 볼륨 조절
const ppVolumeBar = document.querySelector(".playPage input");
ppVolumeBar.addEventListener("input", (event)=>{
    curVolume = event.target.value / 100;
    aimyon.volume = curVolume;
    localStorage.setItem("currentVolume", curVolume);
})

// 리스트 클릭 이벤트
const ppSubmitHnadler = function(event){
    curAnswer = event.target;
    ppAnswerPara.innerText = curAnswer.textContent;
}

// 리스트 클릭 이벤트 삭제
const ppRemoveSubmitEvent = function(){
    const targets = document.querySelectorAll(".removeTarget li");
    for(const t of targets){
        t.removeEventListener("click", ppSubmitHnadler);
    }
    for(const e of albums){
        e.removeEventListener("click", ppSubmitHnadler);
    }
}

// 진행도 표시용
const getCurRound = function(){
    if(curRound === 5140) return "???";
    else return curRound;
}

// autoPlay 버튼. 자동재생
ppAutoPlayBtn.addEventListener("click", (event)=>{
    if(autoPlay){
        autoPlay = false;
        event.target.innerText = "자동재생OFF"
        localStorage.setItem("autoPlay", false)
    }
    else{
        autoPlay = true;
        event.target.innerText = "자동재생ON"
        localStorage.setItem("autoPlay", true)
    }
})
    // playPage--





















    // --alertWindow
const closeWindow = function(){
    alertWindow.classList.add("hidden");
}
const alertWindow = document.querySelector(".alertWindow");
const closeWindowBtn = document.querySelector(".window button");
const alertPara = document.querySelector(".window p")
closeWindowBtn.addEventListener("click", closeWindow);
// alertWindow.addEventListener("click", closeWindow);
alertWindow.addEventListener("click", (event)=>{
    if(event.target === event.currentTarget){
        closeWindow();
    }
});

document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){closeWindow();}
});


const popAlertWindow = function(p){
    alertPara.innerText = p;
    alertWindow.classList.remove("hidden");
}
    // alertWindow--


    // --OX 표시
const popOX = function(answer){
    // 다음 버튼 누르면 바로 사라지기
    if(answer === "next"){
        oxs = document.querySelector(".OX").children;
        for(const e of oxs){
            e.classList.add("hidden");
        }
        clearTimeout(oxtimeout);
        return;
    }

    let ox;
    const sound = new Audio;
    answer === "o" ? ox = document.querySelector(".OX .correct") : ox= document.querySelector(".OX .incorrect");
    answer === "o" ? sound.src="/sourceFile/Sound_correct.mp3" : sound.src="/sourceFile/Sound_incorrect.mp3";
    sound.volume = curVolume;
    sound.play()
    ox.classList.remove("hidden");
    oxtimeout = setTimeout(()=>{ox.classList.add("hidden")}, 1500);
}
    // OX 표시--




// 화살표 표시
const indicateOrder = function(element){
    const a = document.querySelector(".arrow");
    if(a){a.remove();}

    const arrow = document.createElement("span")
    arrow.setAttribute("class", "arrow");
    if(isAscending){
        arrow.textContent = "▲";
    }
    else arrow.textContent = "▼";
    element.appendChild(arrow);
}


// 스코어보드 정답률 갱신
const stateView = function(){
    scoreBoard.textContent =
`정답 : ${correctCount}
오답 : ${wrongCount}
정답률 : ${correctRate``}%`;
// 정답률 : ${Math.round(correctCount/ wrongCount* 100)}%`;
}
function correctRate(){
    if(correctCount===0 && wrongCount){
        return "0";
    }
    else if(!correctCount/wrongCount){
        return "-";
    }
    else{return Math.round(correctCount / (correctCount + wrongCount) * 100);}
}






// 클릭이벤트 초기화
const addClickEvent = function(){
    for(const e of albums){
        e.addEventListener("click", albumHandler, {once: true});
        e.removeAttribute("class");
        e.removeAttribute("style");
        e.removeEventListener("mouseover", afterCorrect);
    }
    const targets = document.querySelectorAll(".removeTarget li");
    for(const e of targets){
        e.addEventListener("click", listHandler);
        e.removeAttribute("class");
        e.removeAttribute("style");
        e.removeEventListener("mouseover", afterCorrect);
    }
    isCorrect = false;
}

// 클릭이벤트 전부 제거
const removeClickEvent = function(){
    for(const e of albums){
        e.removeEventListener("click", albumHandler);
        e.addEventListener("mouseover", afterCorrect);
        
    }
    const targets = document.querySelectorAll(".removeTarget li");
    for(const e of targets){
        e.removeEventListener("click", listHandler);
        e.addEventListener("mouseover", afterCorrect);
        
    }
    isCorrect = true;
}

// songsArray에서 찾기
function findSong(target, compare){
    return songsArray.find((element)=> element[target]==compare);
}


// 좌측 메뉴 클릭 이벤트, 정답 제출 이벤트
function selectAnswer(num, target, submit){
    if(num == randomNumber){
        if(submit){
            alert("정답");
            correctCount++
            localStorage.setItem("correctCount", correctCount);
            removeClickEvent();
        }
        if(curPage === "testPage"){target.setAttribute("class", "correct");}
    }
    else{
        if(submit){
            alert("오답");
            wrongCount++;
            localStorage.setItem("wrongCount", wrongCount);
        }
        if(curPage === "testPage"){target.setAttribute("class", "wrong");}
    }
    if(submit){
        removeTargetArr.push(num);
        stateView();
    }
}

// 0 ~ num-1 임의 출력
function getRandom(num){
    let rNum = Math.floor(Math.random() * num);

    if(curStarting === "intro"){
        if(ppAnswerArr.includes(rNum)){
            return getRandom(howManySongs);
        }
        else return rNum;
    }
    else return rNum;
}

// 버튼 언포커싱
const unFocusing = function(){
    const btns = document.querySelectorAll("button")
    for(const btn of btns){
        btn.addEventListener("click", (event)=>{
            event.target.blur();
        })}
}

// 클립보드에 텍스트를 복사하는 함수
function copyToClipboard(text) {
    // 최신 브라우저 지원 (Clipboard API)
    navigator.clipboard.writeText(text).then(function() {
        popAlertWindow("클립보드에 복사되었습니다.");
    }).catch(function(err) {
        console.error("에러 발생: ", err);
    });
}

// debugBtn console.log 출력기
const debugBtn = document.querySelector(".debugBtn");
debugBtn.addEventListener("click", ()=>{
    popAlertWindow(
    `변수 현황
    ${getlog({gameStartTime})}
    ${getlog({ppAnswerArr})}
    ${getlog({randomPart})}
    ${getlog({curRound})}
    ${getlog({autoPlay})}
    `);
    // randomSong();
    console.log(getRandom(100));
})
function log(obj){
    for(let key in obj){
        console.log(`${key} : ${obj[key]}`);
    }
}
function getlog(obj){
    for(let key in obj){
        result = `${key} : ${obj[key]}`;
    }
    return result;
}






// // startTime 정하는 용도. 임시
// const setNum = document.querySelector(".testInput");
// playNum.addEventListener("click", testPlay)
// function testPlay(){
//     aimyon.src = `/songList/song${setNum.value}.mp3`;
//     aimyon.currentTime = findSong("code", setNum.value)["startTime"];
//     aimyon.volume = curVolume
//     aimyon.play();
//     timeoutId = setTimeout(() => {
//         aimyon.pause();
//         isPlaying = false;
//     }, 500);
// }

// // 서버 테스트
// const tPara = document.querySelector(".tPara");
// const tBtn = document.querySelector(".tBtn");
// tBtn.addEventListener("click", ()=>{
//     fetch("http://121.177.112.136:8080/getScore/goldchoco"
//     )
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(data => {tPara.innerText = data.userId;})
// })
