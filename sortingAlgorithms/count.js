async function count() {
    const ele = document.querySelectorAll(".bar");
    await waitforme(delay);
    let max = -10;
    for(let i = 0; i < ele.length; i++){
        if(parseInt(ele[i].style.height) > max){
            max = parseInt(ele[i].style.height);
        }
    }
    let count = new Array(max+1); 
    for (let i=0; i<max+1; i++){ 
        count[i] = 0;
    }
    for(let i = 0; i < ele.length; i++){
        count[parseInt(ele[i].style.height)] = count[parseInt(ele[i].style.height)] + 1;
    }
    for(let i = 1; i <= max; i++){
        count[i] = count[i]+count[i-1];
    }
    let temp = new Array(ele.length);
    for(let i = 0; i < ele.length; i++){
        temp[i] = parseInt(ele[i].style.height);
    }
    for(let i = temp.length-1; i >=0; i--){
        ele[i].style.background = "red"
        await waitforme(delay);
        ele[--count[temp[i]]].style.height = `${temp[i]}px`;
        ele[count[temp[i]]].style.background = "yellow";
        await waitforme(delay)
        ele[count[temp[i]]].style.background = "lightgreen";
        await waitforme(delay)
        ele[i].style.background = "lightgreen"
        await waitforme(delay);
    }
}


const countsortbtn = document.querySelector(".countSort");
countsortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await count();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});