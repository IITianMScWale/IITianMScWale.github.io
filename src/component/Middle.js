import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import telegram from './Images/tele_logo.svg'
import insta from './Images/insta_logo.svg'
import youtube from './Images/yt_logo.svg'
import in_logo from './Images/in_logo.svg'
import one_to_one from './Images/one_to_one.svg'
import eb from './Images/eb.webp'
import qb from './Images/qb.svg'
import gd from './Images/gd.jpeg'
import sn from './Images/sn.svg'
import wb from './Images/wb.svg'
import ta from './Images/ta.jpg'
import oe from './Images/oe.svg'
import fnq from './Images/fnq.svg'
import counselling from './Images/cn.svg'

const Middle = () => {
  useEffect(() => {
    const url = new URL(window.location.href);
    console.log('l', url.hash);

    if (url.hash.length > 1) {
      document.getElementById(url.hash.substr(1)).scrollIntoView();
    }
  }, []);

  return (
    <>
      <Social />
      <Content1 />
      <MentorBox />
      <Testimonial testimonialType='0' title='Testimonials of Our Mentees' />
      <Features />
      {/* <F_and_Q /> */}
      <Testimonial testimonialType='1' title='Youtube/Free Mentorship Students Feedback' />
      <About />
    </>
  )
}

const Content1 = () => {
  return (
    <div className="container tagline mt-5">
      <div className="row">
        <div className="col-md animate-left" >
          <h1 className="display-3.5 fw-bolder">Let's Start Your</h1>
        </div>
      </div>
      <h1 className="display-4 text-primary ml-5 fw-bolder" data-aos="flip-right">IIT</h1>
      <div className='row'>
        <div className="col-md animate-right">
          <h1 className="display-3.5 ml-5  fw-bolder">Preparation With IITians</h1>
        </div>
      </div>
    </div>
  )
}

const Social = () => {
  return (
    <div className="social">
      <div data-aos='flip-right'><a target="_blank" href='https://www.linkedin.com/in/ram-rajput-b55310199'><img className='social_logo' src={in_logo} alt="linked in" /></a></div>
      <div data-aos='flip-right'><a target="_blank" href='https://t.me/examtips321ram'><img className='social_logo' src={telegram} alt="telegram" /></a></div>
      <div data-aos='flip-right'><a target="_blank" href='https://youtube.com/@iitian-m.scwalla68'><img className='social_logo' src={youtube} alt="yotube" /></a></div>
      <div data-aos='flip-right'><a target="_blank" href='https://instagram.com/ram_1rajput'><img className='social_logo' src={insta} alt="instagram" /></a></div>
    </div>
  )
}

const testimonialDetails = [
  [
    {
      name: "Pankaj Chauhan",
      air: "AIR-167",
      type: 'text',
      content: `Hi Mr. Ram Rajput bhaiya, this is Pankaj Chauhan. You are my mentor but I think you are like my elder brother also😁.......I want to say special thanks to you🙏 for such a wonderful mentorship program🤩..... I'm very happy to share with you my experience to joining your mentorship program.......sch batau toh aapke mentorship program se mera bahut hi fayda hua, aapse main short notes taiyar krna sikha aur mujhe lagta hai short notes ek important role play krta hai aapke preparation journey mein.......firse aapne mujhe vivekanand sir ke examination drive ko dekhne ko bola wo toh mere preparation me char chand hi laga diya❤🤩......jb bhi meri aapse baat hoti thi toh mujhe ek strong motivation milta tha apne preparation level ko boost krne ke liye.....aapne time time pr mujhe bahut ache se guide kiya jiske wajh se meri preparation journey kafi smooth ho gyi thi...... finally mene JAM'23(MA) AIR-167 ke sath crack bhi kr liya😊.....Once again a lot of thanks Ram bhaiya🙏❤`
    },
    {
      name: 'Archana Prajapati',
      air: 'AIR-178',
      type: 'text',
      content: `Mentorship program se bahut jyada fayda huaa... Jab mai apni plans ya strategy banati, to mai sure nahi ho pati thi ki🤔... Meri strategy kya mujhe meri iit dream dila payegi..... to mai aapke sath apna plan discussion karti... Aur jo bhi usme kamiya hoti thi... Aap use bata dete the... Jaise kab kya aur kaise padhne ki jarurat hai. Aap jo batate vo full reason ke sath batate the🤩... Jisse kaphi confidence aa jata tha.... Aur pata chal jata tha ki mai right direction me hi hard work kr rahi hu.👍 Aapse maine jana ki short note ko technical aur smart tarike se kaise banana hai. Aur test analysis.... properly way se kaise karna hai... Sath hi sath aapne mujhe counter example ka importance bhi bataya🤩... Aur a lots of motivation aur force karte ki tum ye kr sakti ho🤟🤟... A great thank you to you and your program.`
    },
    {
      name: 'Vikas Rajpoot',
      air: 'AIR-56',
      type: 'video',
      content: `https://www.youtube.com/embed/ubP0F7EQNsA`
    },
    {
      name: 'Anu Yadav',
      air: 'AIR-553',
      type: 'text',
      content: `Mentorship program mujhe bhut helpful rha meri preparation k time . Coz bhot baar aisa hota h ki hmare paas proper study plan nhi hota ki konse topic ko kese pdhe , short notes kese bnae or short notes to mock k time bde useful hote h . Exam se phle bhi jb 2-3 din rhte h tb short notes hi revise krte h. So mentorship join krne k baad Ram bhaiya k short notes ne kaafi help ki . Mene Unke notes ko observe Kiya ki short notes kese bnane chahiye then mene khud k short notes prepare kiye and it was really helpful. One more thing ki preparation k time bhut baar aisa hota h ki kisi perticular topic me prblm hoti h tb smjh nhi aata kya kre but mentorship me seedhe bhiya ko call kiya 🤭 or apni prblm btai then bhiya ne btaya ki kese or kitna pdhna h iss topic ko .also bhut baar demotivate bhi hui . actually last month me to m hr week hi demotivate ho jati thi so bhiya se baat ki and unhone really bhut motivate Kiya. Also mock k marks dekhne k baad bhi unke saath discussion hota tha and vo bolte ki paper ka proper analysis kro jaha bhi mistake ho rhi unko dekho so proper Analysis se kaafi mistake km hui .So mentorship ne proper guidance and motivation diya h mujhe. Thankyou so much Ram bhaiya. ~Anu Yadav`
    },
    {
      name: 'Archana Prajapati',
      air: 'AIR-178',
      type: 'video',
      content: `https://www.youtube.com/embed/oF38r5oTJzo`
    },
    {
      name: 'Priyanka Saha',
      air: 'AIR-1082',
      type: 'text',
      content: `Firstly main bohut confused thi isbar mera hoga ya nhi koi college milega ya nhi ..thn. You helped me a lot like ki "ap exam do ye follow karo ho jayega don't give up etc" aur sach. Bataoon to isbar top nit milega ye nhi socha tha so thanks for your support..kal sagar sir se bat huyi unhone list check karke bataya ki nit Warangal miljayega So thanks for the support and also thanks jab maine jab jam deke bohut dukhi hoke apko call kiya tha ..apne mujhe nimcet ke bareme bhi bohut achhese guide kiya tha like functions kayse strong banaye`
    },
    {
      name: 'Vivek Kumar',
      air: 'AIR-10',
      type: 'video',
      content: `https://www.youtube.com/embed/Ne2697WxggI`
    },
    {
      name: 'Ayush Trivedi',
      air: 'AIR- 1159',
      type: 'text',
      content: `Hii.. Mr.Ram Rajput.. You are not only my mentor you are my brother also... Peechle 6months guidance ki wajah se yh possible hopaya hai... B'coz mai apne father ki job k sth preparation ki jisme sbse bada role aapka tha... Mera time management kraya aur jb bhi mera Confidence low hua apne smjhaya.... Thanku so much...`
    }
  ],
  [
    {
      name: 'K Pratyush Kumar Patra',
      air: 'AIR-127',
      type: 'text',
      content: `Hello everyone. Ram bhai's tips helped a lot to ace the exam. Some points regarding his guidance: 1. His strategy regarding clearing concepts, practice and analysis of mock tests. 2. His methods to level up yourself. 3. His way of motivating students to crack the exam.`
    },
    {
      name: 'Dheeraj Sharma',
      air: 'AIR-836 + Cleared TIFR',
      type: 'text',
      content: `Hello everyone . I m Dheeraj Sharma and i have cleared IIT JAM 22 with AIR 836 . I want to give the credit of my selection to my sir , ram bhai . Ram bhai helped me a lot. By his videos I got to know that we don't have to study complete syllabus to clear any exam . just by analysing the exam pattern, last year papers , cutoff trends clearing any competitive exams becomes easy . All these tips helped and by following this I manage to clear TIFR GS 22 . Atlast I want to give a advice to all the aspirants that try to be in touch with mentors like ram bhai then you can minimise ur mistake and increase ur chance of selection .`
    },
    {
      name: 'Nipin Mishra',
      air: `AIR-307`,
      type: 'text',
      content: `I achieved 307 rank this year 🤩...but I also remember result day of last year I m disappointed & stressed,but that day Ram bhaii u r the one who helped me to try once again, suggest one of the best teacher.... & Time to time give me best adviceses.In the success story of JAM exam... RAm bhai your guidance & YouTube videos plays important role...So,thanx for ur efforts & u must going on in helping future jam aspirants...🎉🔥🙏`
    },
    {
      name: 'Prashant Mishra',
      air: `AIR-188`,
      type: 'text',
      content: `First of all i want to heartily ❤ pay thanks to Ram bhai.because he helped to all jam 2022 aspirants by his experience. His exam attempting tips, how to prepare short notes and how to give test series is very helpful for securing a good rank. He is a very cool personality. Aap baat bhi kar sakte ho inse call pe feel ayega baat karke iitian wala😂.`
    },
    {
      name: 'Prashant Umrao',
      air: `AIR-1609`,
      type: 'text',
      content: `First of all your achievements are real motivation for me to prepare harder & harder. I was oftenly watches your YouTube videos that was very helpful for me. Proper guidance of how to create competitive tempo, how to Analyse my preparation, how to approach the exam etc.... Also your 10Q series was very very helpful ... # A big Thanks to you bhaiya _____.`
    }
  ]
];

const Testimonial = ({ testimonialType, title }) => {
  const id = 'modal-test-' + testimonialType;
  const [modal, setModal] = useState({
    id,
    size: '',
    title: '',
    body: '',
  });

  return (
    <div className="testimonial-container py-5 bg-light">
      <Modal props={modal} />
      <h2 style={{ color: '#FF69B4' }} className='h2 text-info'>{title}</h2>
      <div id={"carousel" + testimonialType} className="carousel  carousel-dark slide p-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonialDetails[testimonialType].map((item, index) => {
            return <div key={index} className={"carousel-item" + (index === 0 ? " active" : "")}>
              <TestimonialItem className="d-block w-100" details={{ ...item, modal, setModal }} />
            </div>;
          })}

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={"#carousel" + testimonialType} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={"#carousel" + testimonialType} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div >
    </div>
  )
}

const Modal = ({ props: { size, title, body, id } }) => {
  return (
    <div className="modal fade " id={id} tabindex="-1" aria-labelledby="modalGeneralLabel" aria-hidden="true">
      <div className={"modal-dialog modal-dialog-scrollable " + size}>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">{title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {body}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
};

const TestimonialItem = ({ details: { name, air, type, content, modal, setModal } }) => {
  const readMore = () => {
    setModal({
      ...modal,
      title: name + ' (' + air + ')',
      body: content,
    });
  }

  return (
    <>
      <div className="testimonial-content">
        <div className="testimonial-details rounded shadow-lg py-3">
          <div className="student-info text-center">
            <span className="name fs-3 mr-1">{name}</span>
            <span className="badge bg-info rounded-pill fs-4 m-2 py-2 px-3">{air}</span>
          </div>
        </div>

        <div className={'blockquote blockquote-custom p-3 mt-5 shadow rounded bg-white ' + (type === 'video' ? "testimonial-video" : "p-4")}>
          {type === 'text' ? <div className="blockquote-custom-icon bg-info shadow-sm"><FontAwesomeIcon icon={faQuoteLeft} /></div> : ""}
          {type === 'text' ? <p className="mb-0 mt-2 font-italic">{content.slice(0, 350)}</p> : <iframe width="570" height="330" src={content} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
          {type === 'text' && content.length > 350 ? <p>......<button type="button" onClick={readMore} className="btn btn-link" data-bs-toggle="modal" data-bs-target={"#" + modal.id}>Read More</button></p> : ""}
        </div>
      </div>
    </>
  );
}

const MentorBox = () => {
  return (
    <div className="card-body mentor_box ">
      <p className="font-weight-bold text-success fs-7">First time for IIT-JAM Aspirants</p>
      <Link to="/payment" id='join-mentorship-btn' className="fw-bold btn btn-primary m-2 fs-4 ">Join Full Time Mentorship</Link>
      <a href="#" className="fw-bold  btn btn-success btn-primary m-2 fs-4" disabled>Book One Time Session</a>
    </div>
  )
}

const featureDetails = [
  {
    title: 'One-One Interaction',
    text: 'We believe that "if everyone receives proper guidance from an elder, then he/she will definitely succeed.". So your Saturday- Sunday one-on-one discussion with IITIAN will Boost in your IIT Preparation. Every student has a different mindset, so our mentors will plan accordingly. They will determine which topics you should cover, how much time you should allocate to each topic, and how to balance theory and practice with questions. And help you in every moment of your preparation.',
    image: one_to_one
  },
  {
    title: 'Group Discussion',
    text: 'A group of 10 students so you can discuss your subject queries with each other. We strongly believe that engaging in discussions with others enhances your knowledge and allows you to learn new tricks from your peers. Through this group of 10-10 students where you can exchange ideas, broaden your understanding, and strengthen your skills. Benefit from collaborative learning and unlock your full potential.',
    image: gd
  },
  {
    title: 'Short Notes',
    text: 'Complete short notes (including all important points) of each topic, also help you on how you should prepare concise notes.',
    image: sn
  },
  {
    title: 'Question Bank',
    text: 'Many students expressed their concern about affording expensive books for IIT-JAM preparation. To address this, we offer comprehensive question banks with topic-wise, level-specific questions. With our resources, you can avoid the need to purchase additional costly books while still accessing valuable practice material.',
    image: qb
  },
  {
    title: 'Counselling Season',
    text: 'Our batchmates have experienced regrets after selecting colleges (IITs/NITs) as their choices did not align with their desired career paths, such as placements, research, or other aspirations. We understand this concern and offer assistance in selecting the right college that best fits your individual goals and aspirations.',
    image: counselling
  },
  {
    title: 'Exam Boost',
    text: 'Based on our experience, many students tend to lose confidence in the final 1-2 months before the examination. They often find themselves confused about where to practice, how to revise effectively, and managing the pressure of potentially losing marks. At IITian MScWale Mentors, we provide continuous guidance and support during these critical moments. Our experienced mentors understand that each student has a unique mindset, and they help you develop a personalized strategy to regain confidence and excel in your preparation.',
    image: eb
  },
  {
    title: 'Other Exams',
    text: 'If you are preparing for other competitive exams (like TIFR, GATE, NIMCET alongside IIT-JAM) then don’t worry, we will also help you.',
    image: oe
  },
  {
    title: 'Test Analysis',
    text: 'Test paper analysis holds the key, not just giving lots of tests. With IITian MScWale mentors by your side, unravel the secrets of effective analysis. Experience unitwise tests every 15 days, ensuring progress tracking. Unleash your potential with us on the path to excellence.',
    image: ta
  },
  {
    title: 'Webinars',
    text: 'Alongside your IIT-JAM preparation, we regularly organize webinars with current IIT/NIT students. That will inspire, motivate and enhance your preparation.',
    image: wb
  }
];

const Features = () => {
  return (
    <div id='features' data-bs-spy="scroll" >
      <h1 className='text-warning pt-5 d-flex justify-content-center' >Our Top Features </h1>
      <p className='fs-3 fw-medium'>Unlock Your Potential : Comprehensive IIT-JAM Preparation</p>
      <div className=' pl-5'>
        {
          featureDetails.map(({ title, text, image }, index) =>
            <FeatureItem key={index} details={{ num: index + 1, title, text, image }} />
          )
        }
      </div>
    </div>
  )
};

const FeatureItem = ({ details: { num, title, text, image } }) => {
  return (
    <div className='1 d-flex justify-content-around flex-wrap pt-5'>
      <div className='feature p-2 ' data-aos="slide-right">
        <div className='fs-2 d-flex '>
          <div className='num_our_feature fw-bolder text-white align-items-center justify-content-center d-flex  mr-2 bg-info'>{num}</div>
          <div className='text-info fw-bolder'>{title}</div>
        </div>
        <div className='fs-5 mt-3 fw-medium text-left'>
          {text}
        </div>
      </div>
      <div data-aos="slide-left">
        <img className='features_img' src={image} />
      </div>
    </div>
  )
}

const Que = (props) => {
  return (
    <div className="shadow p-3 mb-2 bg-body-tertiary rounded">
      <ul className="list-group ">
        <div className='text-black text-left'><span className='text-primary'>(Que-{props.num}:  )</span>How can we get enroll for this mentorship programme?</div>
        <div className='text-black'><span className='text-success'>Ans:</span> Just click on "Join our Mentorship programme" Button you will redirect to our telegram group </div>
      </ul>
    </div>
  )
}

const F_and_Q = () => {
  return (
    <>
      <div className='fs-1 fw-bolder text-info' data-aos="slide-up">Frequently Asked Questions? </div>
      <div className='1 d-flex justify-content-center flex-wrap pt-5'>
        <div className='' data-aos="slide-right">
          <img className='fnq_img' src={fnq} />
        </div>
        <div className="questions-block mt-3 mb-5" data-aos="slide-left">
          <Que num={1} />
          <Que num={2} />
          <Que num={3} />
          <Que num={4} />
          <Que num={5} />
          <Que num={6} />
          <Que num={7} />
        </div>
      </div>
    </>
  )
}

const Circle = (props) => {
  return (
    <>
      <div className="circle text-white d-flex justify-content-center align-items-center fs-3 fw-bolder bg-warning">
        {props.num}
      </div>
    </>
  )
}

const About = () => {
  return (
    <>
      <div className='fs-1 fw-medium text-info'>Why MentorShip ?</div>
      <div className=' about_bg mt-5 d-flex flex-column align-items-center'>

        <div className=' w-50 d-flex justify-content-center'>
          <div className='mr-3'>
            <Circle num={1} />
          </div>
          <div className='fs-4 text-left'>Every year, numerous students aspire to secure admission in India's top colleges. However, only a small percentage manage to achieve this feat. When I successfully cracked four consecutive competitive exams in 2021, I was approached by many friends and aspiring candidates who either failed to succeed alongside me or were preparing for the following year. Through conversations with them, I realized that despite their hard work, many students struggle to achieve success. They expressed their frustrations, saying things like, "I didn't know which topics to prioritize or how to practice questions. We joined multiple test series, attended offline classes, and purchased study materials, but we still couldn't find success."</div>
        </div>

        <div className=' w-50 d-flex justify-content-center mt-4'>
          <div className='mr-3'>
            <Circle num={2} />
          </div>
          <div className='fs-4 text-left'>After conducting extensive research and speaking with numerous students and professionals in the field, I came to a significant realization. The problem lies not with the students' efforts, as they put in a tremendous amount of hard work, but rather in the lack of proper guidance and direction. Many students find it challenging to manage themselves effectively. According to a survey conducted by the National Council of Educational Research and Training, approximately 81% of students in India suffer from stress, depression, and a lack of confidence. These factors often lead to a loss of confidence and impulsive decision-making. Students end up joining multiple institutes, practicing numerous test series, and purchasing various study materials and books, but remain dissatisfied with the results.
          </div>
        </div>

        <div className=' w-50 d-flex justify-content-center mt-4'>
          <div className='mr-3'>
            <Circle num={3} />
          </div>
          <div className='fs-4 text-left'>The conclusion drawn from these observations is that everyone needs someone who can listen to their thoughts and provide guidance. Having a mentor or someone who can monitor their progress throughout the preparation process can significantly benefit students. At IITian MScWale, we strive to connect aspiring students with recently cracked IIT-JAM students (IITians) who can provide the necessary guidance. Our platform offers features that describe this concept in detail.</div>
        </div>

        <div className=' w-50 d-flex justify-content-center mt-4'>
          <div className='mr-3'>
            <Circle num={4} />
          </div>        <div className='fs-4 text-left'>In summary, it is evident that students require proper guidance and mentorship to succeed in their endeavors. Simply working hard is not enough without the right direction. By connecting with experienced individuals who have achieved success in similar exams, students can enhance their chances of performing better. At IITian MScWale, we aim to bridge this gap and provide students with the support they need to excel in their competitive exams.</div>
        </div>
      </div>
      <div className='fs-1 fw-bolder text-info'>About Us</div>
    </>

  )
}

export default Middle
