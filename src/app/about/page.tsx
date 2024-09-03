import React from "react";
import Image from "next/image";
import tacologo from "../../../public/images/logo.png";

const page = () => {
  return (
    <div>
      <h1>About us!</h1>
      <h2>Our History</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        molestiae ea, reiciendis aut aliquam quos natus? Tempora quaerat culpa
        rerum? Quos itaque quam laborum delectus ea odit quidem et?
        Exercitationem dolores maxime nam dolore, necessitatibus at aspernatur
        quasi ex laudantium delectus debitis placeat vitae, fuga voluptas
        corporis cumque eos non itaque libero officiis commodi ad architecto id!
        Mollitia ea debitis corrupti dolores. Eius ipsa omnis voluptatibus,
        quibusdam inventore temporibus ea maiores, voluptates perspiciatis
        dignissimos debitis magnam, repudiandae ut voluptas ab odio saepe alias
        asperiores quasi facilis. Facere voluptatibus assumenda atque itaque
        reiciendis, ad, soluta sunt quasi commodi dolor laboriosam cupiditate?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        aspernatur sit soluta? Provident tenetur, non accusantium esse
        doloremque modi hic eos facilis possimus, quasi sequi distinctio
        expedita repellendus cumque labore perspiciatis officia fuga eum,
        corporis ipsum nobis et ratione assumenda. Explicabo necessitatibus
        dignissimos tempora doloremque reiciendis recusandae inventore quo,
        perferendis commodi. Unde et tempore reiciendis minus quod nostrum ea
        placeat voluptatem praesentium iure eveniet nihil exercitationem
        obcaecati ducimus hic fuga, ad maiores! Corporis, minus veniam? Dolor,
        voluptas molestiae natus repellendus, illo, doloremque vitae incidunt
        magni accusamus quod tempora rerum doloribus voluptatem repudiandae
        illum praesentium. Eius blanditiis atque, maxime dicta nesciunt nulla
        harum consectetur, quisquam illo similique nostrum quibusdam voluptatum
        sit aspernatur in ut molestiae minus, vero est aliquam natus pariatur
        hic? Eos dolorum reiciendis pariatur deserunt et libero sequi
        repellendus facilis omnis, officia aut obcaecati eligendi suscipit ipsa
        sapiente officiis provident nostrum in voluptatibus. Repellendus
        tempora, nemo, ipsam, dolore aperiam facilis asperiores quaerat porro
        soluta veniam voluptatem? Tempora vitae tenetur nostrum praesentium
        rerum earum neque eum. Laudantium velit sequi numquam aut voluptatem
        totam amet consequatur est et, dolorem dolore exercitationem, natus
        perferendis aliquid deleniti necessitatibus iure, autem porro error
        quidem! Esse temporibus beatae minima fugiat laudantium. Fugiat quo
        mollitia minima.
      </p>

      <Image alt="logo" src={tacologo} />
    </div>
  );
};

export default page;
