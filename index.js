let h1 = document.getElementById('header')
let contaier = document.getElementById('container')
let btn = document.getElementById('load-btn')
console.log('h1', h1)

// if you ever call anything on null, you will get an error that says
// cannot read properties of null
// null is a meaningful representation of the absence of something


// Promise is an object that represents the eventual completion 
// of some task

// async keyword: regadless of what the function is, it makes it asynchronous / 
// return a promise
// await: halt the execution of the program until the promise is resolved

const double = async (num) => {
    return num * 2
}

// then way
//     .then((res) => {
//         return res.json()
//     }).then((data) => {
//         console.log('data', data)
//     })
// })

const requestData = async () => {
    let req = await fetch('https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year')
    let res = await req.json()
    return res
}

const logData = async () => {
    console.log(await requestData())
}

btn.addEventListener('click', (e) => {
    logData()
})

// Note to self: if you use a fetch request to return data and plan on invoking that
// request as callabck function, the function it is wrapped in must also be async

// for some reason...