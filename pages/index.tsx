import Button from "@/Components/Button/Button";
import Paragraph from "@/Components/Paragraph/Paragraph";
import Rating from "@/Components/Rating/Rating";
import Tag from "@/Components/Tag/Tag";
import Titles from "@/Components/Titles/Titles";
import React, { useState } from "react";

const Home = (): JSX.Element => {
  const [rating, setRaing] = useState<number>(2);

  return (
    <>
      <Titles tag='h1'>Suchi Bonsai!</Titles>
      <Button appearence='primary'>Press Primary</Button>
      <Button appearence='ghost'>Press Ghost</Button>
      <Paragraph size='s'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, consectetur?</Paragraph>
      <Paragraph size='m'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta corrupti asperiores eligendi cumque quia beatae
        fugiat doloremque illum repudiandae temporibus.
      </Paragraph>
      <Paragraph size='l'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit tenetur ratione, molestias odio, quo dicta
        ipsam vero optio, accusamus perspiciatis! Sed distinctio eius quisquam, vel nam deserunt reiciendis harum!
      </Paragraph>
      <Tag size='s' color='ghost'>
        Ghost
      </Tag>
      <Tag size='m' color='red'>
        Red
      </Tag>
      <Tag size='s' color='green'>
        Green
      </Tag>
      <Tag color='primary' size='m'>
        Green
      </Tag>
      <Rating rating={rating} isEditable setRating={setRaing} />
    </>
  );
};

export default Home;
