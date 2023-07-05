type ProjectFull = {
    data: {id: number, name: string, description: string, image: string, website: string, repo: string}
    closeProject : any
}

function ProjectFull({data, closeProject}: ProjectFull) {


    return (
    <div className="proFull" style={{position: "relative", display: "flex", height: "700px", maxWidth: "800px",  transition: "0.3s",
    justifyContent: "left", color: "white", borderRadius: "10px", background: "#303841", textAlign: "left", flexDirection: "column", paddingLeft: "20px" 
    }}>
        <div style={{position: "absolute", marginTop: "10px", right: "10px"}}>  
        <div className="button" style={{height: "40px", width: "40px", position: "relative", float: "right", borderRadius: "50%", zIndex: "3", backgroundColor: "#00adb5", 
        border: "none", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={closeProject}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#303841" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        </div>
        </div>
        <h3 style={{marginTop: "12px", color: "#00adb5", marginBottom: "30px", fontSize: "28px"}}>{data.name}</h3>
        <div style={{color: "#eeeeee", width: "88%", height: "75%", fontWeight: "normal", whiteSpace: "pre-line", zIndex: 2, fontSize: "14px"}}>{data.description}</div>

        { data.repo !== "" ?
        <div style={{position: "absolute", bottom: "20px", left: "20px", zIndex: 2}}> 
        <a style={{color: "#00adb5"}} href={data.website} target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-globe2" viewBox="0 0 16 16" style={{marginRight: "5px", marginBottom: "3px"}}>
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
        </svg>              
        Website</a> 
        <a style={{marginLeft: "10px", color: "#00adb5", zIndex: 2,}} href={data.repo} target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" style={{marginRight: "5px", marginBottom: "3px"}}>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        Repository
        </a> 
        </div> 
        : undefined
        }
        <img draggable="false" style={{position: "absolute", right: "0px", bottom: "0px", height: "80%", borderRadius: "100% 0px 10px 10px", width: "100%", objectFit: "cover", opacity: "10%"}} src={data.image}></img> 
    </div>
  )
}

export default ProjectFull