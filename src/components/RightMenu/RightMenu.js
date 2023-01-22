import React from 'react';
import './RightMenu.css';

const news = [
    {
        text:"German caution on Ukraine arms rooted in political culture.",
        link : "https://www.newindianexpress.com/world/2023/jan/21/german-caution-on-ukraine-arms-rooted-in-political-culture-2540033.html"
    },
    {
        text:"Allies fail to agree on heavy tanks sought by Ukraine",
        link:"https://www.newindianexpress.com/world/2023/jan/21/allies-fail-to-agree-on-heavy-tanks-sought-by-ukraine-2540016.html",
    },
    {
        text:"U.S. Fed probes Goldman Sachs consumer business",
        link:"https://economictimes.indiatimes.com/news/international/business/u-s-fed-probes-goldman-sachs-consumer-business/articleshow/97190327.cms",
    },
    {
        text:"Blinken cautions China against changing status quo on Taiwan",
        link:"https://www.newindianexpress.com/world/2023/jan/21/blinken-cautions-china-against-changing-status-quo-on-taiwan-2540009.html",
    },
    {
        text:"UK PM fined 50 pounds for not wearing seat belt; Rishi Sunak accepts mistake, apologises",
        link:"https://economictimes.indiatimes.com/news/international/uk/uk-pm-fined-50-pounds-for-not-wearing-seat-belt-rishi-sunak-accepts-mistake-apologises/videoshow/97188329.cms",
    },
    {
        text:"UK PM fined 50 pounds for not wearing seat belt;",
        link:"https://www.newindianexpress.com/world/2023/jan/21/indian-american-nikki-haley-hints-at-exploring-2024-us-presidential-run-2539999.html",
    },
    {
        text:"UK PM fined 50 pounds for not wearing seat belt;",
        link:"https://economictimes.indiatimes.com/news/international/uk/uk-pm-fined-50-pounds-for-not-wearing-seat-belt-rishi-sunak-accepts-mistake-apologises/videoshow/97188329.cms",
    },
];

const RightMenu = () =>{
    return(
        // <div>
        //     <div><h3>Burning News</h3></div>
        //     {
        //         menuList.map((value) => (<a href={value.link} target='_blank'><p>{value.text}</p></a>))
        //     }
            
        // </div>
    <div className="right_menu_container">
      <p className="right_menu_title">Pro Network news</p>
      <ul>
        {news.map((value) => (
          <li className="right_menu_news_title">
            {value.text.slice(0, 25)}...
          </li>
        ))}
      </ul>
    </div>
    )
}
export default RightMenu;