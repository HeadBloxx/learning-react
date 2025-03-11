import moleImage from "./assets/User_icon_2.svg.png"

function Mole(){

    const handleClick = (e) => {
        const t = e.target
        const s = t.style
        s.position = "absolute"
        s.left = Math.random()*200 + "px"
        s.bottom = Math.random()*200 + "px"
        s.right = Math.random()*200 + "px"
        s.top = Math.random()*200 + "px"
    }

    return(<img onClick={(e) => handleClick(e)} src={moleImage}></img>);
}

export default Mole