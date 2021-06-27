function waitTwoSeconds() {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve('Function has resolved.');
        }, 2000);
    });
}

async function executeAysncWaitTwoSeconds(elementid) {
    let element = document.getElementById(elementid);
    console.log('Beginning execution');
    element.innerHTML = 'Beginning execution';
    const result = await waitTwoSeconds();
    console.log(result);
    element.innerHTML += `<BR /> ${result}`;
}

executeAysncWaitTwoSeconds("text1");