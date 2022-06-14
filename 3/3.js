//handler,обработчик, подписчик, subscriber, listener, слушатель -> function
//Handler будет вызван при наступлении события
//Handler будет вызван с аргументом ({})
//этот аргумент это объект, он будет содержать сведения о произошедшем событии (event, ev , e)


const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")
const a = document.getElementById("a")


const onclickHandlerSm = (e) => {
    e.stopPropagation()//запретить всплатие события
    console.log("current",e.currentTarget.id)


}
const onclickHandlerMd = (e) => {
    e.stopPropagation()
    console.log("current",e.currentTarget.id)


}
const onclickHandlerBg = (e) => {
    e.stopPropagation()
    console.log("current",e.currentTarget.id)
}

const anchorHandler = (e)=>{
    e.preventDefault()
    alert("убили ссылку")
}

//sm.onclick = onclickHandler
//sm.onclick = null

sm.addEventListener("click", onclickHandlerSm)
md.addEventListener("click", onclickHandlerMd)
bg.addEventListener("click", onclickHandlerBg)
a.addEventListener("click", anchorHandler)
//sm.removeEventListener("click", onclickHandler)