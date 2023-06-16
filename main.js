

const colors=document.querySelectorAll('.color')
const bottom=document.querySelector('.bottom')

bottom.style.backgroundColor=localStorage.color?localStorage.color:'red'

console.log(colors)
colors.forEach(
    color=>{
        //console.log(color.getAttribute('data-color'))
        color.style.backgroundColor=`${color.getAttribute('data-color')}`
        color.onclick=function(){
            bottom.style.backgroundColor=`${this.getAttribute('data-color')}`
            saveStorage(this.getAttribute('data-color'))
        }
    }
)

function saveStorage(color){
    window.localStorage.setItem('color',color)
}
