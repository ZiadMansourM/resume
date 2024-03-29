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
        experience: "Junior Site Reliability Engineer - Jr. SRE",
        company: "Silverkey Technologies",
        date: "07/2022 - till now",
        city: "Remote",
        action: "Achievements/Tasks",
        actions: {
          1: " Responsible for the deployment and environment configuration in our Linux test server.",
          2: " Automated the cleaning process of the company's private docker registry.",
          3: " Improved one of the company internal tools which was failing silently.",
          4: " Automated backup of around 800 GB of data from an old to a new windows production server.",
          5: " Worked with API management solutions: Kong, Apache APISIX, and WSO2.",
        },
      }
    },
    projects: {
      1: {
        link: "https://docs.scanmate.sreboy.com",
        name: "Graduation Project: ScanMate (June/2023)",
        tasks: {
          1: " Photogrammetry: Close-range 3D reconstruction from 2D images.",
          2: " Got an A grade after grasping the know-how, mastering classical 3D reconstruction techniques. Over the course of six months.",
          3: " More information at: docs.scanmate.sreboy.com ^^"
        },
      },
      2: {
        link: "https://github.com/ZiadMansourM/docker-private-registry",
        name: "Docker private registry (October/2022)",
        tasks: {
          1: " Built a full Docker Private Registry to act as a test environment.",
          2: " Automated the cleaning process of the company's production private docker registry."
        },
      },
      3: {
        link: "https://github.com/ZiadMansourM/Jaeger-ClickHouse",
        name: "Jaeger with ClickHouse (April/2023)",
        tasks: {
          1: " Configured Jaeger to use ClickHouse as a backend storage.",
          2: " Good written documentation and dockerized a working example.",
        },
      },
      4: {
        link: "https://github.com/ZiadMansourM/settings",
        name: "Smart Settings (May/2022)",
        tasks: {
          1: " Designed, implemented, maintains the smart_settings package.",
          2: " Little wrapper around settings files. Helps to manage your python programs' settings easily in a pythonic way.",
          3: " Python, MkDocs, GitHub Actions, Typer, Rich.",
        },
      },
      5: {
        link: "https://github.com/ZiadMansourM/Bastet",
        name: "Bastet Package (Jan/2022)",
        tasks: {
          1: " Designed, implemented and now maintains the Bastet package.",
          2: " A high-level Python package encourages rapid development and clean, pragmatic design for FastAPI apps.",
          3: " Python, FastAPI, MkDocs, GitHub Actions, Typer, Rich.",
        },
      },
      6: {
        link: "https://github.com/ZiadMansourM/concurrency-parallelism",
        name: "Parallelism in Python and Go (April/2022)",
        tasks: {
          1: " In-Depth analysis of parallelism techniques in Python and Go.",
          2: " github.com/ZiadMansourM/concurrency-parallelism",
          3: " Also more information at SREboy.com/talks",
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
        title: "Two Scholarships from USAID are estimated to be worth more than $160k",
        description:
          "Received two full scholarships from the US agency for international development. HEI and Access.",
      },
      2: {
        title:
          "Higher Education Initiative Scholarship – HEI",
        description:
          "Full bachelor's degree scholarship funded by USAID and managed under the supervision of Amideast Egypt. The acceptance rate was 1.6%, as only 120 students were selected from 7500.",
      },
      3: {
        title:
          "(2x) Awesome Student of The Cohort – HEI",
          description:
          "Proud that I was able to get it two times. Only seven students are selected each semester.",
      },
      4: {
        title: "English Access Micro-Scholarship, AMIDEAST",
        description:
        "Full scholarship funded by USAID and managed under the supervision of Amideast Egypt. The acceptance rate was 20%. The two-year program consisted of 9 hours/week over three sessions. Plus, some character building, American culture and computer skills.",
      }
    },
    education: {
      1: {
        title:
          "(Semester Abroad) Computer Engineering at San José State University (Jan 2022 -> June 2022)",
        description:
          "GPA: 3.325 - Fully Funded by USAID.",
      },
      2: {
        title:
          "(BE) Computer Engineering from Cairo University (Aug 2018 -> May 2023)",
        description:
          "GPA: 3.27 - Fully Funded by USAID.",
      },
    },
    volunteering: {
      1: {
        title: "EducationUSA Ambassador | EducationUSA, U.S. Embassy Cairo",
        description:
          "EducationUSA is the department's official source of information on U.S. higher education. Promotes the value of U.S. higher education to students, families, institutions, and governments abroad in an increasingly competitive global environment. I monitor international Bachelor's, Master and Ph.D. students. Throughout the whole admission and application process. And on how to finance their studies.",
      },
      2: {
        title: "Founder of The Egyptian Science Arsenal - ESA",
        description:
          "An online platform that aims to be an information, experience and ideas sharing club. An active community of 1.4k students from 14 to 24 years old.",
      },
      3: {
        title: "Instructor at The Egyptian Red Crescent - ERC",
        description:
          "In times of peace, The Egyptian Red Crescent is responsible for developing local communities. In summer, I give lectures to students from 14 to 24 years old, mainly in Education advising.",
      },
    },
    Refrences: {
      1: {
        title: "Eng. Ali Hussein - Teaching Assistant",
        description:
          "LinkedIn: @aliabdellatifhussein, Email: alielseddeek@gmail.com",
      },
      2: {
        title: "Ms. Yasmine Elroweiny - EducationUSA Senior Advisor",
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
