type ProjectCell = {
    data: {id : number, name: string, description: string, }
    selectProject : any
}

function ProjectCell({data, selectProject}: ProjectCell) {
    return (
    <div className="pcell" style={{display: "flex", height: "100%", aspectRatio: 1/1,  transition: "0.5s", maxWidth: "200px",
    justifyContent: "center", alignItems: "center", background: "#303841", color: "#00adb5", borderRadius: "10px", cursor: "pointer", textAlign: "center", 
    }} onClick={() => selectProject(data.id)}>
        <h5 style={{maxWidth: "120px"}}>{data.name}</h5>
    </div>
  )
}

export default ProjectCell