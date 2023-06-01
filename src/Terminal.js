import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import github from "./icons/github.png";
import behance from "./icons/behance.png";
import gmail from "./icons/gmail.png";
import linkedin from "./icons/linkedin.png";
import medium from "./icons/medium.png";

function Terminal() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Welcome to my portfolio! To start exploring this Terminal type <i>help</i> then press enter. Note that the Tab Key helps you complete the commands."
  );

  const terminalRef = useRef(null);

  useEffect(() => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [output]);

  function handleCommand(e) {
    e.preventDefault();
    let newOutput = [...output, { command: command, output: "" }];
    switch (command.toLowerCase()) {
      case "about":
        newOutput[newOutput.length - 1].output = `My name is Fatima STAILI, I am a cybersecurity student who has had a long-standing passion for technology and security and a slight web development background, I am currently working on networking certifications. I am a bachelor student in cyber security and a member of the development department of the GDG club, based in Orleans.`;
        break;
      case "work":
        newOutput[newOutput.length - 1].output = (
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Mission</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">JUL2019-JAN2022</td>
                <td className="border px-4 py-2">Pôle Asseray</td>
                <td className="border px-4 py-2">Digital Mediator</td>
                <td className="border px-4 py-2">Organizing and managing the digital space at Pôle Asseray.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">MAR2023-JUN2023</td>
                <td className="border px-4 py-2">Orléans Métropole</td>
                <td className="border px-4 py-2">Assistant Chief Information Security Officer (CISO)</td>
                <td className="border px-4 py-2">Designing, integrating, and adjusting defense mechanisms against cyber attacks.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">JAN2022-FEB2022</td>
                <td className="border px-4 py-2">Nerwaya Info Services</td>
                <td className="border px-4 py-2">Assistant System and Network Administrator</td>
                <td className="border px-4 py-2">Installation and configuration of network equipment (switches, routers, firewalls, etc.)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">MAY2021-JUL2021</td>
                <td className="border px-4 py-2">DCLIC</td>
                <td className="border px-4 py-2">Network Technician</td>
                <td className="border px-4 py-2">Providing technical support for the complete overhaul of the company's network infrastructure.</td>
              </tr>
            </tbody>
          </table>
        );
        break;
      case "contact":
        newOutput[newOutput.length - 1].output = (
          <>
            <img src={gmail} alt="Mail Icon" className="inline w-6" /> staili.fatimazohra@gmail.com
          </>
        );
        break;
      case "socials":
        newOutput[newOutput.length - 1].output = (
          <>
            <img src={linkedin} alt="LinkedIn Icon" className="inline w-6" />{" "}
            <a href="https://www.linkedin.com/in/fatima-zohra-staili-681878200/" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
            <br />
            <img src={github} alt="Github Icon" className="inline w-6" />{" "}
            <a href="https://github.com/STAILII" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <br />
            <img src={medium} alt="Medium Icon" className="inline w-6" />{" "}
            <a href="https://medium.com/@staili.fatimazohra" target="_blank" rel="noopener noreferrer">
              Medium
            </a>
            <br />
            <img src={behance} alt="Behance Icon" className="inline w-6" />{" "}
            <a href="https://www.behance.net/fatimastaili" target="_blank" rel="noopener noreferrer">
              Behance
            </a>
            <br />
            Don't hesitate to say hi ;)
          </>
        );
        break;
      case "hobbies":
        newOutput[newOutput.length - 1].output = (
          <>
            <span className="whitespace-pre-wrap break-words">• video games</span>
            <br />
            <span className="whitespace-pre-wrap break-words">
              • reading (here’s my goodreads account:{" "}
              <a href="https://www.goodreads.com/user/show/131668744-everdiin" target="_blank" rel="noopener noreferrer">
                link
              </a>
              )
            </span>
            <br />
            <span className="whitespace-pre-wrap break-words">• development (this terminal is a part of my fun tasks ;))</span>
          </>
        );
        break;
      case "projects":
        newOutput[newOutput.length - 1].output = (
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Project</th>
                <th className="px-4 py-2">Link</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">OCT2022-MAR2023</td>
                <td className="border px-4 py-2">Operating System Verification for the Internet of Things (IoT)</td>
                <td className="border px-4 py-2">
                  <a
                    href="https://drive.google.com/drive/folders/1p_8kNf78o9668I_Yn98dXZoW-n3lwvWK?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    link
                  </a>
                </td>
                <td className="border px-4 py-2">
                  The goal of the project is to specify and verify, using Frama-C and WP, several Contiki-NG modules. I worked on network modules (TCP/UDP/IPV6) using E-ACSL.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">SEP2022</td>
                <td className="border px-4 py-2">Qiskit Fall Fest</td>
                <td className="border px-4 py-2">
                  <a href="https://qiskit-fall-fest-algiers.wtmalgiers.org/" target="_blank" rel="noopener noreferrer">
                    link
                  </a>
                </td>
                <td className="border px-4 py-2">
                  With a 5 members team we developed a cool website for one of the biggest Quantum Computing events hosted by GDG algiers (link to the code in my github;)
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">MAI2023</td>
                <td className="border px-4 py-2">Terminal Portfolio</td>
                <td className="border px-4 py-2">
                  <a
                    href="https://drive.google.com/drive/folders/1vEksd9AR2dX_XWf0OqcenNE6s6RC1Xsu?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    link
                  </a>
                </td>
                <td className="border px-4 py-2">
                  I was looking for a cool project that would connect with my developer background. So, I thought of a unique way to present my CV using a terminal format.
                </td>
              </tr>
            </tbody>
          </table>
        );
        break;
      case "help":
        newOutput[newOutput.length - 1].output = `
          • about: learn more about me
          • contact: get my e-mail address
          • socials: how to contact me online
          • work: list of my work experiences
          • projects: list of my projects
          • hobbies: check out my hobbies
          • clear: clear terminal
          • get -cv: download my cv
        `;
        break;
      case "clear":
        newOutput = [];
        break;
      case "get -cv":
        window.open("https://drive.google.com/file/d/1-hW5Jv4gIsJBmgOFwtrYrn99u6f94Lhw/view?usp=share_link");
        break;
      default:
        newOutput[newOutput.length - 1].output = "Unknown command. Type 'help' for a list of available commands.";
    }
    setOutput(newOutput);
    setCommand("");
  }

  function handleChange(e) {
    setCommand(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      const commands = ["about", "contact", "socials", "work", "projects", "hobbies", "clear", "get -cv"];
      const match = commands.find((cmd) => cmd.startsWith(command));
      if (match) {
        setCommand(match);
      }
    }
  }

  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center">
      <div className="bg-gray-900 text-white text-left flex flex-col rounded-lg w-full md:w-2/3 lg:w-1/2 h-3/4 overflow-hidden">
        <div className="bg-gray-700 p-2 rounded-t-lg flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="text-red-500">&#x25CF;</div>
            <div className="text-blue-500">&#x25CF;</div>
            <div className="text-green-500">&#x25CF;</div>
          </div>
          <div className="text-gray-300">~/Portfolio/Terminal/STAILI</div>
          <div className="text-red-500 cursor-pointer">&#x2716;</div>
        </div>
        <div className="bg-gray-800 p-2 flex">
          <div className="text-gray-300 flex">
            <span className="mr-2">File</span>
            <span className="mr-2">|</span>
            <span className="mr-2">Actions</span>
            <span className="mr-2">|</span>
            <span className="mr-2">Edit</span>
            <span className="mr-2">|</span>
            <span className="mr-2">View</span>
            <span className="mr-2">|</span>
            <span className="italic">Help</span>
          </div>
        </div>
        <div className="flex-grow bg-gray-800 p-4 overflow-auto" ref={terminalRef}>
          <div className="mb-6 text-center" dangerouslySetInnerHTML={{ __html: welcomeMessage }}></div>
          {output.map((item, index) => (
            <div key={index}>
              <div className="mt-2">
                <span className="text-blue-500 font-mono">visitor@terminal.staili : ~$</span>{" "}
                <span className="text-green-300 whitespace-pre-wrap break-words">{item.command}</span>
              </div>
              <div className="mt-2">
                <pre className="whitespace-pre-wrap break-words">{item.output}</pre>
              </div>
            </div>
          ))}
          <form onSubmit={handleCommand} className="flex">
            <div className="mr-2">
              <span className="text-blue-500 font-mono">visitor@terminal.staili : ~$</span>
            </div>
            <input
              type="text"
              value={command}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="flex-grow bg-transparent text-green-300 focus:outline-none border-b-2 border-green-300 font-mono"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
