import React from "react";
import CommunityCard from "./CommunityCard";

const Community = () => {
  return (
    <div className="flex min-h-screen p-4 lg:p-12 gap-10 flex-col">
      {/* writing */}
      <div>
        <h2 className="text-mainPurple font-mulish font-[900] text-4xl leading-[50px] text-center">
          From the Kudaacademy community
        </h2>
      </div>
      {/* grid */}
      <div className="flex overflow-x-auto space-x-4 p-4 no-scrollbar">
        <CommunityCard
          text="Kuda has been very rewarding so far! 
I think the team are amazing. Everyone is very talented and has a clear vision of what they want to build. 

There is a lot of experience, so we can all learn a lot from each other."
          sender="Elena Lavezzi"
          description="Group Chief Strategy Officer"
        />

        <CommunityCard
          text="I believe that the best part of being at Kuda is the people. They make up a huge part of my success story. Kuda gives you an opportunity to remain true to yourself while doing what you love with the most amazing people."
          sender="Olubusola Odusami"
          description="Head of HR - Nigeria"
        />

        <CommunityCard
          text="My experience at Kuda has been amazing. Everyone matters at Kuda. Everyone puts in the work daily, is treated with love & respect and given the opportunity to grow. I like that Kuda is very intentional with its core values. Kuda has made it a place to be for the last 3 years."
          sender="Anietie Victor"
          description="Senior Process Analyst"
        />

        <CommunityCard
          text="Working at Kuda has been one of the most rewarding experiences of my professional life. 
          Kuda places an adequate focus on employee engagement, happiness, well being and productivity which in turn boosts work-life balance. In addition, the people at Kuda are amazing."
          sender="Tolani Onokwai"
          description="Senior QA Engineer"
        />

        <CommunityCard
          text="Kuda has been very rewarding so far! 
I think the team are amazing. Everyone is very talented and has a clear vision of what they want to build. 

There is a lot of experience, so we can all learn a lot from each other."
          sender="Elena Lavezzi"
          description="Group Chief Strategy Officer"
        />

        <CommunityCard
          text="Kuda has been very rewarding so far! 
I think the team are amazing. Everyone is very talented and has a clear vision of what they want to build. 

There is a lot of experience, so we can all learn a lot from each other."
          sender="Elena Lavezzi"
          description="Group Chief Strategy Officer"
        />

        <CommunityCard
          text="My experience at Kuda has been amazing. Everyone matters at Kuda. Everyone puts in the work daily, is treated with love & respect and given the opportunity to grow. I like that Kuda is very intentional with its core values. Kuda has made it a place to be for the last 3 years."
          sender="Anietie Victor"
          description="Senior Process Analyst"
        />

        <CommunityCard
          text="Working at Kuda has been one of the most rewarding experiences of my professional life. 
          Kuda places an adequate focus on employee engagement, happiness, well being and productivity which in turn boosts work-life balance. In addition, the people at Kuda are amazing."
          sender="Tolani Onokwai"
          description="Senior QA Engineer"
        />
      </div>
    </div>
  );
};

export default Community;
