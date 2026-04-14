import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            consequatur recusandae laborum facere voluptas repellendus libero
            commodi. Dolor, ratione voluptates suscipit dolorem magni
            consequatur autem corrupti laboriosam neque rem dicta.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ipsam rerum unde. Fugiat, hic a expedita doloremque reiciendis
            tempore! Quaerat vitae adipisci dignissimos ratione obcaecati
            accusantium non dolores laudantium numquam!
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolorem repellat velit id, non aut vel optio possimus, distinctio in
            unde nihil culpa dignissimos repellendus dolore iure deserunt enim
            libero?
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            eaque harum placeat velit autem reiciendis tenetur vero voluptate
            nesciunt natus, rem, quos assumenda eum necessitatibus possimus
            voluptas. Quia, veritatis cumque!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            dicta natus neque laudantium est itaque esse illum tempore aliquam
            quos, magnam nostrum autem eveniet, omnis debitis sequi veniam
            aperiam temporibus?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque
            ea dolor adipisci veritatis? Nisi velit atque quo eveniet eligendi
            vitae exercitationem deleniti corporis laboriosam, laborum cumque
            doloremque. Odio, eius.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
