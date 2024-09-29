// "use client"
// import { useEffect, useState } from "react"
// import { useMyContext } from "../context"
// import { CheckSessionData } from "./checkSessionData"

// export const BasketProducts = () => {
//     const { Products_basket } = useMyContext()
//     const [deneme, setdeneme] = useState(Products_basket)

//     useEffect(() => {

//         const zehra = async () => {
//             const session = await CheckSessionData()
//             if (session) {
//                 const y = session.user.email
//                 const x = deneme.filter(d => d.user_eposta === y)
//                 setdeneme(x)
//             } else {
//                 setdeneme([])
//                 console.log("sepet boş");
//             }

//         }
//         zehra()
//     }, [])
//     return (
//         <>

//         </>
//     )
// }