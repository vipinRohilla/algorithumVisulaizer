async function wave(){
    const ele = document.querySelectorAll(".bar");
    for(let i = 1; i < ele.length-1; i = i+2){
        await waitforme(delay);
        ele[i].style.background = "rgb(245, 84, 84)"
        ele[i-1].style.background = "rgb(245, 84, 84)"
        await waitforme(delay);
        if(parseInt(ele[i].style.height) > parseInt(ele[i-1].style.height)){
            await waitforme(delay);
            swap(ele[i], ele[i-1]);
        }
        await waitforme(delay);
        if((parseInt(ele[i].style.height) > parseInt(ele[i+1].style.height))){
            await waitforme(delay);
            swap(ele[i], ele[i+1])
        }
        await waitforme(delay);
        ele[i].style.background = "green"
        ele[i+1].style.background = "green"
        await waitforme(delay);
    }
    ele[ele.length-2].style.background = "rgb(245, 84, 84)"
    ele[ele.length-1].style.background = "green"
}

const waveSortBtn = document.querySelector(".waveSort");
waveSortBtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await wave();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});