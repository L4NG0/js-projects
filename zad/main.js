const changes = (times) => {
    setInterval(tim, 1000)
    let time = times;
    document.body.textContent = time + 'sekund'
    function tim() {
        document.body.textContent = time++ + 'sekund'
    }
    return tim
}

const timer = changes(0)
timer()