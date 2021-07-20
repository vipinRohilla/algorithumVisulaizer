async function myCountSort(ele, n, pos){
    let temp = new Array(n);
    for(let i = 0; i < n; i++){
        temp[i] = parseInt(ele[i].style.height);
    }

    let count = new Array(10);
    for(let i = 0; i < 10; i++){
        count[i] = 0
    }
    await waitforme(delay)
    for(let i = 0; i < n; i++){
        count[parseInt((temp[i]/pos)%10)]++;
    }
    await waitforme(delay)
    for(let i = 1; i < 10; i++){
        count[i] = count[i] + count[i-1]
    }
    await waitforme(delay)
    
    await waitforme(delay)
    for(let i = n-1; i >=0; i--){
        ele[i].style.background = "red"
        await waitforme(delay)
        ele[--count[parseInt((temp[i]/pos)%10)]].style.height = `${temp[i]}px`
        await waitforme(delay)
        ele[count[parseInt((temp[i]/pos)%10)]].style.background = "yellow"
        await waitforme(delay)
        ele[count[parseInt((temp[i]/pos)%10)]].style.background = "lightgreen"
        ele[i].style.background = "lightgreen"
    }
    await waitforme(delay)
}
async function radix(){
    const ele = document.querySelectorAll(".bar");
    let max = -10;
    for(let i = 0; i < ele.length; i++){
        if(parseInt(ele[i].style.height) > max){
            max = parseInt(ele[i].style.height);
        }
    }
    await waitforme(delay);
    for(let pos = 1; parseInt(max/pos) > 0; pos = pos*10){
       await myCountSort(ele, ele.length, pos)
    }

}



const radixSortBtn = document.querySelector(".radixSort");
radixSortBtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await radix();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});