const qaList = document.querySelectorAll('li')
const qContainers = document.querySelectorAll('.q-container')


qContainers.forEach((qContainer, idx) => {
    qContainer.addEventListener('click', function () {
        console.log("Testing...");
        resetActiveClass()
        qaList[idx].classList.add('active')
    })
})

function resetActiveClass() {
    qaList.forEach(qa => {
        qa.classList.remove('active')
    })
}
