import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
      {
        name: "BMI Calculator",
        image: "https://i.postimg.cc/SK6CdnTm/Screenshot-2022-07-22-105429.png",
        desc: "This was one of first javascript projects and I fully enjoyed the process",
        github: "https://github.com/Clayton0205/BMI",
        live: "https://magnificent-pothos-536acf.netlify.app"

      },
      {
        name: "Temp. Calculator",
        image: "https://i.postimg.cc/wBnx12cv/Screenshot-2022-07-22-105707.png",
        desc: "Doing this made me relise how broken farenheit is",
        github: "https://github.com/Clayton0205/TEMP.",
        live: "https://bright-meringue-539bac.netlify.app"

      },
      {
        name: "Portfolio Project",
        image: "https://i.postimg.cc/hPPBmjTL/Screenshot-2022-07-20-151501.png",
        desc: "This is my previous Portfolio that I am proud of because of the amount of code in it",
        github: "https://github.com/Clayton0205/Elementary-My-Dear-",
        live: "https://elementary-my-dear.netlify.app/"

      },
      {
        name: "Store Project",
        image: "https://i.postimg.cc/HLN4vrXK/Screenshot-2022-07-22-105925.png",
        desc: "I created a store that sells countries with commodities such as area of country, population and my favorite...Amount of McDonalds in a country",
        github: "https://github.com/Clayton0205/Country-Trader",
        live: "https://incredible-chaja-0ff9ff.netlify.app"

      },
      {
        name: "Holiday",
        image: "https://i.postimg.cc/d3nD9x54/Holiday.png",
        desc: "When I got a task that required basic Tourism I was exstatic. This is my all time favorite project",
        github: "https://github.com/Clayton0205/main",
        live: "https://spectacular-arithmetic-1793e5.netlify.app/"

      },
      {
        name: "Calculator",
        image: "https://i.postimg.cc/gj0GGkKH/Screenshot-2022-07-21-093229.png",
        desc: "This was done in two parts styling that we earlier in the year and fuctionality that we did when we learned Javascript",
        github: "https://github.com/Clayton0205/NewCalc",
        live: "https://bejewelled-crisp-23e659.netlify.app"

      }
    ],
    testimonials: [{
      name: "Joel Mukanya",
      title: "- Coding Lecturer -",
      class: "https://i.postimg.cc/59FQ3XjD/4.jpg",
      image: "https://i.postimg.cc/5N9ZRKs8/joel2.jpg",
      desc: "Clayton is a personable and easy-to-work-with person. Adding him to your coding team would be a wise choice"
    },
    {
      name: "Daniel Fredericks",
      title: "- Peer -",
      class: "https://i.postimg.cc/c4FWtm0W/3.webp",
      image: "https://i.postimg.cc/nc91rHWT/Daniel-3.jpg",
      desc: "Clayton has the potential to become an asset to anyone that would hire him. He is amazing to work with and as a colleague it has been a pleasure to watch his coding develop, and I believe he will only get better and better"
    },
    {
      name: "Mika Rinquest",
      title: "- Peer -",
      class: "https://i.postimg.cc/fbwYqD1m/5.webp",
      image: "https://i.postimg.cc/7Lq737HP/img-6815.jpg",
      desc: "Clayton is a bright-minded individual that can quickly familiarize himself with new work. He will easily make any workplace brighter"
    },
    {
      name: "Muddathir Dawood",
      title: "- Peer -",
      class: "https://i.postimg.cc/m2YwmXtx/7.webp",
      image: "https://i.postimg.cc/GmDwF8Mf/Muddathir-1.jpg",
      desc: "Clayton is a developer with potential to become something great in the future. It is a pleasure watching his skill grow with each project he is given and motivates me and other to do better. He will add an enormous amount of value to any team"
    },
    {
      name: "Jared Isaacs",
      title: "- Peer -",
      class: "https://i.postimg.cc/nrYDGWT0/6.jpg",
      image: "https://i.postimg.cc/hPpb2pYz/Jared-1.jpg",
      desc: "Clayton is an outgoing, hardworking, creative web developer. Who sets out to achieve his goals through perseverance and determination. As his colleague I see a bright future filled with prosperity being set in front of him, with his iron will to overcome any impediments that comes he way. As such he has the set skills to fulfill any task that will be given to him, making him a great asset to any business or company."
    },
    {
      name: "Bulelani Skhikhi",
      title: "- Peer -",
      class: "https://i.postimg.cc/8c8RHMGP/2.jpg",
      image: "https://i.postimg.cc/59kQ5wxB/Bulelani-1.jpg",
      desc: "I think even if I did the research mentioned above, it would be a total waste of money because if those people don't believe in the testimonials, they won't believe in the research at all. They would say that I made it all up. So why waste money?"
    }
    ],
    workex: [{
         title: "Stream manager for TeamCRAMP",
         time: "6 months",
         details: "I made sure that everything ran smoothly while they streamed and acted as an advisor when big changes were made in the background of the their cannel"
    },
    {
      title: "Garden work for Matthew Petters",
      time: "1 month",
      details: "He asked me to help him take out the old lawn and of the previous owners and of course I stepped up and dug up the old grass"
 }
  ],
  education: [{
    title: "Swartland Primary and High School",
    image: "https://i.postimg.cc/rss6CMPV/unnamed.jpg",
    time: "12 years",
    details: "My hometown did not have a lot of options and I am lucky that I got into the best it had to offer twice. Swartland to me a lot of core values that I still practice today"
  },
  {
    title: "Lifechoices Coding Academy",
    image: "https://i.postimg.cc/xC4QZXHJ/download.png",
    time: "6 Months",
    details: "I went from almost nothing about coding to doing a decent job on project. The life skills sessions and personal developement also improve the person I aspire to be"
  }
]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
