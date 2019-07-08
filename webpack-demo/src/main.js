import './css/style.scss'
var greeter = require('./js/Greeter.js')
document.getElementById('root').appendChild(greeter())

window.jsonpTest = function() {
    const script = document.createElement('script')
    script.src='http://localhost:5000/api/jsonpTest?fun=getusers'
    document.getElementsByTagName('head')[0].appendChild(script)
}

window.getusers = function(res) {
    res.forEach(item=>{
        console.log(item.username)
    })
}