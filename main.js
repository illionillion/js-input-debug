window.addEventListener('load', ()=>{
    let flag = false
    const checkForm = (e) =>
    {
        if(flag) return
        let str = e.target.value;
        while(str.match(/[^A-Z^a-z\d\-]/))
        {
            str = str.replace(/[^A-Z^a-z\d\-]/,"");
        }
        e.target.value = str;
    }
    document.getElementById('code').addEventListener('input', checkForm)
    document.getElementById('code').addEventListener('compositionstart', e => {
        console.log(e);
        console.log("compositionstart");
        flag = true
    })
    document.getElementById('code').addEventListener('compositionupdate', e => {
        console.log(e);
        console.log("compositionupdate");
    })
    document.getElementById('code').addEventListener('compositionend', e => {
        console.log(e);
        console.log("compositionend");
        flag = false
        checkForm(e)
    })
})