async function binary(){
    const ele = document.querySelectorAll(".box");
    const search = document.querySelector(".myInput").value
    for(let i = 0; i < ele.length; i++){
        ele[i].style.background = "transparent"
    }
    if(search === ""){
        window.alert("Enter a Number")
    }
    else{
        let l = 0;
        let r = ele.length-1;
        for(let i =0;i < ele.length; i++){
            ele[i].style.background = "orange"
        }        
        await waitforme(delay)
    while (l <= r) {
        let m = parseInt(l + (r - l) / 2);
        await waitforme(delay)
        if (parseInt(ele[m].innerHTML) == search){
            await waitforme(delay)
            ele[m].style.background = "green"
            break;
        }
        if (parseInt(ele[m].innerHTML) < search){
            l = m + 1;
            for(let i = 0; i < ele.length; i++){
                ele[i].style.background = "transparent"
            }
            await waitforme(delay)
            for(let i = l; i <= r; i++){
                ele[i].style.background = "orange"
            }
            await waitforme(delay)
        }
        else{
            r = m - 1;
            for(let i = 0; i < ele.length; i++){
                ele[i].style.background = "transparent"
            }
            await waitforme(delay)
            for(let i = l; i <= r; i++){
                ele[i].style.background = "orange"
            }
            await waitforme(delay)
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


const binarySearchBtn = document.querySelector(".binarySearch");
binarySearchBtn.addEventListener('click', async function(){
    disableSearchingBtn();
    disableSizeSlider();
    await binary();
    enableSearchingBtn();
    enableSizeSlider();
});