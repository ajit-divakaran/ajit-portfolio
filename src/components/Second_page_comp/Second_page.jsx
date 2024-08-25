import Cards from './Cards'
import styles from './Second_page.modules.css'
import Ill from "../../../public/images/000911.png"
import Il2 from "../../../public/images/Group-4.png"

const SecondPage = ()=>{
    
    return(
        
        <>
        
        
<div className="second_pg" id="projects">
<div className="secondpg_text">
    <h1 className='secondpg_head'>My projects</h1>
</div>
<Cards></Cards>
{/* <div className="illustrate1">
    <img src={Ill} alt="" />
</div>
<div className="illustrate2">
    <img src={Il2} alt="" />
</div> */}
</div>
        </>
    )
}

export default SecondPage