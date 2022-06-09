import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import personal from "./assets/avatarTwo.png";
import Body from "./components/Body/Body";
function App() {
  const HeaderData = {
    photo: personal,
    name: "Ziad Hassanin",
    description:
      "Junior Software Engineer; Doing SRE, Loves anything that scales; SREboy.com",
    contacts: {
      mail: "ziadmansour.4.9.2000@gmail.com",
      phone: 1021799950,
      accomodation: "Luxor || Cairo || San José, CA",
      linkedin: "linkedin.com/in/ziad-mansour/",
      github: "github.com/ZiadMansourM/",
    },
  };
  const BodyData = {
    "work-experience": {
      1: {
        experience: "Junior Software Engineer",
        company: "Misr Public Library at Luxor - MPLL",
        date: "07/2021-08/2021",
        city: "Luxor, Egypt",
        action: "Achievements/Tasks",
        actions: {
          1: " Team Leader, Responsible for the deployment and environment configurations",
          2: " Designed and Implemented the Backend, Support for Multiple types of users",
          3: " Designed and Implemented the Backend of the Website Blog",
          4: " Making sure every component is extendable, reusable",
        },
      },
      2: {
        experience: "Junior DevOps",
        company: "Software Engineering - CMPN203",
        date: "02/2021 - 06/2021",
        city: "Giza, Egypt",
        action: "Tasks",
        actions: {
          1: "Worked as a DevOps for a whole semester. Team consisted of 21 students.",
          2: "Made sure to explain, and apply DevOps methedologies.",
          3: "Implemented CICD from day one. Helped in managing different environments.",
          4: "Automated Monitoring, Rollback and Scripts to spin / configure a new server.",
          5: "Load balancing and Docker containers.",
        },
      }
    },
    projects: {
      1: {
        name: "SREboy.com/settings/ (May/2022)",
        tasks: {
          1: "Designed, Implemented and Maintaining the smart_settings package.",
          2: "Helps to manage python programs settings easily, Ability to modify at runTime.",
          3: "Technologies used: Python, mkdocs, Github Actions, Typer, Rich.",
        },
      },
      2: {
        name: "SREboy.com/Bastet/ (Jan/2022)",
        tasks: {
          1: "Designed, Implemented and Maintaining the Bastet package.",
          2: "Helps to manage FastAPI programs easily, supports reusability and extensibility.",
          3: "Technologies used: Python, FastAPI, mkdocs, Github Actions, Typer, Rich.",
        },
      },
      3: {
        name: "Parallelism in Python and Go (April/2022)",
        tasks: {
          1: "In-Depth analysis of Parallelism techniques in Python and Go.",
          2: "github.com/ZiadMansourM/concurrency-parallelism",
          3: "Also more information at SREboy.com/talks",
        },
      }
    },
    skills: {
      1: "Python",
      2: "Go",
      3: "Rust",
      4: "Bash",
      7: "AWS",
      8: "GitHub Actions",
      9: "Docker",
      10: "Kubernetes",
      11: "Django",
      12: "FastAPI",
      13: "Nginx",
      14: "Apache",
    },
    achievements: {
      1: {
        title: "Two Scholarships from USAID estimated to worth more than $160,000",
        description:
          "Received two full scholarships from the US agency for international developement. HEI and Access.",
      },
      2: {
        title:
          "Higher Education Initiative Scholarship – HEI",
        description:
          "Full bachelor degree scholarship funded by USAID and managed under the supervision of Amideast Egypt. Acceptance rate was 1.6% as only 120 students were selected from 7500.",
      },
      3: {
        title:
          "(2x) Awesome Student of The Cohort – HEI",
          description:
          "Proud that I was able to get it two times. Only Seven students are selected each semester.",
      },
      4: {
        title: "English Access Micro-Scholarship, AMIDEAST",
        description:
        "Full scholarship funded by USAID and managed under the supervision of Amideast Egypt. Acceptance rate was 20%. Two-year program consists of 9 hours/week over 3 sessions. Plus, some character building, American culture and computer skills.",
      }
    },
    education: {
      1: {
        title:
          "(Semester Abroad) Computer Engineering at San José State University (Jan 2022 -> June 2022)",
        description:
          "GPA: 3.325 - Fully Funded by USAID",
      },
      2: {
        title:
          "(BE) Computer Engineering from Cairo University (Aug 2018 -> May 2023)",
        description:
          "GPA: 3.27 - Fully Funded by USAID",
      },
    },
    volunteering: {
      1: {
        title: "EducationUSA Ambassdor | EducationUSA, U.S. Embassy Cairo",
        description:
          "EducationUSA is the department's official source of information on U.S. higher education. Promotes the value of U.S. higher education to students, families, institutions, and governments abroad in an increasingly competitive global environment. I monitor international Bachelor, Master and PhD students. Throughout the whole admission and application process. And, on how to finance their studies.",
      },
      2: {
        title: "Founder of The Egyptian Science Arsenal - ESA",
        description:
          "Online platform that aims to be as an information, experience and ideas sharing club. Active community of 1.4k students from 14 to 24 years old",
      },
      3: {
        title: "Instructor at The Egyptian Red Crescent - ERC",
        description:
          "In times of peace The Egyptian Red Crescent is responisble for the development of local communities. I used to give lectures to students from 14 to 24 years old mainly in Education advising.",
      },
    },
    Refrences: {
      1: {
        title: "Eng. Ali Hussein - Teaching Assistant",
        description:
          "LinkedIn: @aliabdellatifhussein, Email: alielseddeek@gmail.com",
      },
      2: {
        title: "Ms. Yasmine Elroweiny - EducationUSA Senior Adviser",
        description:
          "LinkedIn: @yelroweiny, Email: yelroweiny@amideast.org",
      },
    }
  };
  return (
    <React.Fragment>
      <Header data={HeaderData}></Header>
      <Body data={BodyData}></Body>
    </React.Fragment>
  );
}

export default App;
