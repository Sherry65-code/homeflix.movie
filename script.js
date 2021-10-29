window.addEventListener('load' , adjust , false);
window.addEventListener('resize' , adjust , false);
// window.addEventListener('load' , login , false);
function adjust() {
    console.log(innerWidth);
    if (innerWidth <= 1040)
    {
        document.getElementById('logo1').style.visibility = "hidden";
        document.querySelector('.signbox').style = "left: 10%;right:10%;";
    }
    else if (innerWidth > 1040)
    {
        document.getElementById('logo1').style.visibility = "visible";
        document.querySelector('.signbox').style = `    position: absolute;
        right: 20%;
        padding-inline-start: 30px;
        padding-block-start: 10px;
        top: 20%;
        bottom: 20%;
        background-color: rgba(35, 255, 145, 0.726);
        border-radius: 18px;
        left: 55%;`;
    }
}
function login()
{
    document.getElementById('login').style = "visibility: hidden;";
    document.getElementById('logo1').style.visibility = "hidden";
    document.getElementById('main').innerHTML = `
    <img src="banner1.gif" width="100%"><br>
    <span id="info"><img src="sadface.png" id="sad" width="100px"><br>
    Nothing to show </span>
    `;
    setTimeout(scroll1 , 4000);
}
function scroll1()
{
document.getElementById('info').scrollIntoView();
}
function upload() {
    document.getElementById('main').innerHTML = "<h1>Feature Coming Soon</h1>";
}