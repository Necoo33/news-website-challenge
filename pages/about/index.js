import React from 'react'

export default function index() {
  return (
    <div>
        <h2 style={ { textAlign: "center" } }>My name is Necdet Arda Etiman.</h2>

        <div style={ { textAlign: "justify", margin: "0 10vw" } }>
            <p>
                ABOUT THIS CHALLENGE: on the evenings of thursday, when i was working on slider tab i get 429 status code
                from the api which you provided. Because of that i couldn't work on slider tab more(currently it would slide 
                when you press left or right buttons) and because i couldn't figure how they look, i couldn't make the website 
                responsive. This isn't because of me. 
            </p>

            <p >I'm started code learning journey before 9 months ago. Until that time I learned
            Css, Vanilla Javascript, React, Next.js, Typescript and also various other liblary and tools.</p>

            <p>First, i started to learn javascript basics and after 2 months later start to learn css. On this learning i'm kinda advance on making 
                layout and gain solid Flexbox and Grid understanding. By that designed many layouts, which you can
                view in my github repo: <a style={ { textDecoration: "underline" } } href='https://github.com/Necoo33/Some-Site-Layouts'>Some Site Layouts</a>.
            </p>

            <p>Later i returned to learn vanilla javascript and i wrote many codes, made many small projects. Here the list of them: </p>

            <ol>
                <li>Open-Close Searchbox</li>
                <li>Dropdown Menu</li>
                <li>To-Do-List</li>
                <li>Digital Clock</li>
                <li>Chronometer</li>
                <li>Average Point Calculator</li>
                <li>Weather Forecast Application</li>
                <li>Currency Rates Calculator</li>
                <li>Theme Changer</li>
                <li>Draggable Slider Tab</li>
                <li>Draggable Image Slider</li>
            </ol>

            <p>I took at least average of the codes from other coders and modify them or i coded them completely(of course i made researches when i got stuck), 
                my chronometer is like that. It's my vanilla js masterpiece, only lack of it it's not written in c++. I add almost all functionalities to it.</p>

            <p>Then i started to learn react. I made all of my course projects, they're kinda basic but good for learning react, some 
                of them are deployed with firebase. Here is the list of them:</p>

            <ol>
                <li><a style={ { textDecoration: "underline" } } href='https://dijital-kasa-react.firebaseapp.com'>Dijital Kasa</a></li>
                <li><a style={ { textDecoration: "underline" } } href='https://planning-table.firebaseapp.com'>Planning Table</a></li>
            </ol>

            <p>After that, i want to build a <a style={ { textDecoration: "underline" } } href='https://let-s-some-chat.firebaseapp.com'>realtime chat website</a>. 
            You can preview and of course, register and make some chat! </p>

            <p>
               But they're very basic and lack of good seo and they have so basic back-end. 
               For using my react practice and knowledge to good case i started to learn next.js
            </p>

            <p>
                On next.js learning i got strong understanding about api's. In my course, the instructor only teached
                to configure api for able to response make post and get requests, i also figure out to configure put and 
                delete actions to json databases. 
            </p>

            <p>
                later that, i decide to make real website for me, which is named by <a style={ { textDecoration: "underline" } } href='https://necdetin-api-deposu.vercel.app'>Necdet'in Api Deposu</a>. 
                i started to code that website. The most struggling part of the coding that website is adopting authentication and the issues i faced when i 
                deploy that website.
            </p>

            <p>
            My instructor teaching Next-Auth v3 in this course but because it was deprecated, i couldn't adopt that on my website.
                So i researched for adopting my website to Next-Auth v4 and i couldn't find any full tutorial that suits my use case. I traveled on
                Next-Auth Docs and watched some videos and so, i adopted it. That's the first issue i faced.
            </p>

            <p>Other issue happened when i deployed my website. First, i notice i couldn't make get and post actions to my api's, i can't enter
                as user on my entrance. I configured that's because i defined the path's of my .json databases with writing relative address,
                but it's not work. So i write all the paths with "process.cwd()" synthax. After solving this i redeploy my website and this time
                i couldn't make any request except get on my api's. After a long research and opening a github issue i learned that my hosting
                service made serverless deployment and because of that i wouldn't write my .json files on deployment, so i have to switch my
                database and i decided to work with cloud firestore, which i know well. When done that i deploy again and some of the other
                settings website is completely builded.  
            </p>

            <p>
            in this website, i made 5 api. I'm protected all of them about at least some requests and for input's i made some validness checks.
            First of the api's is <a style={ { textDecoration: "underline" } } href='https://necdetin-api-deposu.vercel.app/api/ozlusozler'>Özlü Sözler</a>,
            which open for all get request. It configured for handling post and get request. But i protected this api from unwanted post
            request's, so if you want to make post request that api you would fail. Other api's that i want to inform you about is Feedbacks
            and users api's. I encrypted all of the passwords of the users and they could change their password if they're want. 
            I could view all the messages on a panel which it's only open to me and later than that i could delete these.
            </p>

            <p>
                I also learned typescript and because the Next.js team offer more features especially about api's, i'm eager to write typescript
                with Next.js
            </p>

            <p>
                Also, i'm an active github and new stack overflow user, i gain one editorship on one subject which i gave the true answer.
                About my stack overflow account, you can <a style={ { textDecoration: "underline" } } href='https://stackoverflow.com/users/21230331/necoo33'>view</a> in there 
            </p>

            
        </div>
    </div>
  )
}
