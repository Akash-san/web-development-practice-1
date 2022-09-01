// const login = async (userName, password) => {
//     if (!userName || !password) throw 'ENTER PROPER ID'
//     if (password === "Akash@1234") return 'welcome'
//     throw 'Invalid Password'
// }
// login('Akash', 'Akash@1234')
//     .then(data => {
//         console.log('YOUR ID IS CORRECT U R:', data)
//     })
//     .catch(err => {
//         console.log("VALIDPASSWORD:", err)

//     })

// const rainbow = (color, delay) => {
//     return new Promise((response, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             response('done!!!');
//         }, delay)
//     })
// }
// async function colorChange() {
//     await rainbow('red', 1000);
//     await rainbow('blue', 1000);
//     await rainbow('green', 1000);
//     await rainbow('brown', 1000);


// }

// async function Passss(data) {
//     await colorChange()
//     console.log('COLOR CHANGED:', data)
// }


const fakeReq = (url) => {
    return new Promise((response, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500
        setTimeout(() => {
            if (delay > 4000) {
                reject("connection timeout:(")
            } else {
                response(`"its work:)"${url}`)
            }
        }, delay)
    })
}


async function callFun() {
    try {
        const ret1 = await fakeReq('/page1')
        console.log(ret1)
        const ret2 = await fakeReq('/page2')
        console.log(ret2)
    } catch (e) {
        console.log("WRONG", e)

    }

}