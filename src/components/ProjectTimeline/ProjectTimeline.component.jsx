import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// Project and skills logos
import { projectRefs, skillsRefs } from "./assetRefs";


// React-bootstrap imports
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";


// Styles
import "./style.css";


const ProjectTimeline = () => {
 return (
  <div id="projects">
    <h1 className="pt-3 text-center font-details-b pb-3">
     PROJECTS
    </h1>
    <Timeline>
       <Events>
        {/* Portfolio Project */}
        <ImageEvent
            date="02/04/2021"
            className="text-center"
            text="My portfolio"
            src={projectRefs.Portfolio}
            alt="My portfolio"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> I've never owned a portfolio and concluded it was time.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Display relevant information </li>
                          <li>Provide links for alternative platforms</li>
                          <li>Programming prowess</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.Heroku}
                                alt="Alan Ai"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Heroku
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React 
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.ReactBootstrap}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Bootstrap
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
      
                <UrlButton
                  href="https://github.com/Alvinkariuki/alkari-portfolio"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

       {/* Alan AI project */}
        <ImageEvent
            date="03/10/2021"
            className="text-center"
            text="Voice Assistant"
            src={projectRefs.AlanAI}
            alt="Voice Assistant"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an AI powered voice assistant that recognizes voice and performs news search as well as read headlines of news.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Recognize Voice input</li>
                          <li>Powered by React and Material UI</li>
                          <li>API consuming backend</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.AlanAILogo}
                                alt="Alan Ai"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Alan AI
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
      
                <UrlButton
                  href="https://github.com/Alvinkariuki/Alan-AI-React-app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

       {/* Alkari Bot */}
          <ImageEvent
            date="25/12/2020"
            className="text-center"
            text="Discord bot"
            src={projectRefs.DiscordBot}
            alt="Discord bot"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A discord bot that checks for specific negative words typed by server clients then responds with motivational quotes.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Python Automation</li>
                          <li>Api Quote fetch</li>
                          <li>Store new motivating words</li>
                          <li>Delete motivating words</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.Python}
                                alt="Alan Ai"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.Replit}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Repl.it
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.Discord}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Discord
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

                <UrlButton
                  href="https://github.com/Alvinkariuki/Alkari-Bot"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


         {/* Apex Legend Tracker */}        
         <ImageEvent
            date="29/09/2020"
            className="text-center"
            text="Gamer Avatar Tracker"
            src={projectRefs.ApexLegends}
            alt="Gamer Avatar Tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> I wanted to track my public apex legend avatar as well as my favourite twitch streamers accounts, I made a Vue.js app that tracks players records By consuming an api.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>API search</li>
                          <li>Express backend</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.Vue}
                                alt="Alan Ai"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Vue
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.Heroku}
                                alt="Alan Ai"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Heroku
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.MONGODB}
                                alt="Alan Ai"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>

                           <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.EXPRESS}
                                alt="Alan Ai"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

               <UrlButton
                  href="https://apex-tracker8.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>

                <UrlButton
                  href="https://github.com/Alvinkariuki/ApexLegend-Tracker"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
      
          {/* Ai Chat Bot */}
          <ImageEvent
            date="13/03/2020"
            className="text-center"
            text="Chatbot"
            src={projectRefs.AiChatbot}
            alt="Chatbot"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An Ai chatbot that can hold basic business conversation .
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Neural Networks</li>
                          <li>Bag of words algorithm</li>
                          <li>Lancaster Stemming algorithm</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={skillsRefs.Python}
                                alt="Alan Ai"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

                <UrlButton
                  href="https://github.com/Alvinkariuki/ai_chatbot"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          
       </Events>
    </Timeline>
  </div>
 )
}

export default ProjectTimeline;
