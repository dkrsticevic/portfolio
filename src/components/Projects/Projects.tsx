import { Col, Row } from "react-bootstrap"
import ProjectCell from "./ProjectCell"
import ProjectFull from "./ProjectFull"
import { useState } from "react"
import ProjectNav from "./ProjectNav"

let dataMap = new Map<number, {id: number, name: string, description: string, image: string, website: string, repo: string}>([
  [0, {id: 0, name: "Multiplayer Tic Tac Toe", description: "Multiplayer Tic Tac Toe is a website that allows you to challenge your friends in a game of Tic Tac Toe. \n\n This app was built with a React frontend and a Node JS backend server. It utilises a socket connection with private rooms hosted on the backend for the multiplayer capabilities between the players. \n\n To play, simply invite a friend using the generated URL and once they've joined the game can begin. \n\n **Note** To test this you might have to wait a couple minutes due to the backend server needing to boot up.", image: "./images/tictactoe.png", website: "https://dkrsticevic.github.io/TicTacToe/", repo: "https://github.com/dkrsticevic/TicTacToe"}],
  [1, {id: 1, name: "Sudoku Solver", description: "This is a website where users can challenge themselves to solve randomly generated sudoku puzzles. \n\n The app was made using React with the sudoku puzzles being generated from an API found on RapidAPI.\n\n The user can select a board based on difficulty and a suitable puzzle will be generated. The website offers tools to aid in solving the puzzle, such as highlighting selected numbers, showing errors when numbers are placed in invalid positions and wiping a number from the keyboard if the specific number is fully complete.", image: "./images/sudoku.png", website: "https://dkrsticevic.github.io/Sudoku/", repo: "https://github.com/dkrsticevic/Sudoku"}],
  [2, {id: 2, name: "Cookie Clicker", description: "Cookie Clicker is a clone of a popular web based game of the same name built in React. The goal of the game is to generate as much money as possible. This can be done either by clicking the cookie or from characters that generate money automatically.\n\nThe game allows you to spend earned money on upgrades and characters that assist in generating more money. Cookie Clicker uses local storage to save the current state of the game so you won't lose progress even if you close the website.\n\n Upgrades include increasing the quantity or multiplier of an individual character. The site tracks the amount of earnings from each character allowing the user to identify which upgrades are most efficent to spend their money on.", image: "./images/cookie.png", website: "https://dkrsticevic.github.io/CookieClicker/", repo: "https://github.com/dkrsticevic/CookieClicker"}],
  [3, {id: 3, name: "Vulnerability Manager", description: "Vulnerability Manager is a cyber security tool to help an organisation keep an understanding of the potetional risks in their assests. It allows users to upload vulnerability scans for an asset causing the app to find and store the risks found.\n\n This tool was made in a year long group project for university where we had to make a finished product for a client. The main feature I worked on was the the process of allowing users to upload vulnerability scans and finding all the associated vulnerabilities given the scan's data. With this feature the data is uploaded to a database where this information can be used by the app to give the organisation an overview of their security status.\n\n Key things learnt from this experience included:\n- Working with git\n- Working with scrum sprints \n- Programming with a team \n- Meeting client expectations \n- Testing the product through unit and itegration tests", image: "./images/vma.png", website: "", repo: ""}],  
  [4, {id: 4, name: "TFT Roll Simulator", description: "TFT Roll sim is a tool to help people practice the rolling mechanics of popular strategy game Teamfight Tactics. \n\nThe React app allows users to setup a starting point through placing units on their board and setting gold for the rolls. Next, the user's able to reroll to attempt to upgrade their board. The website features core mechanics of the real game including:\n- Odds to hit champions being based on a fixed pool size for each champion\n- Ability to upgrade units star level (by finding 3 copies of the same champion)\n- Leveling for better odds to increase chances at more powerful and rare units.\n\n Ultimately, this is a tool for fans of the game to get practice in a rapid and risk-averse manner without needing to play the game itself. ", image: "./images/tft.png", website: "https://00en.github.io/TFT-Roll-Sim/", repo: "https://github.com/00en/TFT-Roll-Sim"}]
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
            <Col style={{marginBottom: "20px"}}> 
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