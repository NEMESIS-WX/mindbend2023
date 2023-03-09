const events = [
  // robowars
  {
    name: "ROBOWARS",
    image_hq: "/images/events/hq/ROBOWARS.png",
    image: "/images/events/ROBOWARS.png",
    prize: [
      `15kg Category; 1st prize: Rs. 40,000, 2nd Prize: Rs 25,000, 3rd Prize: Rs. 15,000`,
      `60kg Category; 1st prize: Rs. 60,000, 2nd Prize: Rs 35,000, 3rd Prize: Rs. 25,000`,
    ],
    fee: "Catagory - 1 : 200; Catagory - 2 : 400",
    // about: "Beat, Defeat, Win, Repeat  ",
    // ----------------------------------------------------------------
    details: `<h2>
      Introduction
    </h2>
    
    <p>
    Robo-wars  is  a  major  combat  robotics  event  which  focuses  on  designing  and
  manufacturing  of  robots  made  to  annihilate  its  opponents  and  keeping  itself  as  safe  as
  possible. Winner is decided on the basis of destruction it has caused to its opponents. It
  will have two categories: 15 kg and 60 kg.
  
    </p>
    
    <h2>
      Problem Statements
    </h2>
   
    <ul>
      <h3>
        Round 1
      </h3>
     <p>Teams will need to submit a proof of concept (POC) of the model.</p>
      <h3>
        Round 2
      </h3>
      <p> It  will  be  an  on-site  one-to-one  fight.  The  two  robots  will  be  fighting  in  the  arena.  The
      track of points will be maintained for both the teams and the team having maximum points
      will be declared as winner for that round. This round can be further divided in sub rounds
      e.g. semifinals and final. </p>
     
      <h3>TRACK SPECIFICATION</h3>
      <ul>
        <li> Arena is rectangular in shape with dimension 18 x 16 x 10 foot.
        </li>
        <li> Height of the side safety wall, which is made of M. S, has a height of 0.5m. 
        </li>
        <li> Height above the safety plate is of polycarbonate plate with cage. Top of the arena is
        covered with cage. 
        </li>
      </ul>
      <h3> JUDGING CRITERIA
      </h3>
      <ul>
        <li>A bot is declared victorious if its opponent is immobilized. 
        </li>
        <li>A bot is declared immobilized if it cannot move linearly/rotationally for more than 30
        seconds. 
        </li>
        <li>A robot with one side of its drive train disabled will not be counted immobilized, if it
        can demonstrate some degree of controlled movement.
        </li>
        <li> In case both the robots remain mobile after the end of the round then the winner will
        be decided subjectively
        </li>
        <li> Points will be given on the basis of aggression, damage, control, and strategy.
        </li>
        <li> Pinning occurs when one robot, through sheer force, holds an opponent stationary in
        order to immobilize it
        </li>
        <li> Organizers will allow pinning or lifting for a maximum of 15 seconds per pin/lift then
        the attacker robot will be instructed to release the opponent. 
        </li>
        <li> If  a  team  fails  to  stop  the  pinning/lifting  for  several  times,  that  team  can  also  be
        disqualified. 
        </li>
      </ul>
      <h3>MACHINE SPECIFICATION 
      </h3>
      <ul>
      <li>The  bot  should  not  exceed  60kg  weight  including  the  pneumatic/hydraulic  (the
        components of bot which will be out of arena do not count in this 60kg). 
        </li>
      <li> Robots must be wireless. 
      </li>
      <li> Source, batteries (including external) and any other component excluding remote. The
      robot should fit in the box of 750mm x 750mm x 1000mm. 
      </li>
      <li>All  times,  the  external  device  used  to  control  the  robot  or  any  external  tank  is  not
      included in the size constraint.
      </li>
      <li>Bots can have zero ground clearance provided they do not damage the arena.
      </li>
      </ul>
      <h3>
        MOBILITY
      </h3>
      <ul>
        <li>Rolling (wheels or whole bot).
        </li>
        <li>Linear actuated legs or cam operated motion or any non-wheeled drive system. 
        </li>
        <li>Jumping or flying with the help of propellers or gas balloons is not allowed.
        </li>
      </ul>
      <h3>
      ELECTRICAL SYSTEM SPECIFICATIONS 
      </h3>
      <ul>
        <li>Bot can be powered electrically (DC) by batteries with electrolytes such as Li-ion, Li-
        Po, NiCad, gel cells, lead-acid, etc.      
        </li>
        <li>The electric voltage between 2 points anywhere in the machine should not be more
        than 48 V DC at any point of time.      
        </li>
        <li>Batteries should be charged up before advancing to the match.
        </li>
        <li>All efforts must be made to protect battery terminals from a direct short and causing a
        battery fire, failure to do so will cause direct disqualification.
        </li>
        <li>Internal combustion engines as a source of power will not be allowed.
        </li>
        <li>Any kind of inflammable liquid will not be allowed to use in the bot by any means.
        </li>
      </ul>
      <h3>
      PNEUMATICS AND HYDRAULICS
      </h3>
      <ul>
        <li>  Robot can use non-inflammable liquid to actuate hydraulic devices.
        </li>
        <li>Maximum pressure in the storage/source tank must not exceed 8 bars.</li>
        <li>There should be provision to check the storage tank or source tank pressure with an
        integrated or temporarily fitted pressure gauge.</li>
        <li>All hydraulic liquids should be non-corrosive and leak proof.    </li>
        <li>Special care must be taken while mounting pump, accumulator, and armor to ensure
        that if ruptured direct fluid streams will not escape the robot.
        </li>
       
      </ul>
      <h3>
      ATTACKING/WEAPON SYSTEM 
      </h3>
      <ul>
        <li> Robots can have any kind of cutters, flippers, saws, lifting devices, spinning hammers,
        Spinning drums, etc. as weapons   </li>
        <li>Following weapons or attacking systems are not permitted:      </li>
        <li>Liquid projectiles and tethered or untethered projectiles. 
        </li>
        <li>Any kind of inflammable liquid.       </li>
        <li>Any kind of explosive or intentionally ignited solid or potentially ignitable solid. 
        </li>
       <li>Nets, tape, glue, chains or any other entanglement device. 
       </li>
       <li>High power magnets or electromagnets
       </li>
       <li>Radio jamming, lasers, tesla coils, or any other high-voltage device. 
       </li>
       <li> Spinning weapons that do not come in contact with the arena at any point of time are
       allowed. 
       </li>
       <li>In any case, the arena should not be damaged by any bot.
       </li>
      </ul>
      <h3>
      TEAM SPECIFICATIONS
      </h3>
      <ul>
        <li> Members of a team may be from the same college/school or different (K12/UG/PG).</li>
        <li>Any number of teams can participate from one college/school.
        </li>
        <li>Participants can build a single robot or cluster of robots (according to given rules).
        </li>
        <li>A team can have a maximum of 6 participants may be of same or different colleges.
        But one participant cannot participate simultaneously in 2 or more teams. 
        </li>
        <li>Once  registered,  the  same  team  cannot  register  with  another  name  or  for  another
        robot other than previously registered one.      
        </li>
       <li>Every  team  must  have  a  unique  name  that  should  not  be  offensive  conflicting  or
       inappropriate.      
       </li>
       <li>Organizers have the right to reject entries for any inappropriate team name.
       </li>
       <li>Organizers must be notified if a team’s name has been changed. 
       </li>
       <li> Team Representative: Each team must specify their Team Representative (Leader) at
       the  time  of  registration  on  the  website.  All-important  communications  between  the
       organizer  and  the  registered  teams  will  be  done  through  their  Team  Representative.
       The Team representatives must submit valid contact details (phone no., email id, etc.)
       at the time of registration.
       </li>
       <li>If teams don’t show up on allotted slot, they will be disqualified. 
       </li>
      </ul>
      <h3>SAFETY RULES     </h3>
      <ul>
      <li>Robots  must  be  activated  in  the  arena  or  with  the  expressed  consent  of  the  event
      coordinators.
      </li>
      <li>All participants build and operate robots at their own risk.
      </li>
      <li>Please  take  care  you  do  not  hurt  yourself  or  others  when  building,  testing  and
      competing. 
      </li>
      <li>Organizers will not be responsible for any injuries to the operator or team members. 
      </li>
      <li>Violation of any of the above rules will lead to disqualification of the respective team.
      </li>
      <li>A  robot  that  is  deemed  unsafe  by  the  judges  after  the  match  has  begun  will  be
      disqualified  and  therefore  declared  the  loser.  The  match  will  be  immediately  halted
      and the opponent will be awarded a win. 
      </li>
      <li>Robots intentionally damaging the wires of the opponent will be disqualified. 
      </li>
      <li>Also, each team should keep their wires above the ground. 
      </li>
      <li>Robots intentionally and/or extensively damaging the arena will be disqualified.
      </li>
      <li>If the wires of the robot are cut because of its own strategy and if fail to repair within
      match time then the team will be disqualified. 
      </li>
      <li>Special care should be taken to protect the on-board batteries and pneumatics, robot
      without proper protection will not be allowed to compete. 
      </li>
      </ul>
      <h3>
        Registration Details
      </h3>
      <p>
        Registration Fee: Rs 500 <br>
      </p>`,
    timeline: [""],
    rulebook: "NA",
    rules: [
      "Any  damage  caused  to  the  arena  at  any  point  of  time  will  lead  to  disqualification/penalty.",
      "A team member can’t be a part of more than one team.    ",
      "Bring your college/student I-Card at the time of competition.     ",
      "Any of the above-mentioned rules, if found violated, teams would not be allowed toparticipate in the competition. ",
      "Decision Taken by Judges will be final and binding for all.",
      "Any misbehavior will lead you to disqualification from the competition.",
      "In case of any disputes, the decision of the organizer’s and the jury’s decision will be final. ",
      "If less than 5 teams will be registered, then only first prize will be given and if less than 10 teams will register, only two prizes will be given. ",
    ],
    catagory: "technical",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Harshrajsinh Gohil",
        phone: "9054660903",
      },
      {
        name: "Nishit Prajapati",
        phone: "9913899949",
      },
    ],
  },

  // model united nations
  {
    name: "MODEL UNITED NATIONS (MUN)",
    image_hq: "/images/events/hq/MUN_ TANMAY.png",
    image: "/images/events/MUN_ TANMAY.png",
    prize: ["1st Prize: Rs 8000", "2nd Prize: Rs 6000"],
    fee: "Rs 30",
    type: "individual",
    // about: `Chance to Represent your country at global level`,
    // ----------------------------------------------------------------
    details: `
      <h2>
        Problem Statement
      </h2>
      <p>
        Replit is the best platform for quickly starting, sharing, hosting, and developing coding projects in any programming language right from your browser. Features you can make the most out of: Enjoy a Google Docs-like coding & editing experience supporting all languages across both mobile and desktop.
      </p>
      <ul>
        <h3>
          Round 1
        </h3>
        <p>
          A quiz will be held on topic related to the international organisation or current affairs related
          topics.The participants have to answer the question in pre defined time.On the basis of the score
          in the quiz conducted teams will be shortlisted for 2nd round.
        </p>
        <h3>
          Round 2
        </h3>
        <p>
          Case Study : In this round a country name will be given and the participants will have to do case study on it.
        </p>
        <h3>
          Round 3
        </h3>
        <p>
          Debate
            <ul>
              <li>
              Opening of the debate
              </li>
              <li>
                The Debate
              </li>
              <li>
                Closing of the debate
              </li>
            </ul>
        </p>
        <h3>
          Team Specification
        </h3>
        <p>
          Upto 3 members.
        </p>
        <h3>
          Registration Details
        </h3>
        <p>
          Registration Fee: Rs 30
        </p>
        <p>
          Registration details will be announced soon.
        </p>
      </ul>`,

    timeline: ["DATE : 01/04/2023  ", "TIME : 2:30PM ONWARDS"],
    rulebook: "NA",
    rules: [
      `
      All participants are supposed to follow the rules and game flow as decided by Mindbend'23 team
      members. In case of any confusion, the final decision of the conducting team should be obeyed and
      will be considered final.
    `,
    ],
    catagory: "managerial",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Het",
        phone: "73594 31754",
      },
      {
        name: "Saurav",
        phone: "93270 49411",
      },
      {
        name: "Karm",
        phone: "8347674048",
      },
    ],
  },

  // overdrive
  {
    name: "OVERDRIVE",
    image_hq: "/images/events/hq/MODE_ OVERDRIVE.png",
    image: "/images/events/MODE_ OVERDRIVE.png",
    prize: [
      "1st Prize: Rs 55,000",
      "2nd Prize: Rs 40,000",
      "3rd Prize: Rs 25,000",
    ],
    fee: "Rs 300",
    // about: "The fun begins where the pavement ends",
    // ----------------------------------------------------------------
    details: `<h2>
      Introduction
    </h2>
    
    <p>
    Engineering students are competitive by nature and the notion of competition was an
  appealing approach to capitalize on this characteristic. And therefore, here participants
  have to win with the help of their RC Nitro cars. Students have to Design a remote-
  controlled car consisting of an IC Engine that can compete with other opponents on a dirt
  track full of various types of obstacles.
  
    </p>
    
    <h2>
      Problem Statements
    </h2>
   
    <ul>
      <h3>
        Round 1
      </h3>
     <p>Teams will need to submit a proof of concept (POC) of the model.</p>
      <h3>
        Round 2
      </h3>
      <p> It will be an on-site competition. Each team will be given 2 laps out of which faster lap will
      be considered. There will be points system for clearing each obstacle on the track.
      Depending on the score, teams will be selected for next round.</p>
      <h3> ROUND 3 </h3>
      <p>It will be a race between three teams qualified from round 2. </p>
      <h3>TRACK SPECIFICATION</h3>
      <ul>
        <li> Exact design of the track will be disclosed on the day of the event.</li>
        <li> Track will be made up of either dry ground or mud consisting of up and downs,
        bumpers, turns, etc.</li>
        <li> Borders of the track will be clearly indicated.  </li>
        <li>The minimum width of the track will be around 5 feet.</li>
        <li> A lap of the track is completed when the car comes back to the start-finish line. </li>
        <li>  Driver has to operate car from specific control stand provided on the side to the
        track. More than one car may race on the track at the same time.</li>
        <li>Despite  the  organizer's  efforts  to  keep  the  track's  quality  intact,  the  track  may
        undergo wear and the car is expected to be able to perform on such a weakened track
        as well.</li>
      </ul>
      <h3>CAR SPECIFICATION </h3>
      <ul>
        <li> Bot should fit in a box of dimensions 500mm x 300mm x 300mm at any moment of
        time during the race.</li>
        <li>Only wireless communication is allowed throughout the race. </li>
        <li>Functional parts - Gears, differential gear, engine, springs, shock absorbers, batteries,
        wheels and wheel hub can be directly used as available in the market.</li>
        <li> Structural  parts  -  Chassis,  steering  mechanism,  shock  towers  and  suspension
        (excluding upper suspension arm, suspension spring and shock absorbers) have to be
        built by the participants themselves.</li>
        <li> Only single-cylinder, two-stroke, normally aspirated, air-cooled, glow- ignition engines
        utilizing standard or turbo plugs will be permitted. IC engine specification- up to 6cc.</li>
        <li> Fuel tanks must be safely mounted. </li>
      </ul>
      <h3>GAME RULES</h3>
      <ul>
      <li>There will be 3 rounds among which round 2 and round 3 will be in offline mode </li>
      <li> Number of stages in each round may vary accordingly. </li>
      <li>Team members are not allowed to touch car once race Hand touch is allowed at cost
      of the penalty. </li>
      </ul>
      <h3>
        Team Specification
      </h3>
      <ul>
        <li>Team should be of 3-5 members.</li>
        <li>Members of a team may be from the same college/school or different (K12/UG/PG).</li>
        <li>Any number of teams can participate from one college/school. 
        </li>
        <li>Professionals are not allowed. Only students can participate.
        </li>
        <li> Participants are required to bring their school/college ID cards.</li>
        <li> Once registered, the same team cannot register with another name or for another 
        model other than previously registered one.</li>
        <li> Every team must have a unique name that should not be offensive conflicting or 
        inappropriate</li>
        <li>Organizers have the right to reject entries for any inappropriate team name. 
        </li>
        <li> Organizers must be notified if a team’s name has been changed.</li>
        <li> Team Representative: Each team must specify their Team Representative (Leader) at
        registration on the website. All important communications between the organizer and 
        the registered teams will be done through their Team Representatives. The Team 
        representatives must submit valid contact details (phone no., email id, etc.) at the time 
        of registration.</li>
        <li>If teams don’t show up on allotted slot, they will be disqualified.
        </li>
      </ul>
      
      <h3>
        Registration Details
      </h3>
      <p>
        Registration Fee: Rs 500 <br>
      </p>`,
    timeline: [""],
    rulebook: "/docs/rulebooks/mode overdrive.pdf",
    rules: [
      "Teams are not permitted to damage other team's car during race intentionally.",
      "Any damage to track due to car will not be tolerated. ",
      " The  car  is  not  allowed  to  lose  any  loose  parts  on  any  part  of  the  arena.  Any  car disintegrating during the race will be disqualified.",
      " Bring your college/student I-Card at the time of competition. ",
      "Decision Taken by Judges will be final and binding for all. ",
      " Any misbehaviour will lead you to disqualification from the competition. ",
      "If less than 5 teams will be registered, then only first prize will be given and if less than 10 teams will register, only two prizes will be given.",
    ],
    catagory: "technical",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Atul Gautam",
        phone: "9468650219",
      },
      {
        name: "Mihir Parmar",
        phone: "9924435522",
      },
    ],
  },

  //CARRY THE CONSIGNMENT
  {
    name: "CARRY THE CONSIGNMENT",
    image: "/images/events/Carry the Consignment.png",
    image_hq: "/images/events/hq/Carry the Consignment.png",
    prize: [
      "1st Prize: Rs 21000",
      "2nd Prize: Rs 17000",
      "3rd Prize: Rs 13000",
    ],
    fee: "Rs 80",
    // about: ``,
    // ----------------------------------------------------------------
    details: `
      <h2>
        INTRODUCTION
      </h2>
      <p>In the competition, the participants must design and fabricate an RC aircraft within 
      specified dimensions and technical specifications later specified in the document.           
      </p>
      <h2>
        PROBLEM STATEMENT
      </h2>
      <p>The participants are required to design and fly RC aircraft that can carry payload 
      successfully.       
      </p>
      <h3>ROUND 1(ONLINE)</h3>
     <ul>
     <li>In round one, the teams are required to send us an abstract in which they have to 
     justify their research and design aspects and how they designed the aircraft to carry 
     maximum payload.
     </li>
     <li>The abstract should be a minimum of 6 pages (A4 size 1.5 line spacing) with standard 
     formatting.
     </li>
     <li>The document must include the basic design of the aircraft (dimensions, wing areas, 
      velocity, etc.) and explain how their design is suitable for the given problem.
      </li>
     <li>Teams will be shortlisted on the basis of abstract and shortlisted teams will be 
     announced 20 days before the competition date.
     </li>
     </ul>
      <h3>ROUND 2(OFFLINE)</h3>
      <p>The RC aircraft should be able to carry payload and must be designed within the specified 
      dimensions.      
      </p>
      <h3>AIRCRAFT SPECIFICATIONS
      </h3>
      <ol>
     <li>The competition requires participants to design and fabricate an RC aircraft.
     </li>
     <li>T/W <=0.75 without payload. (Thrust to weight ratio of aircraft without payload)
     </li>
     <li>Propeller diameter should not be greater than 13 inches.
     </li>
     <li>Metal propellers are not allowed. 
     </li>
     <li>The models can have powered take-off with landing gear or be hand launched
     </li>
     <li>Total wingspan should be a maximum of 1.2 m.
     </li>
     <li>Only electrical motors are allowed. 
     </li>
     <li>Use of gyroscopes and programming assistance in receivers is prohibited
     </li>
      </ol>
      
        <h2>
          TEAM SPECIFICATIONS
        </h2>
       <ul>
       <li>In the competition you can either participate individually or in a team consisting a 
       maximum of 5 members including pilot.
       </li>
       <li>Any number of teams can participate from one college/school.
       </li>
       <li>Participants must bring their school/college ID cards.
       </li>
       <li>A particular participant cannot register with more than one team.
       </li>
       <li>The organizers have the right to reject entries if any ambiguity is found in the above- 
       mentioned rules.
       </li>
       </ul>
       
        <h2>JUDGING CRITERIA:
        </h2>
        <ul>
        <li>The judging will be done on the basis of the maximum weight carried. The aircraft that 
        carries the highest weight successfully will be declared the winner.
        </li>
        <li>The term successfully here means that the aircraft must take proper take-off and while 
        flying, the weight shouldn’t be dropped and should land successfully in the landing 
        zone.
        </li>
        <li>The aircraft must be landed within 3 minutes of take-off.
        </li>
        <li>In case the aircraft falls after take-off, the team will be given a total of 5 minutes to 
        repair the damages (if any) and return to the take-off zone for the second attempt.
        </li>
        <li>Note- only two attempts will be given.
        </li>
        <li>The blue area depicted in the arena top view is the minimum distance (15 meters) that 
        the aircraft must cover in order to consider for its scoring.
        </li>
        </ul>
        <p>The formula used for scoring will be:
        weight of payload (grams)* time of flight(secs)/ weight of aircraft (grams)</p>
        <h2>
        <h3>IMP POINTS TO BE CONSIDERED WHILE SCORING
        </h3>
        <ul>
        <li>The aircraft must be designed to increase the score.
        </li>
        <li>Here time of flight can be a maximum of 180 seconds only.
        </li>
        <li>If you are unable to land the aircraft after 180 secs. We will deduct 3 seconds for 
        every flight extra second the aircraft flies.
        </li>
        </ul>
        <h3>TEAM SPECIFICATIONS
        </h3>
        <ul>
        <li>This will be a team event. You can participate individually or with a team of a 
        maximum of 3 members.
        </li>
        <li>Any number of candidates can participate from one college/school
        </li>
        <li>Participants are required to bring their school/college ID cards.
        </li>
        <li>Once registered, the same candidate cannot register with another name for the event.
        </li>
        <li>Organizers have the right to reject entries for any inappropriate username of the 
        candidate
        </li>
        <li>Organizers must be notified if a candidate’s username has been changed. 
        </li>
        </ul>
       <h2>
          REGISTRATION DETAILS
        </h2>
        <p>
          Fee: Rs 400 <br>
        </p>
      </ul>
    `,
    timeline: [],
    rulebook: "NA",
    rules: [
      "Any misbehavior will lead you to disqualification from the competition.",
      "Decision Taken by Judges will be final and binding for all",
      "All decisions taken by the organizing team will be deemed final, and no more changes will be encouraged",
      "If less than 5 teams will be registered, then only the first prize will be given and if less than 15 teams will register, only two prizes will be given.",
      "No one shall enter the arena except the organizers",
      "If Any of the above-mentioned rules, if found violated, teams would not be allowed to participate in the competition.",
      "Any damage caused to the arena at any point in time will lead to disqualification /penalty.",
    ],
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    catagory: "technical",
    contacts: [
      {
        name: "",
        phone: "",
      },
    ],
  },

  // maze runner
  {
    name: "MAZE RUNNER",
    image_hq: "/images/events/hq/MAZE RUNNER.png",
    image: "/images/events/MAZE RUNNER.png",
    prize: ["1st Prize: Rs 13000", "2nd Prize: Rs 10000", "3rd Prize: Rs 7000"],
    fee: "Rs 100",
    // about: ``,
    // ----------------------------------------------------------------
    details: `
        <h2>
          INTRODUCTION
        </h2>
        <p>
        Do you maze? Now comes the time to make a robot that is capable of mapping out an unknown maze, mark checkpoints and navigate the shortest possible path through the maze in the least amount of time.
        </p>
        <h2>
          PROBLEM STATEMENT
        </h2>
        <p>
          Participants are required to build an autonomous, self-contained robot, robot, which can get to the center of a maze in the shortest possible time. A robot essentially comprises a drive motor or motors to move it; a steering and turning method; sensors to detect the presence or absence of maze walls; sensors or control logic to oversee the activities of the rest and keep the vehicle 'on track' or to solve the maze; batteries to provide power.
        </p>
        <ul>
          <h3>
            ROUND 1(Online)
          </h3>
          <p>
          It will be an abstract round where participants have to answer how to solve the given maze efficiently after analyzing the given track and submit their response.
          </p>
  
          <h3>
            ROUND  2(Offline)
          </h3>
          <p>
            The robot will be required to follow the path on the arena. The layout of the arena will be disclosed on the spot.
          </p>
          
          <h2>
            Team Specifications
          </h2>
          <ul>
            <li>This will be a team event. You can participate individually or with a team of a maximum of 3 members.</li>
            <li>Any number of candidates can participate from one college/school.</li>
            <li>Participants are required to bring their school/college ID cards.</li>
            <li>Once registered, the same candidate cannot register with another name for the event. Organizers have the right to reject entries for any inappropriate username of the candidate.</li>
            <li>Organizers must be notified if a candidate’s username has been changed.</li>  
          </ul>
          <h2>
            JUDGING CRITERIA
          </h2>
          <ul>
            <li>All contesting machines shall be collected before the maze is unveiled.</li>
            <li>After the maze is unveiled, the mouse handler is given 3 minutes before the start of his/her run to make adjustments (if any) to the mouse sensors and calibrate the sensors.</li>
            <li>Each contesting robot is allocated a total of 5 minutes of access to the maze after the 3 minutes sensor adjustment time. The maze-time clock will commence after the expiry of the 3 minutes time limit even if the handler is still making adjustments to the sensors.</li>
            <li>The time taken to travel from the start square to the destination square is called the "run" time. Traveling from the destination square back to the start square is not considered a run. The total time taken from the first activation (after calibration is done or calibration time is over, whichever is less) of the micro mouse until the start of each run is also measured. This is called the ‘maze’ or 'search' time. If the micro mouse requires any manual assistance at any time during the contest, it is considered "touched." Scoring is based on these three parameters.</li>
            <li>A contestant should not feed information on the maze to the micro mouse. Therefore, changing ROMs or downloading programs is NOT allowed once the maze is revealed. However, contestants are allowed to:</li>
            <li>➔ Replace batteries between runs</li>
            <li>➔ Adjust sensors (gain, position, etc.) ➔ Change speed settings</li>
            <li>The contestants should be prepared with the circuit diagrams, algorithms, and code listings to convince the judges that any alteration they do in the total 5 minutes span does not add topological information about the maze to the mouse.</li>
            <li>Participants are allowed to restart once and suitable penalty will be added.</li>
          </ul>
  
          <h2>
            ROBOT SPECIFICATION
          </h2>
          <ul>
            <li>A robot shall be self-contained. It shall not use an energy source employing a combustion process.</li>
            <li>A robot should be such that it fits between the given wall specifications.</li>
            <li>The method of propulsion is at the discretion of the builder, provided that the power source is non-polluting and should not harm the arena.</li>
            <li>A robot shall not leave anything behind while negotiating the maze.</li>
            <li>A robot shall not jump over, climb, scratch, damage or destroy the walls of the maze.</li>
          </ul>
  
          <h2>
            TRACK SPECIFICATION
          </h2>
          <ul>
            <li>The walls constituting the maze shall be 15 cm high and 25 cm thick. Passageways between the walls shall be 15 cm wide, outside wall shall enclose the entire maze.</li>
            <li>The sides of the maze shall be white. The floor of the maze shall be made with non- gloss black paint.</li>
          </ul>
  
          <h2>
            REGISTRATION DETAILS
          </h2>
          <p>
            Fee: Rs 200 <br>
          </p>
        </ul>
      `,
    timeline: [""],
    rulebook: "NA",
    rules: [
      "Any misbehavior will lead you to disqualification from the competition.",
      "Decision Taken by Judges will be final and binding for all.",
      "All decisions taken by the organizing team will be deemed final, and no more changes will be encouraged.",
      "The idea presented by the teams should be original (not protected by patent/copyright/technical publication by anyone else).",
      "If less than 5 teams will be registered, then only the first prize will be given and if less than 15 teams will register, only two prizes will be given.",
      "No one shall enter the arena except the organizers.",
      "If Any of the above-mentioned rules, if found violated, teams would not be allowed to participate in the competition.",
      "Any damage caused to the arena at any point in time will lead to disqualification /penalty.",
    ],
    catagory: "technical",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Viren Gadhavi",
        phone: "963-825-5393",
      },
      {
        name: "Yash Mhatre",
        phone: "952-058-4449",
      },
    ],
  },

  // sky high
  {
    name: "SKY HIGH",
    image_hq: "/images/events/hq/sky high.png",
    image: "/images/events/sky high.png",
    prize: ["1st Prize: Rs 7000", "2nd Prize: Rs 5000", "3rd Prize: Rs 3000"],
    fee: "Rs 80",
    // about: ``,
    // ----------------------------------------------------------------
    details: `
        <h2>
          INTRODUCTION
        </h2>
        <p>
          Water rockets have long been a source of entertainment and education. They are usually made by filling an empty two-litre plastic soda bottle with water and pressuring it with air for launch.
        </p>
        <h2>
          PROBLEM STATEMENT
        </h2>
        <p>
          Teams have to fabricate a water rocket that uses the thrust of pressurized water to launch and travel the maximum distance.
        </p>
        <ul>
          <h3>
            ROUND 1(Online)
          </h3>
          <ul>
            <li>This is an online video submission round.</li>
            <li>Teams must prepare a video demonstrating their water rocket and explaining their design.</li>
            <li>The video must be in mp4 format.</li>
            <li>Duration must be at most 3 minutes.</li>
            <li>The team name should be the name of the video file.</li>
            <li>The same rocket model has to be used in Round 2 if selected.</li>
          </ul>
  
          <h3>
            ROUND  2(Offline)
          </h3>
          <ul>
            <li>This round would be held offline in the college.</li>
            <li>Each team will get two chances to launch the rocket.</li>
            <li>The rocket would be launched at 45 degrees from ground level.</li>
            <li>The event coordinators would provide the launchpad.</li>
            <li>The launch angle will be kept the same for all rockets launched at the event.</li>
            <li>Coordinators will measure the flight time and horizontal range each time. The best flight out of the two will be considered.</li>
          </ul>
  
          <h2>
            ROCKET SPECIFICATION
          </h2>
          <ul>
            <li>Materials allowed are given below a) Body: PET/ Plastic</li>
            <li>b) Fins: Cardboard</li>
            <li>c) Nose: Any material</li>
            <li>Only cardboard can be used as the building material for the fins.</li>
            <li>Usage of any ready-made kits is not allowed. The rocket must be made of plastic and have a maximum capacity of 2 litres.</li>
            <li>The rocket must only have water propulsion; no other propellant can be used.</li>
            <li>Metal, glass, hard plastic, rocks, styrofoam, or spikes cannot be used to construct the rocket. Using these restricted materials will automatically disqualify the team from the competition.</li>
            <li>The rocket must be clear of any coverings to approximately 7 cm from the throat of the rocket.</li>
            <li>The maximum allowed total height of the rocket is 50.0 cm.</li>
            <li>The width/diameter, including the rocket's fins, must be at most 30 cm.</li>
            <li>The mouth of the pressurized bottle must fit over a 15 mm PVC pipe.</li>
            <li>The release mechanism can be made of any material other than restricted ones.</li>
            <li>The rocket should be built as per the given specifications.</li>
          </ul>
  
          <h2>
            LAUNCH SPECIFICATION
          </h2>
          <ul>
            <li>The launchpad will have a ramp inclined 45 degrees from the ground level.</li>
          </ul>
  
          <h2>
            FIELD SPECIFICATION
          </h2>
          <ul>
            <li>The field area of the water rocket event would be 100 meters X 100 meters (approx.). A fixed spot for the launching pad will be marked on the event field.</li>
            <li>White lines mark the penalty area.</li>
            <li>Rocket is considered to have made a penalty if it falls outside the defined area. The penalty lines would be on the left and right side of the field area.</li>
          </ul>
          
          <h2>
            JUDGING CRITERIA
          </h2>
          <h3>
            ROUND 1
          </h3>
          <ul>
            <li>The teams would be evaluated on the following criteria: ➔ The aesthetics of their water rocket</li>
            <li>➔ The originality of their work.</li>
          </ul>
          <h3>
            ROUND 2
          </h3>
          <ul>
            <li>The rocket with the maximum airtime and distance travelled will be nominated as the winner.</li>
            <li>The team covering more horizontal distance would be the winner in a tie-like situation.</li>
            <li>The team will be penalized if the water rocket lands outside the defined area.</li>
          </ul>
  
          <h2>
            EVENT RULES
          </h2>
          <ul>
            <li>Only the team leader will be allowed to handle the rocket launcher during the gameplay.</li>
            <li>The event coordinators would provide the launchpad.</li>
            <li>To ensure the safety of bystanders, the rockets would be inspected first by the event coordinators.</li>
            <li>Each team will get two chances to launch the rocket and achieve the maximum air time and range.</li>
            <li>Coordinators will record the air time of the rocket for each attempt; the maximum air time will be considered from all the attempts and will be declared as the official air time of the rocket. Simultaneously distance will be calculated for each attempt, and the longest range will be considered.</li>
            <li>The decision of judges would be final in case of conflict.</li>
          </ul>
  
          <h2>
            TEAM SPECIFICATION
          </h2>
          <ul>
            <li>The team should have 2 to 4 members.</li>
            <li>Team members may be from the same college/school or different (K12/UG/PG). Any number of teams can participate from one college/school.</li>
            <li>Professionals are not allowed. Only students can participate.</li>
            <li>Participants are required to bring their school/college ID cards.</li>
            <li>Once registered, the same team cannot register with another name or for another</li>
            <li>rocket other than the previously registered one.</li>
            <li>Team name should not be offensive, conflicting, or inappropriate. Organizers have the right to reject entries for any inappropriate team name.</li>
            <li>Organizers must be notified if a team’s name has been changed.</li>
            <li>Each team must specify their Team Leader at registration on the website. All critical communications between the organizer and the registered team will be done through their Team Leader. The Team Leader must submit valid contact details (mobile number, email id, etc.) at the time of registration.</li>
            <li>If teams don’t show up in the allotted slot, they will be disqualified.</li>
          </ul>
          
          <h2>
            REGISTRATION DETAILS
          </h2>
          <p>
            Fee: Rs 80 <br>
          </p>
        </ul>
      `,
    timeline: [""],
    rulebook: "/docs/rulebooks/SKY HIGH.pdf",
    rules: [
      "Any misbehavior will lead you to disqualification from the competition.",
      "Decision Taken by Judges will be final and binding for all",
      "All decisions taken by the organizing team will be deemed final, and no more changes will be encouraged.",
      "Plagiarism in any form is strictly prohibited and can even result in the disqualification of contestants involved.",
      "The idea presented by the teams should be original (not protected by patent/copyright/technical publication by anyone else).",
      "If less than 5 teams will be registered, then only first prize will be given and if less than 15 teams will register, only two prizes will be given.",
      "No one shall enter the arena except the organisers.",
      "Any of the above-mentioned rules, if found violated, teams would not be allowed to participate in the competition.",
      "Any damage caused to the arena at any point in time will lead to disqualification /penalty.",
    ],
    catagory: "technical",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Atul Gautam",
        phone: "9468650219",
      },
      {
        name: "Madhuri Sharma",
        phone: "9460877801",
      },
    ],
  },

  // hunt the line
  {
    name: "HUNT THE LINE",
    image_hq: "/images/events/hq/HUNT THE LINE.png",
    image: "/images/events/HUNT THE LINE.png",
    prize: ["1st Prize: Rs 13000", "2nd Prize: Rs 10000", "3rd Prize: Rs 7000"],
    fee: "Rs 100",
    // about: `A Chase for All!!`,
    // ----------------------------------------------------------------
    details: `
        <h2>
          INTRODUCTION
        </h2>
        <p>
          In this competition participants would be competing against each other in an arena which would be having white stripes on a black background. Robots should be designed in such a way that it can take turn whenever there is a curve.
        </p>
        <h2>
          PROBLEM STATEMENT
        </h2>
        <ul>
          <h3>
            ROUND 1
          </h3>
          <p>
            Teams will need to submit working video of their robot as a Proof of Concept.
          </p>
          <ul>
            <li>Duration of video must not be more 5 minutes.</li>
            <li>Video must be in mp4 format.</li>
            <li>Ensure the proper visibility of bot in video.</li>
            <li>Bot shown must be the one which is to be operated over arena. Any sort of malpractice might lead to disqualification.</li>
            <li>Any sort of malpractice might lead to disqualification.</li>
          </ul>
  
          <h3>
            ROUND  2
          </h3>
          <p>
            The robot will be required to follow the path on the arena. The layout of the arena will be disclosed on the spot.
          </p>
  
          <h2>
            TRACK SPECIFICATION
          </h2>
          <ul>
            <li>The layout of the track will be disclosed on the spot.</li>
            <li>The track will have straight paths and smooth circular turns.</li>
            <li>The lines will be of standard white color of the width of 3 cm (with a dark background).</li>
            <li>The starting point and ending point will not coincide.</li>
            <li>White strip will be present at the end of the arena.</li>
          </ul>
  
          <h2>
            MACHINE SPECIFICATION
          </h2>
          <ul>
            <li>The robot must be fully autonomous.</li>
            <li>It should be controlled by a micro-controller using differential drive.</li>
            <li>At any time of the event, the robot dimensions must not exceed 250x250 mm length and breadthwise.</li>
            <li>There isn’t any constraint on height and weight.</li>
            <li>The maximum DC voltage between any two points in the circuitry must not exceed 24V.</li>
            <li>No pneumatics and hydraulics are allowed. Mechanisms which can harm other robot are NOT allowed.</li>
          </ul>
          
          <h2>
            REGISTRATION DETAILS
          </h2>
          <p>
            Fee: Rs 200 <br>
          </p>
        </ul>
      `,
    timeline: [""],
    rulebook: "NA",
    rules: [
      "Any damage caused to the arena at any point in time will lead to disqualification /penalty.",
      "The robot has to travel only on the prescribed arena, and if the bot completely leaves the arena it will have to start from the previous checkpoint.",
      "Bring your college/student I-Card at the time of competition.",
      "Any of the above-mentioned rules, if found violated, teams would not be allowed to participate in the competition.",
      "Decision Taken by Judges will be final and binding for all.",
      "Any misbehaviour will lead you to disqualification from the competition.",
      "If less than 5 teams will be registered, then only first prize will be given and if less than 15 teams will register, only two prizes will be given. Team Specifications",
      "Team should be of 3-5 members.",
      "Members of a team may be from the same college/school or different (K12/UG/PG).",
      "Any number of teams can participate from one college/school.",
      "Professionals are not allowed. Only students can participate.",
      "Participants are required to bring their school/college ID cards.",
      "Once registered, the same team cannot register with another name or for another robot other than previously registered one.",
      "Every team must have a unique name that should not be offensive conflicting or inappropriate.",
      "Organizers have the right to reject entries for any inappropriate team name. Organizers must be notified if a team’s name has been changed.",
      "Team Representative: Each team must specify their Team Representative (Leader) at the time of registration on the website. All important communications between the organizer and the registered teams will be done through their Team Representative. The Team representatives must submit valid contact details (phone no., email id, etc.) at the time of registration.",
      "If teams don’t show up on allotted slot, they will be disqualified.",
    ],
    catagory: "technical",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Harshraj Gohil",
        phone: "9054660903",
      },
      {
        name: "Nishit Prajapati",
        phone: "9913899949",
      },
    ],
  },

  // CODE WARS
  {
    name: "Code Wars",
    image_hq: "/images/events/hq/CODEWARS.png",
    image: "/images/events/CODEWARS.png",
    prize: ["1st Prize: Rs 12000", "2nd Prize: Rs 8000", "3rd Prize: Rs 5000"],
    fee: "Rs 50",
    // about: `Wars Between Coders`,
    // ----------------------------------------------------------------
    details: `
        <h2>
          INTRODUCTION
        </h2>
        <p>Any technical fest is incomplete without a ‘Coding Challenge’, isn’t it? Here we are with
        CodeWars,  a  3-hour  long  ICPC  style  coding  competition  based  on  Algorithms,  Data-
        structures,  and  problem-solving.  The  problem  statements  will  be  themed  on  defense
        technologies with the participants solving coding puzzles to decrypt enemy military codes
        and win the battle for the homeland!      
        </p>
        <h2>
          PROBLEM STATEMENT
        </h2>
        <p>3-hour  marathon  classic  ICPC  style  coding  contest  participated  by  students  across  are
        required to code and submit the solutions of given problem statements in any language of
        their choice. A reference algorithm booklet PDF will be provided to all registered teams
        and they can bring the printed form with them to the site of contest for reference.      
        </p>
          <h2>
            TEAM SPECIFICATIONS
          </h2>
          <ul>
            <li>This will be a team event of maximum three members each team.   </li>
            <li>The participants must be enrolled in a college/university at the time of application and
            must not be graduated as of March 
            </li>
            <li>All team members must be from the same college or university.
            </li>
            <li>Participants are required to bring final COVID vaccination certificates and wear masks
            according to government COVID advisory guidelines.</li>
            <li>Participants are required to bring their school/college ID cards.</li>
            <li>Once registered, the same candidate cannot register with another name for the event.</li>
            <li>Organizers have the right to reject entries for any inappropriate username of candidate.</li>
           <li>Organizers must be notified if a candidate’s username has been changed.
           </li>
          </ul>
          
          <h2>
            REGISTRATION DETAILS
          </h2>
          <p>
            Fee: Rs 150 <br>
          </p>
        </ul>
      `,
    timeline: [""],
    rulebook: "/docs/rulebooks/Chem-E-Car.pdf",
    rules: [
      "The contest will be conducted on CodeForces",
      "Each team will get one computer to submit their solutions to the problem statements(ICPC Style)",
      " The team will be rewarded points based on the number of test samples solved.",
      "The team will be ranked as per the number of problem. Statements solved and ties will be  broken  by  total  time  taken  by  each  participant/penalty  incurred  on  wrong submission.",
      "Plagiarism/Use  of  internet  in  any  form  is  strictly  prohibited  and  can  even  result  in disqualification of contestants involved.",
      "All  decisions  taken  by  the  organizing  team  will  be  deemed  as  final,  and  no  more changes will been courage.",
      "Any misbehavior will lead you to disqualification from the competition.",
      "If less than 20 teams will be registered, then only two prizes will be given and if less than 10 teams will register, only first prize will be given.",
    ],
    catagory: "technical",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Vishvesh Trivedi",
        phone: "9979637506",
      },
      {
        name: "Swara Jain",
        phone: "9426671700",
      },
    ],
  },

  // dalal street 1992
  {
    name: "DALAL STREET-1992",
    image_hq: "/images/events/hq/DALAL STREET 1992.png",
    image: "/images/events/DALAL STREET 1992.png",
    prize: ["1st Prize: Rs 8000", "2nd Prize: Rs 6000"],
    fee: "Rs 30",
    type: "team",
    // about: `Indian Stock Market Simulation`,
    // ----------------------------------------------------------------
    details: `
      <h2>
        Introduction
      </h2>
      <p>
        CCAC and MINDBEND 2023 bring to you the "DALAL STREET-1992", an Indian Stock Market competition as part of MINDBEND 2023. Presenting an opportunity to test their expertise in the stock market, participants will have to use their buy and sell qualities to keep moving ahead in the dynamic market.
      </p>
      <p>
        Dalal Street-1992 is set in the year 1992 where Shareholders(Teams) can buy, sell, and trade their stock portfolio in an offline physical market. The goal is to increase the respective portfolios. The one with the maximum value of the portfolio wins the event.
      </p>
      <h2>
        Problem Statement
      </h2>
      <ul>
        <h3>
          Round 1
        </h3>
        <p>
          There will be an online quiz of 30 minutes based on some stock market facts 
          followed by a Dalal Street competition round, 
          10 teams or shareholders with each team comprising 3-4 members will qualify for the next round.
        </p>
        <h3>
          Round 2
        </h3>
        <p>
          There will be 10 News Rounds. 
          In each round, the updated stock price of each company and some recent news events will be presented. 
          Based on details each team must decide on which companies to invest in and update the respective portfolio. 
          This will allow each of the teams(shareholders) to buy, sell, and trade with the Stock exchange or among themselves as well. 
          Teams are allowed to move on the given platform allotted to each one of them respectively. 
          At the end of this, the team with the maximum portfolio will win.
        </p>
        <h3>
          Team Specification
        </h3>
        <p>
          Upto 4 members.
        </p>
        <h3>
          Registration Details
        </h3>
        <p>
          Registration Fee: Rs 30 <br>
          Registration details will be announced soon.
        </p>
      </ul>`,

    timeline: ["DATE : 31/03/2023  ", "TIME : 2:30PM ONWARDS"],
    rulebook: "/docs/rulebooks/datal street.pdf",
    rules: [
      `
      All participants are supposed to follow the rules and game flow as decided by Mindbend'23 team members. 
      In case of any confusion, the final decision of the conducting team should be obeyed and will be considered final.
    `,
    ],
    catagory: "managerial",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Ritesh",
        phone: "84018 22498",
      },
      {
        name: "Anand",
        phone: "73830 29448",
      },
    ],
  },
  // vending masters
  {
    name: "VENDING MASTERS",
    image_hq: "/images/events/hq/VENDING MASTERS.png",
    image: "/images/events/VENDING MASTERS.png",
    prize: ["1st Prize: Rs 4500", "2nd Prize: Rs 3500", "3rd Prize: Rs 2000"],
    fee: "Rs 30",
    type: "team",
    // about: `Exhibit you marketing savviness`,
    // ----------------------------------------------------------------
    details: `
      <h2>
        Introduction
      </h2>
      <p>
        How good are your marketing skills? How better can you convince others? This is all about the event Vending Masters. 
        Here teams have to showcase their marketing knowledge and skills to convince people to buy their products.
      </p>
      <h2>
        Problem Statement
      </h2>
      <ul>
        <h3>
          Round 1
        </h3>
        <p>
          Teams will be shown some standard market products of which they have to guess the range 
          in which the price of the product lies and the teams making the closest guesses will be promoted to the next round.
        </p>
        <h3>
          Round 2
        </h3>
        <p>
          In round 2, the qualified teams will have to sell some products showcasing 
          their marketing and convincing skills to a group of people having some standard points 
          each and the team taking the most points by selling the products given to them will win the game.
        </p>
        <h3>
          Team Specification
        </h3>
        <p>
          Upto 2 members.
        </p>
        <h3>
          Registration Details
        </h3>
        <p>
          Registration Fee: Rs 30 <br>
          Registration details will be announced soon.
        </p>

      </ul>`,

    timeline: ["DATE : 0  1/04/2023  ", "TIME : 2:30PM - 6:00PM"],
    rulebook: "/docs/rulebooks/Vending Master.pdf",
    rules: [
      `
      All participants are supposed to follow the rules and game flow as decided by Mindbend'23 team members. 
      In case of any confusion, the final decision of the conducting team should be obeyed and will be considered final.
    `,
    ],
    catagory: "managerial",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Nirdeshi",
        phone: "6353 657 841",
      },
      {
        name: "Saurav",
        phone: "93270 49411",
      },
    ],
  },
  // hustle trade
  {
    name: "HUSTLE TRADE",
    image_hq: "/images/events/hq/hustle trade.png",
    image: "/images/events/hustle trade.png",
    prize: ["1st Prize: Rs 6000", "2nd Prize: Rs 4000"],
    fee: "Rs 30",
    type: "team",
    // about: `The Game of Wit and Bid`,
    // ----------------------------------------------------------------
    details: `
      <h2>
        Introduction
      </h2>
      <p>
        "Hustle Trade" is a game of Bid and Wit where participants 
        will get an opportunity to test their auctioning and bidding skills. 
        This game revolves around the auctioning and trading of units for completing the objects. 
        From bidding for items through all the units, 
        managing them and trading for completing the object this game has all that is needed for a whopping Bidding and Trading Battle
      </p>
      <h2>
        Problem Statement
      </h2>
      <ul>
        <h3>
          Round 1
        </h3>
        <p>
          All participating teams have to participate in an online quiz regarding Finance, Trading and Auctions. 
          Teams will be shortlisted for further rounds on the basis of their respective scores on quiz.
        </p>
        <h3>
          Round 2
        </h3>
        <p>
          Each team will be granted a certain amount of money to purchase units or engage in trade. 
          The unit will be auctioned out, each includes various elements of objects (such as sentence- forming words, gadget components, puzzles, etc). 
          The winning team will have the maximum number of completed objects (and the largest number of the remaining amount). 
          Following the auction, inter-trading alternatives will be provided.
        </p>
        <h3>
          Team Specification
        </h3>
        <p>
          Upto 4 members.
        </p>
        <h3>
          Registration Details
        </h3>
        <p>
          Registration Fee: Rs 30 <br>
          Registration details will be announced soon.
        </p>

      </ul>`,

    timeline: ["DATE : 31/03/2023  ", "TIME : 2:30PM - 6:00PM"],
    rulebook: "/docs/rulebooks/Hustle trade.pdf",
    rules: [
      `
      All participants are supposed to follow the rules and game flow as decided by Mindbend'23 team members. 
      In case of any confusion, the final decision of the conducting team should be obeyed and will be considered final.
    `,
    ],
    catagory: "managerial",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "ayush",
        phone: "6352 685 997",
      },
      {
        name: "yash",
        phone: "97129 00042",
      },
    ],
  },
  // create your identity
  {
    name: "CREATE YOUR IDENTITY",
    image_hq: "/images/events/hq/create your identity.png",
    image: "/images/events/create your identity.png",
    prize: ["1st Prize: Rs 5000", "2nd Prize: Rs 3000"],
    fee: "Rs 20",
    type: "team",
    // about: `Unleashing the Power of Creativity`,
    // ----------------------------------------------------------------
    details: `
      <h2>
        Introduction
      </h2>
      <p>
        What is a better way to express your creativity than expressing yourself through a design but concise, i.e., a LOGO.
        In this event, you get a chance to channel your inner creativity and dive into the world of miniature but the point representation of designing a logo.
      </p>
      <h2>
        Problem Statement
      </h2>
      <ul>
        <h3>
          Round 1
        </h3>
        <p>
          All participating teams have to participate in an online quiz where there will be two logos side by side and you need to choose the correct one. 
          Teams will be shortlisted for further rounds on the basis of their respective scores in quiz.
        </p>
        <h3>
          Round 2
        </h3>
        <p>
          Participants will be given a company or a product that failed or faced backlash. Prepare a case
          study on the company or the product and come up with a solution.
        </p>
        <h3>
          Round 3
        </h3>
        <p>
          For the given hypothetical brand name and its description the qualified participants will have to come up with their own logos. 
          The logo selected by the judges will be the logo king aka the winner.
        </p>
        <h3>
          Team Specification
        </h3>
        <p>
          Up to 2 members.
        </p>
        <h3>
          Registration Details
        </h3>
        <p>
          Registration Fee: Rs 20 <br>
          Registration details will be announced soon.
        </p>

      </ul>`,

    timeline: ["DATE : 02/04/2023  ", "TIME : 2:30PM - 6:00PM"],
    rulebook: "/docs/rulebooks/Create your indentity.pdf",
    rules: [
      `
      All participants are supposed to follow the rules and game flow as decided by Mindbend'23 team members. 
      In case of any confusion, the final decision of the conducting team should be obeyed and will be considered final.
    `,
    ],
    catagory: "managerial",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Kaustubh",
        phone: "79765 73402",
      },
      {
        name: "Harsh",
        phone: "99044 55809",
      },
    ],
  },
  // bluffs and bargains
  {
    name: "BLUFFS AND BARGAINS",
    image_hq: "/images/events/hq/Bluffs and Bargains.png",
    image: "/images/events/Bluffs and Bargains.png",
    prize: ["1st Prize: Rs 4000", "2nd Prize: Rs 3000", "3rd Prize Rs 2000"],
    fee: "Rs 30",
    type: "team",
    // about: "Prove your negotiation mettle",
    // ----------------------------------------------------------------
    details: `
      <h2>
        Introduction
      </h2>
      <p>
        Bluffs and Bargains is a first-of-its-kind Negotiation Tournament, 
        based on negotiation case simulations conducted in top Law schools 
        to teach hands-on experience in one of the most important skills in the modern world. 
        Teams will have to role-play various historical and realworld negotiators and secure the best deal for their situation.
      </p>
    
      <h2>
        Problem Statement
      </h2>
      <ul>
        <h3>
          Round 1
        </h3>
        <p>
          After a short preliminary online quiz (30 min) on basic negotiating intuition to decide the candidates, 
          Teams will qualify for a specified round knockout tournament on scorable
          negotiation cases to spotlight the best of the best, 
          the most silver-tongued and hard-balling negotiators that can crack deals 
          in minutes and leave all sides happy with their lot.
        </p>
        <h3>
          Round 2
        </h3>
        <p>
          Each knockout round lasts around 25-30 minutes.
          10 min given to teams to understand their side of the story and take note of their
          confidential information and what deal they need to make. 
          Followed by 15-20 minutes of dealmaking, 
          where both sides try to convince each other to agree to their own terms. 
          If a deal is struck and hands have shaken, 
          the teams are scored based on the result and their application of negotiating skills.
        </p>
        <h3>
          Team Specification
        </h3>
        <p>
          Upto 2 members.
        </p>
        <h3>
          Registration Details
        </h3>
        <p>
          Registration Fee: Rs 30 <br>
          Registration details will be announced soon.
        </p>
      </ul>
    `,
    timeline: ["DATE : 02/04/2023  ", "TIME : 10:00AM - 2:00PM"],
    rulebook: "/docs/rulebooks/Bluffs and Bargains.pdf",
    rules: [
      `
    All participants are supposed to follow the rules and game flow as decided by Mindbend'23 team members. 
    In case of any confusion, the final decision of the conducting team should be obeyed and will be considered final.
  `,
    ],
    catagory: "managerial",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Drashti",
        phone: "94082 44705",
      },
      {
        name: "Anand",
        phone: "73830 29448",
      },
    ],
  },
  // trend your brand
  {
    name: "TREND YOUR BRAND",
    image_hq: "/images/events/hq/Trend Your Brand.png",
    image: "/images/events/Trend Your Brand.png",
    prize: ["1st Prize: Rs 5500", "2nd Prize: Rs 3500"],
    fee: "Rs 30",
    type: "ind",
    // about: "Advertising Ideas~ Endorsing Brands",
    // ----------------------------------------------------------------
    details: `<h2>
    Introduction
  </h2>
  
  <p>
  'Trend your brand' is a fun event to optimize your basic tricks of Social Media Marketing and come
  up with an impressive quality advertisement. The more the hype created higher are your chances of
  winning.
  
  </p>
  
  <h2>
    Problem Statement
  </h2>
  <ul>
    <h3>
      Round 1
    </h3>
    <p>
    Puzzle round based on Brand logo /tagline. Whoever solves it first, gets to select a product of
    their choice. 2 people choosing the same product will be clubbed together as a team.
    
    </p>
    <h3>
      Round 2
    </h3>
    <p>
    Advertisement round, each team needs to come up with a social media post for their
    product/service that could be posted on social media.
    </p>
    <h3>
      Team Specification
    </h3>
    <p>
      individual
    </p>
    <h3>
      Registration Details
    </h3>
    <p>
      Registration Fee: Rs 30 <br>
      Registration details will be announced soon.
    </p>

  </ul>`,
    timeline: ["DATE : 31/03/2023  ", "TIME : 09:00AM - 2:00PM"],
    rulebook: "/docs/rulebooks/Trend your brand.pdf",
    rules: [
      `
    All participants are supposed to follow the rules and game flow as decided by Mindbend'23 team members. 
    In case of any confusion, the final decision of the conducting team should be obeyed and will be considered final.
  `,
    ],
    catagory: "managerial",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Moli",
        phone: "80055 47242",
      },
      {
        name: "Ananya",
        phone: "90819 41100",
      },
    ],
  },
  // investomania
  {
    name: "INVESTOMANIA",
    image_hq: "/images/events/hq/INVESTOMANIA.png",
    image: "/images/events/INVESTOMANIA.png",
    prize: ["1st Prize: Rs 5000", "2nd Prize: Rs 3000"],
    fee: "Rs 30",
    type: "team",
    // about: "Investments that will make you grow",
    // ----------------------------------------------------------------
    details: `<h2>
    Introduction
  </h2>
  
  <p>
  "How well you invest" will be a fun event in which you have to showcase your knowledge about
investments and how you apply and get good returns.

  
  </p>
  
  <h2>
    Problem Statement
  </h2>
  <ul>
    <h3>
      Round 1
    </h3>
    <p>
    It will be an Online quiz round on Kahoot, teams have to answer some general informative
    questions regarding investment. The top 8 teams based on the quiz scores will be selected for the
    second round.
    
    
    </p>
    <h3>
      Round 2
    </h3>
    <p>
    This is a Presentation round.
    Problem Statement – 1,00,000 Rs will be given (hypothetically) and they have to invest in different
    ways like gold, stocks, Mutual Funds etc. They have to research and then present their way of
    investment, forecast their profits and show trends of particular investments, and how much profit
    it might give. A maximum of 10 slides are allowed and 15 min will be given for each presentation.
    </p>
    <h3>
      Team Specification
    </h3>
    <p>
      Upto 3 members
    </p>
    <h3>
      Registration Details
    </h3>
    <p>
      Registration Fee: Rs 30 <br>
      Registration details will be announced soon.
    </p>

  </ul>`,
    timeline: ["DATE : 31/03/2023  ", "TIME : 11:00AM - 2:30PM"],
    rulebook: "/docs/rulebooks/Investomania.pdf",
    rules: [
      `
    All participants are supposed to follow the rules and game flow as decided by Mindbend'23 team members. 
    In case of any confusion, the final decision of the conducting team should be obeyed and will be considered final.
  `,
    ],
    catagory: "managerial",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Harsh",
        phone: "99044 55809",
      },
      {
        name: "Dheeraj",
        phone: "76718 42406",
      },
    ],
  },
  // the jewels of jumanji
  {
    name: "THE JEWEL OF JUMANJI",
    image_hq: "/images/events/hq/the jewel of jumanji.png",
    image: "/images/events/the jewel of jumanji.png",
    prize: ["1st Prize: Rs 4500", "2nd Prize: Rs 3500", "3rd Prize: Rs 2000"],
    fee: "Rs 30",
    type: "team",
    // about: "Fight your way to the top",
    // ----------------------------------------------------------------
    details: `<h2>
    Introduction
  </h2>
  
  <p>
  The jewel of Jumanji involves assessing your analyzing and managing skills when it comes to
  knowing your own strengths and weaknesses to solving a dire situation that you might face
  whether it maybe being chased by a hippopotamus to solving a hardcore logic puzzle.
  
  </p>
  
  <h2>
    Problem Statement
  </h2>
  <ul>
    <h3>
      Round 1
    </h3>
    <p>
    Each team will be given certain advantages in terms of points from 1-10 in all three areas of
    expertise like arts& literature; logic and analysis; practical field knowledge, the sum of
    which(points) is fixed. Using these points you can obtain hints, which are of two types, to
    solving every problem that you face ahead. Solve and also score bonus points for bonus
    questions to obtain the map for the jaguar's eye or the jewel of the Jumanji.
    </p>
    <h3>
      Round 2
    </h3>
    <p>
    There will be a small treasure hunt in which the clues will be provided after solving certain
    questions similar to round 1. For the tie-breaker, the team will be given a specific sum and this
    time they have to decide the distribution of points in the three areas as per their interest and
    then the winner is decided from three questions.
    
    </p>
    <h3>
      Team Specification
    </h3>
    <p>
      Upto 3 members
    </p>
    <h3>
      Registration Details
    </h3>
    <p>
      Registration Fee: Rs 30 <br>
      Registration details will be announced soon.
    </p>

  </ul>`,
    timeline: ["DATE : 01/04/2023  ", "TIME : 10:00AM - 2:00PM"],
    rulebook: "/docs/rulebooks/The Jewel of jumanji.pdf",
    rules: [
      `
    All participants are supposed to follow the rules and game flow as decided by Mindbend'23 team members. 
    In case of any confusion, the final decision of the conducting team should be obeyed and will be considered final.
  `,
    ],
    catagory: "managerial",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Sneh",
        phone: "85112 66722",
      },
      {
        name: "Anany",
        phone: "90819 41100",
      },
    ],
  },
  // can you beat the president
  {
    name: "CAN YOU BE THE PRESIDENT",
    image_hq: "/images/events/hq/CAN YOU BE THE PRESIDENT.png",
    image: "/images/events/CAN YOU BE THE PRESIDENT.png",
    prize: ["1st Prize: Rs 4500", "2nd Prize: Rs 3500", "3rd Prize: Rs 2000"],
    fee: "Rs 20",
    type: "individual",
    // about: "Be the leader you would follow",
    // ----------------------------------------------------------------
    details: `<h2>
    Introduction
  </h2>
  
  <p>
  “Can you be the president” is a managerial event that demands problem-solving, debating and
  public speaking skills, this event test the managerial power and skills that a good leader must
  have.
  </p>
  
  <h2>
    Problem Statement
  </h2>
  <ul>
    <h3>
      Round 1
    </h3>
    <p>
    You will be given a google form consisting of various problem statements/questions regarding
    managing a country and apart from that you have to write policies and schemes that you will
    implement if you became the president basically your own manifesto.
    </p>
    <h3>
      Round 2
    </h3>
    <p>
    In round 2, (news debate round) shortlisted candidates will be given their own party symbol
    and they have to represent themselves in a news channel debate, the topic of the debate will
    be decided by the news anchor.
    </p>
    <h3>
      Round 3
    </h3>
    <p>
    Shortlisted candidates have to give a speech addressing the public that why they deserve to
    be the president and followed by a press conference in which journalists will ask you
    questions on the basis of their speech.
    
    </p>
    <h3>
      Team Specification
    </h3>
    <p>
      Individual member
    </p>
    <h3>
      Registration Details
    </h3>
    <p>
      Registration Fee: Rs 20 <br>
      Registration details will be announced soon.
    </p>

  </ul>`,
    timeline: ["DATE : 01/04/2023  ", "TIME : 09:00AM - 1:00PM"],
    rulebook: "/docs/rulebooks/Can you be the president.pdf",
    rules: [
      `
    All participants are supposed to follow the rules and game flow as decided by Mindbend'23 team members. 
    In case of any confusion, the final decision of the conducting team should be obeyed and will be considered final.
  `,
    ],
    catagory: "managerial",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Chandan",
        phone: "93271 43251",
      },
      {
        name: "Yash",
        phone: "97129 00042",
      },
    ],
  },
  // CAd CRACKER
  {
    name: "CAD CRACKER",
    image_hq: "/images/events/hq/cad crackers.png",
    image: "/images/events/cad crackers.png",
    prize: ["1st Prize: Rs 3500", "2nd Prize: Rs 2500", "3rd Prize: Rs 1500"],
    fee: "Rs 30",
    // about: "CAD",
    // ----------------------------------------------------------------
    details: `<h2>
      Introduction
    </h2>
    
    <p>
      The most intriguing topic to learn as a mechanical engineer is how to design models (Cars,
      planes or Robots). So, here we present the CAD CRACKER to all CAD enthusiasts. Models
      should be designed, assembled, and analyzed.
      
    </p>
    
    <h2>
      Problem Statements
    </h2>
    <p>Participants have to design 3D parts from the 2D sketch of a military vehicle given and
    assemble them to complete military vehicle.</p>
    <ul>
      <h3>
        Round 1
      </h3>
      <ul>
      <li> Design the Parts of the given Defense Vehicle. 2D views of those parts will be
      provided.
      </li>
      <li> The models to be designed would be presented to every participant. They must
      complete their design in the fixed time allotted for each design that has to be
      submitted in .SLDPRT format. </li>
      </ul>
      <h3>
        Round 2
      </h3>
      <ul>
        <li>Participants have to make that defense vehicle by assembling those parts (made in
          round 1) with provided body parts, within the given time constraint.</li>
        <li>It has to be submitted in .SLDSAM and .STEP
        </li>
      </ul>
      
      <h3>
        Team Specification
      </h3>
      <ul>
        <li> Team with maximum 2 participants is permitted in this event.</li>
        <li> Any number of individuals may participate from one college.</li>
        <li> Professionals are not allowed. Only students can participate.</li>
        <li> Participants are required to bring their school/college ID cards. </li>
        <li> Once registered, the same team cannot register with another name or for another 
        model other than previously registered one.</li>
        <li> Every team must have a unique name that should not be offensive conflicting or 
        inappropriate</li>
        <li> Organizers have the right to reject entries for any inappropriate team name.</li>
      </ul>
      <h3>JUDGING CRITERION</h3>
      <ul>
          <li>In first round the given parts for designing purpose have different weightage of points 
          so the participant with more points will be Ranked higher.
          </li>
          <li> Time will also be a judging criteria</li>
          <li> Among them 1/3rd of participants will be sent to 2nd round</li>
          <li> In second round participant who has completed the assembly of defense vehicle with 
          minimum amount of time taken will be Ranked higher.</li>
      </ul>
      <h3>Number of expected registrations </h3>
      <p>100 Teams</p>
      <h3> Target Audience</h3>
      <p> 2nd and 3rd year students of from Mechanical </p>
      <h3>
        Registration Details
      </h3>
      <p>
        Registration Fee: Rs 30 <br>
      </p>
      <h3> Event Platform</h3>
      <p> Online </p>`,
    timeline: [""],
    rulebook: "/docs/rulebooks/CAD-CRACKERS.pdf",
    rules: [
      "For designing the models, SOLIDWORKS software is mandatory.",
      " The design must be completed in the given time restriction.",
      " Submissions should be provided in the appropriate format given by the judges. ",
      " The participants would be required to submit the CAD model in the link provided by the judges in the beginning of the competition.",
      "Bring your college/student I-Card at the time of competition. ",
      "Decision Taken by Judges will be final and binding for all.",
      " Any misbehavior will lead you to disqualification from the competition.",
      " If less than 10 teams will be registered, then only the first prize will be given, and if less than 20 teams will register, only two prizes will be given.",
    ],
    catagory: "technical",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Pratham Parmar",
        phone: "7874992002",
      },
      {
        name: "Devanshu Vyas",
        phone: "9157120402",
      },
    ],
  },

  // structure for future
  {
    name: "STRUCTURE FOR FUTURE",
    image_hq: "/images/events/hq/structure for future.png",
    image: "/images/events/structure for future.png",
    prize: ["1st Prize: Rs 3500", "2nd Prize: Rs 2500", "3rd Prize: Rs 1500"],
    fee: "Rs 70",
    // about: "STRUCTURE FOR FUTURE",
    // ----------------------------------------------------------------
    details: `<h2>
      Introduction
    </h2>
    
    <p>
    This event focuses on how participants make structures engineered to withstand weight,
    are durable, and in some cases, are aesthetically pleasing.
    </p>
    
    <h2>
      Problem Statements
    </h2>
    <p>Participants  need  to  design  and  build  their  structure  using  popsicle  sticks  and  glue.
    Participants can use the fewest number of popsicle sticks while still achieving their goals.
    </p>
    <ul>
      <h3>
        Round 1
      </h3>
      <ul>
      <li>Participants need to submit a CAD model of the tower.</li>
      <li> The CAD file must be in .sldasm/ .dwg/ .step format. </li>
      <li> Teams  have  to  manufacture  the  same  CAD  model  in  the  next  round,  so  design  it
      accordingly. </li>
      <li>The structure should support at least 1 kg of weight applied normally downwards to
      the top surface.</li>
      <li> The top and bottom surfaces of the tower should be made flat. </li>
      </ul>
      <h3>
        Round 2
      </h3>
      <ul>
        <li>This would be an offline round.</li>
        <li> Teams have to manufacture the CAD model on the spot.</li>
        <li> The time duration given would be 4 hours.</li>
        <li> The materials required for building the tower will be provided to the teams.</li>
        <li> The completed structure would be first measured by the coordinators.</li>
        <li>If  the  dimensions  are  found  to  exceed  the  allowed  dimensions  by  a  considerate
        margin, the team will be disqualified.</li>
        <li> The structure would then be weighed on a weighing scale.</li>
        <li> Weights  ranging  from  1kg  to  10kg  would  be  placed  on  the  top  surface  of  the
        structure.</li>
        <li>The procedure of placing weights would be the same for every team.</li>
        <li> The maximum weight the tower can hold without collapsing would be noted.</li>
      </ul>
      <h3> MATERIAL TO BE USED </h3>
      <ul>
        <li>The  organizers  will  provide  popsicle  sticks.  Sticks  can  have  the  following  maximum
        dimensions: Length = 112 mm, Breadth = 95 mm, Width = 02 mm.</li>
        <li> Sticks can be altered physically by cutting or notching at any angle.</li>
        <li> Only  Fevicol  can  be  used  as  an  adhesive;  using  other  adhesives  may  lead  to
        disqualification. The use of threads is not allowed.</li>
        <li> Participants must bring basic stationary items, such as pens, scissors, cutters, etc. </li>
        <li> Clips for support and fevicol would be provided to the participants. </li>
        <li> The maximum number of sticks that can be overlapped together is 2.</li>
      </ul>
      <h3> STRUCTURE DIMENSIONS </h3>
      <ul>
        <li>Length - 25 cm (maximum)</li>
        <li>Width - 25 cm (maximum) </li>
        <li>Height - 25 cm (minimum)</li>
        <li>(No limit for maximum height)</li>
      </ul>
      <h3>
        Team Specification
      </h3>
      <ul>
        <li>The team should have a minimum of 2 members and up to 6 members. </li>
        <li> Members of a team may be from the same college or different.</li>
        <li> Any number of teams can participate from one college. </li>
        <li> Professionals are not allowed. Only students can participate.</li>
        <li> Once registered, the same team cannot register with another name or for another 
        model other than previously registered one.</li>
        <li> Every team must have a unique name that should not be offensive conflicting or 
        inappropriate</li>
        <li> Organizers must be notified if a team’s name has been changed.</li>
        <li> Team Representative: Each team must specify their Team Representative (Leader) at
        registration on the website. All important communications between the organizer and 
        the registered teams will be done through their Team Representatives. The Team 
        representatives must submit valid contact details (phone no., email id, etc.) at the time 
        of registration.</li>
      </ul>
      <h2>JUDGING CRITERION</h2>
      <h3>ROUND 1</h3>
      <p>The CAD model would be judged on the following criteria:</p>
      <ul>
          <li> Originality</li>
          <li> Aesthetics </li>
      </ul>
      <h3>ROUND 2  </h3>
      <ul>
      <li>The weight of the structure would be noted.</li>
      <li>The maximum weight the structure can hold just before collapsing would also be 
      noted.</li>
      <li>The structure made with minimum material and holding the maximum weight would 
      be considered the winner.</li>
      <li> The ratio of maximum weight withstand to the weight of the structure itself would be
      the efficiency of the tower </li>
      <li>The aesthetics of the bridge will also be evaluated.</li>
      <li>The judges will evaluate the bridge based on its appearance, the originality of its
      design, and the connection of members.</li>
      <li> The weightage of each criterion is given as follows: Efficiency = 70 points Aesthetics =
      30 points</li>
      <li>The total score will be given out of 100 points. </li>
      </ul>
      <h3>
        Registration Details
      </h3>
      <p>
        Registration Fee: Rs 50 <br>
      </p>`,
    timeline: [""],
    rulebook: "NA",
    rules: [
      "Bring your college/student I-Card at the time of the competition.",
      "Decisions taken by Judges will be final and binding for all. ",
      " Any misbehavior will lead you to disqualification from the competition. ",
      "Organizers have the right to reject entries for any inappropriate team name.  ",
      " Teams who don't show up on allotted slots will be disqualified.",
      " lf less then 25 teams have registered for the event only two prizes will be given and if less then 15 teams have registered for the event only two prize will be given.",
    ],
    catagory: "technical",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Atul Gautam",
        phone: "9468650219",
      },
      {
        name: "Adarsh Kataktalware",
        phone: "999849931",
      },
    ],
  },

  // cat a pult
  {
    name: "CAT-A-PULT",
    image_hq: "/images/events/hq/cat-a-pult.png",
    image: "/images/events/cat-a-pult.png",
    prize: ["1st Prize: Rs 7000", "2nd Prize: Rs 5000", "3rd Prize: Rs 3000"],
    fee: "Rs 80",
    // about: ``,
    // ----------------------------------------------------------------
    details: `
        <h2>
          INTRODUCTION
        </h2>
        <p>
          Most of us have learned projectile motion in class 11. So now it's time to apply that knowledge in real life. So, here we cat-a-pult to all physics those enthusiasts, where they will build a catapult not just for distance but most importantly for accuracy. Rounds of this event are planned based on this year's theme of mindbend. Get ready with your amazing catapult to conquer the enemy region!!      
        </p>
        <h2>
          PROBLEM STATEMENT
        </h2>
        <p>
          Participants have to design an object-throwing mechanism.
        </p>
        <ul>
          <h3>
            ROUND 1(Smash the Enemy)
          </h3>
          <p>
            In this round, participants must target the enemy regions and throw the object into their area. The more you can go into the area, the more points you get. According to the points scored, a specific number of participants will qualify for round 1. Participants have to smash four enemies in a single chance. All areas must be hit once during your round with in Time limit of 3mins.
          </p>
  
          <h3>
            ROUND  2(Conquer)
          </h3>
          <p>
            Participants have to attack the targets in a specific time limit. The more targets hit, the more you score. Any number of balls can be used within the given time limit of 5 mins. This round will also test your model’s precision and accuracy.        
          </p>
  
          <h3>
            ARENA FOR ROUND 1:
          </h3>
          <p>
            (10, 20 and 30 refer to the points earned in that region)
          </p>
          <img src="/images/events/catapult-arena1.png" alt="arena" width="400px" />
          <h3>
          <br>
            ARENA FOR ROUND 2:
          </h3>
          <img src="/images/events/catapult-arena2.png" alt="arena" width="400px"/>
          <br>
          <h2>
            TEAM SPECIFICATION
          </h2>
          <ul>
            <li>1.You can participate individually or with a team of a maximum of 3 members.</li>
            <li>2. Any number of candidates can participate from one college/school.</li>
            <li>3. Participants are required to bring their school/college ID cards.</li>
            <li>4. Once registered, the same candidate cannot register with another name for the event. </li>
            <li>5. Organizers have the right to reject entries for any inappropriate username of the candidate.</li>
            <li>6. Organizers must be notified if a candidate’s username has been changed.</li>
          </ul>
  
          <h2>
            MODEL SPECIFICATION
          </h2>
          <ul>
            <li>You have to make a manually operated Throwing Mechanism.</li>
            <li>The bot can only rotate at the same place.</li>
          </ul>
          
          <h2>
            JUDGING CRITERIA
          </h2>
          <p>
            Judging criteria is according to the specific rounds mentioned above.
          </p>
          
         <h2>
            REGISTRATION DETAILS
          </h2>
          <p>
            Fee: Rs 50 <br>
          </p>
        </ul>
      `,
    timeline: [""],
    rulebook: "/docs/rulebooks/CAT-A-PULT.pdf",
    rules: [
      "Flammable substances like gunpowder, etc., cannot be used.",
      "Size of the object to be thrown: Lightweight ball of table-tennis ball’s size",
      "Maximum range of arena: 40 to 50 meters",
      "Any misbehavior will lead you to disqualification from the competition.",
      "Decision Taken by Judges will be final and binding for all.",
      "All decisions taken by the organizing team will be deemed final, and no more changes",
      "will be encouraged.",
      "If Any of the above-mentioned rules, if found violated, teams would not be allowed to",
      "participate in the competition.",
      "lf less then 15 teams have registered for the event only two prizes will be given and if less then 10 teams have registered for the event only one prize will be given.",
    ],
    catagory: "technical",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Shubham Gujratri",
        phone: "9638812424",
      },
      {
        name: "Yash Mhatre",
        phone: "9920584449",
      },
    ],
  },

  // chem e car
  {
    name: "CHEM E CAR",
    image_hq: "/images/events/hq/chem-e-car.png",
    image: "/images/events/chem-e-car.png",
    prize: ["1st Prize: Rs 8000", "2nd Prize: Rs 5000", "3rd Prize: Rs 3000"],
    fee: "Rs 200",
    // about: `Voraciously Chem-E-Engineered Car`,
    // ----------------------------------------------------------------
    details: `
        <h2>
          INTRODUCTION
        </h2>
        <p>
        The Chem-E Car is a competition in which engineering undergraduate students are challenged to design and build a shoebox-sized car that is powered and stopped by chemical processes. The car does not compete in a race, but rather in an accuracy test. The car moves and stops at a set distance using controlled chemical processes. The winning automobile is the one that comes the closest to hitting the target solely based on chemistry.
        </p>
        <h2>
          PROBLEM STATEMENT
        </h2>
        <p>
          Teams have to fabricate a water rocket that uses the thrust of pressurized water to launch and travel the maximum distance.
        </p>
        <ul>
          <h3>
            ROUND 1
          </h3>
          <p>
            The teams have to submit an Engineering Design Package (or EDP) of their working model. by the posted deadline. Failure to meet the posted deadline will result in exclusion from the competition. The layout of the EDP is attached below.
            EDP Layout: Chem-e-Car .docx
          </p>
  
          <h3>
            ROUND  2
          </h3>
          <p>
            The teams have to run their working models on the specified tract and execute the stopping mechanism for a specified distance. All the teams will be judged on the basis of how close their car gets to the endline in a specific amount of time and winners will be decided on this basis. The judges’ decision will be final on all matters.
          </p>
  
          <h2>
            TRACK SPECIFICATION
          </h2>
          <p>
            Kindly refer the following video and document: Chem-E-Car track_figure.pdf Disclaimer: The mechanisms and track shown as above are purely on an example basis. Participants must note that mechanisms apart from the one shown in the above video are also acceptable.
          </p>
  
          <h2>
            TEAM SPECIFICATIONS
          </h2>
          <ul>
            <li>Team should be of 4 to 6 members.</li>
            <li>Members of a team may be from the same college/school or different (K12/UG/PG). Any number of teams can participate from one college/school.</li>
            <li>Professionals are not allowed. Only students can participate.</li>
            <li>Participants are required to bring their school/college ID cards.</li>
            <li>Once registered, the same team cannot register with another name or for another model other than previously registered one.</li>
            <li>Every team must have a unique name that should not be offensive, conflicting or inappropriate.</li>
            <li>Organizers have the right to reject entries for any inappropriate team name. Organizers must be notified if a team’s name has been changed.</li>
            <li>Team Representative: Each team must specify their Team Representative (Leader) at the time of registration on the website. All important communications between the organizer and the registered teams will be done through their Team Representative. The Team representatives must submit valid contact details (phone no., email id, etc.) at the time of registration.</li>
            <li>If teams don’t show up on allotted slot, they will be disqualified.</li>
          </ul>
          
          
          <h2>
            REGISTRATION DETAILS
          </h2>
          <p>
            Fee: Rs 50 <br>
          </p>
        </ul>
      `,
    timeline: [""],
    rulebook: "/docs/rulebooks/Chem-E-Car.pdf",
    rules: [
      "Bring your college/student I-Card at the time of competition.",
      "Decision Taken by Judges will be final and binding for all.",
      "Any misbehavior will lead you to disqualification from the competition.",
      "If less than 10 teams will be registered, then only first prize will be given and if less than 20 teams will register, only two prizes will be given.",
    ],
    catagory: "technical",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Madhuri Sharma",
        phone: "9460877801",
      },
    ],
  },

  // game of bots
  {
    name: "GAME OF BOTS",
    image_hq: "/images/events/hq/GAME OF BOTS.png",
    image: "/images/events/GAME OF BOTS.png",
    prize: ["1st Prize: Rs 3500", "2nd Prize: Rs 2500", "3nd Prize: Rs 1500"],
    fee: "Rs 70",
    // about: `Any technical fest is incomplete without a ‘Coding Challenge,’ isn’t it? Here we are with Game of Bots, where you must build a Discord Music bot on Replit. This competition stimulates your creativity and encourages you to come up with some imaginative ideas.`,
    // ----------------------------------------------------------------
    details: `
        <h2>
          Problem Statement
        </h2>
        <p>
          A coding contest consisting of 2 rounds. Participants are required to build a Discord boton Replit.
        </p>
        <ul>
          <h3>
            Round 1
          </h3>
          <p>
            In this round, teams must submit a brief Abstract about their bot or game. It must contain the following:
            <ul>
            <li>
            Statement of Problem- Succinct definition of the problem addressed.
            </li>
            <li>
            Introduction to Proposed Solution- A basic idea of the solution to the proposal. It should contain the features the team plans to add to the music bot. A proper explanation and mention of the features planning to include are necessary as that would contain the major part of the judging criterion
            </li>
            <li>
            Thinking- It should contain the thinking behind the proposed solution.
            </li>
            </ul>
            You must be very concise and to the point in the Abstract. It must not exceed two pages double spaced. The Abstract must be sent by mail to (mindbend@svnit.ac.in) and replit account with the team details clearly mentioned in the email. The Team ID should be explicitly mentioned in the email subject, and the abstract file must be in the form of ‘TeamID_TeamLeaderName.’ Any other name for the abstract file will not be accepted.
          </p>
          <h3>
            Round 2
          </h3>
          <p>
            <ul>
            <li>
            A Submission with a functioning Replit link can be defined as valid (supports web player, terminal output, and Linux application through VNC + PulseAudio).            
            </li>
            <li>
            Submit the Replit link of your publicly visible source code of the hack. Broken links will disqualify the project from the judging process.
            </li>
            <li>
            There must be a clear description of the work of the submission in the README file.
            </li>
            <li>
            Create a short video demo (~1-2 mins) while making the submission and submit the link to the mail(mindbend@svnit.ac.in). Make sure that the person watching the video is fully able to understand what the hack is and what the functionalities are. The more features and functionality of the bot, the more points you gain.
            </li>
            </ul>
          </p>
          <h3>
            Team Specification
          </h3>
          <ul>
          <li>
          This will be a team event. You can participate individually or with a team of maximum of 3 members.
          </li>
          <li>
          Any number of candidates can participate from one college/school.
          </li>
          <li>
          Participants are required to bring their school/college ID cards.
          </li>
          <li>
          Once registered, the same candidate cannot register with another name for the event.
          </li>
          <li>
          Organizers have the right to reject entries for any inappropriate username of the candidate.
          </li>
          <li>
          Organizers must be notified if a candidate’s username has been changed.
          </li>
          </ul>
          <h3>
            Registration Details
          </h3>
          <p>
            Registration Fee: Rs 30
          </p>
          <p>
            Registration details will be announced soon.
          </p>
        </ul>`,

    timeline: [""],
    rulebook: "/docs/rulebooks/game of bots.pdf",
    rules: [
      "Decision Taken by Judges will be final and binding for all",
      "All decisions taken by the organizing team will be deemed final, and no more changes will be encouraged.",
      "Plagiarism in any form is strictly prohibited and can even result in contestants' disqualification.",
      "The team's idea should be original (not protected by patent/copyright/technical publication by anyone else).",
      "If fewer than five teams are registered, then only the first prize will be given; if fewer than ten teams register, only two prizes will be given.",
      "No one shall enter the arena except the organizers.",
      "If any of the above-mentioned rules are violated, teams will not be allowed to participate in the competition.",
      "Any damage caused to the arena at any point in time will lead to disqualification/penalty.",
      "lf less then 20 teams have registered for the event only two prizes will be given and if less then 10 teams have registered for the event only one prize will be given.",
    ],
    catagory: "technical",
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    contacts: [
      {
        name: "Manish Lalwani",
        phone: "6263883998",
      },
      {
        name: "Shalini Jha",
        phone: "853011598",
      },
    ],
  },
  //KRYPTOS
  {
    name: "KRYPTOS",
    image: "/images/events/kryptos.png",
    image_hq: "/images/events/hq/kryptos.png",
    prize: ["1st Prize: Rs 3000", "2nd Prize: Rs 2000", "3rd Prize: Rs 1000"],
    fee: "Rs 80",
    // about: ``,
    // ----------------------------------------------------------------
    details: `
      <h2>
        INTRODUCTION
      </h2>
      <p>Kryptos is an event filled with cryptic puzzles that require multitudes of genius to come up
      with bizarre solutions to questions posed to participants.
      </p>
      <h2>
        PROBLEM STATEMENT
      </h2>
      <h3>ROUND 1</h3>
      <p>The prelims event will be a general physics quiz with standard quizzing rules and
      format to screen participants for the finale.
      </p>
      <h3>ROUND 2</h3>
      <ul>
      <li>The finale event will be a physics problem-solving event in which the participants will
      have to devise out-of-the-box solutions to physics puzzles presented to them in a
      time-bound fashion.
      </li>
      <li>The puzzles will require a comprehensive understanding of physics concepts taught till
      class 12th.
      </li>
      <li>For this round, participants will be provided with printed question papers which they
      will have to solve and move on to the next questions
      </li>
      <li>The team which finishes first, or which finishes the greatest number of questions
      within the stipulated time wins.
      </li>
      <li>Participants will only be provided with subsequent questions upon completing the
      previous question.
      </li>
      </ul>
        <h2>
          TEAM SPECIFICATIONS
        </h2>
        <ul>
         <li>This will be a team event. You can participate individually or with a team of a
         maximum of 3 members.
         </li>
         <li>Any number of candidates can participate from one college/school
         </li>
         <li>Participants are required to bring their school/college ID cards.
         </li>
         <li>Once registered, the same candidate cannot register with another name for the event.
         </li>
         <li> Organizers have the right to reject entries for any inappropriate username of the
         candidate.
         </li>
         <li>Organizers must be notified if a candidate’s username has been changed. 
         </li>
        </ul>
        <h2>JUDGING CRITERIA:
        </h2>
        <h3>ROUND 1
        </h3>
        <p>The judging criteria will be merely based on the marks obtained in the quiz.
        </p>
        <h3>ROUND 2
        </h3>
        <p>The second round will be judged upon the approach as well concept clarity towards the
        questions.        
        </p>
       <h2>
          REGISTRATION DETAILS
        </h2>
        <p>
          Fee: Rs 30 <br>
        </p>
      </ul>
    `,
    timeline: [],
    rulebook: "NA",
    rules: [
      "Any misbehavior will lead you to disqualification from the competition. ",
      "Decision Taken by Judges will be final and binding for all",
      "All decisions taken by the organizing team will be deemed final, and no more changes will be encouraged. ",
      "Plagiarism in any form is strictly prohibited and can even result in the disqualification of contestants involved. ",
      "The idea presented by the teams should be original (not protected by patent/copyright/technical publication by anyone else)",
      "If less than 10 teams will be registered, then only first prize will be given and if less than 20 teams will register, only two prizes will be given. ",
      "No one shall enter the arena except the organisers.",
      "Any of the above-mentioned rules, if found violated, teams would not be allowed to participate in the competition.",
      "Any damage caused to the arena at any point in time will lead to disqualification /penalty.",
    ],
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    catagory: "technical",
    contacts: [
      {
        name: "Manish Lalwani",
        phone: "6263883998",
      },
      {
        name: "Rohan Umesh",
        phone: "9845466082",
      },
    ],
  },
  // BALANCE IT
  {
    name: "BALANCE IT",
    image: "/images/events/balance it.png",
    image_hq: "/images/events/hq/balance it.png",
    prize: ["1st Prize: Rs 6000", "2nd Prize: Rs 5000", "3rd Prize: Rs 4000"],
    fee: "Rs 100",
    // about: ``,
    // ----------------------------------------------------------------
    details: `
      <h2>
        INTRODUCTION
      </h2>
      <p>You have seen a Circus man balancing himself on rope and performing stunts, Ladies
      balancing matki on her head and performing the traditional ghoomar dance in the similar
      manner here the participants have to make a self balancing bot which can balance a ball.
      You have been very well known about the Autonomous Two wheeler self balancing where
      the bot has to travel only on just two wheels and complete the track which will consists of
      various stages having uneven path.      
      </p>
      <h2>
        PROBLEM STATEMENT
      </h2>
      <p>to make a two-wheeler self-balancing line follower bot which has to travel the track
      having various stages and complete the trajectory. The bot must be autonomous which
      can detect the track by itself just by observing the white and black path and complete the
      stages accordingly. 
      </p>
      <h3>ROUND 1</h3>
      <p>In round 1 participants have to balance various numbers of ping pong balls which will be
      kept in the container of the bot and travel the arena having rough surfaces with turns.      
      </p>
      <h3>ROUND 2</h3>
      <p>those teams which qualify round 1 has to now balance a single large ball on its head and
      move along the arena having 3 stages.
      </p>
      <ul>
      <li>Stage 1 consists of a rough surface.
      </li>
      <li>Stage 2 consists of a zig-zag path having various turns at different angle.
      </li>
      <li>Stage 3 consists of a wedge.
      </li>
      </ul>
      <p>For both the rounds the container will be provided, the participants do not need to bother
      about it.
      </p>
        <h2>
          TEAM SPECIFICATIONS
        </h2>
        <h3>a team of 3 to 5 members
        </h3>
       
        <h2>JUDGING CRITERIA:
        </h2>
        <h3>ROUND 1
        </h3>
        <ul>
        <li>-5 score will be awarded with the fall of one ping pong ball.
        </li>
        <li>Additional -10 score will be awarded when 2nd ball fall off and the successive
        decrement of -5 in score will be accordingly every time the ball fall of the container. 
        </li>
        <li>If the bot goes out of track each time the deduction of -5 score will be counted
        </li>
        <li>Total time of bot reaching the end point is noted.
        </li>
        <li>Total score of the remaining number of balls in the container is calculated as each ball
        has +50 points.
        </li>
        </ul>
        <h3>ROUND 2
        </h3>
       <ul>
       <li>If the bot goes out of track each time the deduction of -5 score will be counted.
       </li>
       <li>If the ball falls off the container for the first time and the team opts for a second
       chance then -20 to the score will be counted.
       </li>
       <li>Total minimum time a team takes to complete the whole track.
       </li>
       <li>If the team cannot complete the track with 2 chances also then the total number of
       check points a team passes will be considered in assigning scores.
       </li>
       </ul>
       <h2>
          REGISTRATION DETAILS
        </h2>
        <p>
          Fee: Rs 50 <br>
        </p>
      </ul>
    `,
    timeline: [],
    rulebook: "NA",
    rules: [
      "Bot must be autonomous detecting the white and black track. ",
      "Width of bot should be around 60-70 cm (as width of track = 80-90 cm",
      "Weight of bot should be around 5-10 kg",
      "Each team should give certain space to fix the plate of the container.",
      "No further mechanism should be involved to support the container except the 4 marks.",
      "Only one chance will be given for round 1 ",
      "Participants will be given 2 chances even in the case their ball on head falls down",
      "In round 2 the best of two scores will be considered in final judging.",
      " In round 1 if the bot gets out of track then the team has to resume the game from that particular point only.",
      " In any condition if the bot moves out of the track then every time the team has to resume the game from the check points marked after every stage in round 2",
      "lf less then 15 teams have registered for the event only two prizes will be given and if less then 10 teams have registered for the event only two prize will be given.",
    ],

    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    catagory: "technical",
    contacts: [
      {
        name: "Swara Jain",
        phone: "9426671700",
      },
    ],
  },

  // Dr. Driving
  {
    name: "Dr. Driving",
    image: "/images/events/dr driving.png",
    image_hq: "/images/events/hq/dr driving.png",
    prize: ["1st Prize: Rs 5000", "2nd Prize: Rs 3000", "3rd Prize: Rs 2000"],
    fee: "Rs 50",
    // about: ``,
    // ----------------------------------------------------------------
    details: `
    <h2>
      INTRODUCTION
    </h2>
    <p>To test the ability of the finest technocrats of the nation, Phoenix Racing brings to you
    "Dr. Driving". Don't be misled by its name, its an event that will surely cater your needs of
    adrenaline and speed.
    So get your best vehicle on the grid, because only the fastest will conquer the checkered
    flag
    </p>
    <h2>
      PROBLEM STATEMENT
    </h2>
    <p>Build a wireless RC car controlled by a smartphone under the enlisted general rules, which
    includes a mechanism to steer itself through various turns. There will be two dynamic
    events in the competition, Parallel Park and Lap Time.
    </p>
    <h3>ROUND 1</h3>
   <ul>
    <li>Mode: Online
    </li>
    <li>Submission of the following documents about the RC car:
    
    <ul>
    <li>The code used (if any) in the vehicle
    </li>
    <li> A video of the working model 
    </li>
    </ul></li>
    <li>The above will be collected through a google form which will be sent to the registered
    e-mail id.
    </li>
   </ul>
    <h3>ROUND 2</h3>
    <ul>
      <li>Mode: Offline
      </li>
      <li>The vehicles will be judged in the following dynamic events
      
      <ul>
      <li>Parallel Park
      </li>
      <li>Lap Tim</li>
      </ul></li>
    </ul>
    
    
      <h2>
        TEAM SPECIFICATIONS
      </h2>
     <ul>
        <li>You can participate individually or with a team of a maximum of 5 members
        </li>
        <li>Any number of candidates can participate from one college/school.
        </li>
        <li>Participants are required to bring their school/college ID cards.
        </li>
        <li>Once registered, the same candidate cannot register with another name for the event.
        </li>
        <li>Organizers have the right to reject entries for any inappropriate username of the 
        candidate.
        </li>
        <li>Organizers must be notified if a candidate’s username has been changed.
        </li>
     </ul>
     
      <h2>JUDGING CRITERIA:
      </h2>
      <ul>
      <li>Points will be awarded based on the dynamic performance of the vehicle in Round 2
      </li>
      <li>For the Parallel Parking event, points will be awarded based on video proof, recorded 
      during the event.
      </li>
      <li>Point system for Parallel Park Event:
      <ul>
      <li>Points awarded = 100 - (5*S) - (5*N)
      </li>
      <li>S: Time in seconds taken for the team to park the RC car, completely inside the 
      designated parking space.
      </li>
      <li>N: Number of times, any part of the RC car touches the walls of the designated 
      parking space.
      </li>
      </ul>
      </li>
      <li>Point system for Lap Time Event:
      <ul>
        <li>Points awarded = 100*(Tmin/Tteam)
        </li>
        <li>Tmin: Time of the fastest RC car in the event
        </li>
        <li>Tteam: The time of the RC car of the team under consideration in the event
        </li>
      </ul>
      </li>
      </ul>
      <h3>TRACK DETAILS:
      </h3>
      <ul>
        <li>The arena for Parallel Park event will be based on the RC car size:
            <ul>
              <li>Length of parking spot = 1.5*(Total Length of RC car)
              </li>
              <li>Width of parking spot = (Total RC car width) + 3 cm
              </li>
            </ul>
        </li>
        <li>Arena for Lap Time
          <ul>
            <li>Track will be of an open space of 16 by 16 feet.
            </li>
            <li>Track length of 42 m.
            </li>
            <li>Track width of 2 ft.
            </li>
            <li>Track will be on solid concrete and bounded by plastic cones.
            </li>
          </ul>
        </li>
      </ul>
     <h2>
        REGISTRATION DETAILS
      </h2>
      <p>
        Fee: Rs 50 <br>
      </p>
    </ul>
  `,
    timeline: [],
    rulebook: "NA",
    rules: [
      "Vehicle means a four wheeled, electric motor driven RC car.",
      "The RC car must be controllable wirelessly by smartphone.",
      "Maximum RC car dimensions: L=30 cm; B=20 cm; H=20cm",
      "Use appropriate steering and control method.",
      "Participants can use any material for car bodyworks.",
      "Only teams who submit a video showing proof of a working model can proceed to Round 2.",
      "For the Lap Time event, vehicles will have to time 5 laps on the fixed arena.",
      "Any misbehavior will lead you to disqualification from the competition. ",
      "Decision Taken by Judges will be final and binding for all",
      "All decisions taken by the organizing team will be deemed final, and no more changes will be encouraged.",
      "Bring your college/student I-Card at the time of competition.",
      "If less than 5 teams will be registered, then only the first prize will be given, and if less than 15 teams will register, only two prizes will be given.",
    ],
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    catagory: "technical",
    contacts: [
      {
        name: "Anish Shah",
        phone: "9574614212",
      },
      {
        name: "Pratham Parmar",
        phone: "7874992002",
      },
    ],
  },

  //CHEM-E-JEOPARDY
  {
    name: "CHEM-E-JEOPARDY",
    image: "/images/events/chem-e-jeopardy.png",
    image_hq: "/images/events/hq/chem-e-jeopardy.png",
    prize: ["1st Prize: Rs 3000", "2nd Prize: Rs 2000", "3rd Prize: Rs 1000"],
    fee: "Rs 30",
    // about: ``,
    details: `
    <h2>
      INTRODUCTION
    </h2>
    <p>Competition is always a good thing. It forces us to do our best. A monopoly renders
    people complacent satisfied with mediocrity. CHEM-E-JEOPARDY game utilizes questions
    from Chemical Engineering Undergraduate Coursework. </p>
    <h2>
      PROBLEM STATEMENT
    </h2>
    <p> The CHEM-E-JEOPARDY game consists of 5 different sections i.e., 3 sections related to
    core topics and 2 sections related to non-core topics.
    </p>
   
   <ul>
  <li>Each section consists of 5 clues of different categories according to their difficulty
  level.
  </li>
  <li>The team that buzzes the buzzer first may respond to the clue. The corresponding
  points should be awarded on correct response while the same points should be
  deducted on incorrect response
  </li>
  <li>The game also contains 2 Double Jeopardy. The team that responds the Double
  Jeopardy correctly should be awarded double points while the team that responds
  incorrectly should be deducted double points of the corresponding clue.
  </li>
   </ul>
      <h2>
        TEAM SPECIFICATIONS
      </h2>
     <ul>
      <li>A maximum of four teams can play in each game and each team's limit must be four
      players.
      </li>
      <li>Once registered, the same person can’t be registered for more than one team. 
      </li>
     </ul>
     
     <h3>ROUND SPECIFICATION</h3>
     <p>Jeopardy and Final Jeopardy constitute the preliminary qualifying games which the teams
     shall get an opportunity to play in the semifinals
     </p>
     <h2>
        REGISTRATION DETAILS
      </h2>
      <p>
        Fee: Rs 100 <br>
      </p>
    </ul>
  `,
    timeline: [],
    rulebook: "/docs/rulebooks/chem-e-jeopardy.pdf",
    rules: [
      "The team should respond to the clue in the question format. For example, the clue is “Where is Taj Mahal?”. The answer should not be given Agra directly rather than this it should be given in the format “Where is Agra?” ",
      "Negative marking for response not submitted in question format along with deduction of clue’s value. ",
      "After reading the clue, every team will be given 4-5 seconds to buzz the buzzer. No team should buzz the buzzer while host was reading the clues and points shall be deducted for such conduct.  ",
      "It is not allowed to talk among team members after buzzing and scores will be deducted for such conduct. ",
      "The decision taken by the host would be final.  ",
      "Any misbehavior will lead to disqualification from the game. ",
      "lf less then 10 teams have registered for the event only two prizes will be given and if less then 5  teams have registered for the event only two prize will be given. ",
    ],
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    catagory: "technical",
    contacts: [
      {
        name: "Madhuri Sharma",
        phone: "9460877801",
      },
    ],
  },
  //BUG-N-FEATURE
  {
    name: "BUG-N-FEATURE",
    image: "/images/events/bug-n-feature.png",
    image_hq: "/images/events/hq/bug-n-feature.png",
    prize: ["1st Prize: Rs 3500", "2nd Prize: Rs 2500", "3rd Prize: Rs 1500"],
    fee: "Rs 50",
    // about: ``,
    details: `
    <h2>
      INTRODUCTION
    </h2>
    <p>Finding a bug and making a new feature is what all happens when it comes to industrial
    level development. This event is inspired by this nature of programs. This event is divided
    into two rounds. Round 1 will be all about debugging the given problem statement. This
    round tests the debugging, analytical, logical skills of the participants. It will bring out
    those who can clearly see the mistakes and correct them in the best possible manner.
    Round 2 will be on finding the most optimal solution. This round tests the algorithm
    development skills of the participants. Those who will be able to figure out the steps to
    solve and implement it will come out as most skillful of all.
    </p>
    <h2>
      PROBLEM STATEMENT:
    </h2>
   <h3>ROUND 1: 
   </h3>
   <ul>
    <li>Total no. of questions - 5 (A, B, C, D, E)
    </li>
    <li>Total Duration - 60 minutes
    </li>
    <li>Language of Code Snippets - C++
    </li>
    
   </ul>
   <p>This round will consist of 5 problems with increasing difficulty levels A to E. The
    participants will be given the question, code snippets, sample input & output. The code
    will contain errors like syntax errors, logical errors, semantic errors, runtime errors,
    segmentation faults, endless loops etc. Under a time constraint the participants will have
    to debug the given code. The participants have to look for such errors and try to fix as
    many as bugs possible
    </p>
    <h3>ROUND 2:</h3>
    <ul>
    <li> Total no. of questions - 2 (A, B)
    </li>
    <li>Total Duration - 120 minute
    </li>
    <li>Language - Any Language of Choice
    </li></ul>
    <p>This round will consist of 2 problems with increasing difficulty levels A to B. The
    participants will be given the question, sample input & output, input test cases text file.
    The participants will have to formulate a program which can give correct output for
    maximum of the given test cases. 
    </p>
    <h2>
        TEAM SPECIFICATIONS
    </h2>
    <ul>
      <li>Team of 1/2/3
      </li>
      <li>It is an open event so anyone (within or outside SVNIT) can team up with anyone in
      the age bracket (16-21)
      </li>
      <li>Participants are required to bring their school/college ID cards. 
      </li>
      <li>Once registered, the same team cannot register with another name or for another
      model other than previously registered one
      </li>
      <li>Every team must have a unique name that should not be offensive, conflicting or
      inappropriate.
      </li>
      <li> Organizers have the right to reject entries for any inappropriate team name
      </li>
    </ul>
     <h3>JUDGING CRITERION:
     </h3>
      <ul>
        <li>Round 1: The code will be judged based on the error corrected and depending on the
        importance of the line on which the error was corrected. If the error is on a line which
        is more important than others then it will be assigned maximum marks.
        </li>
        <li>Round 2: The received codes will be run through the test input cases. The team will
        be scored depending on the no. of inputs for which the code gives the correct output.
        If there is a tie in the scores then the time complexity will be given priority over space
        complexity.
        </li>
      </ul>
      <h2>EVENT PLATFORM
      </h2>
      <h3>ROUND 1 & 2:
      </h3>
      <ul>
        <li>Discord: For sharing all the materials and queries.
        </li>
        <li>Google Meet: For instructing about the event.
        </li>
      </ul>
      <h3>TARGET AUDIENCE:
      </h3>
      <p>Students of age 16-21
      </p>
     <h2>
        REGISTRATION DETAILS
      </h2>
      <p>
        Fee: Rs 30 <br>
      </p>
    </ul>
  `,
    timeline: [],
    rulebook: "/docs/rulebooks/BUG N FEATURE.pdf",
    rules: [
      "Any misbehavior will lead you to disqualification from the competition.  ",
      "Decision Taken by Judges will be final and binding for all ",
      "All decisions taken by the organizing team will be deemed final, and no more changes will be encouraged.  ",
      "Plagiarism in any form is strictly prohibited and can even result in the disqualification of contestants involved. ",
      "The idea presented by the teams should be original (not protected by patent/copyright/technical publication by anyone else) ",
      "If less than 10 teams will be registered, then only first prize will be given and if less than 20 teams will register, only two prizes will be given.  ",
      "No one shall enter the arena except the organizers. ",
      "Any of the above-mentioned rules, if found violated, teams would not be allowed to participate in the competition. ",
      "Any damage caused to the arena at any point in time will lead to disqualification/penalty. ",
    ],
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    catagory: "technical",
    contacts: [
      {
        name: "Swara Jain",
        phone: "9426671700",
      },
      {
        name: "Alin Polra",
        phone: "9408146051",
      },
    ],
  },
  //CONNECTIFY
  {
    name: "CONNECTIFY",
    image: "/images/events/CONNECTIFY.png",
    image_hq: "/images/events/hq/CONNECTIFY.png",
    prize: ["1st Prize: Rs 3500", "2nd Prize: Rs 2500", "3rd Prize: Rs 1500"],
    fee: "Rs 50",
    // about: ``,
    details: `
    <h2>
      INTRODUCTION
    </h2>
    <p>Put your IoT knowledge to the test by participating in our three-round challenge! This
    includes a workshop, quiz, and an application ability round. Explore the creativity and real-
    world applications of IoT and discover new ways it can be used.
    </p>
    <h2>
      PROBLEM STATEMENT:
    </h2>
   <h3>ROUND 1: 
   </h3>
   <p>The first round will be a workshop by some professionals in which some projects
   demonstration and basic components will be introduced. Whatever basic knowledge is
   required for round 2 & round 3 will be given in the workshop.   
    </p>
    <h3>ROUND 2:</h3>
     <p>The second round will consist of interesting an quiz based on basic concepts of sensors
     &IOT. The quiz will consist of subjective and objective questions.
     </p>
    <h3>ROUND 3:</h3>
     <p>Based on the performance of teams in the 2nd round, participants will be rewarded with
     virtual money through which they can purchase different components from the organizers
     such that they need to make a real-world solution by using the components purchased.
     </p>
    <h2>
        TEAM SPECIFICATIONS
    </h2>
    <ul>
     <li>Team should be of a maximum of 3 members. 
     </li>
     <li>Members of a team may be from the same college or different. 
     </li>
     <li>Any number of teams can participate from one college.
     </li>
     <li>Professionals are not allowed. Only students can participate. 
     </li>
     <li>Once registered, the same team cannot register with another name or for another    
     model other than the previously registered one.
    </li>
     <li>Every team must have a unique name that should not be offensive, conflicting, or
     inappropriate. 
     </li>
     <li>Organizers must be notified if a team’s name has been changed.
     </li>
     <li>Team Representative: Each team must specify their Team Representative (Leader) at
     the time of registration on the website. All important communications between the
     organizer and the registered teams will be done through their Team Representatives. The
     Team representatives must submit valid contact details (phone no., email id, etc.) at the
     time of registration.
     </li>
     
    </ul>
     <h3>JUDGING CRITERION:
     </h3>
      <ul>
        <li>n round 2, teams will be qualified on the basis of their performance and score on the
        quiz.
        </li>
        <li>Round 3 is the final round in which teams will be given a time limit and they need to
        make a working IoT solution within the given time. On the basis of the solution, the one
        with the most advanced solution with a wide application will be considered the winner.
        </li>
      </ul>
      <h2>
        REGISTRATION DETAILS
      </h2>
      <p>
        Fee: Rs 50 <br>
      </p>
    </ul>
  `,
    timeline: [],
    rulebook: "NA",
    rules: [
      "Bring your college/student I-Card at the time of the competition. ",
      "Decisions taken by Judges will be final and binding for all. ",
      "Any misbehavior will lead you to disqualification from the competition. ",
      "Organizershavetherighttorejectentriesforanyinappropriateteamname. ",
      "If teams don’t show up on allotted slots, they will be disqualified. ",
      "If less then 15 teams have registered for the event only two prizes will be given and if less then 10 teams have registered for the event only two prize will be given. ",
    ],
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    catagory: "technical",
    contacts: [
      {
        name: "Madhuri Sharma",
        phone: "9460877801",
      },
      {
        name: "Alin Polra",
        phone: "9408146051",
      },
    ],
  },
  //TECH CITY
  {
    name: "TECH CITY",
    image: "/images/events/tech city.png",
    image_hq: "/images/events/hq/tech city.png",
    prize: ["1st Prize: Rs 3000", "2nd Prize: Rs 2000", "3rd Prize: Rs 1000"],
    fee: "Rs 100",
    // about: ``,
    details: `
    <h2>
      INTRODUCTION
    </h2>
    <p>A  Smart  City  stimulation  model  on  tinkercad  or  any  other  equivalent  platform  using
    electronic  devices  such  as  sensors,  microprocessor  and  microcontroller,  or  any  other 
      available  devices.  The  Hi-Tech  city  should  be  using  different  mechanisms  to  serve  the
    society  and  cater  the  needs  of  resources  with  requiring  minimum  human  intervention.
    Participants  will  have  to  demonstrate  various  technologies  to  resolve  the  problems  while
    creating a safe and secure Smart City model. The city can demonstrate different categories
    like township, farm area, power supply along with a good transportation system etc.    
    </p>
    <h2>
      PROBLEM STATEMENT:
    </h2>
    <p>The event will be conducted in 2 rounds. The first one will be the online presentation of the
    idea of smart city model in front of judges. Shortlisted teams will be required to submit the
    simulation circuit of the model on tinkercad.
    </p>
   <h3>ROUND 1: 
   </h3>
   <p>  Online Presentation Round: 
   </p>
    <ul>
      <li>Duration of presentation must not be more than 5 minutes.
      </li>
      <li>Teams need to make a PPT explaining their model.
      </li>
      <li>PPT must include images of their own model.
      </li>
      <li>An overview of their model should be presented during the given time span.
      </li>
      <li>Ensure that all innovative ideas present in your model are included.
      </li>
      <li>Documentation of around 5-6 pages of the work should be submitted.
      </li>
      <li>Any sort of malpractice might lead to disqualification.
      </li>
    </ul>
    <h3>ROUND 2:</h3>
    <ul>
      <li>In this round participants need to submit a video of their simulation model on
      tinkercard.
      </li>
      <li>Whatever the specifications given by teams in 1st round they need to make simulation
      on tinkercad.
      </li>
      <li>Teams need to submit the video of simulation within the timelimit in the form link that
      will be provided.
      </li>
      <li>Video should be in mp4 format and maximum time limit is 40 seconds.
      </li>
      <li>Any kind of malpractice will result into disqualification
      </li>
    </ul>
    <h2>
        TEAM SPECIFICATIONS
    </h2>
    <ul>
      <li>The team should be of 3 to 5 members.
      </li>
      <li>Members of a team may be from the same college/school or different (K12/UG/PG).
      </li>
      <li>Any number of teams can participate from one college/school.
      </li>
      <li>Professionals are not allowed. Only students can participate.
      </li>
      <li>Participants are required to bring their school/college ID cards.
      </li>
      <li>Once  registered,  the  same  team  cannot  register  with  another  name  or  for  another
      model other than previously registered one.
      </li>
      <li>Every  team  must  have  a  unique  name  that  should  not  be  offensive,  conflicting  or
      inappropriate.
      </li>
      <li>Organizers have the right to reject entries for any inappropriate team name.
      </li>
      <li>Organizers must be notified if a team’s name has been changed
      </li>
      <li>Team Representative: Each team must specify their Team Representative (Leader) at
      the  time  of  registration  on  the  website.  All  important  communications  between  the
      organizer  and  the  registered  teams  will  be  done  through  their  Team  Representative.
      The Team representatives must submit valid contact details (phone no., email id, etc.)
      at the time of registration.
      </li>
      <li>If teams don’t show up on allotted slot, they will be disqualified.
      </li>
    </ul>
     <h3>JUDGING CRITERION:
     </h3>
     <p>Usefulness of the simulation model and number of various applications performed
      mentioned in the 1st round
     </p>

      <h2>
        REGISTRATION DETAILS
      </h2>
      <p>
        Fee: Rs 50 <br>
      </p>
    </ul>
  `,
    timeline: [],
    rulebook: "NA",
    rules: [
      "Any violation of constraints will result in disqualification of the team.",
      "Decisions Taken by Judges will be final and binding for all.",
      "Any misbehavior will lead you to disqualification from the competition.",
      "Plagiarism is strictly prohibited. Anyone found using the ppts available online or copying content from the internet will be immediately disqualified.",
      "If less than 10 teams will be registered, then only first prize will be given and if less than 20 teams will register, only two prizes will be given.",
    ],
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    catagory: "technical",
    contacts: [
      {
        name: "Manisha Bharadhwaj",
        phone: "9558991841",
      },
      {
        name: "Yash Mhatre ",
        phone: "9920584449",
      },
    ],
  },
  //DRONE ZONE
  {
    name: "DONE ZONE",
    image: "/images/events/DRONE _ JYOTI.png",
    image_hq: "/images/events/hq/DRONE _ JYOTI.png",
    prize: ["1st Prize: Rs 45000", "2nd Prize: Rs 30000"],
    fee: "Rs 50",
    // about: ``,
    details: `
      <h2>
        INTRODUCTION
      </h2>
      <p>This competition tests the ability of participants to make a DIY Drone (Quad Copter) and
      make it stable as well as some autonomous tasks. In this competition, participants will
      require to go through the basics of a drone and comprehend its dynamics, and apply it to
      real-world situations.      
      </p>
      <h2>
        PROBLEM STATEMENT:
      </h2>
      <p>This tournament will consist of two rounds. There will be an online phase in which
      participants must submit a report, followed by an offline round in which they must
      execute a task. Competitors must choose appropriate components, provide a complete
      report, and build the drone using the same for subsequent rounds.
      
      </p>
     <h3>ROUND 1: 
     </h3>
     <p>  Online Presentation Round: 
     </p>
      <ul>
        <li>Submission of the following document about the Quadcopter is to be done;
        Detailed report outlining all of the components used for the Drone within the
competition's stipulated limits.
        </li>
        <li>The above details will be collected through a google form.
        </li>
      </ul>
      <h3>ROUND 2:</h3>
      <ul>
        <li>This is an offline round.
        </li>
        <li>The course will not be disclosed prior to the round.</li>
        <li> The Quadcopter need to reach two checkpoints.</li>
        <li> The quadcopter would first take off, navigate through the obstacles placed in its route, and reach at Checkpoint 1.</li>
        <li> The timer will be paused at Checkpoint 1 and the team will be given the GPS coordinates for Checkpoint 2.</li>
        <li> Each team will receive two trails to complete the track.</li>
        <li> Quadcopter need to maintain specific height while completing the course.</li>
      </ul>
      <h2>
          TEAM SPECIFICATIONS
      </h2>
      <ul>
        <li>You can participate individually or with a team of a maximum of 6 members.</li>
        <li>Any number of candidates can participate from one college/school.</li>
        <li>Participants are required to bring their school/college ID cards.</li>
        <li>Once registered, the same candidate cannot register with another name for the event.</li>
        <li>Organizers have the right to reject entries for any inappropriate username of the candidate.</li>
        <li>Organizers must be notified if a candidate’s username has been changed.</li>
      </ul>
       <h3>JUDGING CRITERION:
       </h3>
       <ul>
       <li>The vehicles will be judged in the following events : 
        <ul>
          <li>
            Lap Time.
          </li>
          <li>
            Payload carrying of minimum dimension 10cm x 10cm x 10cm.
          </li>
          <li>
            Minimum weight of payload should be 150g.
          </li>
       </ul>
       </li>
      <li>Points will be awarded based on the dynamic performance of the Drone in Round 2.</li>
      <li>Points awarded in the events will be summed up.</li>
      <li>Point system:
        <ul>
          <li>
            Percentile of maximum payload weight.
          </li>
          <li>
            Percentile of minimum lap time.
          </li>
        </ul>
      </li>
       </ul>
        <h2>
          REGISTRATION DETAILS
        </h2>
        <p>
          Fee: Rs 50 <br>
        </p>
      </ul>
    `,
    timeline: [],
    rulebook: "/docs/rulebooks/Drone Zone.pdf",
    rules: [
      "Any violation of constraints will result in disqualification of the team.",
      "Decisions Taken by Judges will be final and binding for all.",
      "Any misbehavior will lead you to disqualification from the competition.",
      "If less than 10 teams will be registered, then only first prize will be given and if less than 20 teams will register, only two prizes will be given.",
    ],
    faqs: [
      {
        q: "Who can participate?",
        a: "Whosoever wants to participate there is no age restrictions, but participant should have school/college ID.",
      },
      {
        q: "How long are the event?",
        a: "No events will take more than a day.",
      },
      {
        q: "What is techno-managerial fest?",
        a: "It has both technical and managerial events.",
      },
      {
        q: "What will i get if i don't win?",
        a: "Every participant will get participation certificate.",
      },
      {
        q: "When will registrations begin?",
        a: "Registration has started",
      },
    ],
    catagory: "technical",
    contacts: [
      {
        name: "Devanshu Vyas",
        phone: "9157120402",
      },
      {
        name: "Megh Modi ",
        phone: "- 6354742209",
      },
    ],
  },
];

const workshops = [
  {
    name: "Web 3.0",
    fee: "FREE",
    image_hq: "/images/workshops/hq/Web_3.png",
    image: "/images/workshops/Web_3.png",

    details: `What is Web 3.0? and all the recent advancements made in web 3.0. 
    Web 3.0 is the new and upcoming iteration of the world wide web, a public network built on distributed ledger technology and a semantic architecture to enable decentralization, personalization, immersiveness, and a token-driven economy`,
  },
  {
    name: "Rocket Building",
    fee: "Rs 100",
    image_hq: "/images/workshops/hq/Rocket Building.png",
    image: "/images/workshops/Rocket Building.png",
    details: `A hands-on workshop on how to build basic rocket models. 
      The workshop will provide students with an opportunity to develop engineering design skills through direct application in high-powered rocketry.`,
  },
  {
    name: "Xtended Reality",
    fee: "Rs 30",
    image_hq: "/images/workshops/hq/Xtended Reality.png",
    image: "/images/workshops/Xtended Reality.png",
    details: `A workshop on exploring Metaverse through VR headsets.
      Metaverse is a virtual space that allows users to work , interact and connect with each other outside real world. Metaverse uses blockchain, virtual reality and augmented reality to give life to virtual environment.`,
  },
  {
    name: "Blockchain Development",
    fee: "FREE",
    image_hq: "/images/workshops/hq/Blockchain Development.png",
    image: "/images/workshops/Blockchain Development.png",
    details: `Blockchain technology is an advanced database mechanism that allows transparent information sharing within a business network. It stores data in blocks that are linked together in chains. These developers also help businesses understand how cryptocurrency works.`,
  },
  {
    name: "Data Science",
    fee: "Rs 150",
    image_hq: "/images/workshops/hq/Data Science.png",
    image: "/images/workshops/Data Science.png",
    details: `Introduction to Data Science and Data analytics.
      Data science combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI), and machine learning . These insights can be used to guide decision making and strategic planning.`,
  },
  {
    name: "3d printing",
    fee: "Rs 60",
    image_hq: "/images/workshops/hq/3d printing.png",
    image: "/images/workshops/3d printing.png",
    details: `A hands-on 3d printing workshop.
      3D printing or additive manufacturing is the construction of a three-dimensional object from a CAD model or a digital 3D model.
      `,
  },
  {
    name: "Gesture Robotics",
    fee: "Rs 150",
    image_hq: "/images/workshops/hq/Gesture Robotics.png",
    image: "/images/workshops/Gesture Robotics.png",
    details: `Introduction to gesture robotics and a hands-on workshop on it.
      In this workshop, we learn about gesture controlled robots which can be controlled by your normal hand gesture. The accelerometer controls the movement of robot.`,
  },
  {
    name: "Web development",
    fee: "Rs 100",
    image_hq: "/images/workshops/hq/Web development.png",
    image: "/images/workshops/Web development.png",
    details: `Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. It requires the knowledge of HTML, CSS, JavaScript etc`,
  },
  {
    name: "Machine Learning",
    fee: "FREE",
    image_hq: "/images/workshops/hq/Machine Learning.png",
    image: "/images/workshops/Machine Learning.png",
    details: `Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.`,
  },
];

const team = [
  {
    name: "Dr. Meghal Desai",
    phone: "8780756818",
    position: "chairperson",
    mail: "hod.ched.svnit.ac.in",
    commitee: "Faculty-Advisors",
    photo: "/images/team/Meghal desai.jpg",
  },
  {
    name: "Dr. Sankita J. Patel",
    phone: "0261-2201622",
    position: "co-chairperson",
    mail: "sjp.coed.svnit.ac.in",
    commitee: "Faculty-Advisors",
    photo: "/images/team/sankita patel.jpg",
  },
  {
    name: "Dr. Pinalkumar J. Engineer",
    phone: "9924711335",
    position: "co-chairperson",
    mail: "pje.eced.svnit.ac.in",
    commitee: "Faculty-Advisors",
    photo: "/images/team/pjengineer.jpg",
  },
  {
    name: "Dr. Kishor P. Upla",
    phone: "kpu.eced.svnit.ac.in",
    position: "co-chairperson",
    mail: "99989067",
    commitee: "Faculty-Advisors",
    photo: "/images/team/kpu.jpg",
  },
  {
    name: "RUTUJA JADHAV",
    phone: "8975238707",
    admission_number: "U19ME024",
    mail: "rjjjadhavgne1729@gmail.com",
    commitee: "CCAS",
    photo: "/images/team/RUTUJA JAGANNATH JADHAV.jpg",
  },
  {
    name: "Ishan Gadhiya ",
    phone: "7283864948",
    admission_number: "U20ME146 ",
    mail: "u20me146@med.svnit.ac.in ",
    commitee: "Joint CCAS",
    photo: "/images/team/Ishan Gadhiya.jpg",
  },
  {
    name: "Harshrajsinh Gohil",
    phone: "9054660903",
    admission_number: "U20EE041",
    mail: "harshrajsinh1119@gmail.com",
    commitee: "Joint CCAS",
    photo: "/images/team/HARSHRAJSINH GOHIL.jpg",
  },
  {
    name: "Mihir Parmar",
    phone: "9924435522",
    admission_number: "U20ME084",
    mail: "mihirparmar118@gmail.com",
    commitee: "Joint CCAS",
    photo: "/images/team/mihir.jpg",
  },
  {
    name: "Darshan Bhimani",
    phone: "7405350524",
    admission_number: "U20CS091",
    mail: "darshanbhimani999@gmail.com",
    commitee: "Joint CCAS",
    photo: "/images/team/darshan.jpg",
  },
  {
    name: "Gugulothu Gopal",
    phone: "7330806731",
    admission_number: "U20CS168",
    mail: "gugulothugopallucky@gmail.com",
    commitee: "Joint CCAS",
    photo: "/images/team/gopal.jpg",
  },
  {
    name: "Anand Gupta",
    phone: "7383029448",
    admission_number: "U20EC001",
    mail: "anandgupta73830@gmail.com",
    commitee: "Conveners",
    photo: "/images/team/Anand Gupta.jpg",
  },
  {
    name: "Ananya Shah",
    phone: "9081941100",
    admission_number: "U20ME093",
    mail: "ananyshah73@gmail.com",
    commitee: "Conveners",
    photo: "/images/team/ANANYA SHAH.jpg",
  },
  {
    name: "Nishit Prajapati",
    phone: "9913899949",
    admission_number: "U20ME089",
    mail: "nishitprajapati2002@gmail.com",
    commitee: "Conveners",
    photo: "/images/team/NISHIT PRAJAPATI.jpg",
  },
  {
    name: "Gaurav Ahuja",
    phone: "8930813284",
    admission_number: "U20EC130",
    mail: "gauravahuja1213@gmail.com",
    commitee: "Conveners",
    photo: "/images/team/GAURAV.jpg",
  },
  {
    name: "Himadriba Vaja",
    phone: "9428080884",
    admission_number: "U20CH098 ",
    mail: "himadrivaja@gmail.com",
    commitee: "Conveners",
    photo: "/images/team/HIMADRIBA VAJA.jpg",
  },
  {
    name: "Shrujal Zala",
    phone: "9974271709",
    admission_number: "U20ME099",
    mail: "shrujalzala@gmail.com",
    commitee: "Admin & Doc",
    photo: "/images/team/ZALA SHRUJAL.jpg",
  },
  {
    name: "purnjay parmar",
    phone: "8140677777",
    admission_number: "U20EC020",
    mail: "purnjayparmar23@gmail.com",
    commitee: "Design",
    photo: "/images/team/PURNJAY PARMAR.jpg",
  },
  {
    name: "Dhiraj Gohil",
    phone: "6353318206",
    admission_number: "U20ME155",
    mail: "dhirajgohil446@gmail.com",
    commitee: "Design",
    photo: "/images/team/dhiraj.jpg",
  },
  {
    name: "Navjeet Hira",
    phone: "8544858255",
    admission_number: "U20EE032",
    mail: "hiranavjeet862b@gmail.com",
    commitee: "Discipline",
    photo: "/images/team/NAVJEET HIRA.jpg",
  },
  {
    name: "Vivek Detroja",
    phone: "9638606036",
    admission_number: "U20CH049",
    mail: "detrojaviveks@gmail.com",
    commitee: "Discipline",
    photo: "/images/team/vivek.jpg",
  },
  {
    name: "Deep Gor",
    phone: "9408736514",
    admission_number: "U20ME054",
    mail: "deepgor06@gmail.com",
    commitee: "Finance",
    photo: "/images/team/DEEPKUMAR GOR.jpg",
  },
  {
    name: "PRIYANSHU SHIVHARE ",
    phone: "9453585611",
    admission_number: "U20EE039",
    mail: "s.priyanshu177@gmail.com",
    commitee: "Finance",
    photo: "/images/team/PRIYANSHU SHIVHARE.jpg",
  },
  {
    name: "Adarsh kumar",
    phone: "8905336539",
    admission_number: "I20ma027",
    mail: "adarshkumarindian18@gmail.com",
    commitee: "Infra Inhouse",
    photo: "/images/team/Adarsh Kumar.jpg",
  },
  {
    name: "Durgesh Prajapat ",
    phone: "7898609565",
    admission_number: "U20EC132",
    mail: "Durgeshprajapat215@gmail.com",
    commitee: "Infra Inhouse",
    photo: "/images/team/Durgesh Prajapat.jpg",
  },
  {
    name: "Jay Prakash Kumar ",
    phone: "9334958154",
    admission_number: "U20EC063",
    mail: "jp578785@gmail.com",
    commitee: "Infra Inhouse",
    photo: "/images/team/JAY PRAKASH KUMAR.jpg",
  },
  {
    name: "Himalay Dhimmar ",
    phone: "7777984706",
    admission_number: "U20CE081",
    mail: "dhimmarhimalay@gmail.com",
    commitee: "Infra Inhouse",
    photo: "/images/team/HIMALAY DHIMMAR.jpg",
  },
  {
    name: "Ravi Chandra ",
    phone: "9959725884",
    admission_number: "U20CH097",
    mail: "ravichandrakellampalli@gmail.com",
    commitee: "Infra Inhouse",
    photo: "/images/team/Ravichandra.jpg",
  },
  {
    name: "Harsh Phadnis",
    phone: "9904455809",
    admission_number: "U20ME149",
    mail: "harshphadnis05@gmail.com",
    commitee: "Managerial",
    photo: "/images/team/HARSH PHADNIS.jpg",
  },
  {
    name: "Yash Shah ",
    phone: "9712900042",
    admission_number: "U20EC159",
    mail: "shahyash1102@gmail.com ",
    commitee: "Managerial",
    photo: "/images/team/SHAH YASH ANIMESH.jpg",
  },
  {
    name: "Saurav Singh ",
    phone: "9327049411",
    admission_number: "U20EC133",
    mail: "sauravsinghrajput045@gmail.com",
    commitee: "Managerial",
    photo: "/images/team/Saurav Singh.jpg",
  },
  {
    name: "Kaustubh Trivedi ",
    phone: "7976573402",
    admission_number: "U20EC133",
    mail: "trivedikaustubh2001@gmail.com",
    commitee: "Managerial",
    photo: "/images/team/Kaustubh Trivedi.jpg",
  },

  {
    name: "Nimit Shah",
    phone: "9913111021",
    admission_number: "U20ME029",
    mail: "panmnimitshah@gmail.com",
    commitee: "Publicity",
    photo: "/images/team/NIMIT SHAH.jpg",
  },
  {
    name: "Rahul Patel",
    phone: "6351945333",
    admission_number: "U20CE066",
    mail: "patelrahul09082003@gmail.com",
    commitee: "Publicity",
    photo: "/images/team/RAHUL PATEL.jpg",
  },
  {
    name: "Avadh Vadhiya ",
    phone: "97145 07425 ",
    admission_number: "U20EE021 ",
    mail: "avadhvadhiya23@gmail.com ",
    commitee: "Publicity",
    photo: "/images/team/VADHIYA AVADHKUMAR RAJUBHAI.jpg",
  },
  {
    name: "Chaudhary Devarsh ",
    phone: "6353623199",
    admission_number: "U20EC051",
    mail: "devarshaakoliya@gmail.com",
    commitee: "Publicity",
    photo: "/images/team/CHAUDHARY DEVARSH NARESHKUMAR.jpg",
  },
  {
    name: "Pansuriya Tarang Bharatbhai",
    phone: "8980128965",
    admission_number: "I20MA005",
    mail: "tarangpansuriya1583@gmail.com",
    commitee: "Research & Development",
    photo: "/images/team/PANSURIYA TARANG.jpg",
  },
  {
    name: "Atharva Pawanekar ",
    phone: "8208765854",
    admission_number: "U20ME113 ",
    mail: "pawanekaratharva@gmail.com ",
    commitee: "Research & Development",
    photo: "/images/team/PAWANEKAR ATHARVA PRASHANTRAO.jpg",
  },
  {
    name: "Sidhant Kachchhi",
    phone: "6354631235",
    admission_number: "U20EC089",
    mail: "sidhantkachchhi@gmail.com",
    commitee: "Research & Development",
    photo: "/images/team/SIDHANT KACHCHHI.jpg",
  },
  {
    name: "Kunal Gupta",
    phone: "9316011175",
    admission_number: "U20ME036",
    mail: "guptakunal910@gmail.com",
    commitee: "Research & Development",
    photo: "/images/team/Kunal Gupta.jpg",
  },
  {
    name: "Jay G Bhutekar ",
    phone: "6354992742",
    admission_number: "U20EE008",
    mail: "jaygb3611@gmail.com",
    commitee: "Social Media",
    photo: "/images/team/JAY G BHUTEKAR.jpg",
  },
  {
    name: "Prince Vaghasiya",
    phone: "7359690256",
    admission_number: "U20CE087",
    mail: "princevaghasiya1818@gmail.com",
    commitee: "Social Media",
    photo: "/images/team/prince.jpg",
  },
  {
    name: "Amith Kumar Yadav",
    phone: "8197612465",
    admission_number: "U20ME234",
    mail: "amitamit71965@gmail.com",
    commitee: "Sponsorship",
    photo: "/images/team/Amith Kumar Yadav.jpg",
  },
  {
    name: "Shivam Parmar",
    phone: "9824494941",
    admission_number: "U20EE035",
    mail: "shivamparmar6106@gmail.com",
    commitee: "Sponsorship",
    photo: "/images/team/shivam.jpg",
  },
  {
    name: "Smrutiranjan Sahoo",
    phone: "9834753228",
    admission_number: "U20CH078",
    mail: "smrutiranjansahoo911@gmail.com",
    commitee: "Sponsorship",
    photo: "/images/team/Smrutiranjan Sahoo.jpg",
  },
  {
    name: "Dev Visavadia",
    phone: "9925564905",
    admission_number: "U20EE108",
    mail: "u20ee108@eed.svnit.ac.in",
    commitee: "Sponsorship",
    photo: "/images/team/dev.jpg",
  },
  {
    name: "Devanshu Vyas ",
    phone: "9157120402",
    admission_number: "U20ME096",
    mail: "devvyas0712@gmail.com",
    commitee: "Technical",
    photo: "/images/team/DEVANSHU VYAS.jpg",
  },
  {
    name: "SWARA JAIN",
    phone: "9426671700",
    admission_number: "U20EC169 ",
    mail: "swara17200@gmail.com",
    commitee: "Technical",
    photo: "/images/team/SWARA JAIN.jpg",
  },
  {
    name: "Atul Gautam",
    phone: "9468650219",
    admission_number: "U20ME088",
    mail: "atulg2006@gmail.com",
    commitee: "Technical",
    photo: "/images/team/ATUL GAUTAM.jpg",
  },
  {
    name: "Yash Mhatre ",
    phone: "9920584449",
    admission_number: "U20ME115",
    mail: "yashchandrasen@gmail.com",
    commitee: "Technical",
    photo: "/images/team/YASH CHANDRASENA MHATRE.jpg",
  },
  {
    name: "Mehul Patel",
    phone: "8980232614",
    admission_number: "I20cy010 ",
    mail: "mehupatel2412@gmail.com",
    commitee: "Videography",
    photo: "/images/team/MEHUL.jpg",
  },
];

const guest = [
  {
    name: "Jatin Dalal",
    position: "CFO Wipro",
    photo: "/images/guest/dalal2.png",
  },
  {
    name: "Himesh Madaan",
    position: "Famous Youtuber",
    photo: "/images/guest/madaan2.png",
  },
  {
    name: "Rashmi Robot",
    position: "Humanoid Robot",
    photo: "/images/guest/rashmi2.png",
  },
];

module.exports = { events, workshops, team, guest };
