
export default function IconTitle({icon,title}){
    return(
        <div className="iconTitle">
         <img src={icon} alt="" />
         <div className="title">{title}</div>
        </div>
    )
}