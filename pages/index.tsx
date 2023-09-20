import Button from "@/Components/Button/Button";
import Paragraph from "@/Components/Paragraph/Paragraph";
import Titles from "@/Components/Titles/Titles";
import React from "react";

const Home = (): JSX.Element => {
  return (
    <>
      <Titles tag='h1'>Suchi Bonsai!</Titles>
      <Button appearence='primary'>Press Primary</Button>
      <Button appearence='ghost'>Press Ghost</Button>
      <Paragraph size='s'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
        consectetur?
      </Paragraph>
      <Paragraph size='m'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta corrupti
        asperiores eligendi cumque quia beatae fugiat doloremque illum
        repudiandae temporibus.
      </Paragraph>
      <Paragraph size='l'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit
        tenetur ratione, molestias odio, quo dicta ipsam vero optio, accusamus
        perspiciatis! Sed distinctio eius quisquam, vel nam deserunt reiciendis
        harum!
      </Paragraph>
    </>
  );
};

export default Home;
