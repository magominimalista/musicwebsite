const music = new Audio('public/audio/sample.mp3');

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', ()=> {
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `public/audio/${index}.mp3`;
        poster_master_play.src = `public/img/playlist/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        })

        song_title.forEach(ele => {
            let {songName} = ele;
            title.innerHTML = songName;
        })

        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');

        music.addEventListener('ended', () => {
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })

        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})

const songs = [
    {
        id:'1',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "public/img/playlist/1.jpg"
    },
    {
        id:'2',
        songName:`Alan Walker - Fadded <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "public/img/playlist/2.jpg"
    },
    {
        id:'3',
        songName:`Headlights [Bass Boosted] Car Music <br>
        <div class="subtitle">Alok & Alan Walker</div>`,
        poster: "public/img/playlist/3.jpg"
    },
    {
        id:'4',
        songName:`You'reToo Precious <br>
        <div class="subtitle">James Blake</div>`,
        poster: "public/img/playlist/4.jpg"
    },
    {
        id:'5',
        songName:`Don't Let Me Down <br>
        <div class="subtitle">Milky Chance e Jack Johnson
        </div>`,
        poster: "public/img/playlist/5.jpg"
    },
    {
        id:'6',
        songName:`ily (I love you Baby)<br>
        <div class="subtitle">Surf Mesa
        </div>`,
        poster: "public/img/playlist/6.jpg"
    },
    {
        id:'7',
        songName:`Malibu <br>
        <div class="subtitle">Kim Petras
        </div>`,
        poster: "public/img/playlist/7.jpg"
    },
    {
        id:'8',
        songName:`Stupid Love <br>
        <div class="subtitle">Lady Gaga
        </div>`,
        poster: "public/img/playlist/8.jpg"
    },
    {
        id:'9',
        songName:`You Da Baddest (part. Nicki Minaj) <br>
        <div class="subtitle">Future
        </div>`,
        poster: "public/img/playlist/9.jpg"
    },
    {
        id:'10',
        songName:`Y U Gotta B Like That <br>
        <div class="subtitle">Audrey Mika
        </div>`,
        poster: "public/img/playlist/10.jpg"
    },
    {
        id:'11',
        songName:`It'll Be Alright <br>
        <div class="subtitle">Teqkoi
        </div>`,
        poster: "public/img/playlist/11.jpg"
    },
    {
        id:'12',
        songName:`Midnight Sky <br>
        <div class="subtitle">Milie Sirus
        </div>`,
        poster: "public/img/covers/3.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=> {
    element.getElementsByTagName('span')[0].innerHTML = songs[i].id;
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})