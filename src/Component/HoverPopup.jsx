import React from 'react'

function HoverPopup({ text, position }) {

    // const hoverPopupRef = useRef(null)

    // useEffect(() => {
    //     const hoverPopupParent = hoverPopupParent.current.parentElement
    //     hoverPopupParent.style.position = "relative"

    //     hoverPopupParent.addEventListener("mouseover", () => {
    //         hoverPopupRef.current.style.display = "block"
    //     })

    //     hoverPopupParent.addEventListener("mouseout", () => {
    //         hoverPopupRef.current.style.display = "none"
    //     })
    // })
    return (
        <>
            <div className={`absolute z-50 w-max border-2 bg-indigo-50 border-indigo-200 p-1 text-xs hidden group-hover:block ${position}`}>
                <div className='text-indigo-800'>{text}</div>
            </div>
        </>
    )
}

export default HoverPopup
