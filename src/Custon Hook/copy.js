import { assets } from "../assets/assets"

function copy(text, e) {

    const copyDiv = e.target.closest("div")
    const copyElement = copyDiv.querySelector(".copy")
    if (copyElement) {
        navigator.clipboard.writeText(text)
            .then(() => {
                copyElement.src = assets.check_icon
                setTimeout(() => {
                    copyElement.src = assets.copy_icon
                }, 2000);
            })
            .catch(() => {
                console.error('faild to copy')
            })
    }
}
export default copy
