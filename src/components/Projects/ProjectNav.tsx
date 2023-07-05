type ProjectNav = {
    current : number
    navigate : any
}

function ProjectNav({current, navigate}: ProjectNav) {

    return (
        <div className="proFull" style={{display: "flex", width: '250px', justifyContent: "space-between", alignItems: "center"}}>
        <div className="button" style={{height: "40px", width: "40px", position: "relative", float: "right", borderRadius: "50%", zIndex: "3", backgroundColor: "#00adb5", 
        border: "none", display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "3px"}} onClick={() => navigate(current-1 >= 0 ? current - 1 : 4)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
        </div>
        {[0,1,2,3,4].map(key => (
            <div key={key} style={{height: "20px", width: "20px", position: "relative", float: "right", borderRadius: "50%", zIndex: "3", backgroundColor: current === key ? "#eeeeee" :"#303841", 
            border: "none", display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "8px"}}></div>


        ))}      
        <div className="button" style={{height: "40px", width: "40px", position: "relative", float: "right", borderRadius: "50%", zIndex: "3", backgroundColor: "#00adb5", 
        border: "none", display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "3px"}} onClick={() => navigate(current+1 <= 4 ? current + 1 : 0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
        </div>
    )
}

export default ProjectNav