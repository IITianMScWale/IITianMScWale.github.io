const colleges = {
    IIT: [



      {
        Name: "IIT Guwahati",
        image:"https://miro.medium.com/proxy/1*qKGKMhQ70uOpmzFXXkwFEA.jpeg",
        logo:"https://upload.wikimedia.org/wikipedia/en/thumb/1/12/IIT_Guwahati_Logo.svg/800px-IIT_Guwahati_Logo.svg.png",
        state:"Assam",
        official_link:"https://www.iitg.ac.in/",
        fees_structure:"https://www.iitg.ac.in/acad/Admission_July2021/Fee_Structure_July_Nov_2021.pdf",
        total_fees:"1.6 to 2 Lakhs",
        companies:{
            Tech:["Accentures","Uber","Google","Rakuten Mobile","HSBC","ICICI","Axtria","Black Rock",""],
            Edtech:["Allen","Akash Byju's","Narayana","Physics Wallah","Vyas Education","FIIT-JEE"],
                    // yaha se hatana hai // profiles:["SDE","Data-Scientist","Data Analyst","Data Engineer","Full Stack developer","Quant Analyst","Bussiness Analyst","Python Developer","Consultant","Android Developer","Trainee Faculty"]
        },

        Subject:{

            Physics:{
            course:"https://www.iitg.ac.in/phy/pdfdocs/Physics_MSc_new-course-structure_september_2020.pdf",
            course_name:"Physics",
            course_review:"https://youtu.be/ZmwkI5N0Kl0",
            Placement:{
                ratio:"90%",
                offered:"13",
                tech_offer:"0",
                edtech_offer:"13",
                number_of_companies:"90+",
            },
            Research:{
                student:"0",
                Abroad_universities:[]
            },
            review:"https://youtu.be/ZmwkI5N0Kl0"
        },
        Chemistry:{
            course:"https://www.iitg.ac.in/chem/msc.php",
            course_review:"https://www.youtube.com/live/1hUY3QFTYME?feature=share",
            course_name:"Chemistry",
            Placement:{
                ratio:"90%",
                offered:"17",
                tech_offer:"0",
                edtech_offer:"17",
                number_of_companies:"90+",
                
            },
            Research:{
                student:"10+",
                Abroad_universities:["Kansas University" ,"Indiana University","Michigan state University","University of Michigan at Ann Arbord","University of Illinois at Chicago"
                ,"University of Illinois at Urbana champaign"
                ,"Georgia Tech"
                ,"Emory University"
                ,"Ohio state University"
                ,"Pennsylvania state university"]
            },
            review:"https://youtu.be/_DqdmTXe65k"
        },
        Mathematics:{
            course:"https://www.iitg.ac.in/maths/acads/msc_struct.php",
            course_review:"",
            course_name:"Mathematics",
            Placement:{
                ratio:"60%",
                offered:"31",
                tech_offer:"21",
                edtech_offer:"10",
                number_of_companies:"100+",
                
            },
            Research:{
                student:"0",
                Abroad_universities:[]
            },
            review:"text"
            
        }
        


      }
    }
    ],
  };

  module.exports = colleges