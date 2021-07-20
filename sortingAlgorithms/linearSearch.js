async function linear(){
    const ele = document.querySelectorAll(".box");
    const search = document.querySelector(".myInput").value
    for(let i = 0; i < ele.length; i++){
        ele[i].style.background = "transparent"
    }
    if(search === ""){
        window.alert("Enter a Number")
    }
    else{
        for(let i = 0; i < ele.length; i++){
            ele[i].style.background = "red"
            await waitforme(delay);
            if(parseInt(ele[i].innerHTML) == search){
                ele[i].style.background = "green"
                break;
            }
        }
    }
    for(let i = 0; i < ele.length; i++){
        ele[i].style.background = "transparent"
        if(parseInt(ele[i].innerHTML) == search){
            ele[i].style.background = "green"
        }
    }
}

const linearSearchBtn = document.querySelector(".linearSearch");
linearSearchBtn.addEventListener('click', async function(){
    disableSearchingBtn();
    disableSizeSlider();
    await linear();
    enableSearchingBtn();
    enableSizeSlider();
});