import { Col, Row } from "react-bootstrap"
import ProjectCell from "./ProjectCell"
import ProjectFull from "./ProjectFull"
import { useState } from "react"
import ProjectNav from "./ProjectNav"

let dataMap = new Map<number, {id: number, name: string, description: string, image: string, website: string, repo: string}>([
  [0, {id: 0, name: "Multiplayer Tic Tac Toe", description: "Experience Tic Tac Toe in a multiplayer environment on an interactive website. Take on your friends in a simple yet engaging game that blends strategy and fun.\n\nCrafted with precision, the app boasts a dynamic React frontend complemented by a robust Node JS backend server. The heart of the experience lies in its use of socket connections, enabling private rooms on the backend. This approach powers the thrilling multiplayer interactions that unfold between players.\n\nPlay the game by inviting a friend through a uniquely generated URL. Once they've entered the match, the game can commence.", image: "./images/tictactoe.png", website: "https://dkrsticevic.github.io/TicTacToe/", repo: "https://github.com/dkrsticevic/TicTacToe"}],
  [1, {id: 1, name: "Sudoku Solver", description: "Sudoku Solver is a website designed to test your wits with a collection of dynamically created Sudoku puzzles.\n\n Created with the power of React, this application utilises an API sourced from RapidAPI to generate unique and challenging Sudoku puzzles on demand.\n\n Selecting your desired level of difficulty, the app seamlessly creates a puzzle that matches your skill level. Engage with a set of intuitive tools designed to aid your solving journey. These include the ability to highlight chosen numbers, receive errors for incorrect placements, and erase digits once none remain.", image: "./images/sudoku.png", website: "https://dkrsticevic.github.io/Sudoku/", repo: "https://github.com/dkrsticevic/Sudoku"}],
  [2, {id: 2, name: "Cookie Clicker", description: "Dive into Cookie Clicker, a React-built homage to the popular web game. Your goal: earn wealth by clicking the cookie or automatically through characters.\n\nInvest your earnings wisely in upgrades and characters to increase your cash flow. Boost characters' impact by increasing their quantity or upgrading their multiplier.\n\nThanks to local storage, your progress remains intact even after you exit the site. The site tracks earnings per character to allow the user to make optimal upgrade choices and maximize the money-making potential.", image: "./images/cookie.png", website: "https://dkrsticevic.github.io/CookieClicker/", repo: "https://github.com/dkrsticevic/CookieClicker"}],
  [3, {id: 3, name: "Vulnerability Manager", description: "The Vulnerability Manager stands as a cybersecurity solution, empowering organizations to grasp potential risks in their assets. By allowing vulnerability scan uploads, the app swiftly identifies and catalogs vulnerabilities.\n\n This tool was created ina year-long group university project where we had to develop a finished product for a client. The main feature I worked on was the the process of allowing users to upload vulnerability scans and finding all the associated vulnerabilities given the scan's data. With this feature, vulnerability data is uploaded to a database where this information can be used to give the organisation an overview of their security status.\n\n Key things learnt from this experience included:\n- Working with git\n- Working with scrum sprints \n- Programming with a team \n- Meeting client expectations \n- Testing the product through unit and integration tests", image: "./images/vma.png", website: "", repo: ""}],  
  [4, {id: 4, name: "TFT Roll Simulator", description: "TFT Roll sim is a tool to help people practice the rolling mechanics of popular strategy game Teamfight Tactics. \n\nThe React app allows users to setup a starting point through placing units on their board and setting gold. Next, the user's able to reroll to attempt to upgrade their board.\n\nThe website features core mechanics of the real game including:\n- Odds to hit champions being based on a fixed pool size for each champion\n- Ability to upgrade units star level (by finding 3 copies of the same champion)\n- Leveling for better odds to increase chances at more powerful and rare units.\n\n Ultimately, this is a tool for fans of the game to get practice in a rapid and risk-averse manner. ", image: "./images/tft.png", website: "https://00en.github.io/TFT-Roll-Sim/", repo: "https://github.com/00en/TFT-Roll-Sim"}]
])

function Projects() {
  const [selected, setSelected] = useState<number>(-1)
  
  const selectProject = (key: number) => {
    setSelected(key)
  }

  const closeProject = () => {
    setSelected(-1)
  }

  return (
    <>
    { selected === -1 ? 
      <Row className="justify-content-center" style={{paddingTop: "50px"}}>
      <h1 style={{width: '100%', maxWidth: "800px", marginBottom: "20px", marginLeft: "20px", color: "#eeeeee",}}>Projects</h1>
      <Row md={3} xs={2} lg={3} xl={2} style={{display: "flex", width: '100%', maxWidth: "800px", justifyContent: "left", }}> 
        {[...dataMap.keys()].map(data => (
            <Col key={data} style={{marginBottom: "20px"}}> 
            <ProjectCell key={data} data={dataMap.get(data)!} selectProject={selectProject}></ProjectCell>
            </Col>
        ))}
      </Row>
      </Row>
      : 
      <Row className="justify-content-center" style={{paddingTop: "50px"}}>
      <ProjectFull key={selected} data={dataMap.get(selected)!} closeProject={closeProject}/>
      <div style={{height: "10px"}}></div>
      <ProjectNav current={selected} navigate={setSelected}></ProjectNav>
      </Row>
    }
    </>
  )
}

export default Projects