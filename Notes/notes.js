// Installation
// npm create-next-app@latest


// run project
// npm run dev

// use-client

// normal routing
// file based routing 
// src/login/page.js


// Nested routing
// src/about/aboutstudent/page.js
// src/about/aboutteacher/page.js


// Linking 
// import Link from 'next/link'


// Navigation
// import {useRouter} from 'next/navigation'
// const router = useRouter()
// onClick={()=>router.push("/login")}


// Common Layout
// src/about/layout.js
// layout.js file always common for all pages which is parsent in about folder


// Conditional Layout
// For hide any common layout
// import {usePathname} from 'next/navigation'
// const pathname = usePathname();
// { pathname!=='/about/aboutstudent'?<h1>Welcom to teacher about page</h1>:null}


// Daynamic routing
// when path change like when we sent id in path and show data based on this id
// folder structure
// sludentlist
//       page.js
//       [student]      //dynamic folder
//            page.js

// src/studentlist/page.js
//      <Link href="/studentlist/1">one</Link>
//      <Link href="/studentlist/2">two</Link>
//      <Link href="/studentlist/3">three</Link>
//      <Link href="/studentlist/4">four</Link>

// src/studentlist/[student]/page.js
// access student id from params
// "use client"
// export default function Stuent({parmas}{
//     console.log(parmas)
//     return(<div>`Student id is ${parmas}`</div>)
// })


// Catch-all Segments of Route
// when we don't know exat route like /id/name or /id/name/token
// [...student] //dynamic page


// 404 page
// Globel 404 page => src/not-found.js
//Spacific route 404 page => src/aboutstudent/[...foldername]/page.js


// Middleware 
// Create file middleware.js in src not src/app
// middleware.js
//      import {NextResponse} from "next/server";
//      export default function middleware(request){
//           if(!student.login){return NextResponse.redirect(new URL("/login",request.url))}
//      }
//      export const config={matcher:["/about/:path*","/studentlist/:path*"]}


// Fetch api data in client side component
// "use client"
// import {useEffect,useState} from 'react'
// useEffect(async()=>{
//     //fetch
// },[])


// Fetch api data in server side component
// async function fetchData(){
    //fetchhere
    //return data
// }
// import {useEffect,useState} from 'react'
// export default async function ProductList(){
//         cosnt data = fetchData()
//         return(<div></div>)
// }


// we can not use event in server component that's why we use client and server component both togater


//for globel css import in layout.js in src


// CSS Modules
// handle multiple classes
// style.module.css
// import style from './style.module.css
// <h1 className={style.main}>Hello world</h1>
// handle outside css
// import outsideStyle from '@/style.module.css'


// Images
// import Image from "next/image"


// Allow domain
// next.config.js
// const nextConfig={
//     images:{
//         domain:["expamle.com"]
//     }
// }
// module.exports=nextConfig


// Font
// import {Roboto} from 'next/font/google'
// const roboto = Roboto({
//     weight:"100",
//     subsets:['latin'],
//     display:'swap'
// })
// export default function Login(){
//     return (<div className={roboto.className}>Hi</div>)
// }


// Generate metadata
// import {Roboto} from 'next/font/google'
// export function generateMetadata({params}){
//     return{
//         title:"Login page",
//         description:"login page discription"
//     }
// }
// export default function Login(){
//     return (<div className={roboto.className}>Hi</div>)
// }


// Script component
// public 
//     location.js 
// scr/userDetails 
//     page.js 
//     import Script from "next/script"
//     <Script>
//         src="/location.js"
//         onLoad={()=>{console.log("file loaded")}}
//     </Script>


// Loader
// src/page/
//      loding.js
//      page.js


// Static html
// next.config.js
//      output:"export"
// npm run build


// Static Site Generation (SSG)


// Redirection
// import {redirect} from 'next/navigation'
// redirect('/')
// But here a sefest way . Rember that is only use when page is deleted or some work is going on this page
// Go to next.config.js
// const nextConfig = {
//     redirects:async()=>{
//         return [
//             {sourse:'/profile',distination:'/',permanent:false},
//             {sourse:'/admin',distination:'/login',permanent:false},
//             {sourse:'/user/:userId',distination:'/login',permanent:false},
//         ]
//     }
// }


// Environment variables
// .env.local
//      URL="mongodb://asf/sdf/sdf/<>DSfsdaf"
// process.env.URL


// Change api url on development and production mode
// src/config/constants.js
//      export const API_URL=process.env.NODE_ENV=="development"?"www.api.development.com":"www.api.production.com"


// Start Development Mode
// npm run dev


// Start Production Mode
// npm run build
// npm start


// BACKEND in nextJS

// Create API 
// src/app/api/users/route.js
// import { NextResponse } from "next/server";
// export function GET(request,response){
//     return NextResponse.json({name:"Abu Zaid",age:21,city:"Mau"},{status:200})
// }
// Access this api Go to => http://localhost:3000/api/users


// For dynamic api
// src/app/api/users/[id]/route.js
// import { NextResponse } from "next/server";
// export function GET(request,content){
//     console.log(content.params.id)
//     return NextResponse.json()
// }
// Access this api Go to => http://localhost:3000/api/users/23


// POST request 
// export async function POST(request){
//      const payload  = await request.json()
//      console.log(payload)
// }
