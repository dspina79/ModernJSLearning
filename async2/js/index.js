function writeMessage(timeOutSeconds, message) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(message);
        }, timeOutSeconds * 1000);
    });
}

async function writeout(elementId) {
    let element = document.getElementById(elementId);
    for (let i = 0; i < 10; i++) {
        const result = await writeMessage(1, 'This is message ' + i);
        element.innerHTML += result + '<BR />';
    }
}


writeout('outputDiv');